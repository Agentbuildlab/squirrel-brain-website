"use client";

// ── Segment doors — the "which busy are you?" experiment ────────────────────
// One site, one promise (the callback), many kinds of busy. Each door routes to
// the matching SEO landing page (which carries its own copy + the same waitlist
// form), and fires a PostHog `segment_door_click` event so we can measure which
// segment actually engages and converts — per-door clicks here, per-page
// signups via `waitlist_signup.source_path`. This answers "should SB be
// separate apps?" with data instead of a guess.

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import posthog from "posthog-js";
import { T } from "@/components/v2/PhoneKit";

type Door = {
  segment: string; // PostHog event property — stable id, don't rename casually
  href: string;
  label: string; // short category tag shown where the emoji used to be
  title: string;
  line: string;
  accent: string;
};

const DOORS: Door[] = [
  {
    segment: "secondbrain",
    href: "/second-brain-app",
    label: "Second Brain",
    title: "My brain never shuts off",
    line: "Dump every thought the second it hits — it files itself.",
    accent: T.pastelPurple,
  },
  {
    segment: "parents",
    href: "/reminder-app-for-parents",
    label: "For Parents",
    title: "Running the whole household",
    line: "Forms, practices, meds, snack day — snapped once, never dropped.",
    accent: T.pastelBlue,
  },
  {
    segment: "faith",
    href: "/daily-pep-talk-call-app",
    label: "Daily Encouragement",
    title: "Start my day encouraged",
    line: "A real morning call — a pep talk, a verse, a word that lands.",
    accent: T.pastelYellow,
  },
  {
    segment: "field",
    href: "/reminder-app-for-field-service",
    label: "Field Work",
    title: "On job sites all day",
    line: "Snap it with gloves on. GPS-stamped proof you were there.",
    accent: T.pastelPeach,
  },
  {
    segment: "sales",
    href: "/reminder-app-for-sales-reps",
    label: "Sales",
    title: "Juggling deals & follow-ups",
    line: "Say it after the meeting — it calls you before the next one.",
    accent: T.pastelGreen,
  },
  {
    segment: "ai",
    href: "/mcp",
    label: "AI Agents",
    title: "I want my AI to call me",
    line: "Your agents file, remind — and ring your actual phone, over MCP.",
    accent: T.pastelGreen,
  },
];

function DoorCard({ door, i, inView }: { door: Door; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={door.href}
        onClick={() => posthog.capture("segment_door_click", { segment: door.segment })}
        className="group flex flex-col h-full rounded-2xl p-5 lg:p-6 transition-transform hover:-translate-y-1"
        style={{ background: T.card, border: `1px solid ${T.border}`, boxShadow: "0 2px 12px rgba(26,18,8,0.05)" }}
      >
        <span
          className="inline-flex items-center self-start rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wide mb-3"
          style={{ background: door.accent, color: T.text }}
        >
          {door.label}
        </span>
        <span className="font-display font-extrabold text-ink text-lg leading-snug">
          {door.title}
        </span>
        <span className="mt-1.5 text-sm leading-relaxed" style={{ color: T.textSub }}>
          {door.line}
        </span>
        <span
          className="mt-3 text-xs font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all"
          style={{ color: T.orange }}
        >
          See it your way
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

export default function SegmentDoors() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: T.bg }}
      aria-labelledby="doors-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 lg:mb-14"
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: T.orange }}>
            One squirrel, your kind of busy
          </p>
          <h2
            id="doors-heading"
            className="font-display font-extrabold text-ink leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.6vw, 3rem)" }}
          >
            What&rsquo;s filling <span style={{ color: T.orange }}>your</span> brain?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {DOORS.map((door, i) => (
            <DoorCard key={door.segment} door={door} i={i} inView={inView} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-8 text-sm"
          style={{ color: T.textSub }}
        >
          Just want to watch it work?{" "}
          <Link
            href="/demos"
            className="font-bold underline underline-offset-4 hover:opacity-80"
            style={{ color: T.orange }}
            onClick={() => posthog.capture("segment_door_click", { segment: "demos" })}
          >
            See the demo films
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
