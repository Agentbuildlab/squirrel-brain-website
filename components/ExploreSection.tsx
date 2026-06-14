"use client";

/**
 * Explore cards — big, prominent "little worlds" for the three destination
 * pages (For Work · For Family · Watch the Demos). Pricing stays a small nav
 * link; these three are made obvious and clickable so people dive in.
 */

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { T } from "@/components/v2/PhoneKit";

interface Card {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  tint: string;
  accent: string;
  icon: ReactNode;
}

const CARDS: Card[] = [
  {
    href: "/work",
    eyebrow: "For Work",
    title: "On the move all day",
    body: "Reps, techs, contractors — capture every job detail, get GPS photo proof, import Outlook, and never miss a follow-up.",
    tint: "#FFF0E6",
    accent: T.orange,
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 7V5.5A1.5 1.5 0 019.5 4h5A1.5 1.5 0 0116 5.5V7M3 12h18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/family",
    eyebrow: "For Family",
    title: "The whole household",
    body: "Snap the soccer schedule, receipts, permission slips, and meds. Two emails a day keep the family load from slipping.",
    tint: "#E8F1FF",
    accent: "#2a6aee",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.5" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 19c0-2.8 2.2-5 5-5s5 2.2 5 5M14 18.5c.2-2.3 2-4 4-4s3.6 1.4 4 3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    href: "/demos",
    eyebrow: "Watch the Demos",
    title: "See it actually work",
    body: "Short, honest clips of Squirrel Brain doing its thing — voice to calendar, receipt scans, the Burrow, Meeting Mode and more.",
    tint: "#F1EAFE",
    accent: "#7c4ddb",
    icon: (
      <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="M10.5 9.5l4 2.5-4 2.5v-5z" fill="currentColor" />
      </svg>
    ),
  },
];

function ExploreCard({ card, i, inView }: { card: Card; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link
        href={card.href}
        className="group relative flex flex-col h-full rounded-3xl p-8 lg:p-9 transition-all duration-200 hover:-translate-y-1.5"
        style={{
          background: card.tint,
          border: `1.5px solid ${card.accent}22`,
          boxShadow: "0 8px 28px rgba(26,18,8,0.07)",
          minHeight: 320,
        }}
      >
        <div
          className="flex items-center justify-center rounded-2xl mb-6"
          style={{ width: 64, height: 64, background: "#fff", color: card.accent, boxShadow: `0 6px 18px ${card.accent}26` }}
          aria-hidden="true"
        >
          {card.icon}
        </div>
        <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: card.accent }}>
          {card.eyebrow}
        </p>
        <h3 className="font-display font-extrabold text-ink mb-3" style={{ fontSize: "clamp(1.5rem, 2.4vw, 1.9rem)", lineHeight: 1.1 }}>
          {card.title}
        </h3>
        <p className="text-base text-muted leading-relaxed mb-6 flex-1">{card.body}</p>
        <span className="inline-flex items-center gap-2 font-bold text-base" style={{ color: card.accent }}>
          Take a look
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M4 10h11M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </Link>
    </motion.div>
  );
}

export default function ExploreSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-20 lg:py-28" style={{ background: T.bg }} aria-labelledby="explore-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: `${T.orange}cc` }}>
            Dig in
          </p>
          <h2
            id="explore-heading"
            className="font-display font-extrabold text-ink text-balance"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}
          >
            Three ways to go deeper.
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Pick the one that fits your life and have a real look around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {CARDS.map((card, i) => (
            <ExploreCard key={card.href} card={card} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
