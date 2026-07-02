// Waitlist referral mechanics — Robinhood-style "share to move up the list".
//
// ZERO-SCHEMA design (we can't run DDL on the shared Supabase from the website
// side): the referral code is DERIVED from the email (salted hash — nothing
// stored), and "who referred me" rides in the waitlist table's unused `name`
// column as "ref:<code>". If that column doesn't exist, the API degrades
// gracefully (signup always succeeds; credits just don't count). When the app
// session later adds real columns, migrate by parsing `name`.
//
// The code is a SHARE handle, not a secret — deriving it from a known email is
// harmless (worst case: someone gifts you referral credit).

import { createHash } from "crypto";

// Public, stable salt — changing it would orphan every code already shared.
const CODE_SALT = "squirrel-brain-launch-2026";

/** How many positions one successful referral is worth. */
export const SPOTS_PER_REFERRAL = 5;

/** Deterministic 8-char base36 share code for an email (lowercased/trimmed). */
export function codeForEmail(email: string): string {
  const digest = createHash("sha256")
    .update(email.trim().toLowerCase() + CODE_SALT)
    .digest("hex");
  // 12 hex chars → base36 → pad to 8. Deterministic and URL-safe.
  return parseInt(digest.slice(0, 12), 16).toString(36).padStart(8, "0").slice(0, 8);
}

/** The value we store in the `name` column to credit a referrer. */
export function refTag(code: string): string {
  return `ref:${code}`;
}

/** Validate an incoming ?ref= value (defense against junk/injection). */
export function isValidRefCode(ref: unknown): ref is string {
  return typeof ref === "string" && /^[a-z0-9]{6,12}$/.test(ref);
}

/** Effective queue position after referral boosts. */
export function effectivePosition(rank: number, referrals: number): number {
  return Math.max(1, rank - referrals * SPOTS_PER_REFERRAL);
}

export function referralUrl(code: string): string {
  return `https://squirrelbrainapp.com/?ref=${code}`;
}
