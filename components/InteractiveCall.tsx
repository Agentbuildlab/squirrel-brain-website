"use client";

// The interactive "Scuttle calls you — right in the browser" demo.
//
// WHY this instead of a real phone call: a real PSTN call to a stranger's phone
// rings as a GENERIC call — it can't show Squirrel Brain's branded green
// incoming-call screen (that only exists inside the installed app). This lets a
// visitor who hasn't downloaded anything tap Answer and hear Scuttle's real voice
// (OpenAI "nova", the same voice the app uses) on the actual green screen — no
// phone number, no signup, no cost. It reuses the same <CallScreen> visual the
// hero uses, so it's pixel-consistent with the rest of the site.

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import CallScreen from "@/components/v2/CallScreen";
import { PulseRing } from "@/components/v2/PhoneKit";

const AUDIO_SRC = "/audio/scuttle-demo.mp3";

// What Scuttle says (shown as a caption so it reads even muted / for a11y).
const GREETING =
  "Hey — it's Scuttle, from Squirrel Brain. You just answered, so let me show you what I actually do. When you tell me something matters — a form that's due, your meds, a meeting — I hold onto it, and I ring you like this, the moment it counts. No app to open, no notification to miss. That's the whole idea. Talk soon!";

type Status = "ringing" | "connected" | "ended";

function fmt(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

// A small decorative equalizer that signals "audio is playing".
function Waveform({ animate }: { animate: boolean }) {
  const bars = [0.5, 0.9, 0.35, 1, 0.6, 0.85, 0.4, 0.95, 0.55];
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 4, height: 34 }} aria-hidden="true">
      {bars.map((peak, i) => (
        <motion.div
          key={i}
          style={{ width: 4, borderRadius: 2, background: "#3fae6e", height: 34 }}
          initial={{ scaleY: 0.25 }}
          animate={animate ? { scaleY: [0.25, peak, 0.35, peak * 0.8, 0.25] } : { scaleY: 0.3 }}
          transition={animate ? { duration: 0.9 + (i % 3) * 0.25, repeat: Infinity, ease: "easeInOut", delay: i * 0.06 } : {}}
        />
      ))}
    </div>
  );
}

// The "connected / on the line" screen (green, matches CallScreen's palette).
function ConnectedScreen({
  elapsed,
  playing,
  onHangUp,
  transcript,
}: {
  elapsed: number;
  playing: boolean;
  onHangUp: () => void;
  transcript: string;
}) {
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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 30%, rgba(63,174,110,0.18) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Top: caller + live timer */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.5)", fontWeight: 500, marginBottom: 4 }}>
          Squirrel Brain
        </div>
        <div style={{ fontSize: 12, fontWeight: 700, color: "#3fae6e", letterSpacing: 0.4 }}>
          {fmt(elapsed)}
        </div>
      </div>

      {/* Middle: avatar + name + waveform + caption */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#3fae6e",
            boxShadow: playing ? "0 0 0 8px rgba(63,174,110,0.18), 0 4px 24px rgba(63,174,110,0.5)" : "0 4px 20px rgba(63,174,110,0.4)",
            transition: "box-shadow 0.4s ease",
          }}
        >
          <Image
            src="/assets/squirrel_logo.png"
            alt="Scuttle — your squirrel"
            width={56}
            height={56}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: "white", letterSpacing: -0.3, marginBottom: 2 }}>
            Scuttle
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>
            {playing ? "on the line…" : "call ended"}
          </div>
        </div>

        <Waveform animate={playing} />

        {/* Live caption of what Scuttle is saying (readable even muted). */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 12,
            padding: "8px 12px",
            maxWidth: 210,
          }}
        >
          <p style={{ fontSize: 9, color: "rgba(255,255,255,0.8)", lineHeight: 1.55, textAlign: "center", margin: 0 }}>
            &ldquo;{transcript}&rdquo;
          </p>
        </div>
      </div>

      {/* Bottom: hang up */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <button
          onClick={onHangUp}
          aria-label="Hang up"
          style={{
            width: 48,
            height: 48,
            borderRadius: 999,
            background: "#ef4444",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 4px 16px rgba(239,68,68,0.4)",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
            <path
              d="M3.5 5.5c0-.55.45-1 1-1h1.25a.5.5 0 01.49.38l.5 2a.5.5 0 01-.16.49l-.8.67c.57 1.15 1.53 2.11 2.68 2.68l.67-.8a.5.5 0 01.49-.16l2 .5a.5.5 0 01.38.49V12a1 1 0 01-1 1C6.35 13 3.5 10.15 3.5 5.5z"
              fill="white"
            />
            <path d="M15 3L3 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
        <span style={{ fontSize: 8, color: "rgba(255,255,255,0.5)" }}>Hang up</span>
      </div>
    </div>
  );
}

export default function InteractiveCall({
  width = 250,
  audioSrc = AUDIO_SRC,
  transcript = GREETING,
}: {
  width?: number;
  /** The mp3 to play on answer (per-section themed voice). */
  audioSrc?: string;
  /** The words spoken — shown as the on-call caption; must match the audio. */
  transcript?: string;
}) {
  const reduceMotion = useReducedMotion();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [status, setStatus] = useState<Status>("ringing");
  const [elapsed, setElapsed] = useState(0);

  // Live call timer — runs only while connected + playing.
  useEffect(() => {
    if (status !== "connected") return;
    const id = setInterval(() => setElapsed((e) => e + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  const answer = useCallback(() => {
    setElapsed(0);
    setStatus("connected");
    const a = audioRef.current;
    if (a) {
      a.currentTime = 0;
      // Playing is initiated by a user click, so autoplay policies allow it;
      // still guard the promise so a rejection can't surface as an error.
      void a.play().catch(() => {});
    }
  }, []);

  const hangUp = useCallback(() => {
    const a = audioRef.current;
    if (a) a.pause();
    setStatus("ended");
  }, []);

  const playing = status === "connected";

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
      {/* Unmistakable "this is a tappable demo" badge — only while ringing. */}
      {status === "ringing" && (
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "#3fae6e",
            color: "white",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 0.6,
            textTransform: "uppercase",
            padding: "6px 14px",
            borderRadius: 999,
            boxShadow: "0 4px 16px rgba(63,174,110,0.45)",
          }}
        >
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "white" }} aria-hidden="true" />
          👆 Tap the phone to play the demo
        </motion.div>
      )}

      {/* Phone: dark bezel + glow; shakes only while ringing. */}
      <div
        style={{
          width,
          borderRadius: width * 0.183,
          background: "#1a1208",
          padding: `${Math.round(width * 0.05)}px ${Math.round(width * 0.033)}px`,
          boxShadow: "0 0 60px rgba(63,174,110,0.22), 0 48px 80px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.08)",
          position: "relative",
        }}
      >
        <motion.div
          animate={status === "ringing" && !reduceMotion ? { rotate: [0, -2, 2, -2, 1, 0], x: [0, -2, 2, -2, 1, 0] } : {}}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2.5, ease: "easeInOut" }}
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
          {/* Screen — the WHOLE phone is tappable to play the demo (ringing state). */}
          <div
            onClick={status === "ringing" ? answer : undefined}
            role={status === "ringing" ? "button" : undefined}
            tabIndex={status === "ringing" ? 0 : undefined}
            aria-label={status === "ringing" ? "Tap the phone to play the demo" : undefined}
            onKeyDown={
              status === "ringing"
                ? (e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      answer();
                    }
                  }
                : undefined
            }
            style={{
              borderRadius: width * 0.15,
              overflow: "hidden",
              aspectRatio: "9 / 19.5",
              position: "relative",
              cursor: status === "ringing" ? "pointer" : "default",
            }}
          >
            {status === "ringing" ? (
              <CallScreen highlight="INCOMING CALL" transcript={<>Tap anywhere to play the demo.</>} />
            ) : (
              <ConnectedScreen elapsed={elapsed} playing={playing} onHangUp={hangUp} transcript={transcript} />
            )}
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

      {/* Caption / control below the phone */}
      <div style={{ textAlign: "center", minHeight: 44 }}>
        {status === "ringing" && (
          <motion.button
            onClick={answer}
            animate={reduceMotion ? {} : { scale: [1, 1.04, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 font-bold rounded-full"
            style={{
              background: "#3fae6e",
              color: "white",
              fontSize: 15,
              padding: "12px 24px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 20px rgba(63,174,110,0.4)",
            }}
          >
            ▶ Play the demo
          </motion.button>
        )}
        {status === "ended" && (
          <button
            onClick={answer}
            className="inline-flex items-center gap-2 font-bold rounded-full"
            style={{
              background: "rgba(63,174,110,0.15)",
              color: "#3fae6e",
              fontSize: 14,
              padding: "10px 22px",
              border: "1px solid rgba(63,174,110,0.35)",
              cursor: "pointer",
            }}
          >
            ↺ Play it again
          </button>
        )}
        {status === "connected" && (
          <p style={{ fontSize: 13, color: "rgba(255,245,232,0.6)", margin: 0 }}>
            Scuttle&rsquo;s on the line — turn your sound on 🔊
          </p>
        )}
      </div>

      {/* The voice. Preloaded so Answer is instant. */}
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="auto"
        onEnded={() => setStatus("ended")}
      />
    </div>
  );
}
