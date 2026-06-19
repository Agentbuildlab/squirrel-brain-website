"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { WAITLIST_HREF } from "@/lib/config";
import { PhoneShot, T } from "@/components/v2/PhoneKit";

// ── Static mascot bob animation ────────────────────────────────────────────

function MascotBob({ size = 120 }: { size?: number }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      animate={reduceMotion ? {} : { y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      style={{ display: "inline-block" }}
    >
      <Image
        src="/assets/squirrel_logo.png"
        alt="Squirrel Brain mascot"
        width={size}
        height={size}
        style={{
          // Shadow follows the squirrel's silhouette (alpha), not a square tile
          filter:
            "drop-shadow(0 14px 20px rgba(26,18,8,0.20)) drop-shadow(0 3px 9px rgba(255,122,26,0.20))",
        }}
        priority
      />
    </motion.div>
  );
}

// ── Hero — a normal full-height section (NOT scroll-pinned) ────────────────
// Previously this used a 250vh container + a sticky inner pane driven by
// useScroll. Combined with Lenis smooth-scroll that made the first screen feel
// like it "wouldn't scroll" — you had to force the wheel. Now it's a plain
// min-h-screen section: scroll behaves normally everywhere.

export default function HeroSection() {
  const headline = (
    <>
      <p
        className="font-display font-extrabold mb-3"
        style={{
          fontSize: "clamp(1.05rem, 2.1vw, 1.7rem)",
          color: T.orange,
          lineHeight: 1.1,
          letterSpacing: -0.2,
        }}
      >
        You&rsquo;re not forgetful, you&rsquo;re outnumbered.
      </p>
      <h1
        id="hero-heading"
        className="font-display font-extrabold text-ink leading-[0.95] tracking-tight"
        style={{
          fontSize: "clamp(2rem, 5vw, 5.5rem)",
          opacity: 1,
        }}
      >
        Your brain has{" "}
        <span style={{ color: T.orange }}>too many tabs open.</span>
        <br />
        Let’s close{" "}
        <span style={{ color: T.orange }}>some of them.</span>
      </h1>
    </>
  );

  const subhead =
    "Snap it, say it, stash it — and your squirrel hands it back exactly when it matters.";

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 100% 80% at 50% -15%, #FFF0E6 0%, #faf6f0 55%, #f8f4ee 100%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle noise grain */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.02 }}
        aria-hidden="true"
      >
        <filter id="hero-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>

      {/* Main layout */}
      <div
        className="relative z-10 w-full flex items-center px-6 lg:px-12 gap-6 lg:gap-16 pt-28 pb-16 md:py-24"
        style={{ maxWidth: 1280, margin: "0 auto" }}
      >
        {/* LEFT: copy */}
        <div className="flex-1 min-w-0">
          {/* Beta badge */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href={WAITLIST_HREF}
              className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 lg:mb-8 tracking-wide hover:opacity-80 transition-opacity"
              style={{ background: "#FFF0E6", color: T.orange }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: T.orange }}
              />
              Launching soon · join the list · iOS
            </a>
          </motion.div>

          {/* Mascot on mobile — compact, shows above headline */}
          <div className="flex md:hidden mb-4">
            <MascotBob size={72} />
          </div>

          {/* Headline */}
          {headline}

          {/* Sub */}
          <motion.p
            className="mt-5 text-lg lg:text-xl text-muted leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            {subhead}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-5 flex flex-wrap gap-3 items-center"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
          >
            <a
              href={WAITLIST_HREF}
              className="inline-flex items-center gap-2 text-white font-bold text-base lg:text-lg px-7 lg:px-9 py-3.5 lg:py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
              style={{ background: T.orange, boxShadow: "0 4px 24px rgba(255,122,26,0.35)" }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9 2a3.4 3.4 0 00-3.4 3.4c0 3.9-1.5 4.9-1.5 4.9h9.8s-1.5-1-1.5-4.9A3.4 3.4 0 009 2zM7.7 13.4a1.3 1.3 0 002.6 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Join the launch list
            </a>
            <Link
              href="/demos"
              className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1.5"
            >
              See how it works
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <motion.p
            className="mt-3 text-xs"
            style={{ color: "rgba(138,112,96,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
We&rsquo;ll email you the moment it&rsquo;s ready · 7-day free trial · iOS
          </motion.p>
        </div>

        {/* RIGHT: mascot + phone */}
        <div className="hidden md:flex flex-col items-center gap-8 flex-shrink-0">
          {/* Mascot above phone */}
          <MascotBob />

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <PhoneShot src="/assets/screens/home-v4.webp" alt="Squirrel Brain — your day at a glance" width={380} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
