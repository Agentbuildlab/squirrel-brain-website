"use client";

// The full-screen "incoming call from your squirrel" screen — the single most
// important visual on the site (the moat, shown not told). Extracted from
// CallSection so the HERO can ring the same phone. Pure CSS/Framer — no video,
// so the UI never degrades and it costs nothing to iterate.

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { PulseRing } from "@/components/v2/PhoneKit";

export default function CallScreen({
  transcript,
  highlight,
}: {
  /** The spoken line inside the transcript bubble. */
  transcript?: React.ReactNode;
  /** Optional short highlight chip text under the caller name. */
  highlight?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "linear-gradient(160deg, #1a2b1a 0%, #0e160e 40%, #100a02 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 16px 24px",
        position: "relative",
        overflow: "hidden",
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(63,174,110,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Top: status */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>
          9:41
        </div>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>
          Squirrel Brain
        </div>
      </div>

      {/* Middle: caller info + pulse */}
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", zIndex: 1 }}
      >
        {/* Squirrel avatar with pulse */}
        <PulseRing color="#3fae6e" size={80}>
          <Image
            src="/assets/squirrel_logo.png"
            alt="Your squirrel — Squirrel Brain"
            width={56}
            height={56}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </PulseRing>

        <div style={{ textAlign: "center" }}>
          <div
            style={{ fontSize: 20, fontWeight: 800, color: "white", letterSpacing: -0.3, marginBottom: 2 }}
          >
            Scuttle
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
            Squirrel Brain
          </div>
        </div>

        {/* "Incoming Call" tag */}
        <div
          style={{
            background: "rgba(63,174,110,0.18)",
            border: "1px solid rgba(63,174,110,0.3)",
            borderRadius: 999,
            padding: "4px 12px",
          }}
        >
          <span style={{ fontSize: 9, fontWeight: 700, color: "#3fae6e", letterSpacing: 0.6 }}>
            {highlight ?? "INCOMING CALL · 0:04"}
          </span>
        </div>

        {/* Transcript bubble */}
        <motion.div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            padding: "8px 12px",
            maxWidth: 200,
          }}
          animate={reduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.75)", lineHeight: 1.5, textAlign: "center" }}>
            {transcript ?? (
              <>
                &quot;Hey — your dentist appointment is in{" "}
                <span style={{ color: "#e8a84a", fontWeight: 700 }}>30 minutes</span>.
                Don&apos;t forget!&quot;
              </>
            )}
          </p>
        </motion.div>
      </div>

      {/* Bottom: call action buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Decline */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#ef4444",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3.5 5.5c0-.55.45-1 1-1h1.25a.5.5 0 01.49.38l.5 2a.5.5 0 01-.16.49l-.8.67c.57 1.15 1.53 2.11 2.68 2.68l.67-.8a.5.5 0 01.49-.16l2 .5a.5.5 0 01.38.49V12a1 1 0 01-1 1C6.35 13 3.5 10.15 3.5 5.5z"
                fill="white"
              />
              <path d="M15 3L3 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>Decline</span>
        </div>

        {/* Accept */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#3fae6e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 0 8px rgba(63,174,110,0.15)",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3 5.5C3 4.7 3.7 4 4.5 4h1.75a.75.75 0 01.73.568l.75 3a.75.75 0 01-.232.738L6.25 9.52c.85 1.73 2.3 3.18 4.03 4.03l1.21-1.24a.75.75 0 01.74-.233l3 .75a.75.75 0 01.57.73V15a1.5 1.5 0 01-1.5 1.5C7.23 16.5 3 12.27 3 7.5z"
                fill="white"
              />
            </svg>
          </div>
          <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>Accept</span>
        </div>
      </div>
    </div>
  );
}

// ── RingingPhone: dark bezel + shake-on-ring wrapper around CallScreen ──────
// Shared by the hero and anywhere else that needs the phone visibly ringing.

export function RingingPhone({
  width = 240,
  transcript,
  glow = "rgba(63,174,110,0.22)",
}: {
  width?: number;
  transcript?: React.ReactNode;
  glow?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      style={{
        width,
        borderRadius: width * 0.183,
        background: "#1a1208",
        padding: `${Math.round(width * 0.05)}px ${Math.round(width * 0.033)}px`,
        boxShadow: `0 0 60px ${glow}, 0 48px 80px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.08)`,
        position: "relative",
      }}
    >
      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                rotate: [0, -2, 2, -2, 1, 0],
                x: [0, -2, 2, -2, 1, 0],
              }
        }
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatDelay: 2.5,
          ease: "easeInOut",
        }}
      >
        {/* Dynamic island */}
        <div
          style={{
            width: Math.round(width * 0.358),
            height: Math.round(width * 0.1),
            background: "#0e0a02",
            borderRadius: 999,
            margin: `0 auto ${Math.round(width * 0.033)}px`,
          }}
          aria-hidden="true"
        />
        {/* Screen */}
        <div
          style={{
            borderRadius: width * 0.15,
            overflow: "hidden",
            aspectRatio: "9 / 19.5",
            position: "relative",
          }}
        >
          <CallScreen transcript={transcript} />
        </div>
        {/* Home bar */}
        <div
          style={{
            width: Math.round(width * 0.3),
            height: 4,
            borderRadius: 2,
            background: "rgba(255,255,255,0.15)",
            margin: `${Math.round(width * 0.033)}px auto 0`,
          }}
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}
