import { NextResponse } from "next/server";

// Server-only endpoint: adds an email to the Supabase `waitlist` table.
// Uses the service-role key (server env, never sent to the client) because RLS
// blocks anonymous inserts. A Supabase DB webhook on INSERT fires the
// `waitlist-notification` edge function, which emails hello@squirrelbrainapp.com.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPABASE_URL = "https://geczbtsjfbvfukdzdemr.supabase.co";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: { email?: string; website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad request." }, { status: 400 });
  }

  // Honeypot: real users never fill the hidden `website` field.
  if (body.website) return NextResponse.json({ ok: true }, { status: 200 });

  const email = (body.email || "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 200) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!key) {
    console.error("launch-signup: SUPABASE_SERVICE_ROLE_KEY is not set");
    return NextResponse.json({ error: "Signup is temporarily unavailable." }, { status: 500 });
  }

  let res: Response;
  try {
    res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email }),
    });
  } catch (e) {
    console.error("launch-signup: fetch to Supabase failed", e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  if (res.ok) {
    // Fire the alert email ourselves (don't rely on the Supabase DB webhook,
    // which isn't dependably triggering). The waitlist-notification edge
    // function sends to hello@squirrelbrainapp.com, which forwards (via
    // forwardemail.net) to the founder's Gmail. Never fail the signup if this
    // errors — the email is already stored.
    try {
      await fetch(`${SUPABASE_URL}/functions/v1/waitlist-notification`, {
        method: "POST",
        headers: {
          apikey: key,
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "INSERT",
          table: "waitlist",
          record: { email, name: null, created_at: new Date().toISOString() },
        }),
      });
    } catch (e) {
      console.error("launch-signup: alert notification failed", e);
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  }
  // 409 = unique-violation (already on the list) → treat as success (no re-alert).
  if (res.status === 409) {
    return NextResponse.json({ ok: true, already: true }, { status: 200 });
  }

  const text = await res.text().catch(() => "");
  console.error("launch-signup: insert failed", res.status, text);
  return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
}
