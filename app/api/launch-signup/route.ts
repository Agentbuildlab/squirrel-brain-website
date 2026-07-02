import { NextResponse } from "next/server";
import {
  codeForEmail,
  refTag,
  isValidRefCode,
  effectivePosition,
  referralUrl,
} from "@/lib/referral";

// Server-only endpoint: adds an email to the Supabase `waitlist` table.
// Uses the service-role key (server env, never sent to the client) because RLS
// blocks anonymous inserts. A Supabase DB webhook on INSERT fires the
// `waitlist-notification` edge function, which emails hello@squirrelbrainapp.com.
//
// REFERRALS (2026-07-02): the response now carries {position, referralCode,
// referralUrl, referrals} so the form can show "you're #N — share to move up".
// Who-referred-me rides in the unused `name` column as "ref:<code>" (zero-DDL;
// see lib/referral.ts). Every referral stat is BEST-EFFORT — a failure there
// never fails the signup.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SUPABASE_URL = "https://geczbtsjfbvfukdzdemr.supabase.co";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sbHeaders(key: string): Record<string, string> {
  return {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };
}

// Count rows matching a PostgREST filter without fetching them.
async function sbCount(key: string, filter: string): Promise<number | null> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist?select=email&${filter}`, {
      headers: { ...sbHeaders(key), Prefer: "count=exact", Range: "0-0" },
    });
    if (!res.ok && res.status !== 206) return null;
    const range = res.headers.get("content-range"); // e.g. "0-0/42"
    const total = range?.split("/")[1];
    return total && total !== "*" ? parseInt(total, 10) : null;
  } catch {
    return null;
  }
}

// Queue position + referral credit for an email already on the list.
async function waitlistStats(key: string, email: string, myCode: string) {
  try {
    const rowRes = await fetch(
      `${SUPABASE_URL}/rest/v1/waitlist?email=eq.${encodeURIComponent(email)}&select=created_at&limit=1`,
      { headers: sbHeaders(key) }
    );
    const rows = rowRes.ok ? await rowRes.json().catch(() => []) : [];
    const createdAt: string | undefined = rows?.[0]?.created_at;
    if (!createdAt) return { position: null, referrals: 0 };

    const rank = await sbCount(key, `created_at=lte.${encodeURIComponent(createdAt)}`);
    // May 400 if the `name` column doesn't exist — sbCount returns null then.
    const referrals =
      (await sbCount(key, `name=eq.${encodeURIComponent(refTag(myCode))}`)) ?? 0;
    return {
      position: rank == null ? null : effectivePosition(rank, referrals),
      referrals,
    };
  } catch {
    return { position: null, referrals: 0 };
  }
}

export async function POST(req: Request) {
  let body: { email?: string; website?: string; ref?: string };
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

  const myCode = codeForEmail(email);
  // Self-referrals are quietly ignored.
  const ref = isValidRefCode(body.ref) && body.ref !== myCode ? body.ref : null;

  async function insert(record: Record<string, string>): Promise<Response> {
    return fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: "POST",
      headers: { ...sbHeaders(key!), Prefer: "return=minimal" },
      body: JSON.stringify(record),
    });
  }

  let res: Response;
  try {
    res = await insert(ref ? { email, name: refTag(ref) } : { email });
    // If the `name` column doesn't exist (schema drift), retry without credit —
    // the signup itself must never be lost to referral bookkeeping.
    if (res.status === 400 && ref) res = await insert({ email });
  } catch (e) {
    console.error("launch-signup: fetch to Supabase failed", e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  const already = res.status === 409; // unique-violation → already on the list
  if (!res.ok && !already) {
    const text = await res.text().catch(() => "");
    console.error("launch-signup: insert failed", res.status, text);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 502 });
  }

  if (!already) {
    // Fire the alert email ourselves (don't rely on the Supabase DB webhook,
    // which isn't dependably triggering). Never fail the signup if this errors.
    try {
      await fetch(`${SUPABASE_URL}/functions/v1/waitlist-notification`, {
        method: "POST",
        headers: sbHeaders(key),
        body: JSON.stringify({
          type: "INSERT",
          table: "waitlist",
          record: { email, name: ref ? refTag(ref) : null, created_at: new Date().toISOString() },
        }),
      });
    } catch (e) {
      console.error("launch-signup: alert notification failed", e);
    }
    await sendWelcomeEmail(email);
    await addToAudience(email);
  }

  const stats = await waitlistStats(key, email, myCode);
  return NextResponse.json(
    {
      ok: true,
      ...(already ? { already: true } : {}),
      position: stats.position,
      referrals: stats.referrals,
      referralCode: myCode,
      referralUrl: referralUrl(myCode),
    },
    { status: 200 }
  );
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
  if (!apiKey) return; // dormant until the key is configured
  try {
    // Use an explicit audience if provided, else auto-discover the account's
    // first (default) audience — so only RESEND_API_KEY is required to set up.
    let audienceId = process.env.RESEND_AUDIENCE_ID;
    if (!audienceId) {
      const list = await fetch("https://api.resend.com/audiences", {
        headers: { Authorization: `Bearer ${apiKey}` },
      });
      const json = await list.json().catch(() => null);
      audienceId = json?.data?.[0]?.id;
    }
    if (!audienceId) return;
    await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, unsubscribed: false }),
    });
  } catch (e) {
    console.error("launch-signup: add to audience failed", e);
  }
}
