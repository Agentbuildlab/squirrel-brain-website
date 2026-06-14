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
            Screenshot it · texts &amp; emails
          </p>
          <h2
            id="shot-gotcha-heading"
            className="font-display font-extrabold text-ink text-balance mb-5"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.08 }}
          >
            30 texts a day. The one you had to <em>act</em> on?{" "}
            <span style={{ color: T.orange }}>Now it&rsquo;s a to-do that nudges you.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-6 max-w-lg">
            You get a dozen texts and emails a day — work buried in with family, reminders, and
            noise. The one a customer or your boss needs you to <em>do something</em> about gets lost
            by dinner and gone by morning. Just <strong className="text-ink">screenshot it</strong> —
            your squirrel reads it, pulls out the task, and turns it into a{" "}
            <strong className="text-ink">to-do with a reminder</strong>. Company emails and Outlook
            invites too: if there&rsquo;s something to do in it, it becomes a task you won&rsquo;t drop.
          </p>

          {/* The flood you're up against */}
          <div className="flex items-center gap-4">
            <div
              className="relative rounded-2xl overflow-hidden flex-shrink-0"
              style={{ width: 172, border: `1.5px solid ${T.border}`, boxShadow: "0 10px 28px rgba(26,18,8,0.14)" }}
            >
              <Image src="/assets/texts_flood.webp" alt="A phone inbox flooded with texts — three of them are things you actually have to do" width={560} height={772} className="w-full h-auto" />
              <div className="absolute bottom-1.5 left-1.5 rounded-md px-2 py-1" style={{ background: "rgba(26,18,8,0.72)" }}>
                <span className="text-[10px] font-semibold" style={{ color: "rgba(255,245,232,0.92)" }}>
                  20 a day · 3 you have to act on
                </span>
              </div>
            </div>
            <span aria-hidden="true" style={{ fontSize: 26, color: T.orange, fontWeight: 700 }}>→</span>
            <p className="text-sm text-muted leading-snug max-w-[150px]">
              Forward the ones that matter; they come back as to-dos you won&rsquo;t drop.
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
              Squirrel Brain · your new to-dos
            </div>
            <ScrollBoxRow
              accentColor={T.orange}
              title="✅ Recalibrate the main unit — Johnson site"
              date="by Thu"
              dayNum={18}
              source="From a text · by Scuttle"
              pills={[{ label: "⏰ Reminder set", color: T.orange, bg: T.pastelPeach }]}
            />
            <ScrollBoxRow
              accentColor={T.orange}
              title="✅ Finish the Q3 compliance training"
              date="by Jun 20"
              dayNum={20}
              source="From a company email · by Scuttle"
              pills={[{ label: "⏰ Reminder set", color: T.orange, bg: T.pastelPeach }]}
            />
            <div
              style={{ background: "#1a1208", borderRadius: 12, padding: "8px 10px", display: "flex", alignItems: "flex-start", gap: 8, marginTop: 4 }}
            >
              <span style={{ fontSize: 16, lineHeight: 1 }} aria-hidden="true">🐿️</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#e8a84a", marginBottom: 2 }}>Your squirrel</div>
                <div style={{ fontSize: 12, color: "rgba(255,245,232,0.9)", lineHeight: 1.5 }}>
                  Two things you had to do, pulled out of the noise. Reminders set — you won&rsquo;t drop either.
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted leading-relaxed">
            A timed invite becomes a calendar event; a &ldquo;can you handle this?&rdquo; becomes a
            to-do. Either way, it stops living in a thread you&rsquo;ll never scroll back to.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
