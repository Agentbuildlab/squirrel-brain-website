"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

// ── Grain / noise SVG overlay (client-only safe) ───────────────────────────
function GrainOverlay() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.055, mixBlendMode: "overlay" }}
      aria-hidden="true"
    >
      <filter id="dark-band-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.7"
          numOctaves="4"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#dark-band-noise)" />
    </svg>
  );
}

// ── Radial glow blob ──────────────────────────────────────────────────────
function GlowBlob({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        background:
          "radial-gradient(circle, rgba(255,122,26,0.22) 0%, rgba(232,168,74,0.08) 50%, transparent 75%)",
        filter: "blur(48px)",
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

// ── Feature card ──────────────────────────────────────────────────────────
function DarkCard({
  icon,
  headline,
  body,
  delay = 0,
}: {
  icon: React.ReactNode;
  headline: string;
  body: string;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <div
        className="rounded-3xl p-7 h-full"
        style={{
          background: "#1e1408",
          border: "1px solid rgba(232,168,74,0.15)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
      >
        <div className="mb-5">{icon}</div>
        <h3 className="font-display text-xl font-bold mb-3" style={{ color: "#fff5e8" }}>
          {headline}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,245,232,0.65)" }}>
          {body}
        </p>
      </div>
    </FadeIn>
  );
}

// ── Pip call callout ──────────────────────────────────────────────────────
function PipCallout() {
  const reduceMotion = useReducedMotion();

  return (
    <FadeIn delay={0.2}>
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "#1e1408",
          border: "1px solid rgba(232,168,74,0.25)",
        }}
      >
        {/* Radial glow behind */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(255,122,26,0.12) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative px-8 py-10 text-center">
          {/* Ringing phone icon */}
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
            style={{
              background: "radial-gradient(circle, #FF7A1A, #e85a00)",
              boxShadow: "0 0 0 12px rgba(255,122,26,0.12), 0 8px 24px rgba(255,122,26,0.4)",
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    boxShadow: [
                      "0 0 0 12px rgba(255,122,26,0.12), 0 8px 24px rgba(255,122,26,0.4)",
                      "0 0 0 20px rgba(255,122,26,0.06), 0 8px 24px rgba(255,122,26,0.4)",
                      "0 0 0 12px rgba(255,122,26,0.12), 0 8px 24px rgba(255,122,26,0.4)",
                    ],
                  }
            }
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path
                d="M5 7.5C5 6.4 5.9 5.5 7 5.5h2.5a1 1 0 01.97.757l1 4a1 1 0 01-.31.984l-1.7 1.42c1.13 2.3 3.06 4.23 5.36 5.36l1.42-1.7a1 1 0 01.98-.31l4 1a1 1 0 01.76.97V20.5c0 1.1-.9 2-2 2C9.97 22.5 5 17.53 5 7.5z"
                fill="white"
              />
              <path
                d="M20 6c1.1 0 2 .9 2 2M20 3c2.76 0 5 2.24 5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </motion.div>

          <h3
            className="font-display text-2xl sm:text-3xl font-extrabold mb-4 leading-tight"
            style={{ color: "#fff5e8" }}
          >
            When it really matters,{" "}
            <span style={{ color: "#e8a84a" }}>Pip calls you.</span>
          </h3>
          <p className="text-base leading-relaxed max-w-lg mx-auto" style={{ color: "rgba(255,245,232,0.7)" }}>
            An actual call. Your phone rings, you answer, she speaks — in Pip&rsquo;s voice — to make sure you haven&rsquo;t missed the one thing you can&rsquo;t miss.
          </p>

          {/* Call UI mockup strip */}
          <div
            className="mt-8 mx-auto rounded-2xl px-6 py-4 max-w-xs flex items-center gap-4"
            style={{ background: "rgba(255,245,232,0.06)", border: "1px solid rgba(232,168,74,0.15)" }}
          >
            <div
              className="w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center text-xl"
              style={{ background: "rgba(232,168,74,0.15)" }}
              aria-hidden="true"
            >
              🐿
            </div>
            <div className="text-left min-w-0">
              <div className="text-sm font-bold" style={{ color: "#fff5e8" }}>Pip — Squirrel Brain</div>
              <div className="text-xs" style={{ color: "rgba(255,245,232,0.5)" }}>Incoming call · 0:04</div>
            </div>
            <div className="ml-auto flex-shrink-0">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "#22c55e" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path
                    d="M3 5.5C3 4.7 3.7 4 4.5 4h1.75a.75.75 0 01.73.568l.75 3a.75.75 0 01-.232.738L6.25 9.52c.85 1.73 2.3 3.18 4.03 4.03l1.21-1.24a.75.75 0 01.74-.233l3 .75a.75.75 0 01.57.73V15a1.5 1.5 0 01-1.5 1.5C7.23 16.5 3 12.27 3 7.5z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Main section ───────────────────────────────────────────────────────────

const FEATURE_CARDS = [
  {
    icon: (
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(232,168,74,0.15)" }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <circle cx="11" cy="12" r="5" stroke="#e8a84a" strokeWidth="1.8" fill="none" />
          <path d="M11 9v3l2 2M11 3v2M11 19v2M3 11H1M21 11h-2" stroke="#e8a84a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
    headline: "Alarms that don't quit",
    body: "First alarm. Second alarm. 30 minutes out. Pip escalates until you actually act — not just dismiss.",
  },
  {
    icon: (
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(232,168,74,0.15)" }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <rect x="2" y="4" width="18" height="14" rx="3" stroke="#e8a84a" strokeWidth="1.8" fill="none" />
          <path d="M2 8h18M7 13h8" stroke="#e8a84a" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>
    ),
    headline: "The 4 PM email",
    body: "Every afternoon, a summary of everything open, due, or expiring. Like a chief of staff who never misses a detail.",
  },
  {
    icon: (
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center"
        style={{ background: "rgba(232,168,74,0.15)" }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M12 3C8.13 3 5 6.13 5 10c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#e8a84a" strokeWidth="1.8" fill="none" />
          <circle cx="12" cy="10" r="2.5" stroke="#e8a84a" strokeWidth="1.6" fill="none" />
        </svg>
      </div>
    ),
    headline: "Morning brief",
    body: "Each morning, Pip reads every calendar already on your iPhone and surfaces exactly what you need to know for the day.",
  },
];

export default function DarkBand() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "#100a02" }}
      aria-labelledby="dark-band-heading"
    >
      {/* Grain overlay */}
      <GrainOverlay />

      {/* Glow blobs */}
      <GlowBlob style={{ width: 600, height: 600, top: "-20%", left: "-10%" }} />
      <GlowBlob style={{ width: 500, height: 500, bottom: "0%", right: "-5%" }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <FadeIn immediate={false}>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: "#e8a84a" }}
          >
            Follow-through
          </p>
          <h2
            id="dark-band-heading"
            className="font-display font-extrabold leading-tight mb-6"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
              color: "#fff5e8",
            }}
          >
            Then it hounds you.
          </h2>
          <p
            className="text-lg leading-relaxed max-w-2xl mb-16"
            style={{ color: "rgba(255,245,232,0.65)" }}
          >
            Capturing is easy. Following through is the hard part. Squirrel Brain is built for the follow-through — multiple escalating reminders, a daily brief, and when it really matters, Pip&rsquo;s voice.
          </p>
        </FadeIn>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {FEATURE_CARDS.map((card, i) => (
            <DarkCard key={card.headline} {...card} delay={i * 0.1} />
          ))}
        </div>

        {/* Pip call CTA */}
        <PipCallout />
      </div>
    </section>
  );
}
