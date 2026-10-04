"use client";

// Shared launch-list signup. The footer form and the top-of-page product CTA
// both go through here so every `waitlist_signup` looks the same: the page
// path is recorded as `path` (and as the existing `source_path` funnels use).

import posthog from "posthog-js";

export const REF_STORAGE_KEY = "sb_ref";

/** One-line promise already used on the landing-page final CTA. */
export const WAITLIST_PROMISE =
  "Join the launch list — we'll email you the moment Squirrel Brain is ready.";

export type LaunchSignupResponse = {
  already?: boolean;
  position?: number | null;
  referrals?: number;
  referralCode?: string;
  referralUrl?: string;
  error?: string;
};

export function pagePath(): string {
  return typeof window !== "undefined" ? window.location.pathname : "unknown";
}

function referredByLink(): boolean {
  try {
    return !!localStorage.getItem(REF_STORAGE_KEY);
  } catch {
    return false;
  }
}

/** Fire the existing conversion event, tagged with the page the visitor is on. */
export function captureWaitlistSignup(data: { already?: boolean; position?: number | null }) {
  const path = pagePath();
  posthog.capture("waitlist_signup", {
    already: !!data.already,
    source_path: path,
    path,
    position: data.position ?? null,
    referred: referredByLink(),
  });
}

export async function submitLaunchSignup(
  email: string,
  website: string
): Promise<{ ok: true; data: LaunchSignupResponse } | { ok: false; error: string }> {
  let ref: string | null = null;
  try {
    ref = localStorage.getItem(REF_STORAGE_KEY);
  } catch {
    /* no storage */
  }
  try {
    const res = await fetch("/api/launch-signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, website, ...(ref ? { ref } : {}) }),
    });
    const data = (await res.json().catch(() => ({}))) as LaunchSignupResponse;
    if (!res.ok) {
      return { ok: false, error: data.error || "Something went wrong. Please try again." };
    }
    if (email) posthog.identify(email, { email });
    captureWaitlistSignup({ already: !!data.already, position: data.position ?? null });
    return { ok: true, data };
  } catch {
    return { ok: false, error: "Something went wrong. Please try again." };
  }
}
