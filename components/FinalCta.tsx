"use client";

/**
 * Section 6 — Final CTA
 *
 * Motion idea: squirrel mascot "points" (tilts toward the button) on hover.
 * Large warm gradient backdrop. The mascot animates in from above, the
 * headline from below, and the button pulses gently.
 */

import Image from "next/image";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useRef } from "react";
import { WAITLIST_HREF } from "@/lib/config";
import AppStoreButton from "@/components/AppStoreButton";
import { T } from "@/components/v2/PhoneKit";

export default function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 lg:py-36"
      aria-labelledby="final-cta-heading"
      style={{
        background:
          "radial-gradient(ellipse 100% 80% at 50% 100%, #FFF0E6 0%, #faf6f0 55%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 700,
          height: 700,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(255,122,26,0.1) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-20 -right-20 pointer-events-none"
        style={{
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(244,166,77,0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Mascot with pointing tilt */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0.2, y: -16, scale: 0.92 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.55, ease: [0.34, 1.4, 0.64, 1] }}
        >
          <motion.div
            whileHover={
              reduceMotion
                ? {}
                : {
                    rotate: 10,
                    scale: 1.08,
                    y: -4,
                  }
            }
            animate={
              reduceMotion
                ? {}
                : { y: [0, -6, 0] }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    rotate: { type: "spring", stiffness: 300, damping: 20 },
                    scale: { type: "spring", stiffness: 300, damping: 20 },
                  }
            }
            style={{ display: "inline-block", cursor: "default" }}
          >
            <Image
              src="/assets/squirrel_logo.png"
              alt="Your Squirrel Brain, pointing at the button below"
              width={120}
              height={120}
              style={{
                // Shape-following shadow — just the squirrel, no tile
                filter:
                  "drop-shadow(0 16px 24px rgba(26,18,8,0.20)) drop-shadow(0 4px 12px rgba(255,122,26,0.24))",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Wordmark */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <span
            className="font-display font-bold text-sm tracking-widest uppercase"
            style={{ color: T.textSub }}
          >
            Squirrel <span style={{ color: T.orange }}>Brain</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          id="final-cta-heading"
          className="font-display font-extrabold text-ink text-balance"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)", lineHeight: 1.05, letterSpacing: -1 }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 }}
        >
          Your memory is full.{" "}
          <span style={{ color: T.orange }}>Let your squirrel carry it.</span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg lg:text-xl text-muted leading-relaxed max-w-md mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          Nothing slips anymore — not because you got more disciplined, but because you stopped
          having to be. You&rsquo;re one forgotten text away from wishing you&rsquo;d had this.
        </motion.p>

        {/* CTA button — pulsing glow */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.44, ease: [0.34, 1.3, 0.64, 1] }}
        >
          <AppStoreButton size="lg" />
          <motion.a
            href={WAITLIST_HREF}
            className="inline-flex items-center gap-3 font-bold text-lg lg:text-xl px-10 py-5 rounded-full hover:opacity-90 active:scale-[0.98]"
            style={{
              background: "white",
              color: T.orange,
              boxShadow: "inset 0 0 0 1.5px rgba(255,122,26,0.45)",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 2.2a3.8 3.8 0 00-3.8 3.8c0 4.3-1.7 5.4-1.7 5.4h11s-1.7-1.1-1.7-5.4A3.8 3.8 0 0010 2.2zM8.6 14.9a1.4 1.4 0 002.8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Join the launch list
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-5 text-sm"
          style={{ color: "rgba(138,112,96,0.6)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.56 }}
        >
          Free to use at launch · nothing to buy · iOS
        </motion.p>
      </div>
    </section>
  );
}
