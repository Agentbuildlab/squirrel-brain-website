"use client";

/**
 * Section 2 — "It Captures Everything"
 *
 * Three stacked feature rows — Voice, Photo, Document.
 * Each reveals on scroll (Framer useInView fade/slide). Phone alternates
 * left/right per row. No pinning, no scroll-scrub, no cross-fade magic.
 * Visitors just scroll down and read each row clearly.
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import { PhoneShot, T } from "@/components/v2/PhoneKit";

// ── Row config ─────────────────────────────────────────────────────────────

const ROWS = [
  {
    id: "voice",
    eyebrow: "Voice capture",
    headline: "Say it out loud.",
    sub: '"Dentist Thursday at two, remind me the day before." Your squirrel extracts the date, time, and reminder. Alarm set in seconds — you didn\'t have to type a single thing.',
    beforeSrc: null,
    beforeAlt: null,
    screenSrc: "/assets/screens/home-v4.webp",
    screenAlt: "Squirrel Brain home — captured calendar events",
    accentColor: T.orange,
  },
  {
    id: "parking",
    eyebrow: "Photo capture",
    headline: "Snap where you parked.",
    sub: "GPS-stamped, location-named, saved forever. Ask \"where did I park?\" next time and your squirrel knows exactly. No more wandering a garage.",
    beforeSrc: "/assets/car_parked.webp",
    beforeAlt: "Your car parked in the garage on level P3",
    screenSrc: "/assets/screens/pix-v3.webp",
    screenAlt: "Squirrel Brain Pix — photo boards",
    accentColor: "#2a6aee",
  },
  {
    id: "receipt",
    eyebrow: "Document capture",
    headline: "Snap a receipt.",
    sub: '"Return window closes June 24 — remind you 2 days before?" Your squirrel asks. You tap yes. Done. Receipts, forms, labels — whatever has info you\'ll need later.',
    beforeSrc: "/assets/receipt_real.webp",
    beforeAlt: "A store receipt you snap",
    screenSrc: "/assets/screens/notes-v2.webp",
    screenAlt: "Squirrel Brain Notes — captured and organised",
    accentColor: T.orange,
  },
];

// ── Single row ──────────────────────────────────────────────────────────────

function CaptureRow({
  row,
  index,
}: {
  row: (typeof ROWS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const phoneLeft = index % 2 === 0; // even → phone left, odd → phone right

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
    >
      {/* Phone — alternates sides on desktop */}
      <motion.div
        className={`flex justify-center ${phoneLeft ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, x: phoneLeft ? -24 : 24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <PhoneShot
          src={row.screenSrc}
          alt={row.screenAlt}
          width={340}
        />
      </motion.div>

      {/* Copy + optional before photo */}
      <motion.div
        className={`${phoneLeft ? "lg:order-2" : "lg:order-1"}`}
        initial={{ opacity: 0, x: phoneLeft ? 24 : -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.08 }}
      >
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: row.accentColor }}
        >
          {row.eyebrow}
        </p>
        <h3
          className="font-display font-bold text-ink mb-4"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", lineHeight: 1.1 }}
        >
          {row.headline}
        </h3>
        <p className="text-base text-muted leading-relaxed mb-6 max-w-md">
          {row.sub}
        </p>

        {/* "Before" photo — what you snap */}
        {row.beforeSrc && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.22 }}
            style={{
              position: "relative",
              maxWidth: 300,
              height: 180,
              borderRadius: 16,
              overflow: "hidden",
              border: `1.5px solid ${T.border}`,
              boxShadow: "0 6px 20px rgba(26,18,8,0.1)",
            }}
          >
            <Image
              src={row.beforeSrc}
              alt={row.beforeAlt ?? ""}
              fill
              className="object-cover"
              sizes="300px"
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
              <span
                style={{
                  fontSize: 9,
                  color: "rgba(255,245,232,0.85)",
                  fontWeight: 600,
                }}
              >
                You snap this
              </span>
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

// ── Section ─────────────────────────────────────────────────────────────────

export default function CapturesSection() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: "#faf6f0" }}
      aria-labelledby="captures-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <FadeIn className="mb-16 lg:mb-20">
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: `${T.orange}bb` }}
          >
            It captures everything
          </p>
          <h2
            id="captures-heading"
            className="font-display font-extrabold text-ink"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}
          >
            Voice. Photo. Document.
            <br />
            <span style={{ color: T.orange }}>All handled.</span>
          </h2>
        </FadeIn>

        {/* Three rows — scroll down and read each one */}
        <div className="space-y-20 lg:space-y-28">
          {ROWS.map((row, i) => (
            <div key={row.id}>
              <CaptureRow row={row} index={i} />
              {i < ROWS.length - 1 && (
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
