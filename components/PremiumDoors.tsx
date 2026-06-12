"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/FadeIn";

const DOORS = [
  {
    href: "/work",
    label: "For Work",
    headline: "I work in the field",
    sub: "Voice debriefs between stops. GPS-stamped proof photos. Follow-ups that ring your phone.",
    imageSrc: "/brand/treehouse_banner.webp",
    imageAlt: "Field professional working outdoors",
    accent: "#FF7A1A",
    accentBg: "rgba(255,122,26,0.12)",
    overlay: "linear-gradient(135deg, rgba(255,122,26,0.7) 0%, rgba(26,18,8,0.85) 100%)",
    quiet: false,
  },
  {
    href: "/family",
    label: "For Family",
    headline: "I run the family",
    sub: "Snap a soccer schedule. Every game, every alarm, auto-extracted. Receipts, meds, school docs — organised.",
    imageSrc: "/brand/squirrel_treehouse.webp",
    imageAlt: "Family home in a treehouse setting",
    accent: "#3B82F6",
    accentBg: "rgba(59,130,246,0.12)",
    overlay: "linear-gradient(135deg, rgba(59,130,246,0.6) 0%, rgba(26,18,8,0.85) 100%)",
    quiet: false,
  },
  {
    href: "/demos",
    label: "Watch it Work",
    headline: "Watch it work",
    sub: "Short clips showing voice-to-alarm, receipt scanning, parking pin, and more. No sign-up needed.",
    imageSrc: "/brand/treehouse_banner.webp",
    imageAlt: "App demo reel",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.12)",
    overlay: "linear-gradient(135deg, rgba(124,58,237,0.6) 0%, rgba(26,18,8,0.88) 100%)",
    quiet: false,
  },
  {
    href: "/mcp",
    label: "Developers & AI Agents",
    headline: "Developers & agents",
    sub: "24 MCP tools. Full REST API. Build on top of Squirrel Brain or connect your AI agent to real-world reminders.",
    imageSrc: null,
    imageAlt: null,
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.08)",
    overlay: null,
    quiet: true,
  },
];

// Arrow icon with hover animation
function Arrow({ color }: { color: string }) {
  return (
    <motion.div
      className="flex items-center gap-1 text-sm font-bold mt-6"
      style={{ color }}
      whileHover={{ x: 4 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <span>Explore</span>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path
          d="M3.5 9h11M10 4.5l4.5 4.5-4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}

function DoorTile({ door, index }: { door: (typeof DOORS)[0]; index: number }) {
  const reduceMotion = useReducedMotion();

  if (door.quiet) {
    // Developer door: quieter code-style aesthetic
    return (
      <FadeIn delay={index * 0.08}>
        <Link
          href={door.href}
          aria-label={`${door.label}: ${door.headline}`}
          className="group block h-full"
        >
          <motion.div
            className="relative h-full rounded-3xl overflow-hidden p-8 flex flex-col"
            style={{
              background: "#f4f9f7",
              border: "1px solid rgba(5,150,105,0.2)",
              minHeight: 280,
            }}
            whileHover={
              reduceMotion
                ? {}
                : {
                    y: -4,
                    borderColor: "rgba(5,150,105,0.4)",
                    boxShadow: "0 20px 40px rgba(5,150,105,0.12)",
                  }
            }
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Code aesthetic lines */}
            <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none" aria-hidden="true">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="h-px w-full"
                  style={{
                    background: `rgba(5,150,105,${0.3 + (i % 3) * 0.2})`,
                    marginTop: i === 0 ? 60 : 24,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 flex-1 flex flex-col">
              <div
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1.5 rounded-full mb-5 w-fit"
                style={{ background: "rgba(5,150,105,0.1)", color: "#059669" }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3.5 4.5L1 6l2.5 1.5M8.5 4.5L11 6l-2.5 1.5M6.5 3l-1 6" stroke="#059669" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
                {door.label}
              </div>
              <h3 className="font-display text-2xl font-bold text-ink mb-3">{door.headline}</h3>
              <p className="text-sm text-muted leading-relaxed flex-1">{door.sub}</p>
              <Arrow color="#059669" />
            </div>
          </motion.div>
        </Link>
      </FadeIn>
    );
  }

  return (
    <FadeIn delay={index * 0.08}>
      <Link
        href={door.href}
        aria-label={`${door.label}: ${door.headline}`}
        className="group block h-full"
      >
        <motion.div
          className="relative h-full rounded-3xl overflow-hidden flex flex-col justify-end"
          style={{ minHeight: 380 }}
          whileHover={
            reduceMotion
              ? {}
              : {
                  y: -6,
                  boxShadow: `0 32px 64px ${door.accent}30, 0 8px 24px rgba(0,0,0,0.12)`,
                }
          }
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Background image with scale on hover */}
          {door.imageSrc && (
            <motion.div
              className="absolute inset-0"
              whileHover={reduceMotion ? {} : { scale: 1.04 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={door.imageSrc}
                alt={door.imageAlt ?? ""}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </motion.div>
          )}

          {/* Gradient overlay */}
          {door.overlay && (
            <div
              className="absolute inset-0"
              style={{ background: door.overlay }}
              aria-hidden="true"
            />
          )}

          {/* Content */}
          <div className="relative z-10 p-8">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: door.accent === "#3B82F6" ? "#93c5fd" : "rgba(255,240,230,0.8)" }}
            >
              {door.label}
            </p>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-tight">
              {door.headline}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed max-w-xs mb-2">{door.sub}</p>
            <Arrow color="white" />
          </div>
        </motion.div>
      </Link>
    </FadeIn>
  );
}

export default function PremiumDoors() {
  return (
    <section className="py-24" aria-labelledby="doors-heading">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeIn>
          <p className="text-xs font-bold tracking-widest uppercase text-accent/70 mb-4">
            Find your fit
          </p>
          <h2
            id="doors-heading"
            className="font-display font-extrabold text-ink mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            What kind of forgetter are you?
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-14 max-w-xl">
            Squirrel Brain fits your life. Pick the story that sounds like yours.
          </p>
        </FadeIn>

        {/* 2x2 grid — last tile spans if odd */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {DOORS.map((door, i) => (
            <DoorTile key={door.href} door={door} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
