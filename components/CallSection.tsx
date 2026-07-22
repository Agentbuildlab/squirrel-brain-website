"use client";

/**
 * Section 3 — "It Actually Calls You"
 *
 * Motion idea: the PHONE RINGS. Deep warm-dark band. A full-screen
 * incoming-call screen built in v2 tokens, the squirrel avatar pulsing rings.
 * Scroll triggers the screen animating in from below + pulsing rings starting.
 * This is the scroll-stopper moment.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WAITLIST_HREF } from "@/lib/config";
import TwoWayCallDemo from "@/components/TwoWayCallDemo";

// ── Main section ──────────────────────────────────────────────────────────

export default function CallSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
              <strong style={{ color: "#fff5e8" }}>real incoming phone call</strong> — it rings
              right through Silent mode, Focus, and a locked screen, even with the app closed and
              your phone face-down across the room. It cuts through the 200 other notifications you
              never opened.
            </p>
            <p
              className="text-base leading-relaxed mb-5 max-w-lg"
              style={{ color: "rgba(255,245,232,0.65)" }}
            >
              Answer it and you&rsquo;re not just listening — you talk back. Tell your squirrel to move
              the meeting, add a note, or walk you through your day, and it handles it right there on
              the call, out loud, in its own voice. A real back-and-forth conversation, not a recording.
              You can&rsquo;t ignore it. The thing gets done.
            </p>
            <div className="mb-10" />

            <a
              href={WAITLIST_HREF}
              className="inline-flex items-center gap-2 font-bold text-base px-8 py-4 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
              style={{
                background: "#3fae6e",
                color: "white",
                boxShadow: "0 4px 20px rgba(63,174,110,0.4)",
              }}
            >
              Join the launch list
            </a>
          </motion.div>

          {/* RIGHT: phone ringing */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0.15, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Interactive TWO-WAY call: the visitor answers and picks what THEY
                say back; Scuttle acts on it. Shows the real differentiator — a
                conversation, not a voicemail. */}
            <TwoWayCallDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
