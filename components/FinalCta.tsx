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
import { TESTFLIGHT_URL } from "@/lib/config";
import { T } from "@/components/v2/PhoneKit";

export default function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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
          initial={{ opacity: 0, y: -24, scale: 0.9 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: [0.34, 1.4, 0.64, 1] }}
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
              alt="Pip — your Squirrel Brain, pointing at the button below"
              width={120}
              height={120}
              className="rounded-3xl"
              style={{
                boxShadow:
                  "0 20px 60px rgba(255,122,26,0.32), 0 8px 20px rgba(26,18,8,0.12)",
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
          <span style={{ color: T.orange }}>Let Pip carry it.</span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg lg:text-xl text-muted leading-relaxed max-w-md mx-auto"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.32 }}
        >
          Join the beta. Say one thing. Watch it become an alarm. That&rsquo;s the whole demo.
        </motion.p>

        {/* CTA button — pulsing glow */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.44, ease: [0.34, 1.3, 0.64, 1] }}
        >
          <motion.a
            href={TESTFLIGHT_URL}
            className="inline-flex items-center gap-3 text-white font-bold text-lg lg:text-xl px-10 py-5 rounded-full hover:opacity-90 active:scale-[0.98]"
            style={{
              background: T.orange,
              boxShadow: "0 8px 32px rgba(255,122,26,0.4)",
            }}
            animate={
              reduceMotion
                ? {}
                : {
                    boxShadow: [
                      "0 8px 32px rgba(255,122,26,0.4)",
                      "0 8px 48px rgba(255,122,26,0.6)",
                      "0 8px 32px rgba(255,122,26,0.4)",
                    ],
                  }
            }
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M10 1.5C5.36 1.5 1.5 5.36 1.5 10S5.36 18.5 10 18.5 18.5 14.64 18.5 10 14.64 1.5 10 1.5zm-1.5 10.53V7.97a.5.5 0 01.76-.43l3.5 2.28a.5.5 0 010 .86l-3.5 2.28a.5.5 0 01-.76-.43z" fill="currentColor" />
            </svg>
            Get the beta — it&rsquo;s free
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-5 text-sm"
          style={{ color: "rgba(138,112,96,0.6)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.56 }}
        >
          iOS only · free to start · $9.99/mo to unlock everything
        </motion.p>

        {/* Features summary strip */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          {[
            "🎙️ Voice capture",
            "📸 Photo capture",
            "📅 Calendar sync",
            "📞 Pip calls you",
            "⏰ Escalating alarms",
            "🌅 Daily brief",
          ].map((feat) => (
            <span
              key={feat}
              className="text-sm"
              style={{ color: "rgba(138,112,96,0.7)", fontWeight: 500 }}
            >
              {feat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
