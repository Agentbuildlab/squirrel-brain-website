"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { TESTFLIGHT_URL } from "@/lib/config";
import {
  PhoneShell,
  StatusBar,
  PageHeader,
  ScrollBoxRow,
  CaptureBar,
  TabBar,
  T,
} from "@/components/v2/PhoneKit";

// ── Hero phone screen: the v2 Home screen ─────────────────────────────────

function HomeScreen() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background: T.bg,
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      <StatusBar />
      <PageHeader title="Good morning ☀️" sub="Friday, June 13" />

      {/* Cards list */}
      <div style={{ flex: 1, overflowY: "hidden", padding: "0 8px" }}>
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: T.textSub,
            letterSpacing: 0.8,
            textTransform: "uppercase",
            marginBottom: 6,
            paddingLeft: 2,
          }}
        >
          TODAY
        </div>

        <ScrollBoxRow
          accentColor={T.blue}
          title="☎️ Dentist appointment"
          date="Jun 13"
          time="2:00 PM"
          dayNum={13}
          location="456 Oak Ave"
          source="From Calendar · by You"
          pills={[
            { label: "⏰ 1:30 PM nudge ON", color: T.blue, bg: T.blueLight },
          ]}
        />

        <ScrollBoxRow
          accentColor={T.orange}
          title="Pick up kids at 3:30pm"
          date="Jun 13"
          time="3:30 PM"
          dayNum={13}
          source="From Squirrel Brain · by You"
          pills={[
            { label: "🎤 VOICE ATTACHED", color: T.orange, bg: T.pastelPeach },
          ]}
        />

        <ScrollBoxRow
          accentColor={T.orange}
          title="📦 Return package — closes Jun 24"
          date="Jun 24"
          time="11:59 PM"
          dayNum={24}
          source="From Squirrel Brain · by You"
          pills={[
            { label: "📞 Call me ON", color: "#1a1208", bg: T.pastelPeach },
          ]}
        />

        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: T.textSub,
            letterSpacing: 0.8,
            textTransform: "uppercase",
            margin: "10px 0 6px 2px",
          }}
        >
          THIS WEEK
        </div>

        <ScrollBoxRow
          accentColor={T.blue}
          title="⚽ Soccer — Riverside Park"
          date="Jun 15"
          time="10:00 AM"
          dayNum={15}
          location="Riverside Park, Field 3"
          source="From Calendar · by You"
        />
      </div>

      <CaptureBar />
      <TabBar active={0} />
    </div>
  );
}

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
        className="rounded-3xl"
        style={{
          boxShadow: "0 16px 48px rgba(255,122,26,0.28), 0 4px 16px rgba(26,18,8,0.12)",
        }}
        priority
      />
    </motion.div>
  );
}

// ── The scroll-scrubbed hero (desktop: pinned, mobile: static) ────────────

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phone gentle rise as user enters
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  // Tagline fade — shows at rest, fades as scroll begins
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  // Scroll cue fades out fast
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  const headline = (
    <h1
      id="hero-heading"
      className="font-display font-extrabold text-ink leading-[0.95] tracking-tight"
      style={{
        fontSize: "clamp(2.6rem, 6.5vw, 7rem)",
        // Always visible — SSR-safe via immediate pattern
        opacity: 1,
      }}
    >
      Snap it.{" "}
      <span style={{ color: T.orange }}>Say it.</span>
      <br />
      Stash it.{" "}
      <span style={{ color: T.orange }}>Done.</span>
    </h1>
  );

  // Reduced motion: static layout
  if (reduceMotion) {
    return (
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        aria-labelledby="hero-heading"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 50% -10%, #FFF0E6 0%, #faf7f2 60%)`,
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-28">
          <div>
            <a
              href={TESTFLIGHT_URL}
              className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3.5 py-1.5 rounded-full mb-8 tracking-wide"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Now in TestFlight · iOS only
            </a>
            {headline}
            <p className="mt-6 text-xl text-muted leading-relaxed max-w-md">
              Your squirrel handles the rest.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a
                href={TESTFLIGHT_URL}
                className="inline-flex items-center gap-2 bg-accent text-white font-bold text-lg px-9 py-4 rounded-full hover:opacity-90 transition-opacity"
              >
                Join the TestFlight
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <PhoneShell>
              <HomeScreen />
            </PhoneShell>
          </div>
        </div>
      </section>
    );
  }

  return (
    // Scroll container — 250vh gives enough scroll to let the pinned hero breathe
    <div ref={containerRef} style={{ height: "250vh", position: "relative" }}>
      {/* Sticky viewport — on mobile we use min-h-screen + overflow-visible so all content shows */}
      <div
        className="sticky top-0 md:h-screen md:overflow-hidden flex flex-col min-h-screen"
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
        <div className="relative z-10 flex-1 flex items-start md:items-center w-full px-6 lg:px-12 gap-6 lg:gap-16" style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* LEFT: copy */}
          <div className="flex-1 min-w-0 pt-20 md:pt-0">
            {/* Beta badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a
                href={TESTFLIGHT_URL}
                className="inline-flex items-center gap-2 text-xs font-bold px-3.5 py-1.5 rounded-full mb-6 lg:mb-8 tracking-wide hover:opacity-80 transition-opacity"
                style={{ background: "#FFF0E6", color: T.orange }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: T.orange }}
                />
                Now in TestFlight · iOS only
              </a>
            </motion.div>

            {/* Mascot on mobile — compact, shows above headline */}
            <div className="flex md:hidden mb-4">
              <MascotBob size={72} />
            </div>

            {/* Headline — SSR-visible (opacity 1 inline, no animation on mount) */}
            {headline}

            {/* Sub */}
            <motion.p
              className="mt-5 text-lg lg:text-xl text-muted leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              Snap it, say it, stash it — your squirrel handles the rest.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-5 flex flex-wrap gap-3 items-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.38 }}
            >
              <a
                href={TESTFLIGHT_URL}
                className="inline-flex items-center gap-2 text-white font-bold text-base lg:text-lg px-7 lg:px-9 py-3.5 lg:py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
                style={{ background: T.orange, boxShadow: "0 4px 24px rgba(255,122,26,0.35)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M9 1.5C4.86 1.5 1.5 4.86 1.5 9S4.86 16.5 9 16.5 16.5 13.14 16.5 9 13.14 1.5 9 1.5zm-1.25 9.4V7.1a.5.5 0 01.76-.43l3 1.9a.5.5 0 010 .86l-3 1.9a.5.5 0 01-.76-.43z" fill="currentColor" />
                </svg>
                Join the TestFlight
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
              Free to start · $9.99/mo to unlock everything · iOS only
            </motion.p>
          </div>

          {/* RIGHT: mascot + phone */}
          <div className="hidden md:flex flex-col items-center gap-8 flex-shrink-0">
            {/* Mascot above phone */}
            <MascotBob />

            {/* Phone — rises gently as you scroll */}
            <motion.div style={{ y: phoneY }}>
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <PhoneShell width={260}>
                  <HomeScreen />
                </PhoneShell>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: scrollCueOpacity }}
          aria-hidden="true"
        >
          <span className="text-xs font-medium" style={{ color: "rgba(138,112,96,0.55)" }}>
            Scroll to see it work
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: "rgba(138,112,96,0.3)" }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: T.orange }} />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
