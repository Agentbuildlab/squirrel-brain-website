"use client";

/**
 * Pix moat — the big one.
 *
 * Open the app and it offers up the new photos & screenshots from your camera
 * roll to keep (or dismiss) — zero hassle, review them later from bed. Then it
 * auto-files, auto-boxes, identifies what things are (and where to buy them),
 * pins GPS, and re-shuffles your boards daily as your life changes.
 *
 * Hero visual = the real in-app board wall (auto-built boards + the live
 * "you're at X — N pix here" location banner). Custom SVG icons (no emoji).
 */

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { PhoneShot, T } from "@/components/v2/PhoneKit";

// ── Clean stroke icons (orange) ────────────────────────────────────────────
const sc = { stroke: T.orange, strokeWidth: 1.7, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

const IconFiles = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M3 7.5l1.2-1.5H9l1.5 1.8H19a1.5 1.5 0 011.5 1.5V17a1.5 1.5 0 01-1.5 1.5H4.5A1.5 1.5 0 013 17V7.5z" /><path {...sc} d="M6 6V4.6a1 1 0 011-1h3.4L12 5.2h5a1 1 0 011 1V8" opacity="0.55" /></svg>
);
const IconBox = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M12 3.5l7 3.8v7.4l-7 3.8-7-3.8V7.3l7-3.8z" /><path {...sc} d="M5.2 7.4L12 11l6.8-3.6M12 11v7.5" opacity="0.7" /><path {...sc} d="M17.5 3.5v3M16 5h3" /></svg>
);
const IconMove = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M12 3v18M12 3L9.5 5.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5" /><path {...sc} d="M3 12h18M3 12l2.5-2.5M3 12l2.5 2.5M21 12l-2.5-2.5M21 12l-2.5 2.5" opacity="0.55" /></svg>
);
const IconFind = (
  <svg width="22" height="22" viewBox="0 0 24 24"><circle {...sc} cx="10.5" cy="10.5" r="6" /><path {...sc} d="M15 15l5 5" /><path {...sc} d="M18.5 3.5v3M17 5h3" opacity="0.9" /></svg>
);
const IconPin = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" /><circle {...sc} cx="12" cy="10" r="2.4" /></svg>
);
const IconCycle = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3" /><path {...sc} d="M18 3v4h-4M6 21v-4h4" /></svg>
);

const CAPABILITIES: { icon: ReactNode; title: string; body: string }[] = [
  {
    icon: IconFiles,
    title: "It files everything for you",
    body: "Every photo you keep gets read and dropped into the right board on its own — receipts with receipts, recipes with recipes. No tagging, no folders, no thinking about it.",
  },
  {
    icon: IconBox,
    title: "Three of a kind births a box",
    body: "Snap three similar things and your squirrel spins up a brand-new board for them automatically. The app starts you with boards ready to go — keep them, rename them, or delete them.",
  },
  {
    icon: IconMove,
    title: "It's yours to rearrange",
    body: "Don't like where something landed? Rename the board, drag a photo into a different one, reorder the whole wall. Your squirrel makes the first guess — you always get the final say.",
  },
  {
    icon: IconFind,
    title: "Snap a thing — it knows what it is",
    body: "Photograph a dress, a tool, a gadget, a bottle of wine. Your squirrel works out what it is, writes you a clear description, and makes a real attempt to find where to buy it online — then tucks the link into a note for whenever you're ready.",
  },
  {
    icon: IconPin,
    title: "Every photo, pinned to its place",
    body: "Each shot quietly remembers exactly where you took it. Where you parked, the house you toured, that shelf you loved — walk back near it and your squirrel surfaces everything you snapped there.",
  },
  {
    icon: IconCycle,
    title: "It re-shuffles itself, every day",
    body: "Your squirrel sweeps your photos on its own, daily — re-sorting and re-birthing boards as your life changes. The categories aren't fixed; they grow and shift right along with what you're actually snapping.",
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
      <div
        className="absolute pointer-events-none"
        style={{
          width: 760, height: 760, top: "8%", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(255,122,26,0.14) 0%, rgba(244,166,77,0.05) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header + low-hassle lead */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: T.orange }}>
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
          <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(255,245,232,0.74)" }}>
            Here&rsquo;s the part nothing else does. Keep taking photos exactly like you already do —
            receipts, a parking spot, a flyer, a price tag — no special app to open, no extra step.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,245,232,0.74)" }}>
            Then, whenever you get a minute — lying in bed at the end of the day — open Squirrel Brain
            and it&rsquo;s already pulled in everything new and{" "}
            <strong style={{ color: "#fff5e8" }}>laid it out for you to tick: keep this one, skip that one.</strong>{" "}
            The keepers get filed into the right board automatically. The rest stay in your camera roll,
            untouched. That&rsquo;s the whole effort.
          </p>
        </motion.div>

        {/* Phone + capabilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <PhoneShot
                src="/assets/screens/pix-wall-v2.webp"
                alt="Squirrel Brain Pix board wall — auto-built boards and a live location banner showing photos taken nearby"
                width={320}
              />
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2"
                style={{ background: T.orange, boxShadow: "0 8px 24px rgba(255,122,26,0.4)" }}
              >
                <span className="text-xs font-bold text-white">It built every one of these boards for you</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="flex items-start gap-4 rounded-2xl p-4"
                style={{ background: "rgba(255,245,232,0.04)", border: "1px solid rgba(255,245,232,0.09)" }}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.08 }}
              >
                <span
                  className="flex-shrink-0 flex items-center justify-center rounded-xl"
                  style={{ width: 44, height: 44, background: "rgba(255,122,26,0.13)" }}
                  aria-hidden="true"
                >
                  {cap.icon}
                </span>
                <div>
                  <h3 className="font-display font-bold mb-1" style={{ fontSize: "1.05rem", color: "#fff5e8" }}>
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,245,232,0.6)" }}>{cap.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-center mt-14 lg:mt-16 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,245,232,0.7)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          You never file a thing. You never name a folder. You just keep taking photos like you already do —{" "}
          <strong style={{ color: T.orange }}>and your squirrel quietly turns them into something you can actually use.</strong>
        </motion.p>
      </div>
    </section>
  );
}
