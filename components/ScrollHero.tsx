"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import CtaButton from "@/components/CtaButton";
import Link from "next/link";

// ── Fake-UI stage mockups inside the phone screen ──────────────────────────

function Stage1MicUI() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: "#faf7f2" }}>
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-ink/60">9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-2 rounded-sm border border-ink/40 relative">
            <div className="absolute inset-0.5 left-0.5 right-0.5 bg-ink/40 rounded-sm" style={{ width: "70%" }} />
          </div>
        </div>
      </div>

      {/* App header */}
      <div className="px-5 pt-2 pb-4">
        <div className="text-[11px] font-bold tracking-widest uppercase text-accent/70 mb-1">Squirrel Brain</div>
        <div className="text-[15px] font-bold text-ink">Hey, say something.</div>
      </div>

      {/* Waveform + mic area */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4 px-5">
        {/* Live waveform bars */}
        <div className="flex items-end gap-1 h-12">
          {[3, 7, 5, 9, 6, 11, 8, 5, 10, 7, 4, 9, 6].map((h, i) => (
            <motion.div
              key={i}
              className="w-1.5 rounded-full bg-accent"
              style={{ height: `${h * 4}px`, opacity: 0.7 + (i % 3) * 0.1 }}
              animate={{ height: [`${h * 4}px`, `${(h + 3) * 4}px`, `${h * 4}px`] }}
              transition={{ duration: 0.6 + i * 0.07, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Transcript bubble */}
        <div className="w-full bg-white rounded-2xl p-3 shadow-sm border border-border">
          <div className="text-[12px] text-ink font-medium leading-relaxed">
            "Dentist appointment Thursday at two pm, remind me the day before"
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[9px] text-accent font-bold tracking-wide">LISTENING</span>
          </div>
        </div>

        {/* Mic button */}
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: "radial-gradient(circle, #FF7A1A, #e85a00)",
            boxShadow: "0 0 0 8px rgba(255,122,26,0.15), 0 4px 16px rgba(255,122,26,0.4)",
          }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="7" y="2" width="8" height="12" rx="4" fill="white" />
            <path d="M4 11a7 7 0 0014 0M11 18v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Bottom hint */}
      <div className="text-center text-[9px] text-muted/60 pb-4 font-medium">Tap to stop</div>
    </div>
  );
}

function Stage2CardUI() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: "#faf7f2" }}>
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-ink/60">9:41</span>
        <div className="w-4 h-2 rounded-sm border border-ink/40" />
      </div>

      {/* Header */}
      <div className="px-5 pt-2 pb-3">
        <div className="text-[11px] font-bold tracking-widest uppercase text-accent/70 mb-1">Pip found</div>
        <div className="text-[15px] font-bold text-ink">Review & confirm</div>
      </div>

      {/* Extracted card */}
      <div className="mx-4 bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
        {/* Card header */}
        <div className="px-4 py-3 border-b border-border flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-accent-light flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="2" width="12" height="11" rx="2" stroke="#FF7A1A" strokeWidth="1.4" fill="none" />
              <path d="M4 1v2M10 1v2M1 6h12" stroke="#FF7A1A" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-[11px] font-bold text-ink">Dentist Appointment</div>
            <div className="text-[9px] text-muted">Calendar event · 1 reminder</div>
          </div>
        </div>

        {/* Fields */}
        <div className="px-4 py-3 space-y-2.5">
          <div className="flex justify-between">
            <span className="text-[10px] text-muted font-medium">Date</span>
            <span className="text-[10px] text-ink font-semibold">Thursday, Jun 13</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] text-muted font-medium">Time</span>
            <span className="text-[10px] text-ink font-semibold">2:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[10px] text-muted font-medium">Reminder</span>
            <span className="text-[10px] text-ink font-semibold">Wed 9:00 AM</span>
          </div>
        </div>

        {/* Pip label */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-1.5 bg-accent-light rounded-xl px-2.5 py-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[9px] text-accent font-bold">Pip extracted this from your voice</span>
          </div>
        </div>
      </div>

      {/* Confirm button */}
      <div className="mx-4 mt-4">
        <div
          className="rounded-2xl py-3 text-center"
          style={{ background: "linear-gradient(135deg, #FF7A1A, #e85a00)" }}
        >
          <span className="text-[12px] font-bold text-white">Add to Calendar</span>
        </div>
      </div>
    </div>
  );
}

function Stage3AlarmUI() {
  return (
    <div className="absolute inset-0 flex flex-col" style={{ background: "#faf7f2" }}>
      {/* Status bar */}
      <div className="flex justify-between items-center px-5 pt-4 pb-2">
        <span className="text-[10px] font-semibold text-ink/60">9:41</span>
        <div className="w-4 h-2 rounded-sm border border-ink/40" />
      </div>

      {/* Header */}
      <div className="px-5 pt-2 pb-3">
        <div className="text-[11px] font-bold tracking-widest uppercase text-accent/70 mb-1">Done</div>
        <div className="text-[15px] font-bold text-ink">Alarm set</div>
      </div>

      {/* Success state */}
      <div className="mx-4">
        <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          {/* Event */}
          <div className="px-4 py-3 border-b border-border">
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-7 h-7 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #FF7A1A, #e85a00)" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <div className="text-[11px] font-bold text-ink">Dentist Appointment</div>
                <div className="text-[9px] text-muted">Thu Jun 13 · 2:00 PM · Added to calendar</div>
              </div>
            </div>
          </div>

          {/* Alarm row */}
          <div className="px-4 py-3">
            <div className="text-[9px] font-bold text-muted uppercase tracking-wide mb-2">Alarms</div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-accent-light flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="6" r="3.5" stroke="#FF7A1A" strokeWidth="1.2" fill="none" />
                      <path d="M5.5 4v2l1.5 1" stroke="#FF7A1A" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-ink font-medium">Wed Jun 12 · 9:00 AM</span>
                </div>
                <div className="w-7 h-4 rounded-full bg-accent flex items-center justify-end pr-0.5">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-accent-light flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                      <circle cx="5.5" cy="6" r="3.5" stroke="#FF7A1A" strokeWidth="1.2" fill="none" />
                      <path d="M5.5 4v2l1.5 1" stroke="#FF7A1A" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-ink font-medium">Thu Jun 13 · 1:30 PM</span>
                </div>
                <div className="w-7 h-4 rounded-full bg-accent flex items-center justify-end pr-0.5">
                  <div className="w-3 h-3 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pip hounds message */}
        <div className="mt-3 bg-dark-bg rounded-2xl px-4 py-3">
          <div className="flex items-start gap-2">
            <div className="text-[14px]" aria-hidden="true" style={{ lineHeight: 1 }}>🐿</div>
            <div>
              <div className="text-[10px] font-bold text-dark-gold mb-0.5">Pip</div>
              <div className="text-[10px] text-dark-text/80 leading-relaxed">
                I'll remind you the day before, and again 30 min out. I've got it.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Stage content config ───────────────────────────────────────────────────

const STAGES = [
  {
    id: "say",
    eyebrow: "Stage 1",
    headline: "You say it.",
    sub: "One sentence. Tap the mic and speak. Pip listens and transcribes in real time.",
    Screen: Stage1MicUI,
  },
  {
    id: "write",
    eyebrow: "Stage 2",
    headline: "Pip writes\nit down.",
    sub: "Dates, times, and reminders extracted instantly. You review — one tap to confirm.",
    Screen: Stage2CardUI,
  },
  {
    id: "alarm",
    eyebrow: "Stage 3",
    headline: "It becomes\nan alarm.",
    sub: "Added to your calendar. Alarms set. Pip will hound you until it's done.",
    Screen: Stage3AlarmUI,
  },
];

// ── Main component ─────────────────────────────────────────────────────────

export default function ScrollHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Stage transitions: 0→0.33 = stage1, 0.33→0.66 = stage2, 0.66→1 = stage3
  // Caption opacity/position transforms per stage
  const stage1Opacity = useTransform(scrollYProgress, [0, 0.22, 0.28, 0.4], [1, 1, 0, 0]);
  const stage1Y = useTransform(scrollYProgress, [0, 0.22, 0.28, 0.4], [0, 0, -30, -30]);

  const stage2Opacity = useTransform(scrollYProgress, [0.25, 0.33, 0.55, 0.62], [0, 1, 1, 0]);
  const stage2Y = useTransform(scrollYProgress, [0.25, 0.33, 0.55, 0.62], [30, 0, 0, -30]);

  const stage3Opacity = useTransform(scrollYProgress, [0.58, 0.66, 1, 1], [0, 1, 1, 1]);
  const stage3Y = useTransform(scrollYProgress, [0.58, 0.66, 1, 1], [30, 0, 0, 0]);

  // Screen crossfades
  const screen1Opacity = useTransform(scrollYProgress, [0, 0.25, 0.35], [1, 1, 0]);
  const screen2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.58, 0.68], [0, 1, 1, 0]);
  const screen3Opacity = useTransform(scrollYProgress, [0.58, 0.68, 1], [0, 1, 1]);

  // Phone subtle vertical float
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const stageOpacities = [stage1Opacity, stage2Opacity, stage3Opacity];
  const stageYs = [stage1Y, stage2Y, stage3Y];
  const screenOpacities = [screen1Opacity, screen2Opacity, screen3Opacity];

  if (reduceMotion) {
    return <StaticHero />;
  }

  return (
    <div ref={containerRef} className="relative" style={{ height: "350vh" }}>
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 50% -10%, #FFF0E6 0%, #faf7f2 60%)",
          }}
          aria-hidden="true"
        />

        {/* Noise grain overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none" aria-hidden="true">
          <filter id="hero-noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#hero-noise)" />
        </svg>

        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto w-full px-6 lg:px-12 gap-8 lg:gap-16">
          {/* LEFT: copy + headline */}
          <div className="flex-1 min-w-0 pt-8 lg:pt-0">
            {/* Beta badge */}
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3.5 py-1.5 rounded-full mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" aria-hidden="true" />
              Now in beta · iOS
            </div>

            {/* Display headline — always visible SSR-safe */}
            <h1
              id="hero-heading"
              className="font-display font-extrabold text-ink leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(3.2rem, 7vw, 7.5rem)",
                opacity: 1,
              }}
            >
              Say it.{" "}
              <span className="text-accent">Snap it.</span>
              <br />
              It&rsquo;s handled.
            </h1>

            {/* Stage captions — desktop only, scroll-driven */}
            <div className="hidden lg:block relative mt-10" style={{ height: "7rem" }}>
              {STAGES.map((stage, i) => (
                <motion.div
                  key={stage.id}
                  className="absolute inset-0"
                  style={{
                    opacity: stageOpacities[i],
                    y: stageYs[i],
                  }}
                >
                  <p className="text-xs font-bold tracking-widest uppercase text-accent/70 mb-2">
                    {stage.eyebrow}
                  </p>
                  <p className="text-xl sm:text-2xl font-semibold text-ink/80 leading-snug whitespace-pre-line mb-3">
                    {stage.headline}
                  </p>
                  <p className="text-base text-muted leading-relaxed max-w-sm">{stage.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Mobile: static sub (simplified) */}
            <p className="lg:hidden mt-6 text-lg text-muted leading-relaxed max-w-md">
              Squirrel Brain turns voice notes and photos into alarms, reminders, and calendar events — then makes sure you follow through.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <CtaButton size="lg" />
              <Link
                href="/demos"
                className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1.5"
              >
                Watch it work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
            <p className="mt-3 text-xs text-muted/60">Free to start · $9.99/mo · iOS only</p>
          </div>

          {/* RIGHT: sticky iPhone */}
          <div className="hidden lg:flex flex-shrink-0 items-center justify-center">
            <motion.div style={{ y: phoneY }}>
              <PhoneFrame screenOpacities={screenOpacities} />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          aria-hidden="true"
        >
          <span className="text-xs text-muted/60 font-medium tracking-wide">Scroll to see how it works</span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 border-muted/30 flex items-start justify-center pt-1.5"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ── iPhone frame with crossfading screens ─────────────────────────────────

function PhoneFrame({ screenOpacities }: { screenOpacities: MotionValue<number>[] }) {
  const screens = [Stage1MicUI, Stage2CardUI, Stage3AlarmUI];

  return (
    <div
      style={{
        width: 280,
        borderRadius: "3rem",
        background: "#1a1208",
        padding: "14px 10px",
        boxShadow:
          "0 48px 96px rgba(255,122,26,0.22), 0 12px 32px rgba(26,18,8,0.28), inset 0 0 0 1.5px rgba(255,255,255,0.08)",
      }}
    >
      {/* Dynamic island */}
      <div
        style={{
          width: 100,
          height: 28,
          background: "#1a1208",
          borderRadius: 999,
          margin: "0 auto 10px",
        }}
        aria-hidden="true"
      />

      {/* Screen */}
      <div
        style={{
          borderRadius: "2.2rem",
          overflow: "hidden",
          aspectRatio: "9 / 19.5",
          position: "relative",
          background: "#faf7f2",
        }}
      >
        {screens.map((Screen, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{ opacity: screenOpacities[i] }}
          >
            <Screen />
          </motion.div>
        ))}
      </div>

      {/* Home bar */}
      <div
        style={{
          width: 90,
          height: 4,
          borderRadius: 2,
          background: "rgba(255,255,255,0.2)",
          margin: "10px auto 0",
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ── Reduced-motion static fallback ────────────────────────────────────────

function StaticHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 70% at 50% -10%, #FFF0E6 0%, #faf7f2 60%)" }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-24">
        <div>
          <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3.5 py-1.5 rounded-full mb-8 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Now in beta · iOS
          </div>
          <h1
            id="hero-heading"
            className="font-display font-extrabold text-ink leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(3rem, 7vw, 7rem)", opacity: 1 }}
          >
            Say it.{" "}
            <span className="text-accent">Snap it.</span>
            <br />
            It&rsquo;s handled.
          </h1>
          <p className="mt-6 text-xl text-muted leading-relaxed max-w-md">
            Squirrel Brain turns voice notes and photos into alarms, reminders, and calendar events — then makes sure you follow through.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <CtaButton size="lg" />
            <Link href="/demos" className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1.5">
              Watch it work
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <p className="mt-3 text-xs text-muted/60">Free to start · $9.99/mo · iOS only</p>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div
            style={{
              width: 260,
              borderRadius: "3rem",
              background: "#1a1208",
              padding: "14px 10px",
              boxShadow: "0 48px 96px rgba(255,122,26,0.22), 0 12px 32px rgba(26,18,8,0.28)",
            }}
          >
            <div style={{ width: 100, height: 28, background: "#1a1208", borderRadius: 999, margin: "0 auto 10px" }} />
            <div style={{ borderRadius: "2.2rem", overflow: "hidden", aspectRatio: "9/19.5", position: "relative", background: "#faf7f2" }}>
              <Stage1MicUI />
            </div>
            <div style={{ width: 90, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)", margin: "10px auto 0" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
