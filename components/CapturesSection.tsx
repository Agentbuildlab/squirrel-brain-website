"use client";

/**
 * Section 2 — "It Captures Everything"
 *
 * Motion idea: pinned scroll-scrub. As you scroll through ~150vh, the phone
 * transitions between 3 capture moments:
 *   Step A → voice note → scroll-box row with voice pill
 *   Step B → photo of parking spot → files into Stash
 *   Step C → receipt photo → gets a return-date alarm row
 *
 * The "before" photo floats in from one side; the result card slides up.
 * Uses before_* raster assets as the "thing you captured" — these are raw
 * input photos, NOT old app UI, so they are v2-compliant.
 */

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import FadeIn from "@/components/FadeIn";
import {
  PhoneShell,
  StatusBar,
  PageHeader,
  ScrollBoxRow,
  CaptureBar,
  TabBar,
  T,
} from "@/components/v2/PhoneKit";

// ── Individual phone screens per capture step ──────────────────────────────

function VoiceResultScreen() {
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
      <PageHeader title="Squirrel Brain" sub="Just now" />
      <div style={{ flex: 1, overflowY: "hidden", padding: "0 8px" }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: T.textSub, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6, paddingLeft: 2 }}>
          JUST CAPTURED
        </div>

        {/* Newly-added row animates in */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ScrollBoxRow
            accentColor={T.orange}
            title="Dentist appointment — Thursday 2 PM"
            date="Jun 19"
            time="2:00 PM"
            dayNum={19}
            source="From Squirrel Brain · by You"
            pills={[
              { label: "🎤 VOICE ATTACHED", color: T.orange, bg: T.pastelPeach },
              { label: "⏰ Day-before nudge ON", color: T.blue, bg: T.blueLight },
            ]}
          />
        </motion.div>

        <ScrollBoxRow
          accentColor={T.blue}
          title="Team standup"
          date="Jun 14"
          time="10:00 AM"
          dayNum={14}
          source="From Calendar · by You"
        />
      </div>
      <CaptureBar liveText='"Dentist thursday at two pm, day-before reminder"' />
      <TabBar active={0} />
    </div>
  );
}

function ParkingResultScreen() {
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
      <PageHeader title="Pix" sub="Photos that do work" />
      <div style={{ flex: 1, overflowY: "hidden", padding: "0 8px" }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: T.textSub, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6, paddingLeft: 2 }}>
          SAVED
        </div>

        {/* Parking photo thumbnail with overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.15 }}
        >
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              marginBottom: 6,
              position: "relative",
              border: `1px solid ${T.border}`,
              height: 100,
              background: "#d0d0c8",
            }}
          >
            <Image
              src="/assets/before_parking_spot.png"
              alt="Parking spot photo"
              fill
              className="object-cover"
              sizes="260px"
            />
            {/* GPS badge overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                left: 8,
                background: "rgba(26,18,8,0.75)",
                borderRadius: 8,
                padding: "4px 8px",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 1C3.07 1 1.5 2.57 1.5 4.5c0 2.63 3.5 6 3.5 6s3.5-3.37 3.5-6C8.5 2.57 6.93 1 5 1z" fill="#FF7A1A" />
                <circle cx="5" cy="4.5" r="1.2" fill="white" />
              </svg>
              <span style={{ fontSize: 8, color: "white", fontWeight: 700 }}>
                Level 3 · Space B-14 · GPS saved
              </span>
            </div>
          </div>
        </motion.div>

        <ScrollBoxRow
          accentColor={T.orange}
          title="📍 Parked — Level 3, Space B-14"
          date="Jun 13"
          time="2:15 PM"
          source="From Squirrel Brain · Pix"
          pills={[
            { label: "📍 GPS PINNED", color: "#2a6aee", bg: T.blueLight },
          ]}
        />
      </div>
      <CaptureBar />
      <TabBar active={2} />
    </div>
  );
}

function ReceiptResultScreen() {
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
      <PageHeader title="Squirrel Brain" sub="Review & confirm" />
      <div style={{ flex: 1, overflowY: "hidden", padding: "0 8px" }}>
        <div style={{ fontSize: 9, fontWeight: 700, color: T.textSub, letterSpacing: 0.8, textTransform: "uppercase", marginBottom: 6, paddingLeft: 2 }}>
          EXTRACTED
        </div>

        {/* Receipt thumbnail */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 8,
              height: 72,
              background: "#e8e8e0",
              position: "relative",
              border: `1px solid ${T.border}`,
            }}
          >
            <Image
              src="/assets/before_wine_bottle.png"
              alt="Receipt photo"
              fill
              className="object-cover"
              sizes="260px"
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(255,122,26,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: 8, fontWeight: 700, color: T.orange, background: "white", borderRadius: 6, padding: "2px 8px" }}>
                Reading…
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ScrollBoxRow
            accentColor={T.orange}
            title="📦 Return closes — Jun 24"
            date="Jun 24"
            time="11:59 PM"
            dayNum={24}
            source="From Squirrel Brain · Pix"
            pills={[
              { label: "📞 Call me ON", color: "#1a1208", bg: T.pastelPeach },
              { label: "⏰ Jun 22 reminder", color: T.blue, bg: T.blueLight },
            ]}
          />
        </motion.div>
      </div>
      <CaptureBar />
      <TabBar active={0} />
    </div>
  );
}

// ── Capture steps config ──────────────────────────────────────────────────

const STEPS = [
  {
    id: "voice",
    eyebrow: "Voice capture",
    headline: "Say it out loud.",
    sub: "\"Dentist Thursday at two, remind me the day before.\" Your squirrel extracts the date, time, and reminder. Alarm set in seconds.",
    beforeSrc: null, // no photo — we show the mic waveform in-screen
    Screen: VoiceResultScreen,
    accentColor: T.orange,
    accentBg: "#FFF0E6",
  },
  {
    id: "parking",
    eyebrow: "Photo capture",
    headline: "Snap where you parked.",
    sub: "GPS-stamped, location-named, saved forever. Ask \"where did I park?\" next time and your squirrel knows exactly.",
    beforeSrc: "/assets/before_parking_spot.png",
    Screen: ParkingResultScreen,
    accentColor: "#2a6aee",
    accentBg: T.blueLight,
  },
  {
    id: "receipt",
    eyebrow: "Document capture",
    headline: "Snap a receipt.",
    sub: "\"Return window closes June 24 — remind you 2 days before?\" Your squirrel asks. You tap yes. Done.",
    beforeSrc: "/assets/before_wine_bottle.png",
    Screen: ReceiptResultScreen,
    accentColor: T.orange,
    accentBg: "#FFF0E6",
  },
];

// ── Scroll-scrubbed section ────────────────────────────────────────────────

export default function CapturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each step occupies ~33% of scroll space
  const step0Opacity = useTransform(scrollYProgress, [0, 0.2, 0.28, 0.38], [1, 1, 0, 0]);
  const step1Opacity = useTransform(scrollYProgress, [0.26, 0.35, 0.58, 0.66], [0, 1, 1, 0]);
  const step2Opacity = useTransform(scrollYProgress, [0.62, 0.72, 1, 1], [0, 1, 1, 1]);

  const step0Y = useTransform(scrollYProgress, [0, 0.2, 0.28, 0.38], [0, 0, -24, -24]);
  const step1Y = useTransform(scrollYProgress, [0.26, 0.35, 0.58, 0.66], [24, 0, 0, -24]);
  const step2Y = useTransform(scrollYProgress, [0.62, 0.72, 1], [24, 0, 0]);

  const screen0O = useTransform(scrollYProgress, [0, 0.26, 0.36], [1, 1, 0]);
  const screen1O = useTransform(scrollYProgress, [0.26, 0.36, 0.62, 0.7], [0, 1, 1, 0]);
  const screen2O = useTransform(scrollYProgress, [0.62, 0.72, 1], [0, 1, 1]);

  const stepOpacities = [step0Opacity, step1Opacity, step2Opacity];
  const stepYs = [step0Y, step1Y, step2Y];
  const screenOpacities = [screen0O, screen1O, screen2O];
  const Screens = STEPS.map((s) => s.Screen);

  // Reduced motion: stacked static layout
  if (reduceMotion) {
    return (
      <section
        className="py-24"
        style={{ background: "#faf6f0" }}
        aria-labelledby="captures-heading"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: `${T.orange}aa` }}>
              It captures everything
            </p>
            <h2 id="captures-heading" className="font-display font-extrabold text-ink mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
              Voice. Photo. Document.
              <br />
              <span style={{ color: T.orange }}>All handled.</span>
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((step, i) => (
              <FadeIn key={step.id} delay={i * 0.1}>
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: step.accentColor }}>
                    {step.eyebrow}
                  </p>
                  <h3 className="font-display font-bold text-ink text-xl mb-2">{step.headline}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    // 330vh gives comfortable scroll through 3 stages
    <div ref={containerRef} style={{ height: "330vh", position: "relative" }}>
      <div
        className="sticky top-0 h-screen overflow-hidden flex items-center"
        style={{ background: "#faf6f0" }}
      >
        {/* Subtle warm gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 50%, #FFF0E6 0%, transparent 60%)",
            opacity: 0.6,
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Section label (always visible) */}
          <div className="block md:hidden mb-2">
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: `${T.orange}bb` }}>
              It captures everything
            </p>
            <h2 className="font-display font-extrabold text-ink text-3xl" aria-labelledby="captures-heading">
              Voice. Photo. Doc.
            </h2>
          </div>

          {/* LEFT: Scroll-driven copy */}
          <div className="flex-1 min-w-0">
            {/* Static heading */}
            <p
              className="hidden md:block text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: `${T.orange}aa` }}
              aria-hidden="true"
            >
              It captures everything
            </p>
            <h2
              id="captures-heading"
              className="hidden md:block font-display font-extrabold text-ink mb-10"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", lineHeight: 1.05 }}
            >
              Voice. Photo. Document.
              <br />
              <span style={{ color: T.orange }}>All handled.</span>
            </h2>

            {/* Scroll-driven step captions */}
            <div className="relative" style={{ height: "9rem" }}>
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.id}
                  className="absolute inset-0"
                  style={{ opacity: stepOpacities[i], y: stepYs[i] }}
                >
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: step.accentColor }}
                  >
                    {step.eyebrow}
                  </p>
                  <p className="font-display font-bold text-ink text-2xl lg:text-3xl mb-3">
                    {step.headline}
                  </p>
                  <p className="text-base text-muted leading-relaxed max-w-sm">{step.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Step indicators */}
            <div className="flex gap-2 mt-8">
              {STEPS.map((step, i) => (
                <div
                  key={step.id}
                  style={{
                    width: 32,
                    height: 4,
                    borderRadius: 2,
                    background:
                      i === 0
                        ? T.orange
                        : T.border,
                    transition: "background 0.3s",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Phone with crossfading screens */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              <PhoneShell width={268}>
                {Screens.map((Screen, i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0"
                    style={{ opacity: screenOpacities[i] }}
                  >
                    <Screen />
                  </motion.div>
                ))}
              </PhoneShell>

              {/* "Before" photo floating beside the phone, crossfades with steps */}
              <motion.div
                className="absolute -right-20 top-16 hidden lg:block"
                style={{ opacity: screen1O, y: step1Y }}
              >
                <div
                  style={{
                    width: 72,
                    height: 96,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: `2px solid ${T.border}`,
                    boxShadow: "0 8px 24px rgba(26,18,8,0.15)",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/assets/before_parking_spot.png"
                    alt="Parking spot photo being captured"
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 8,
                    fontWeight: 700,
                    color: T.textSub,
                    textAlign: "center",
                  }}
                >
                  YOU SNAP THIS →
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-20 top-16 hidden lg:block"
                style={{ opacity: screen2O, y: step2Y }}
              >
                <div
                  style={{
                    width: 72,
                    height: 96,
                    borderRadius: 12,
                    overflow: "hidden",
                    border: `2px solid ${T.border}`,
                    boxShadow: "0 8px 24px rgba(26,18,8,0.15)",
                    position: "relative",
                  }}
                >
                  <Image
                    src="/assets/before_wine_bottle.png"
                    alt="Receipt photo being captured"
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                </div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 8,
                    fontWeight: 700,
                    color: T.textSub,
                    textAlign: "center",
                  }}
                >
                  YOU SNAP THIS →
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
