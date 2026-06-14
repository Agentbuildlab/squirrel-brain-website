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

// ── Med bottles grid ─────────────────────────────────────────────────────────

const MED_BOTTLES = [
  { src: "/assets/rx_item_1.webp", label: "Lisoril 10 mg" },
  { src: "/assets/rx_item_2.webp", label: "Metaform 850 mg" },
  { src: "/assets/rx_item_3.webp", label: "Ventair inhaler" },
  { src: "/assets/rx_item_4.webp", label: "Optifresh drops" },
  { src: "/assets/rx_item_5.webp", label: "Cardiplex 20 mg" },
  { src: "/assets/rx_item_6.webp", label: "Vitamin D3 2000 IU" },
];

function MedsBottleGrid({ inView }: { inView: boolean }) {
  return (
    <div>
      {/* Header label */}
      <div
        style={{
          fontSize: 15,
          fontWeight: 800,
          color: T.text,
          letterSpacing: 0.5,
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        Your prescriptions — all saved
      </div>

      {/* Snap-this bottle — bigger, real photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.45, delay: 0.15 }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 320,
          height: 214,
          borderRadius: 16,
          overflow: "hidden",
          border: `1.5px solid ${T.border}`,
          boxShadow: "0 8px 24px rgba(26,18,8,0.12)",
          marginBottom: 14,
        }}
      >
        <Image
          src="/assets/rx_snap.webp"
          alt="Your prescription bottles — the photo you snap"
          fill
          className="object-cover"
          sizes="320px"
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
          <span style={{ fontSize: 14, color: "rgba(255,245,232,0.95)", fontWeight: 700 }}>
            You snap your bottles
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
            <div
              style={{
                position: "relative",
                width: 56,
                height: 64,
                borderRadius: 8,
                overflow: "hidden",
              }}
            >
              <Image
                src={bottle.src}
                alt={bottle.label}
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: T.text,
                textAlign: "center",
                lineHeight: 1.25,
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
        <span style={{ fontSize: 20, lineHeight: 1 }} aria-hidden="true">🐿️</span>
        <div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#e8a84a", marginBottom: 3 }}>
            Your squirrel
          </div>
          <div style={{ fontSize: 14, color: "rgba(255,245,232,0.9)", lineHeight: 1.5 }}>
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

        {/* Side note — snap the bottle, set it as the reminder */}
        <div
          className="flex items-start gap-3 rounded-2xl px-4 py-3 mb-6"
          style={{ background: T.pastelPeach, border: `1px solid ${T.orange}33` }}
        >
          <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1.2, flexShrink: 0 }}>
            💊
          </span>
          <p className="text-sm leading-relaxed" style={{ color: "#7a4a18" }}>
            <strong style={{ color: T.text }}>The part that actually saves you:</strong> snap the
            bottle and set it as a reminder. When it&rsquo;s time, your squirrel doesn&rsquo;t just
            buzz — it <strong style={{ color: T.text }}>calls your phone</strong>, breaking through
            silent mode and Do Not Disturb, to tell you something important is due. You open it up and
            the alert shows that exact photo — so you know precisely which one to take. No missed dose,
            no squinting at labels, no mix-ups.
          </p>
        </div>

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
              title: "Refill Lisoril",
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

// ── Main section ──────────────────────────────────────────────────────────────

export default function ProofSection() {
  // Meds-only now — soccer lives on the Family page's own section; meeting moved to Work.
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "white" }}
      aria-label="Prescriptions and medications, always on you"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <MedsBlock index={1} />
      </div>
    </section>
  );
}
