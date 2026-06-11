"use client";

import Link from "next/link";

export default function Footer() {
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
          </div>

          {/* Newsletter + legal column */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-muted mb-4">
              Stay in the loop
            </p>
            <p className="text-sm text-muted mb-3">
              Get launch updates when Squirrel Brain hits the App Store.
            </p>
            {/* Placeholder — no backend yet */}
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Launch updates signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="you@example.com"
                className="flex-1 min-w-0 text-sm bg-white border border-border rounded-lg px-3 py-2 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
                autoComplete="email"
              />
              <button
                type="submit"
                className="text-sm font-semibold bg-accent text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Notify me
              </button>
            </form>
            <p className="text-xs text-muted/60 mt-2">
              No spam. Unsubscribe any time.
            </p>

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
                href="/mcp"
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
          <p className="text-xs text-muted">iOS app — free to start · $9.99/mo</p>
        </div>
      </div>
    </footer>
  );
}
