import { NextResponse } from "next/server";

// Proxy for the "Scuttle calls you right now" demo. The heavy lifting (the
// actual call, per-number/per-IP rate limits, the demo voice script) lives in
// an app-side Supabase edge function — contract in docs/CALL_ME_DEMO_SPEC.md.
// This route only validates, requires explicit consent, and forwards. It
// returns 503 until CALL_DEMO_ENDPOINT + CALL_DEMO_KEY are configured, so the
// website side can ship (dark) before the app side exists.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const E164_US = /^\+1\d{10}$/;

export async function POST(req: Request) {
  let body: { phone?: string; consent?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  if (body.consent !== true) {
    return NextResponse.json(
      { error: "Consent is required before we can place a call." },
      { status: 400 }
    );
  }
  const phone = (body.phone || "").trim();
  if (!E164_US.test(phone)) {
    return NextResponse.json(
      { error: "Please enter a valid US phone number." },
      { status: 400 }
    );
  }

  const endpoint = process.env.CALL_DEMO_ENDPOINT;
  const demoKey = process.env.CALL_DEMO_KEY;
  if (!endpoint || !demoKey) {
    return NextResponse.json(
      { error: "The live demo line isn't connected yet — join the launch list and we'll call you at launch." },
      { status: 503 }
    );
  }

  // Forward the caller's IP so the edge function can rate-limit per IP too.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  let res: Response;
  try {
    res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Call-Demo-Key": demoKey,
        "X-Client-Ip": ip,
      },
      body: JSON.stringify({ phone, consent: true, source: "website-demo" }),
    });
  } catch (e) {
    console.error("call-me-demo: forward failed", e);
    return NextResponse.json(
      { error: "Couldn't reach the call service. Please try again in a minute." },
      { status: 502 }
    );
  }

  if (res.ok) return NextResponse.json({ ok: true }, { status: 200 });

  if (res.status === 429) {
    return NextResponse.json(
      { error: "That number just got a demo call — try again later." },
      { status: 429 }
    );
  }
  const text = await res.text().catch(() => "");
  console.error("call-me-demo: edge fn error", res.status, text);
  return NextResponse.json(
    { error: "Couldn't place the call. Please try again in a minute." },
    { status: 502 }
  );
}
