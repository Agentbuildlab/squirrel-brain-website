"use client";

/**
 * Section 3 — "It Actually Calls You"
 *
 * Motion idea: the PHONE RINGS. Deep warm-dark band. A CallKit-style
 * incoming call screen built in v2 tokens, the squirrel avatar pulsing rings.
 * Scroll triggers the screen animating in from below + pulsing rings starting.
 * This is the scroll-stopper moment.
 */

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useInView,
} from "framer-motion";
import { useRef } from "react";
import { TESTFLIGHT_URL } from "@/lib/config";
import { T, PulseRing } from "@/components/v2/PhoneKit";

// ── CallKit-style call screen ─────────────────────────────────────────────

function CallScreen() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg, #1a2b1a 0%, #0e160e 40%, #100a02 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 16px 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(63,174,110,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Top: status */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>
          9:41
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
          Squirrel Brain
        </div>
      </div>

      {/* Middle: caller info + pulse */}
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", zIndex: 1 }}
      >
        {/* Squirrel avatar with pulse */}
        <PulseRing color="#3fae6e" size={80}>
          <Image
            src="/assets/squirrel_logo.png"
            alt="Your squirrel — Squirrel Brain"
            width={56}
            height={56}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </PulseRing>

        <div style={{ textAlign: "center" }}>
          <div
            style={{ fontSize: 20, fontWeight: 800, color: "white", letterSpacing: -0.3, marginBottom: 2 }}
          >
            Scuttle
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
            Squirrel Brain
          </div>
        </div>

        {/* "Incoming Call" tag */}
        <div
          style={{
            background: "rgba(63,174,110,0.18)",
            border: "1px solid rgba(63,174,110,0.3)",
            borderRadius: 999,
            padding: "4px 12px",
          }}
        >
          <span style={{ fontSize: 9, fontWeight: 700, color: "#3fae6e", letterSpacing: 0.6 }}>
            INCOMING CALL · 0:04
          </span>
        </div>

        {/* Transcript bubble */}
        <motion.div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            padding: "8px 12px",
            maxWidth: 200,
          }}
          animate={reduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, textAlign: "center" }}>
            "Hey — your dentist appointment is in{" "}
            <span style={{ color: "#e8a84a", fontWeight: 700 }}>30 minutes</span>.
            Don't forget!"
          </p>
        </motion.div>
      </div>

      {/* Bottom: call action buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Decline */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3.5 5.5c0-.55.45-1 1-1h1.25a.5.5 0 01.49.38l.5 2a.5.5 0 01-.16.49l-.8.67c.57 1.15 1.53 2.11 2.68 2.68l.67-.8a.5.5 0 01.49-.16l2 .5a.5.5 0 01.38.49V12a1 1 0 01-1 1C6.35 13 3.5 10.15 3.5 5.5z"
                fill="white"
              />
              <path d="M15 3L3 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>Decline</span>
        </div>

        {/* Accept */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#3fae6e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 8px rgba(63,174,110,0.15)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3 5.5C3 4.7 3.7 4 4.5 4h1.75a.75.75 0 01.73.568l.75 3a.75.75 0 01-.232.738L6.25 9.52c.85 1.73 2.3 3.18 4.03 4.03l1.21-1.24a.75.75 0 01.74-.233l3 .75a.75.75 0 01.57.73V15a1.5 1.5 0 01-1.5 1.5C7.23 16.5 3 12.27 3 7.5z"
                fill="white"
              />
            </svg>
          </div>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>Accept</span>
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────

export default function CallSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(sectionRef, { once: true, margin: "-40px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: "#0e0a02" }}
      aria-labelledby="call-heading"
    >
      {/* Noise */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.055, mixBlendMode: "overlay" }}
        aria-hidden="true"
      >
        <filter id="call-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#call-noise)" />
      </svg>

      {/* Green glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(63,174,110,0.12) 0%, rgba(255,122,26,0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: copy */}
          <motion.div
            initial={{ opacity: 0.15, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "#3fae6e" }}
            >
              The follow-through
            </p>
            <h2
              id="call-heading"
              className="font-display font-extrabold leading-tight mb-6"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                color: "#fff5e8",
              }}
            >
              For the one thing you{" "}
              <span style={{ color: "#3fae6e" }}>cannot miss — your squirrel calls you.</span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-5 max-w-lg"
              style={{ color: "rgba(255,245,232,0.75)" }}
            >
              Not a notification. Not a banner you swipe away. A{" "}
              <strong style={{ color: "#fff5e8" }}>real incoming phone call</strong> — the kind
              that rings through silent mode, through Do Not Disturb, through the 200 other
              notifications you never opened.
            </p>
            <p
              className="text-base leading-relaxed mb-5 max-w-lg"
              style={{ color: "rgba(255,245,232,0.65)" }}
            >
              Your squirrel speaks in its own voice and tells you exactly what's up. You hear it.
              You can't ignore it. The thing gets done.
            </p>
            <p
              className="text-sm leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(255,245,232,0.4)" }}
            >
              Opt in per reminder — your call, literally. Live in the TestFlight beta today.
            </p>

            <a
              href={TESTFLIGHT_URL}
              className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
              style={{
                background: "#3fae6e",
                color: "white",
                boxShadow: "0 4px 20px rgba(63,174,110,0.4)",
              }}
            >
              Try it — it's free
            </a>
          </motion.div>

          {/* RIGHT: phone ringing */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0.15, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Phone wrapper with glow */}
            <div
              style={{
                width: 240,
                borderRadius: 44,
                background: "#1a1208",
                padding: "12px 8px",
                boxShadow:
                  "0 0 60px rgba(63,174,110,0.22), 0 48px 80px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.08)",
                position: "relative",
              }}
            >
              {/* Shake animation on ring */}
              <motion.div
                animate={
                  reduceMotion
                    ? {}
                    : {
                        rotate: [0, -2, 2, -2, 1, 0],
                        x: [0, -2, 2, -2, 1, 0],
                      }
                }
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 2.5,
                  ease: "easeInOut",
                }}
              >
                {/* Dynamic island */}
                <div
                  style={{
                    width: 86,
                    height: 24,
                    background: "#0e0a02",
                    borderRadius: 999,
                    margin: "0 auto 8px",
                  }}
                  aria-hidden="true"
                />
                {/* Screen */}
                <div
                  style={{
                    borderRadius: 36,
                    overflow: "hidden",
                    aspectRatio: "9 / 19.5",
                    position: "relative",
                  }}
                >
                  <CallScreen />
                </div>
                {/* Home bar */}
                <div
                  style={{
                    width: 72,
                    height: 4,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.15)",
                    margin: "8px auto 0",
                  }}
                  aria-hidden="true"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
