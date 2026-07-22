"use client";

/**
 * Pix — the repositioning (2026-07-22, Adam).
 *
 * NOT a camera-roll organizer / photo dump. The pitch is: SOME photos are
 * really to-dos in disguise — the pill bottle, the receipt, the flyer, the
 * thing on a shelf. You snap those to remember them, then they vanish (research:
 * ~70% of photos are never opened again). Squirrel Brain is for THAT photo: it
 * reads it and turns it into the reminder / alarm / call / note / link, then
 * hands it back at the right moment — and leaves the rest of your camera roll
 * alone. The heart of the section is concrete examples across work/family/you.
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { PhoneShot, T } from "@/components/v2/PhoneKit";

// ── Example scenarios: "Snap X → it becomes Y" ──────────────────────────────
type Lane = "work" | "family" | "you";
type Example = { snap: string; becomes: string };

const LANES: { key: Lane; label: string; color: string; items: Example[] }[] = [
  {
    key: "work",
    label: "For work",
    color: T.orange,
    items: [
      { snap: "The whiteboard after a meeting", becomes: "your follow-ups, pulled out as a task list" },
      { snap: "A business card", becomes: "a saved contact + a nudge to follow up this week" },
      { snap: "An invoice with a due date", becomes: "an alarm two days before it's due" },
      { snap: "The serial number on a broken part", becomes: "saved for the warranty claim and the reorder" },
    ],
  },
  {
    key: "family",
    label: "For family",
    color: "#3fae6e",
    items: [
      { snap: "A pill bottle", becomes: "a call when it's time to take it, and a nudge to refill" },
      { snap: "The permission slip on the fridge", becomes: "an alarm the night before it's due" },
      { snap: "The doctor's after-visit summary", becomes: "the follow-up on your calendar, meds as reminders" },
      { snap: "A birthday party invite", becomes: "the date on your calendar + “grab a gift” three days out" },
    ],
  },
  {
    key: "you",
    label: "For you",
    color: "#F4A64D",
    items: [
      { snap: "A wine you loved at dinner", becomes: "saved — with where to buy it again" },
      { snap: "Shoes in a store window", becomes: "identified and found online, tucked into LinkStash" },
      { snap: "A book on a friend's shelf", becomes: "added to your read-next list" },
      { snap: "The Wi-Fi password at the rental", becomes: "saved — one tap to find it later" },
    ],
  },
];

// ── What the squirrel does with the one that matters ────────────────────────
const sc = { stroke: T.orange, strokeWidth: 1.7, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const IconRead = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M12 5c-3-2.2-6-1.8-8 0v12c2-1.8 5-2.2 8 0 3-2.2 6-1.8 8 0V5c-2-1.8-5-2.2-8 0z" /><path {...sc} d="M12 5v14" opacity="0.55" /></svg>
);
const IconRing = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" /><path {...sc} d="M10.2 20a2 2 0 003.6 0" /></svg>
);
const IconFind = (
  <svg width="22" height="22" viewBox="0 0 24 24"><circle {...sc} cx="10.5" cy="10.5" r="6" /><path {...sc} d="M15 15l5 5" /></svg>
);
const IconPin = (
  <svg width="22" height="22" viewBox="0 0 24 24"><path {...sc} d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" /><circle {...sc} cx="12" cy="10" r="2.4" /></svg>
);

const DOES: { icon: ReactNode; title: string; body: string }[] = [
  { icon: IconRead, title: "It reads what's in the photo", body: "The date on the flyer, the name on the bottle, the price on the tag. Your squirrel understands the photo — you don't type a thing." },
  { icon: IconRing, title: "It turns dates into a real nudge", body: "Anything with a when becomes a reminder, an alarm, or — for the one you truly can't miss — a phone call in your squirrel's own voice." },
  { icon: IconFind, title: "It knows what a thing is", body: "Snap an object and it works out what it is, writes a clear description, and makes a real attempt to find where to buy it — saved as a link for later." },
  { icon: IconPin, title: "It's filed and findable", body: "Each keeper lands on the right board, GPS-stamped with where and when — so it's there the second you need it, not lost in ten thousand others." },
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
          width: 760, height: 760, top: "6%", left: "50%", transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(255,122,26,0.14) 0%, rgba(244,166,77,0.05) 45%, transparent 70%)",
          filter: "blur(70px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header — the reframe */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-16"
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
            Some photos aren&rsquo;t memories.{" "}
            <span style={{ color: T.orange }}>They&rsquo;re to-dos.</span>
          </h2>
          <p className="text-lg leading-relaxed mb-4" style={{ color: "rgba(255,245,232,0.74)" }}>
            The receipt. The pill bottle. The flyer on the fridge. You snap these to{" "}
            <em>remember</em> them &mdash; and then they vanish into a camera roll where{" "}
            <strong style={{ color: "#fff5e8" }}>about 70% of photos are never opened again.</strong>{" "}
            The problem was never that you didn&rsquo;t capture it. It&rsquo;s that the one that mattered got buried.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,245,232,0.74)" }}>
            Squirrel Brain is for <strong style={{ color: "#fff5e8" }}>that</strong> photo. Snap it and your squirrel
            reads it, works out what it&rsquo;s for, and turns it into the{" "}
            <strong style={{ color: "#fff5e8" }}>reminder, the alarm, the call, or the link</strong> &mdash; then hands
            it back exactly when you need it.
          </p>
          <p className="mt-5 text-sm inline-block rounded-full px-4 py-2" style={{ color: "rgba(255,245,232,0.6)", background: "rgba(255,245,232,0.05)", border: "1px solid rgba(255,245,232,0.1)" }}>
            Not a place to dump every photo &mdash; the other 4,000 pics stay right where they are.
          </p>
        </motion.div>

        {/* The examples — the heart of the section */}
        <motion.p
          className="text-center font-display font-bold mb-8"
          style={{ fontSize: "1.1rem", color: "#fff5e8" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Snap it &rarr; it becomes something that actually works:
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-16 lg:mb-20">
          {LANES.map((lane, li) => (
            <motion.div
              key={lane.key}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + li * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span style={{ width: 8, height: 8, borderRadius: 99, background: lane.color }} aria-hidden="true" />
                <h3 className="text-xs font-bold tracking-widest uppercase" style={{ color: lane.color }}>
                  {lane.label}
                </h3>
              </div>
              <ul className="flex flex-col gap-3">
                {lane.items.map((ex) => (
                  <li
                    key={ex.snap}
                    className="rounded-2xl p-4"
                    style={{ background: "rgba(255,245,232,0.04)", border: "1px solid rgba(255,245,232,0.09)" }}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className="flex-shrink-0 flex items-center justify-center rounded-lg mt-0.5"
                        style={{ width: 30, height: 30, background: `${lane.color}22` }}
                        aria-hidden="true"
                      >
                        {/* camera glyph */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={lane.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 8.5h3l1.3-1.8h7.4L17 8.5h3a1 1 0 011 1V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5a1 1 0 011-1z" />
                          <circle cx="12" cy="13" r="3" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-semibold leading-snug" style={{ color: "#fff5e8" }}>
                          {ex.snap}
                        </p>
                        <p className="text-sm leading-snug mt-1" style={{ color: "rgba(255,245,232,0.62)" }}>
                          <span style={{ color: lane.color, fontWeight: 700 }}>&rarr;</span> {ex.becomes}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* What the squirrel does with the one that matters */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              {/* BEFORE — the one that mattered, buried in the mess */}
              <motion.div
                className="hidden lg:block absolute"
                style={{ width: 150, top: -34, left: -96, zIndex: 1, transform: "rotate(-7deg)" }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.25 }}
                aria-hidden="true"
              >
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{ border: "4px solid #2a2018", boxShadow: "0 16px 34px rgba(0,0,0,0.45)" }}
                >
                  <Image src="/assets/camera_roll_mess.webp" alt="" width={560} height={932} className="w-full h-auto" />
                  <div className="absolute top-1.5 left-1.5 rounded-md px-2 py-0.5" style={{ background: "rgba(0,0,0,0.6)" }}>
                    <span className="text-[10px] font-bold tracking-wide" style={{ color: "rgba(255,245,232,0.92)" }}>BURIED</span>
                  </div>
                </div>
              </motion.div>

              <PhoneShot
                src="/assets/screens/pix-wall-v2.webp"
                alt="Squirrel Brain Pix wall — the photos worth keeping, filed onto boards and pinned to where they were taken"
                width={320}
                style={{ position: "relative", zIndex: 2 }}
              />
              <div
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2"
                style={{ background: T.orange, boxShadow: "0 8px 24px rgba(255,122,26,0.4)", zIndex: 3 }}
              >
                <span className="text-xs font-bold text-white">The keepers &mdash; filed, findable, done</span>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-3">
            {DOES.map((cap, i) => (
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
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Your camera roll stays yours. Squirrel Brain just makes sure the photos that were{" "}
          <strong style={{ color: T.orange }}>really reminders</strong> actually remind you.
        </motion.p>
      </div>
    </section>
  );
}
