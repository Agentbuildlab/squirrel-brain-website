"use client";

/**
 * Section 4 — "Meet your squirrel" personality beat
 *
 * The squirrel mascot is the focal point — large, animated, and reacting.
 * Personality lines float around it as warm speech bubbles arranged organically,
 * NOT a 3-column card grid. No emoji icons.
 *
 * Animations:
 *   - Entrance: scale+rotate spring on scroll-into-view
 *   - Idle: gentle vertical bob (respects prefers-reduced-motion)
 *   - Hover: playful tilt/wave + acorn pops in
 *   - Speech bubbles: staggered fade-up on reveal
 */

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { T } from "@/components/v2/PhoneKit";

// ── Floating acorn SVG ────────────────────────────────────────────────────

function Acorn({ className = "" }: { className?: string }) {
  return (
    <svg
      width="36"
      height="44"
      viewBox="0 0 36 44"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <ellipse cx="18" cy="30" rx="12" ry="10.5" fill="#c8843a" />
      <ellipse cx="18" cy="30" rx="12" ry="10.5" fill="url(#acorn-glow)" />
      <ellipse cx="18" cy="19.5" rx="14" ry="7" fill="#6b4423" />
      <rect x="17" y="11" width="2.2" height="9" rx="1.1" fill="#4a2e14" />
      <path d="M7 19.5 Q18 23 29 19.5" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <defs>
        <radialGradient id="acorn-glow" cx="32%" cy="30%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
}

// ── Speech bubble component ───────────────────────────────────────────────

interface BubbleProps {
  text: string;
  delay: number;
  inView: boolean;
  align?: "left" | "right";
}

function SpeechBubble({ text, delay, inView, align = "left" }: BubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.34, 1.2, 0.64, 1] }}
      style={{ position: "relative", display: "inline-block", maxWidth: 280 }}
    >
      <div
        style={{
          background: "white",
          border: `1.5px solid ${T.border}`,
          borderRadius: align === "left" ? "4px 20px 20px 20px" : "20px 4px 20px 20px",
          padding: "14px 18px",
          boxShadow:
            "0 4px 20px rgba(26,18,8,0.07), 0 1px 4px rgba(26,18,8,0.04)",
        }}
      >
        <p
          style={{
            fontSize: "clamp(0.9rem, 2.2vw, 1.05rem)",
            fontWeight: 500,
            lineHeight: 1.5,
            color: T.text,
            margin: 0,
          }}
        >
          {text}
        </p>
      </div>
    </motion.div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────

export default function MascotSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#faf6f0" }}
      aria-labelledby="mascot-heading"
    >
      {/* Warm radial glow behind mascot */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 640,
          height: 640,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,122,26,0.09) 0%, rgba(244,166,77,0.04) 45%, transparent 70%)",
          filter: "blur(48px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <motion.p
          className="text-xs font-bold tracking-widest uppercase mb-10 text-center"
          style={{ color: `${T.orange}99` }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          Meet your squirrel
        </motion.p>

        {/*
         * Layout: on mobile — stacked (bubbles → mascot → bubbles).
         * On desktop — two bubble columns flanking the mascot.
         */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">

          {/* LEFT bubbles */}
          <div className="flex flex-col gap-5 lg:items-end flex-1 min-w-0 w-full lg:w-auto">
            <SpeechBubble
              text="Your brain has too many tabs open. Let's close some of them."
              delay={0.25}
              inView={inView}
              align="right"
            />
            <SpeechBubble
              text="It never loses track — kind of its whole thing."
              delay={0.38}
              inView={inView}
              align="right"
            />
          </div>

          {/* CENTER: Mascot */}
          <div className="flex-shrink-0 flex flex-col items-center">
            {/* Entrance container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, rotate: -10 }}
              animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.34, 1.6, 0.64, 1] }}
              style={{ position: "relative" }}
            >
              {/* Idle bob wrapper */}
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : { y: [0, -10, 0] }
                }
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ display: "inline-block" }}
              >
                {/* Hover tilt/wave wrapper */}
                <motion.div
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  animate={
                    reduceMotion
                      ? {}
                      : hovered
                      ? { rotate: [0, -7, 7, -4, 2, 0], scale: 1.07 }
                      : { rotate: 0, scale: 1 }
                  }
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  style={{ display: "inline-block", cursor: "default" }}
                >
                  <Image
                    src="/assets/squirrel_logo.png"
                    alt="Your Squirrel Brain mascot"
                    width={180}
                    height={180}
                    className="rounded-4xl"
                    style={{
                      boxShadow:
                        "0 28px 72px rgba(255,122,26,0.28), 0 10px 24px rgba(26,18,8,0.12)",
                      display: "block",
                    }}
                    priority={false}
                  />
                </motion.div>
              </motion.div>

              {/* Acorn — pops in on hover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                animate={
                  reduceMotion
                    ? {}
                    : hovered
                    ? { opacity: 1, scale: 1, rotate: 12, x: 8, y: -8 }
                    : { opacity: 0, scale: 0.5, rotate: -20, x: 0, y: 0 }
                }
                transition={{ duration: 0.35, ease: [0.34, 1.4, 0.64, 1] }}
                style={{
                  position: "absolute",
                  top: -16,
                  right: -16,
                  pointerEvents: "none",
                }}
                aria-hidden="true"
              >
                <Acorn />
              </motion.div>
            </motion.div>

            {/* Wordmark below mascot */}
            <motion.div
              className="flex items-center gap-2.5 mt-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span
                className="font-display font-bold text-lg tracking-wide"
                style={{ color: T.text }}
              >
                Squirrel{" "}
                <span style={{ color: T.orange }}>Brain</span>
              </span>
            </motion.div>
          </div>

          {/* RIGHT bubble */}
          <div className="flex flex-col gap-5 lg:items-start flex-1 min-w-0 w-full lg:w-auto">
            <SpeechBubble
              text="Say it once. It reminds you until it's done."
              delay={0.48}
              inView={inView}
              align="left"
            />
            {/* Hidden screen-reader heading */}
            <h2
              id="mascot-heading"
              className="sr-only"
            >
              Meet your squirrel
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
