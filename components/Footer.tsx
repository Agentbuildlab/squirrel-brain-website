"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import posthog from "posthog-js";

// Referral state shape returned by /api/launch-signup (see lib/referral.ts).
type SignupResult = {
  position?: number | null;
  referrals?: number;
  referralCode?: string;
  referralUrl?: string;
};

const REF_STORAGE_KEY = "sb_ref";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<SignupResult>({});
  const [copied, setCopied] = useState(false);

  // Referral capture: a ?ref=CODE landing sticks for the whole visit (and
  // future visits) so the credit survives navigation before signup.
  useEffect(() => {
    try {
      const ref = new URLSearchParams(window.location.search).get("ref");
      if (ref && /^[a-z0-9]{6,12}$/.test(ref)) {
        if (localStorage.getItem(REF_STORAGE_KEY) !== ref) {
          localStorage.setItem(REF_STORAGE_KEY, ref);
          posthog.capture("referral_landing", { ref });
        }
      }
    } catch {
      /* storage unavailable — referral credit just won't persist */
    }
  }, []);

  async function copyReferral() {
    if (!result.referralUrl) return;
    try {
      await navigator.clipboard.writeText(result.referralUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      posthog.capture("referral_share_click", { method: "copy" });
    } catch {
      /* clipboard blocked — the link is still visible to select manually */
    }
  }

  async function shareReferral() {
    if (!result.referralUrl) return;
    posthog.capture("referral_share_click", { method: "native_share" });
    try {
      await navigator.share({
        title: "Squirrel Brain",
        text: "The second brain that rings you back — join the launch list with my link:",
        url: result.referralUrl,
      });
    } catch {
      /* user cancelled the share sheet */
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      let ref: string | null = null;
      try {
        ref = localStorage.getItem(REF_STORAGE_KEY);
      } catch {
        /* no storage */
      }
      const res = await fetch("/api/launch-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, ...(ref ? { ref } : {}) }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        // Conversion event — tie the signup to a PostHog person (identified_only)
        // and record the waitlist join for funnels.
        if (email) posthog.identify(email, { email });
        // source_path = which page converted this visitor — the per-segment
        // scoreboard for the "one design, many segments" experiment.
        posthog.capture("waitlist_signup", {
          already: !!data.already,
          source_path: typeof window !== "undefined" ? window.location.pathname : "unknown",
          position: data.position ?? null,
          referred: !!(typeof window !== "undefined" && localStorage.getItem(REF_STORAGE_KEY)),
        });
        setResult(data);
        setStatus("done");
        setMessage(
          data.already
            ? "You're already on the list — we'll be in touch the moment it's ready."
            : "You're on the list! We'll email you the moment Squirrel Brain is ready."
        );
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <footer className="bg-bg border-t border-border mt-24" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <p className="font-display font-bold text-base text-ink mb-2">
              Squirrel <span className="text-accent">Brain</span>
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Your second brain that actually reminds you. Voice notes and photos
              turned into alarms, reminders, and calendar events.
            </p>
          </div>

          {/* Links column */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-muted mb-4">
              Product
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Product links">
              <Link href="/work" className="text-sm text-muted hover:text-ink transition-colors">
                For Work
              </Link>
              <Link href="/family" className="text-sm text-muted hover:text-ink transition-colors">
                For Family
              </Link>
              <Link href="/demos" className="text-sm text-muted hover:text-ink transition-colors">
                Watch it Work
              </Link>
              <Link href="/pricing" className="text-sm text-muted hover:text-ink transition-colors">
                Pricing
              </Link>
              <Link href="/mcp" className="text-sm text-muted hover:text-ink transition-colors">
                For Developers
              </Link>
            </nav>

            <p className="text-xs font-bold tracking-widest uppercase text-muted mt-6 mb-4">
              By use case
            </p>
            <nav className="flex flex-col gap-2.5" aria-label="Use-case links">
              <Link href="/ai-reminder-app" className="text-sm text-muted hover:text-ink transition-colors">
                AI reminder app
              </Link>
              <Link href="/screenshot-to-reminder-app" className="text-sm text-muted hover:text-ink transition-colors">
                Turn screenshots into reminders
              </Link>
              <Link href="/voice-note-reminder-app" className="text-sm text-muted hover:text-ink transition-colors">
                Turn voice notes into reminders
              </Link>
              <Link href="/photo-to-reminder-app" className="text-sm text-muted hover:text-ink transition-colors">
                Turn photos into reminders
              </Link>
              <Link href="/loud-reminder-app" className="text-sm text-muted hover:text-ink transition-colors">
                Loud reminder app
              </Link>
              <Link href="/second-brain-app" className="text-sm text-muted hover:text-ink transition-colors">
                Second brain app
              </Link>
              <Link href="/reminder-app-that-calls-you" className="text-sm text-muted hover:text-ink transition-colors">
                Reminder app that calls you
              </Link>
              <Link href="/daily-pep-talk-call-app" className="text-sm text-muted hover:text-ink transition-colors">
                Daily pep-talk &amp; encouragement calls
              </Link>
              <Link href="/daily-bible-verse-call" className="text-sm text-muted hover:text-ink transition-colors">
                A daily Bible verse by phone call
              </Link>
              <Link href="/can-chatgpt-set-iphone-reminder" className="text-sm text-muted hover:text-ink transition-colors">
                Can ChatGPT set a reminder?
              </Link>
            </nav>
          </div>

          {/* Newsletter + legal column — this IS the launch list (CTAs anchor here) */}
          <div id="launch-list" className="scroll-mt-24">
            <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
              Join the launch list
            </p>
            <p className="text-sm text-muted mb-3">
              We&rsquo;ll email you the moment Squirrel Brain is ready — and you&rsquo;ll be
              first into the beta.
            </p>
            {status === "done" ? (
              <div
                className="rounded-lg px-3.5 py-3 text-sm"
                style={{ background: "#E2F5EC", border: "1px solid rgba(63,174,110,0.3)", color: "#1f6b43" }}
                role="status"
              >
                <p className="flex items-start gap-2.5">
                  <span aria-hidden="true">🐿️</span>
                  <span>
                    {typeof result.position === "number" ? (
                      <>
                        You&rsquo;re <strong>#{result.position}</strong> on the launch list!
                        {result.referrals ? ` (${result.referrals} friend${result.referrals === 1 ? "" : "s"} joined with your link)` : ""}
                      </>
                    ) : (
                      message
                    )}
                  </span>
                </p>
                {result.referralUrl && (
                  <div className="mt-3">
                    <p className="text-xs mb-1.5" style={{ color: "#1f6b43" }}>
                      Every friend who joins with your link moves you up <strong>5 spots</strong>:
                    </p>
                    <div className="flex gap-1.5">
                      <input
                        readOnly
                        value={result.referralUrl}
                        onFocus={(e) => e.target.select()}
                        className="flex-1 min-w-0 text-xs bg-white border rounded-md px-2 py-1.5"
                        style={{ borderColor: "rgba(63,174,110,0.3)", color: "#1f6b43" }}
                        aria-label="Your referral link"
                      />
                      <button
                        type="button"
                        onClick={copyReferral}
                        className="text-xs font-bold px-2.5 py-1.5 rounded-md text-white whitespace-nowrap"
                        style={{ background: "#3fae6e" }}
                      >
                        {copied ? "Copied!" : "Copy"}
                      </button>
                      {typeof navigator !== "undefined" && "share" in navigator && (
                        <button
                          type="button"
                          onClick={shareReferral}
                          className="text-xs font-bold px-2.5 py-1.5 rounded-md whitespace-nowrap"
                          style={{ background: "white", color: "#1f6b43", border: "1px solid rgba(63,174,110,0.3)" }}
                        >
                          Share
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <form className="flex gap-2" onSubmit={handleSubmit} aria-label="Launch list signup">
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 min-w-0 text-sm bg-white border border-border rounded-lg px-3 py-2 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                  autoComplete="email"
                />
                {/* Honeypot — hidden from real users, catches bots */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="text-sm font-semibold bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-60"
                >
                  {status === "loading" ? "Joining…" : "Join the list"}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-xs mt-2" style={{ color: "#c0392b" }} role="alert">
                {message}
              </p>
            )}
            {status !== "done" && (
              <p className="text-xs text-muted/60 mt-2">No spam. Unsubscribe any time.</p>
            )}

            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/legal/privacy-policy"
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal/terms-of-use"
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/mcp-docs"
                className="text-xs text-muted hover:text-ink transition-colors"
              >
                MCP / API
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Squirrel Brain. Made for people with too much to remember.
          </p>
          <p className="text-xs text-muted">iOS · launching soon · 7-day free trial</p>
        </div>
      </div>
    </footer>
  );
}
