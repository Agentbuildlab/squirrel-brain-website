"use client";

/**
 * Section 2 — "It Captures Everything"
 *
 * Motion idea: pinned scroll-scrub. As you scroll through ~150vh, the phone
 * transitions between 3 capture moments:
 *   Step A → voice note → home screen (calendar + captured items)
 *   Step B → photo of parking spot → Pix screen (photo boards)
 *   Step C → receipt/document → notes screen (notes list)
 *
 * The "before" photo floats in from one side; the phone cross-fades to the
 * matching real screenshot.
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
  PhoneShot,
  T,
} from "@/components/v2/PhoneKit";

// ── Capture steps config ──────────────────────────────────────────────────

const STEPS = [
  {
    id: "voice",
    eyebrow: "Voice capture",
    headline: "Say it out loud.",
    sub: "\"Dentist Thursday at two, remind me the day before.\" Your squirrel extracts the date, time, and reminder. Alarm set in seconds.",
    beforeSrc: null, // no photo — voice step
    screenSrc: "/assets/screens/home-v4.webp",
    screenAlt: "Squirrel Brain home — captured calendar events",
    accentColor: T.orange,
    accentBg: "#FFF0E6",
  },
  {
    id: "parking",
    eyebrow: "Photo capture",
    headline: "Snap where you parked.",
    sub: "GPS-stamped, location-named, saved forever. Ask \"where did I park?\" next time and your squirrel knows exactly.",
    beforeSrc: "/assets/before_parking_spot.png",
    screenSrc: "/assets/screens/pix-v2.webp",
    screenAlt: "Squirrel Brain Pix — photo boards",
    accentColor: "#2a6aee",
    accentBg: T.blueLight,
  },
  {
    id: "receipt",
    eyebrow: "Document capture",
    headline: "Snap a receipt.",
    sub: "\"Return window closes June 24 — remind you 2 days before?\" Your squirrel asks. You tap yes. Done.",
    beforeSrc: "/assets/before_wine_bottle.png",
    screenSrc: "/assets/screens/notes-v2.webp",
    screenAlt: "Squirrel Brain Notes — captured and organised",
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
                <div className="flex flex-col items-center gap-4">
                  <PhoneShot src={step.screenSrc} alt={step.screenAlt} width={280} />
                  <div className="text-center">
                    <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: step.accentColor }}>
                      {step.eyebrow}
                    </p>
                    <h3 className="font-display font-bold text-ink text-xl mb-2">{step.headline}</h3>
                    <p className="text-muted text-sm leading-relaxed">{step.sub}</p>
                  </div>
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

          {/* RIGHT: Phone with crossfading real screenshots */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="relative">
              {/* Stack PhoneShot frames and cross-fade between them */}
              <div style={{ position: "relative", width: 340, height: Math.round(340 * 2.165) }}>
                {STEPS.map((step, i) => (
                  <motion.div
                    key={step.id}
                    style={{
                      position: "absolute",
                      inset: 0,
                      opacity: screenOpacities[i],
                    }}
                  >
                    <PhoneShot
                      src={step.screenSrc}
                      alt={step.screenAlt}
                      width={340}
                    />
                  </motion.div>
                ))}
              </div>

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
