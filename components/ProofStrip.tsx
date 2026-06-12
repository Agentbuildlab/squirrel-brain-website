"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const DEMOS = [
  {
    id: "voice",
    eyebrow: "Voice capture",
    headline: "\"Dentist Thursday at 2\"",
    sub: "Alarm appears in 8 seconds. No typing. No apps. Just speak.",
    accent: "#FF7A1A",
    placeholderLabel: "DEMO: voice → alarm in 8s",
    bg: "linear-gradient(135deg, #FFF0E6 0%, #ffe4cc 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="10" y="3" width="8" height="13" rx="4" stroke="#FF7A1A" strokeWidth="2" fill="none" />
        <path d="M6 14a8 8 0 0016 0M14 25v-4" stroke="#FF7A1A" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "receipt",
    eyebrow: "Photo capture",
    headline: "Snap a receipt.",
    sub: "\"Return closes June 24 — remind you?\" Pip asks. You tap yes.",
    accent: "#7C3AED",
    placeholderLabel: "DEMO: receipt → return reminder",
    bg: "linear-gradient(135deg, #F5F0FF 0%, #ede5ff 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="5" y="4" width="18" height="20" rx="3" stroke="#7C3AED" strokeWidth="2" fill="none" />
        <path d="M9 10h10M9 14h7M9 18h5" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: "parking",
    eyebrow: "Location capture",
    headline: "Snap where you parked.",
    sub: "Days later, exact pin. \"Find my car\" — Pip knows.",
    accent: "#0EA5E9",
    placeholderLabel: "DEMO: parking pin → find my car",
    bg: "linear-gradient(135deg, #F0F9FF 0%, #ddf0ff 100%)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M14 3C9.58 3 6 6.58 6 11c0 6.56 8 14 8 14s8-7.44 8-14c0-4.42-3.58-8-8-8z"
          stroke="#0EA5E9"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="14" cy="11" r="3" stroke="#0EA5E9" strokeWidth="1.8" fill="none" />
      </svg>
    ),
  },
];

function CinematicTile({
  demo,
  index,
}: {
  demo: (typeof DEMOS)[0];
  index: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <FadeIn delay={index * 0.12} from="bottom">
      <motion.div
        className="group relative rounded-3xl overflow-hidden cursor-default"
        style={{
          background: demo.bg,
          border: "1px solid rgba(0,0,0,0.06)",
        }}
        whileHover={
          reduceMotion
            ? {}
            : {
                y: -6,
                boxShadow: `0 24px 48px ${demo.accent}28, 0 8px 16px rgba(0,0,0,0.08)`,
              }
        }
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${demo.accent}15 0%, transparent 70%)`,
          }}
          aria-hidden="true"
        />

        <div className="relative p-8">
          {/* Icon */}
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
            style={{ background: "rgba(255,255,255,0.7)" }}
          >
            {demo.icon}
          </div>

          {/* Copy */}
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: demo.accent }}
          >
            {demo.eyebrow}
          </p>
          <h3 className="font-display text-2xl font-bold text-ink mb-3 leading-snug">
            {demo.headline}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-8">{demo.sub}</p>

          {/* Phone mockup placeholder */}
          <div
            className="w-full rounded-2xl overflow-hidden flex items-center justify-center py-10"
            style={{
              background: "rgba(255,255,255,0.5)",
              border: "1px solid rgba(0,0,0,0.06)",
              minHeight: 200,
            }}
          >
            <div className="text-center">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{ background: `${demo.accent}20` }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M9 2v8M9 10l-2.5-2.5M9 10l2.5-2.5M3 14h12"
                    stroke={demo.accent}
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p
                className="text-xs font-mono font-medium"
                style={{ color: demo.accent, opacity: 0.8 }}
              >
                {demo.placeholderLabel}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </FadeIn>
  );
}

export default function ProofStrip() {
  return (
    <section
      className="py-24 bg-white border-y border-border"
      aria-labelledby="proof-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-xs font-bold tracking-widest uppercase text-accent/70 mb-4">
            See it in action
          </p>
          <h2
            id="proof-heading"
            className="font-display font-extrabold text-ink mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Three seconds of effort.
            <br />
            <span className="text-accent">Zero things forgotten.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-14 max-w-xl">
            Voice, photo, or location — every kind of thing you need to remember, handled in one tap.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {DEMOS.map((demo, i) => (
            <CinematicTile key={demo.id} demo={demo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
