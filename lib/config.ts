// Public TestFlight beta link (created 2026-06-11, serves build 87+).
// Swap to the App Store URL at launch — real Apple app ID is 6766505549.
// NOTE: we're PRE-BETA. Do NOT point public CTAs here yet — use WAITLIST_HREF.
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/R7WRjGEC";

// Pre-beta: every public CTA points to the launch-list signup (the footer
// email form, id="launch-list"). Swap to TESTFLIGHT_URL / App Store at launch.
export const WAITLIST_HREF = "#launch-list";

export const SITE_NAME = "Squirrel Brain";
export const SITE_TAGLINE = "Speak it. Snap it. Stash it.";
export const SITE_DESCRIPTION =
  "Squirrel Brain turns voice notes, photos, screenshots, texts, and emails into reminders, alarms, notes, and calendar events — so busy people don't forget what matters.";

export const POSTHOG_KEY = "phc_mtTXNiTrgfZWWnh6akwidh82ZNnWM2zrdFxjw8MYUC2B";
export const POSTHOG_HOST = "https://us.i.posthog.com";

// "Scuttle calls you right now" live demo — the widget ships DARK until the
// app-side endpoint exists (spec: docs/CALL_ME_DEMO_SPEC.md). Flip this to
// true AND set CALL_DEMO_ENDPOINT + CALL_DEMO_KEY in Vercel env to go live.
export const CALL_ME_DEMO_ENABLED = false;
