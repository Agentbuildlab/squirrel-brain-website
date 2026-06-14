"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TESTFLIGHT_URL } from "@/lib/config";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-ink no-underline"
          aria-label="Squirrel Brain — home"
        >
          <Image
            src="/assets/squirrel_logo.png"
            alt="Squirrel Brain logo"
            width={36}
            height={36}
            className="rounded-xl"
            priority
          />
          <span className="font-display font-bold text-sm tracking-wide">
            Squirrel <span className="text-accent">Brain</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6" role="list">
          <Link href="/work" className="text-sm font-semibold text-muted hover:text-ink transition-colors">
            For Work
          </Link>
          <Link href="/family" className="text-sm font-semibold text-muted hover:text-ink transition-colors">
            For Family
          </Link>
          <Link href="/demos" className="text-sm font-semibold text-muted hover:text-ink transition-colors">
            Demos
          </Link>
          <Link href="/mcp" className="text-sm font-semibold text-muted hover:text-ink transition-colors">
            Agents
          </Link>
          <Link href="/pricing" className="text-sm font-semibold text-muted hover:text-ink transition-colors">
            Pricing
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href={TESTFLIGHT_URL}
            className="hidden sm:inline-flex items-center gap-2 bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8S4.41 14.5 8 14.5 14.5 11.59 14.5 8 11.59 1.5 8 1.5zm-1 8.06V6.44a.5.5 0 01.76-.43l2.5 1.56a.5.5 0 010 .86l-2.5 1.56a.5.5 0 01-.76-.43z" fill="currentColor"/>
            </svg>
            Get the beta
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-accent-light transition-colors"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span className={`block w-5 h-0.5 bg-ink transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-ink transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg/98 backdrop-blur-md border-b border-border px-4 pb-5 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {[
              { href: "/work", label: "For Work" },
              { href: "/family", label: "For Family" },
              { href: "/demos", label: "Demos" },
              { href: "/mcp", label: "Agents" },
              { href: "/pricing", label: "Pricing" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-base font-semibold text-ink py-3 border-b border-border/50 hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={TESTFLIGHT_URL}
              className="mt-3 inline-flex items-center justify-center gap-2 bg-accent text-white text-sm font-bold px-5 py-3 rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              Get the beta
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
