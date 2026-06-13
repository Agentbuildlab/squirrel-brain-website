"use client";

/**
 * Outlook import section — before → after visual
 * Screenshot your Outlook event → it drops into Squirrel Brain
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneShot, T } from "@/components/v2/PhoneKit";
import FadeIn from "@/components/FadeIn";

export default function OutlookSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28 overflow-hidden"
      style={{ background: "#faf6f0" }}
      aria-labelledby="outlook-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12 lg:mb-16">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: T.orange }}
            >
              Outlook import
            </p>
            <h2
              id="outlook-heading"
              className="font-display font-extrabold text-ink text-balance"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.1 }}
            >
              Tired of missing{" "}
              <span style={{ color: T.orange }}>Outlook reminders?</span>
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto leading-relaxed">
              Company policy locks your calendar app. The reminder fires when your phone is
              face-down. You miss it. There&rsquo;s a better way.
            </p>
          </div>
        </FadeIn>

        {/* Before → After */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* BEFORE: Outlook screenshot */}
          <motion.div
            className="flex flex-col items-center gap-3 flex-shrink-0"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                width: 280,
                border: `1.5px solid ${T.border}`,
                boxShadow: "0 8px 28px rgba(26,18,8,0.10)",
                position: "relative",
              }}
            >
              <Image
                src="/assets/outlook_event.png"
                alt="Outlook calendar event — the screenshot you take"
                width={280}
                height={180}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: T.textSub,
                textTransform: "uppercase",
                letterSpacing: 0.8,
              }}
            >
              The screenshot you take
            </p>
          </motion.div>

          {/* Arrow */}
          <motion.div
            className="hidden md:flex flex-col items-center gap-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.28 }}
            aria-hidden="true"
          >
            <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
              <path
                d="M4 12h36M32 4l12 8-12 8"
                stroke={T.orange}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                color: T.orange,
                letterSpacing: 0.5,
                textTransform: "uppercase",
              }}
            >
              One tap
            </span>
          </motion.div>

          {/* AFTER: phone with calendar-v2 */}
          <motion.div
            className="flex flex-col items-center gap-3 flex-shrink-0"
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <PhoneShot
              src="/assets/screens/calendar-v2.webp"
              alt="Calendar — Outlook event now lives in Squirrel Brain with reminders"
              width={300}
            />
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: T.textSub,
                textTransform: "uppercase",
                letterSpacing: 0.8,
              }}
            >
              Lives in your squirrel now
            </p>
          </motion.div>
        </div>

        {/* Bottom copy */}
        <FadeIn delay={0.2}>
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-base text-muted leading-relaxed">
              Now it lives with everything else: reminders, the daily countdown, and a real
              phone call before it if it matters.{" "}
              <strong className="text-ink">Never miss an Outlook event again.</strong>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
