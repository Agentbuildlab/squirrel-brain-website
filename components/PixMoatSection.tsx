"use client";

/**
 * Pix moat — the big one.
 *
 * The headline differentiator: open the app and it offers up the new photos &
 * screenshots from your camera roll to add (or dismiss). Then it auto-files,
 * auto-boxes, finds the link, pins GPS, and surfaces by place. This is the
 * section that should feel like the heart of the product.
 *
 * Hero visual = the real in-app board wall (auto-built boards + the live
 * "you're at X — N pix here" location banner).
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneShot, T } from "@/components/v2/PhoneKit";

const CAPABILITIES = [
  {
    icon: "🗂️",
    title: "It files them for you",
    body: "Every photo you keep gets read and dropped into the right board automatically — receipts with receipts, recipes with recipes. No tagging, no folders.",
  },
  {
    icon: "✨",
    title: "Three of a kind births a box",
    body: "Snap three similar things and your squirrel spins up a brand-new board for them on its own. The app comes with boards ready to go — keep them, rename them, or delete them.",
  },
  {
    icon: "✏️",
    title: "Don't like where it went? Move it",
    body: "Every box is yours. Rename the ones the AI made, drag a photo to a different board, rearrange the whole wall. It guesses; you stay in charge.",
  },
  {
    icon: "🔎",
    title: "Ask it to find the link",
    body: "Snapped a dress, a tool, a gadget? Ask your squirrel to find it online and it pulls up the page — then saves it to a note so you can go back and buy it later.",
  },
  {
    icon: "📍",
    title: "Every photo is GPS-pinned",
    body: "Where you parked, the house you toured, the shelf you want to copy — each shot remembers exactly where it was taken, so you can find your way back.",
  },
  {
    icon: "🧭",
    title: "\"You've got 6 photos here\"",
    body: "Walk into Target, school, or a job site and your squirrel notices: it tells you how many photos you've snapped at this spot — tap once to pull every one of them up.",
  },
];

export default function PixMoatSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{ background: T.darkBg }}
      aria-labelledby="pixmoat-heading"
    >
      {/* warm glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 760,
          height: 760,
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          background:
            "radial-gradient(circle, rgba(255,122,26,0.13) 0%, rgba(244,166,77,0.05) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: T.orange }}
          >
            The big one · Pix
          </p>
          <h2
            id="pixmoat-heading"
            className="font-display font-extrabold text-balance mb-6"
            style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)", lineHeight: 1.08, color: "#fff5e8" }}
          >
            Your camera roll is a mess.{" "}
            <span style={{ color: T.orange }}>Your squirrel fixes that — automatically.</span>
          </h2>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "rgba(255,245,232,0.72)" }}
          >
            Here&rsquo;s the part nothing else does. You take photos and screenshots all day —
            receipts, recipes, a parking spot, a flyer, a price tag. The second you open Squirrel
            Brain, it{" "}
            <strong style={{ color: "#fff5e8" }}>pops up the new ones and asks: want these?</strong>{" "}
            Tick the keepers, dismiss the rest. The keepers get filed, boxed, and made searchable —
            the dismissed ones stay in your camera roll, untouched. That&rsquo;s the whole effort.
          </p>
        </motion.div>

        {/* Phone + capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Phone — real board wall */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <PhoneShot
                src="/assets/screens/pix-wall.webp"
                alt="Squirrel Brain Pix board wall — auto-built boards and a live location banner showing photos taken nearby"
                width={320}
              />
              {/* caption tag */}
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2"
                style={{
                  background: T.orange,
                  boxShadow: "0 8px 24px rgba(255,122,26,0.4)",
                }}
              >
                <span className="text-xs font-bold text-white">
                  It built every one of these boards for you
                </span>
              </div>
            </div>
          </motion.div>

          {/* Capability list */}
          <div className="flex flex-col gap-3">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="flex items-start gap-4 rounded-2xl p-4"
                style={{
                  background: "rgba(255,245,232,0.04)",
                  border: "1px solid rgba(255,245,232,0.09)",
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              >
                <span
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{
                    width: 42,
                    height: 42,
                    background: "rgba(255,122,26,0.13)",
                    fontSize: 20,
                  }}
                  aria-hidden="true"
                >
                  {cap.icon}
                </span>
                <div>
                  <h3
                    className="font-display font-bold mb-1"
                    style={{ fontSize: "1.05rem", color: "#fff5e8" }}
                  >
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,245,232,0.6)" }}>
                    {cap.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing line */}
        <motion.p
          className="text-center mt-14 lg:mt-16 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,245,232,0.7)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          You never file a thing. You never name a folder. You just keep taking photos like you
          already do —{" "}
          <strong style={{ color: T.orange }}>and your squirrel quietly turns them into something you can actually use.</strong>
        </motion.p>
      </div>
    </section>
  );
}
