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
    // Welcome the new subscriber and add them to the Resend audience so the
    // founder can see the list and broadcast updates. Both are best-effort and
    // dormant until RESEND_API_KEY (+ RESEND_AUDIENCE_ID) are set — a missing
    // key simply skips them, never failing the signup.
    await sendWelcomeEmail(email);
    await addToAudience(email);
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

// ── Subscriber-facing email + list sync (Resend) ────────────────────────────
// Sends from the already-verified squirrelbrainapp.com domain. Reply-to is a
// real, monitored inbox so people can write back.
const FROM = "Squirrel Brain <hello@squirrelbrainapp.com>";
const REPLY_TO = "hello@squirrelbrainapp.com";

const WELCOME_HTML = `<!doctype html>
<html><body style="margin:0;background:#faf7f2;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#1f1a14;">
  <div style="max-width:480px;margin:0 auto;padding:32px 24px;">
    <p style="font-size:22px;font-weight:800;margin:0 0 8px;">Squirrel<span style="color:#FF7A1A;">Brain</span></p>
    <h1 style="font-size:24px;line-height:1.25;margin:16px 0 12px;">You&rsquo;re on the list! 🐿️</h1>
    <p style="font-size:15px;line-height:1.6;color:#4a4036;margin:0 0 16px;">
      Thanks for joining the Squirrel Brain launch list. We&rsquo;re putting the finishing touches on the app &mdash;
      the AI reminder app that turns your voice notes, photos, and screenshots into reminders, alarms, notes, and
      calendar events, and even calls your phone for the things you can&rsquo;t miss.
    </p>
    <p style="font-size:15px;line-height:1.6;color:#4a4036;margin:0 0 16px;">
      It&rsquo;s coming soon to iPhone. We&rsquo;ll email you the moment it&rsquo;s ready &mdash; and you&rsquo;ll be
      among the first to get in. No spam, ever; you can unsubscribe any time.
    </p>
    <p style="font-size:15px;line-height:1.6;color:#4a4036;margin:0 0 24px;">
      Got a question or something you wish a reminder app did? Just reply to this email &mdash; it comes straight to us.
    </p>
    <a href="https://squirrelbrainapp.com" style="display:inline-block;background:#FF7A1A;color:#fff;text-decoration:none;font-weight:700;font-size:15px;padding:12px 22px;border-radius:999px;">See what it does</a>
    <p style="font-size:13px;color:#9a8c7a;margin:28px 0 0;">&mdash; The Squirrel Brain team</p>
  </div>
</body></html>`;

async function sendWelcomeEmail(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return; // dormant until the key is configured
  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [email],
        reply_to: REPLY_TO,
        subject: "You're on the Squirrel Brain launch list 🐿️",
        html: WELCOME_HTML,
      }),
    });
  } catch (e) {
    console.error("launch-signup: welcome email failed", e);
  }
}

async function addToAudience(email: string): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) return; // dormant until configured
  try {
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
  } catch (e) {
    console.error("launch-signup: add to audience failed", e);
  }
}
