"use client";

/**
 * Gotcha #1 — Screenshot it → it's on your calendar.
 * The work text / company email / Outlook invite that would have slipped, turned
 * into a real calendar event. Before (a screenshot) → after (the extracted event).
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T, ScrollBoxRow } from "@/components/v2/PhoneKit";

export default function ScreenshotGotchaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "#ffffff" }}
      aria-labelledby="shot-gotcha-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Copy + the screenshot you take */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: T.orange }}>
            Screenshot it
          </p>
          <h2
            id="shot-gotcha-heading"
            className="font-display font-extrabold text-ink text-balance mb-5"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.08 }}
          >
            The text you&rsquo;d have forgotten.{" "}
            <span style={{ color: T.orange }}>Now it&rsquo;s on your calendar.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6 max-w-lg">
            A customer texts you a job. Your company emails a training deadline. An Outlook invite
            you can&rsquo;t open dings once and vanishes. Just <strong className="text-ink">screenshot
            it</strong> — your squirrel reads it, pulls out the what, the when, and the where, and
            drops a real calendar event with a reminder. You never retype a thing, and nothing slips
            because it got buried under 30 other texts.
          </p>

          {/* The screenshot you take */}
          <div className="flex items-center gap-4">
            <div
              className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{ width: 150, border: `1.5px solid ${T.border}`, boxShadow: "0 8px 24px rgba(26,18,8,0.12)" }}
            >
              <Image src="/assets/before_worktext.webp" alt="A work text you screenshot" width={560} height={720} className="w-full h-auto" />
              <div className="absolute bottom-1.5 left-1.5 rounded-md px-2 py-1" style={{ background: "rgba(26,18,8,0.7)" }}>
                <span className="text-[10px] font-semibold" style={{ color: "rgba(255,245,232,0.9)" }}>
                  You screenshot this
                </span>
              </div>
            </div>
            <span aria-hidden="true" style={{ fontSize: 26, color: T.orange, fontWeight: 700 }}>→</span>
            <p className="text-sm text-muted leading-snug max-w-[150px]">
              …and it reads it, extracts it, and files the event for you.
            </p>
          </div>
        </motion.div>

        {/* After — extracted event */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <div className="rounded-3xl p-5" style={{ background: "#faf6f0", border: `1px solid ${T.border}` }}>
            <div
              style={{ fontSize: 11, fontWeight: 800, color: T.textSub, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 8 }}
            >
              Squirrel Brain · pulled from your screenshot
            </div>
            <ScrollBoxRow
              accentColor={T.blue}
              title="🔧 Johnson site — recalibrate the main unit"
              date="Jun 18"
              time="before noon"
              dayNum={18}
              source="From a text · by Scuttle"
              pills={[{ label: "⏰ Reminder Wed PM", color: T.blue, bg: T.blueLight }]}
            />
            <div
              style={{ background: "#1a1208", borderRadius: 12, padding: "8px 10px", display: "flex", alignItems: "flex-start", gap: 8, marginTop: 4 }}
            >
              <span style={{ fontSize: 16, lineHeight: 1 }} aria-hidden="true">🐿️</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#e8a84a", marginBottom: 2 }}>Your squirrel</div>
                <div style={{ fontSize: 12, color: "rgba(255,245,232,0.9)", lineHeight: 1.5 }}>
                  Read your text. It&rsquo;s on your calendar — reminder set the day before.
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            Works on Outlook invites, company emails, even a confirmation buried in your inbox. If
            it&rsquo;s got a date in it, your squirrel will find it.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
