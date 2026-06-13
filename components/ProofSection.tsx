"use client";

/**
 * Section 5 — "For Real Life / For Families"
 *
 * Each use-case row reveals on scroll. Alternating left/right layout.
 * Meds block is a featured expanded section with pill-bottle grid.
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T, ScrollBoxRow } from "@/components/v2/PhoneKit";

// ── Types ────────────────────────────────────────────────────────────────────

interface ProofBlock {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  photoSrc?: string;
  photoAlt?: string;
  photoHeight?: number; // default 160
  rows: React.ComponentProps<typeof ScrollBoxRow>[];
}

// ── Proof blocks data ────────────────────────────────────────────────────────

const PROOF_BLOCKS: ProofBlock[] = [
  {
    id: "soccer",
    eyebrow: "Family scheduling",
    headline: "Snap a whole season in one shot.",
    body: "Photograph the soccer schedule on the fridge — or the school-year calendar. Your squirrel fans every game and practice into your calendar all at once. One tap, the whole season done. And when it's game time, the address is already there — tap it and Maps opens with turn-by-turn directions. No typing.",
    photoSrc: "/assets/before_soccer_schedule.png",
    photoAlt: "Printed soccer season schedule, ready to snap",
    photoHeight: 220,
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
    id: "meeting",
    eyebrow: "Work & field",
    headline: "Meeting recap in one sentence.",
    body: "Walking out, tap mic: \"Follow up with Sarah about the contract by Wednesday.\" That's it. Your squirrel sets the reminder, logs the note, and follows through so you don't have to hold it in your head.",
    photoSrc: "/assets/lifestyle_sales_walkout.png",
    photoAlt: "Professional walking out after a meeting",
    photoHeight: 180,
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

// ── Med bottles grid ─────────────────────────────────────────────────────────

const MED_BOTTLES = [
  { src: "/assets/med1_bottle.png", label: "Lisinopril 10mg" },
  { src: "/assets/med2_bottle.png", label: "Metformin 500mg" },
  { src: "/assets/med3_bottle.png", label: "Atorvastatin 20mg" },
  { src: "/assets/med4_bottle.png", label: "Omeprazole 20mg" },
  { src: "/assets/med5_bottle.png", label: "Levothyroxine 50mcg" },
  { src: "/assets/med6_bottle.png", label: "Amlodipine 5mg" },
];

function MedsBottleGrid({ inView }: { inView: boolean }) {
  return (
    <div>
      {/* Header label */}
      <div
        style={{
          fontSize: 9,
          fontWeight: 700,
          color: T.textSub,
          letterSpacing: 0.8,
          textTransform: "uppercase",
          marginBottom: 10,
        }}
      >
        Your prescriptions — all saved
      </div>

      {/* Snap-this bottle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.45, delay: 0.15 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 240,
          height: 180,
          borderRadius: 16,
          overflow: "hidden",
          border: `1.5px solid ${T.border}`,
          boxShadow: "0 6px 20px rgba(26,18,8,0.1)",
          marginBottom: 14,
        }}
      >
        <Image
          src="/assets/med1_bottle.png"
          alt="Pill bottle you snap"
          fill
          className="object-contain"
          style={{ background: "#faf6f0", padding: "8px" }}
          sizes="240px"
        />
        <div
          style={{
            position: "absolute",
            bottom: 8,
            left: 8,
            background: "rgba(26,18,8,0.68)",
            borderRadius: 6,
            padding: "3px 8px",
          }}
        >
          <span style={{ fontSize: 9, color: "rgba(255,245,232,0.85)", fontWeight: 600 }}>
            You snap each bottle
          </span>
        </div>
      </motion.div>

      {/* 6-bottle grid — "all your prescriptions, saved" */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 8,
          marginBottom: 12,
        }}
      >
        {MED_BOTTLES.map((bottle, i) => (
          <motion.div
            key={bottle.src}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.25 + i * 0.07 }}
            style={{
              background: "#faf6f0",
              borderRadius: 12,
              border: `1px solid ${T.border}`,
              padding: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <div style={{ position: "relative", width: 52, height: 64 }}>
              <Image
                src={bottle.src}
                alt={bottle.label}
                fill
                className="object-contain"
                sizes="52px"
              />
            </div>
            <span
              style={{
                fontSize: 7,
                fontWeight: 600,
                color: T.textSub,
                textAlign: "center",
                lineHeight: 1.3,
              }}
            >
              {bottle.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Squirrel confirmation bubble */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.8 }}
        style={{
          background: "#1a1208",
          borderRadius: 12,
          padding: "8px 10px",
          display: "flex",
          alignItems: "flex-start",
          gap: 8,
        }}
      >
        <span style={{ fontSize: 14, lineHeight: 1 }} aria-hidden="true">🐿️</span>
        <div>
          <div style={{ fontSize: 8, fontWeight: 700, color: "#e8a84a", marginBottom: 2 }}>
            Your squirrel
          </div>
          <div style={{ fontSize: 9, color: "rgba(255,245,232,0.75)", lineHeight: 1.5 }}>
            6 prescriptions saved. Tap any one to see the label photo.
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ── Meds section (expanded, standalone) ─────────────────────────────────────

function MedsBlock({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const phoneLeft = index % 2 === 0;

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* Copy + bottle grid */}
      <motion.div
        className={phoneLeft ? "lg:order-2" : "lg:order-1"}
        initial={{ opacity: 0.15, x: phoneLeft ? 20 : -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.06 }}
      >
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: T.orange }}
        >
          Health reminders
        </p>
        <h3
          className="font-display font-bold text-ink mb-4 text-balance"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", lineHeight: 1.15 }}
        >
          Every prescription. One place. Always on you.
        </h3>
        <p className="text-base text-muted leading-relaxed mb-6">
          Snap a photo of each pill bottle — or several at once — and your squirrel keeps all your
          prescriptions saved and labeled. At the doctor's office, when they hand you that long form
          asking for every medication and dose, you've already got them: easy to find, easy to read
          off, easy to erase when you stop one.
        </p>
        <p className="text-base text-muted leading-relaxed mb-6">
          And if the doctor has a question, pull up the actual photo of the label right there on
          your phone. No more fumbling, no more forgotten scripts, no more "I think it's the one
          that starts with an L."
        </p>

        {/* Reminder rows */}
        <div
          className="rounded-3xl p-5"
          style={{
            background: "#faf6f0",
            border: `1px solid ${T.border}`,
          }}
        >
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
            Squirrel Brain — Reminders
          </div>

          {[
            {
              accentColor: T.orange,
              title: "Refill Lisinopril",
              date: "Jun 20",
              time: "10:00 AM",
              dayNum: 20,
              source: "From Squirrel Brain · by You",
              pills: [
                { label: "Rx photo saved", color: T.orange, bg: T.pastelPeach },
                { label: "Call me ON", color: "#1a1208", bg: T.pastelPeach },
              ],
            },
            {
              accentColor: T.orange,
              title: "Follow-up — Dr. Reyes",
              date: "Jun 28",
              time: "3:30 PM",
              dayNum: 28,
              source: "From Squirrel Brain · by You",
              pills: [{ label: "Day-before nudge ON", color: T.blue, bg: T.blueLight }],
            },
          ].map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.3 + i * 0.12 }}
            >
              <ScrollBoxRow {...row} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            style={{
              background: "#1a1208",
              borderRadius: 12,
              padding: "8px 10px",
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              marginTop: 4,
            }}
          >
            <span style={{ fontSize: 14, lineHeight: 1 }} aria-hidden="true">🐿️</span>
            <div>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#e8a84a", marginBottom: 2 }}>
                Your squirrel
              </div>
              <div style={{ fontSize: 9, color: "rgba(255,245,232,0.75)", lineHeight: 1.5 }}>
                Got it. Refill reminder set. Label photo saved.
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottle grid panel */}
      <motion.div
        className={`${phoneLeft ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0.15, x: phoneLeft ? -20 : 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div
          className="rounded-3xl p-6"
          style={{
            background: "white",
            border: `1.5px solid ${T.border}`,
            boxShadow: "0 8px 32px rgba(26,18,8,0.07)",
          }}
        >
          <MedsBottleGrid inView={inView} />
        </div>
      </motion.div>
    </div>
  );
}

// ── Single standard proof block ───────────────────────────────────────────────

function ProofBlockCard({ block, index }: { block: ProofBlock; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const isEven = index % 2 === 0;
  const photoH = block.photoHeight ?? 160;

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
              maxWidth: 340,
              height: photoH,
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
              className="object-cover object-top"
              sizes="340px"
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
                You snap this
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
            Squirrel Brain — Extracted
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

          {/* Squirrel confirmation bubble */}
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
                  Your squirrel
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

// ── Main section ──────────────────────────────────────────────────────────────

export default function ProofSection() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  // We interleave: soccer (0), meds (1), meeting (2)
  // Meds is rendered as a special block at index 1

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

        {/* Blocks — soccer, then meds (expanded), then meeting */}
        <div className="space-y-20 lg:space-y-28">
          {/* Soccer */}
          <div>
            <ProofBlockCard block={PROOF_BLOCKS[0]} index={0} />
            <div
              className="mt-20 lg:mt-28"
              style={{
                height: 1,
                background: `linear-gradient(to right, transparent, ${T.border}, transparent)`,
              }}
              aria-hidden="true"
            />
          </div>

          {/* Meds — expanded featured block */}
          <div>
            <MedsBlock index={1} />
            <div
              className="mt-20 lg:mt-28"
              style={{
                height: 1,
                background: `linear-gradient(to right, transparent, ${T.border}, transparent)`,
              }}
              aria-hidden="true"
            />
          </div>

          {/* Meeting */}
          <ProofBlockCard block={PROOF_BLOCKS[1]} index={2} />
        </div>
      </div>
    </section>
  );
}
