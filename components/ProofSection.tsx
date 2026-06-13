"use client";

/**
 * Section 5 — "For Real Life / For Families"
 *
 * Motion idea: each use-case row reveals on scroll with a stagger.
 * A v2 scroll-box item "fans" in from slightly offset positions (staggered
 * y+opacity entrance, not static). NOT a 3-column icon grid.
 *
 * Uses before_* photos as inline context (the real input you'd snap).
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T, ScrollBoxRow } from "@/components/v2/PhoneKit";

// ── Use-case "proof blocks" ───────────────────────────────────────────────

interface ProofBlock {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  photoSrc?: string;
  photoAlt?: string;
  rows: React.ComponentProps<typeof ScrollBoxRow>[];
}

const PROOF_BLOCKS: ProofBlock[] = [
  {
    id: "soccer",
    eyebrow: "Family scheduling",
    headline: "Snap a whole season in one shot.",
    body: "Photograph the soccer schedule on the fridge — or the school-year calendar. Your squirrel fans every game and practice into your calendar all at once. One tap, the whole season done. And when it's game time, the address is already there — tap it and Maps opens with turn-by-turn directions. No typing.",
    photoSrc: "/assets/before_whiteboard.png",
    photoAlt: "Soccer schedule on a whiteboard, ready to snap",
    rows: [
      {
        accentColor: T.blue,
        title: "⚽ Soccer — Riverside Park, Field 3",
        date: "Jun 15",
        time: "10:00 AM",
        dayNum: 15,
        location: "Riverside Park, Field 3",
        source: "From Calendar · by You",
        pills: [{ label: "⏰ 9:30 AM nudge ON", color: T.blue, bg: T.blueLight }],
      },
      {
        accentColor: T.blue,
        title: "⚽ Soccer — City Center Fields",
        date: "Jun 22",
        time: "2:00 PM",
        dayNum: 22,
        location: "City Center, Field A",
        source: "From Calendar · by You",
      },
    ],
  },
  {
    id: "meds",
    eyebrow: "Health reminders",
    headline: "Meds, refills, follow-ups. Never slip.",
    body: "Say \"refill prescription Friday\" or snap the bottle. Your squirrel sets the alarm and calls you if you don't act on it. Your health doesn't wait.",
    photoSrc: "/assets/before_grocery_list.png",
    photoAlt: "Handwritten grocery and meds list",
    rows: [
      {
        accentColor: T.orange,
        title: "💊 Refill prescription",
        date: "Jun 20",
        time: "10:00 AM",
        dayNum: 20,
        source: "From Squirrel Brain · by You",
        pills: [
          { label: "🎤 VOICE ATTACHED", color: T.orange, bg: T.pastelPeach },
          { label: "📞 Call me ON", color: "#1a1208", bg: T.pastelPeach },
        ],
      },
      {
        accentColor: T.orange,
        title: "🩺 Follow-up — Dr. Reyes",
        date: "Jun 28",
        time: "3:30 PM",
        dayNum: 28,
        source: "From Squirrel Brain · by You",
        pills: [{ label: "⏰ Day-before nudge ON", color: T.blue, bg: T.blueLight }],
      },
    ],
  },
  {
    id: "meeting",
    eyebrow: "Work & field",
    headline: "Meeting recap in one sentence.",
    body: "Walking out, tap mic: \"Follow up with Sarah about the contract by Wednesday.\" That's it. Your squirrel sets the reminder, logs the note, and follows through so you don't have to hold it in your head.",
    photoSrc: "/assets/lifestyle_sales_walkout.png",
    photoAlt: "Professional walking out after a meeting",
    rows: [
      {
        accentColor: T.orange,
        title: "📋 Follow up — Sarah re: contract",
        date: "Jun 18",
        time: "5:00 PM",
        dayNum: 18,
        source: "From Squirrel Brain · by You",
        pills: [
          { label: "🎤 VOICE ATTACHED", color: T.orange, bg: T.pastelPeach },
          { label: "⏰ Jun 17 reminder", color: T.blue, bg: T.blueLight },
        ],
      },
    ],
  },
];

// ── Single proof block ────────────────────────────────────────────────────

function ProofBlockCard({ block, index }: { block: ProofBlock; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Copy side — alternates left/right */}
      <motion.div
        className={isEven ? "lg:order-1" : "lg:order-2"}
        initial={{ opacity: 0.2, x: isEven ? -20 : 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: T.orange }}
        >
          {block.eyebrow}
        </p>
        <h3
          className="font-display font-bold text-ink mb-4 text-balance"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.15 }}
        >
          {block.headline}
        </h3>
        <p className="text-base text-muted leading-relaxed mb-6">{block.body}</p>

        {/* Optional "before" photo — the raw input */}
        {block.photoSrc && (
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{
              maxWidth: 320,
              height: 140,
              position: "relative",
              border: `1px solid ${T.border}`,
              boxShadow: "0 4px 16px rgba(26,18,8,0.08)",
            }}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.18 }}
          >
            <Image
              src={block.photoSrc}
              alt={block.photoAlt ?? ""}
              fill
              className="object-cover"
              sizes="320px"
            />
            {/* "You snap this" label */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                left: 8,
                background: "rgba(26,18,8,0.7)",
                borderRadius: 6,
                padding: "3px 8px",
              }}
            >
              <span style={{ fontSize: 9, color: "rgba(255,245,232,0.85)", fontWeight: 600 }}>
                📸 You snap this →
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll-box rows side */}
      <div className={isEven ? "lg:order-2" : "lg:order-1"}>
        <div
          className="rounded-3xl p-5"
          style={{
            background: "#faf6f0",
            border: `1px solid ${T.border}`,
          }}
        >
          {/* Mini app header */}
          <div
            style={{
              fontSize: 9,
              fontWeight: 700,
              color: T.textSub,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            SQUIRREL BRAIN — EXTRACTED
          </div>

          {block.rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.22 + i * 0.12 }}
            >
              <ScrollBoxRow {...row} />
            </motion.div>
          ))}

          {/* Pip confirmation bubble */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.5 + block.rows.length * 0.12 }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 8,
                background: "#1a1208",
                borderRadius: 12,
                padding: "8px 10px",
                marginTop: 4,
              }}
            >
              <span style={{ fontSize: 14, lineHeight: 1 }} aria-hidden="true">🐿️</span>
              <div>
                <div style={{ fontSize: 8, fontWeight: 700, color: "#e8a84a", marginBottom: 2 }}>
                  Scuttle
                </div>
                <div style={{ fontSize: 9, color: "rgba(255,245,232,0.75)", lineHeight: 1.5 }}>
                  Got it. Alarms are set. I'll follow up.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ── Main section ──────────────────────────────────────────────────────────

export default function ProofSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "white" }}
      aria-labelledby="proof-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 lg:mb-20"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: `${T.orange}aa` }}
          >
            Real life
          </p>
          <h2
            id="proof-heading"
            className="font-display font-extrabold text-ink text-balance"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}
          >
            The stuff you can't let{" "}
            <span style={{ color: T.orange }}>slip through the cracks.</span>
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl leading-relaxed">
            Families, field workers, anyone who juggles more than their brain can hold.
          </p>
        </motion.div>

        {/* Proof blocks — separated by dividers */}
        <div className="space-y-20 lg:space-y-28">
          {PROOF_BLOCKS.map((block, i) => (
            <div key={block.id}>
              <ProofBlockCard block={block} index={i} />
              {i < PROOF_BLOCKS.length - 1 && (
                <div
                  className="mt-20 lg:mt-28"
                  style={{
                    height: 1,
                    background: `linear-gradient(to right, transparent, ${T.border}, transparent)`,
                  }}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
