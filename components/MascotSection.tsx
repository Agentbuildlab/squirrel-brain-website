"use client";

/**
 * Section 4 — Mascot personality beat
 *
 * Motion idea: The squirrel mascot tilts and waves on scroll-reveal.
 * Brief, warm, a little playful. An acorn detail bobs in.
 * No phone here — just brand presence.
 */

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { TESTFLIGHT_URL } from "@/lib/config";
import { T } from "@/components/v2/PhoneKit";

// ── Floating acorn SVG ────────────────────────────────────────────────────

function AcornFloat({ style }: { style?: React.CSSProperties }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      style={{
        position: "absolute",
        ...style,
      }}
      animate={
        reduceMotion
          ? {}
          : {
              y: [0, -12, 0],
              rotate: [-5, 5, -5],
            }
      }
      transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <svg width="40" height="48" viewBox="0 0 40 48" fill="none">
        {/* Acorn body */}
        <ellipse cx="20" cy="32" rx="14" ry="12" fill="#c8843a" />
        <ellipse cx="20" cy="32" rx="14" ry="12" fill="url(#acorn-shine)" />
        {/* Acorn cap */}
        <ellipse cx="20" cy="21" rx="16" ry="8" fill="#6b4423" />
        <ellipse cx="20" cy="21" rx="16" ry="8" fill="url(#cap-texture)" opacity="0.4" />
        {/* Stem */}
        <rect x="19" y="11" width="2.5" height="10" rx="1.25" fill="#4a2e14" />
        {/* Cap lines */}
        <path d="M8 21 Q20 25 32 21" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
        <path d="M7 23 Q20 27 33 23" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <defs>
          <radialGradient id="acorn-shine" cx="35%" cy="35%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <pattern id="cap-texture" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(0,0,0,0.3)" />
          </pattern>
        </defs>
      </svg>
    </motion.div>
  );
}

// ── Copy beats ────────────────────────────────────────────────────────────

const QUIPS = [
  { emoji: "🧠", text: "Your brain has too many tabs open. Let's close some of them." },
  { emoji: "🐿️", text: "I never lose track. It's kind of my whole thing." },
  { emoji: "⚡", text: "Say it once. I'll remind you until it's done. You're welcome." },
];

// ── Main section ──────────────────────────────────────────────────────────

export default function MascotSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#faf6f0" }}
      aria-labelledby="mascot-heading"
    >
      {/* Warm blob behind mascot */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 600,
          height: 600,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,122,26,0.08) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
        aria-hidden="true"
      />

      {/* Floating acorns */}
      <AcornFloat style={{ top: "10%", right: "8%", opacity: 0.7 }} />
      <AcornFloat style={{ bottom: "15%", left: "6%", opacity: 0.5, transform: "scale(0.75)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* Mascot with entrance animation */}
        <motion.div
          className="inline-block mb-10"
          initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
          animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Hover tilt */}
          <motion.div
            whileHover={
              reduceMotion
                ? {}
                : {
                    rotate: [0, -6, 6, -3, 0],
                    scale: 1.06,
                  }
            }
            transition={{ duration: 0.5 }}
            style={{ display: "inline-block", cursor: "default" }}
          >
            <Image
              src="/assets/squirrel_logo.png"
              alt="Pip — your Squirrel Brain"
              width={160}
              height={160}
              className="rounded-4xl"
              style={{
                boxShadow:
                  "0 24px 64px rgba(255,122,26,0.28), 0 8px 20px rgba(26,18,8,0.12)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.18 }}
        >
          <h2
            id="mascot-heading"
            className="font-display font-extrabold text-ink mb-4 text-balance"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)", lineHeight: 1.08 }}
          >
            Meet Pip. She never{" "}
            <span style={{ color: T.orange }}>forgets a thing.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed max-w-xl mx-auto mb-12">
            Pip is the squirrel inside Squirrel Brain. She reads your voice, your photos, your
            calendar — and follows up until every last thing is handled.
          </p>
        </motion.div>

        {/* Quip cards — staggered reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          {QUIPS.map((quip, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.1 }}
            >
              <div
                className="rounded-3xl p-6 text-left h-full"
                style={{
                  background: "white",
                  border: `1px solid ${T.border}`,
                  boxShadow: "0 2px 12px rgba(26,18,8,0.05)",
                }}
              >
                <div className="text-2xl mb-3" aria-hidden="true">{quip.emoji}</div>
                <p className="text-sm font-medium leading-relaxed" style={{ color: T.text }}>
                  {quip.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wordmark */}
        <motion.div
          className="flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.55 }}
        >
          <Image
            src="/assets/squirrel_logo.png"
            alt=""
            width={32}
            height={32}
            className="rounded-xl"
            aria-hidden="true"
          />
          <span className="font-display font-bold text-xl tracking-wide" style={{ color: T.text }}>
            Squirrel <span style={{ color: T.orange }}>Brain</span>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
