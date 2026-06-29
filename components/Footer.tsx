"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/launch-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
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
                className="flex items-start gap-2.5 rounded-lg px-3.5 py-3 text-sm"
                style={{ background: "#E2F5EC", border: "1px solid rgba(63,174,110,0.3)", color: "#1f6b43" }}
                role="status"
              >
                <span aria-hidden="true">🐿️</span>
                <span>{message}</span>
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
