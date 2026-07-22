"use client";

// ── The interactive TWO-WAY call demo — the homepage scroll-stopper ──────────
//
// WHY this exists: Squirrel Brain's differentiator is no longer "it leaves you a
// voicemail" — you ANSWER and actually TALK to your squirrel, a real back-and-
// forth. A monologue clip can't show that. This is a scripted MOCK of a real
// two-way call: the visitor taps what THEY want to say, and Scuttle responds —
// two distinct voices (You, orange · Scuttle, green), a live transcript, and a
// tag after each turn that names the real capability being shown. Everything it
// depicts is something the app genuinely does (scheduled mission calls, on-call
// rescheduling, recall from everything you've captured, voice-add, filed photo
// proof). No audio dependency — it reads perfectly muted (and is accessible);
// real per-turn voice can layer in later without changing the structure.

import { useCallback, useEffect, useReducer, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

// ── The script ──────────────────────────────────────────────────────────────
// A "say" beat is auto-spoken; a "choose" beat pauses for the visitor to pick
// what they say next, then splices in that branch. Tags are the on-screen proof
// pills — each maps to a REAL app capability.

type Say = { kind: "say"; by: "scuttle" | "you"; text: string; tag?: string };
type Choose = { kind: "choose"; options: { label: string; then: Say[] }[] };
type Beat = Say | Choose;

const OPENING: Beat[] = [
  {
    kind: "say",
    by: "scuttle",
    text: "Morning, Alex — it's Scuttle. You asked me to call before your 9:30 with the Hendersons. Heads up: you promised them the revised quote first.",
    tag: "A scheduled call that knows why it's calling",
  },
  {
    kind: "choose",
    options: [
      {
        label: "Move the meeting to 11",
        then: [
          { kind: "say", by: "you", text: "Push the Hendersons to eleven." },
          {
            kind: "say",
            by: "scuttle",
            text: "Done — moved to 11:00. I'll ring you at 10:30 so you walk in ready.",
            tag: "Rescheduled on the call — your calendar's already updated",
          },
        ],
      },
      {
        label: "What else is on my plate?",
        then: [
          { kind: "say", by: "you", text: "What else have I got today?" },
          {
            kind: "say",
            by: "scuttle",
            text: "Three things: the quote to the Hendersons, pick up the prescription, and Mia's recital at 6.",
            tag: "Read back from everything you've ever captured",
          },
        ],
      },
      {
        label: "Remind me to send the quote",
        then: [
          { kind: "say", by: "you", text: "Remind me to send that quote first." },
          {
            kind: "say",
            by: "scuttle",
            text: "Got it — I'll remind you to send the quote at 9:00 sharp.",
            tag: "Added a reminder — by voice, right on the call",
          },
        ],
      },
    ],
  },
  {
    kind: "say",
    by: "scuttle",
    text: "Oh — that parking receipt you snapped in the garage yesterday? Filed under Expenses, GPS-stamped with where and when. Want me to text you the photo?",
    tag: "Your snapshots become filed, searchable proof",
  },
  {
    kind: "choose",
    options: [
      {
        label: "Yes, text it to me",
        then: [
          { kind: "say", by: "you", text: "Yeah, text it over." },
          {
            kind: "say",
            by: "scuttle",
            text: "Sent. Talk soon, Alex — I'll call the moment the next thing actually matters.",
            tag: "It calls you when it counts — not another notification to ignore",
          },
        ],
      },
      {
        label: "No — I'm good, thanks",
        then: [
          { kind: "say", by: "you", text: "Nah, I'm good. Thanks, Scuttle." },
          {
            kind: "say",
            by: "scuttle",
            text: "You got it. Talk soon — I'll call the moment the next thing actually matters.",
            tag: "It calls you when it counts — not another notification to ignore",
          },
        ],
      },
    ],
  },
];

// ── Reducer: walk the script, pausing at choices ─────────────────────────────

type Bubble = { id: number; by: "scuttle" | "you"; text: string; tag?: string };
type Status = "ringing" | "live" | "ended";
type State = {
  status: Status;
  queue: Beat[];
  bubbles: Bubble[];
  choices: { label: string; then: Say[] }[] | null;
  speaking: "scuttle" | "you" | null;
  nextId: number;
};

type Action =
  | { type: "answer" }
  | { type: "advance" }
  | { type: "choose"; index: number }
  | { type: "hangup" }
  | { type: "restart" };

const initial: State = {
  status: "ringing",
  queue: [],
  bubbles: [],
  choices: null,
  speaking: null,
  nextId: 1,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "answer":
      return { ...initial, status: "live", queue: [...OPENING] };
    case "advance": {
      if (state.status !== "live" || state.choices || state.queue.length === 0) return state;
      const [next, ...rest] = state.queue;
      if (next.kind === "choose") {
        return { ...state, queue: rest, choices: next.options, speaking: null };
      }
      return {
        ...state,
        queue: rest,
        speaking: next.by,
        bubbles: [
          ...state.bubbles,
          { id: state.nextId, by: next.by, text: next.text, tag: next.tag },
        ],
        nextId: state.nextId + 1,
      };
    }
    case "choose": {
      if (!state.choices) return state;
      const picked = state.choices[action.index];
      if (!picked) return state;
      return { ...state, choices: null, queue: [...picked.then, ...state.queue], speaking: null };
    }
    case "hangup":
      return { ...state, status: "ended", choices: null, speaking: null };
    case "restart":
      return { ...initial, status: "live", queue: [...OPENING] };
    default:
      return state;
  }
}

// Rough "speaking time" so Scuttle's longer lines hold a beat before the next
// (used as the fallback timing when speech isn't available).
function speakMs(text: string): number {
  return Math.min(4600, 1100 + text.length * 42);
}

// Pick a distinct browser voice per speaker so it's a real TWO-voice call. If
// the device exposes only one voice, the speakers are still differentiated by
// the pitch/rate applied at speak time.
function chooseVoice(
  voices: SpeechSynthesisVoice[],
  by: "scuttle" | "you"
): SpeechSynthesisVoice | undefined {
  const en = voices.filter((v) => /^en/i.test(v.lang));
  const pool = en.length ? en : voices;
  if (!pool.length) return undefined;
  if (by === "scuttle") {
    return (
      pool.find((v) => /samantha|karen|moira|tessa|serena|fiona|zira|female|nova|allison/i.test(v.name)) ||
      pool.find((v) => /google us english/i.test(v.name)) ||
      pool[0]
    );
  }
  return (
    pool.find((v) => /daniel|alex|fred|arthur|david|aaron|tom|male/i.test(v.name)) ||
    pool.find((v) => /google uk english male/i.test(v.name)) ||
    pool.find((v) => v !== chooseVoice(voices, "scuttle")) ||
    pool[1] ||
    pool[0]
  );
}

// ── Small pieces ─────────────────────────────────────────────────────────────

function Waveform({ active, color }: { active: boolean; color: string }) {
  const bars = [0.5, 0.9, 0.35, 1, 0.6, 0.85, 0.4, 0.95, 0.55];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 3, height: 20 }} aria-hidden="true">
      {bars.map((peak, i) => (
        <motion.div
          key={i}
          style={{ width: 3, borderRadius: 2, background: color, height: 20 }}
          animate={active ? { scaleY: [0.3, peak, 0.4, peak * 0.8, 0.3] } : { scaleY: 0.28 }}
          transition={
            active
              ? { duration: 0.85 + (i % 3) * 0.22, repeat: Infinity, ease: "easeInOut", delay: i * 0.05 }
              : { duration: 0.2 }
          }
        />
      ))}
    </div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, padding: "2px 2px" }} aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          style={{ width: 6, height: 6, borderRadius: 99, background: "rgba(255,255,255,0.55)" }}
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

export default function TwoWayCallDemo({ width = 340 }: { width?: number }) {
  const reduceMotion = useReducedMotion();
  const [state, dispatch] = useReducer(reducer, initial);
  const scrollRef = useRef<HTMLDivElement>(null);
  const voicesRef = useRef<SpeechSynthesisVoice[]>([]);
  const speechOn = typeof window !== "undefined" && "speechSynthesis" in window;

  // The device's TTS voices populate asynchronously — load + keep them fresh.
  useEffect(() => {
    if (!speechOn) return;
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      try {
        window.speechSynthesis.cancel();
      } catch {}
    };
  }, [speechOn]);

  const lastId = state.bubbles.length ? state.bubbles[state.bubbles.length - 1].id : 0;

  // Speak the newest line out loud (two voices), then advance when it finishes.
  // Falls back to a timed beat when speech is unavailable or reduced-motion is on
  // — so the conversation never stalls even where audio can't play.
  useEffect(() => {
    if (state.status !== "live") {
      if (speechOn) {
        try {
          window.speechSynthesis.cancel();
        } catch {}
      }
      return;
    }
    if (state.choices) return;
    const last = state.bubbles[state.bubbles.length - 1];
    if (!last) return; // the very first advance is handled by the kick effect below
    let cancelled = false;
    const queueEmpty = state.queue.length === 0;
    const done = () => {
      if (cancelled) return;
      cancelled = true;
      dispatch({ type: queueEmpty ? "hangup" : "advance" });
    };
    if (speechOn && !reduceMotion && voicesRef.current.length > 0) {
      try {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(last.text);
        const v = chooseVoice(voicesRef.current, last.by);
        if (v) u.voice = v;
        u.rate = last.by === "scuttle" ? 1.02 : 1.0;
        u.pitch = last.by === "scuttle" ? 1.1 : 0.8;
        u.onend = done;
        u.onerror = done;
        // Safety net ONLY for devices that swallow onend — must be comfortably
        // longer than real speech (~85ms/char) so it never cuts a line off.
        const safety = setTimeout(done, Math.max(speakMs(last.text) + 3500, last.text.length * 105 + 4500));
        window.speechSynthesis.speak(u);
        return () => {
          cancelled = true;
          clearTimeout(safety);
          try {
            window.speechSynthesis.cancel();
          } catch {}
        };
      } catch {
        /* fall through to the timer */
      }
    }
    const t = setTimeout(done, reduceMotion ? Math.min(speakMs(last.text), 700) : speakMs(last.text));
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastId, state.choices, state.status, speechOn, reduceMotion]);

  // Kick the first beat right after answering.
  useEffect(() => {
    if (state.status === "live" && state.bubbles.length === 0 && !state.choices && state.queue.length) {
      const t = setTimeout(() => dispatch({ type: "advance" }), 450);
      return () => clearTimeout(t);
    }
  }, [state.status, state.bubbles.length, state.choices, state.queue.length]);

  // Auto-scroll the transcript as it grows.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: reduceMotion ? "auto" : "smooth" });
  }, [state.bubbles, state.choices, reduceMotion]);

  const answer = useCallback(() => {
    // Unlock speech synthesis inside the user gesture (iOS/Safari requires a
    // gesture before the first — slightly later — spoken line will play).
    if (speechOn) {
      try {
        window.speechSynthesis.cancel();
        window.speechSynthesis.resume();
        const warm = new SpeechSynthesisUtterance(" ");
        warm.volume = 0;
        window.speechSynthesis.speak(warm);
        voicesRef.current = window.speechSynthesis.getVoices();
      } catch {}
    }
    dispatch({ type: "answer" });
  }, [speechOn]);
  const restart = useCallback(() => {
    if (speechOn) {
      try {
        window.speechSynthesis.cancel();
      } catch {}
    }
    dispatch({ type: "restart" });
  }, [speechOn]);

  const ORANGE = "#FF7A1A";
  const GREEN = "#3fae6e";

  return (
    <div style={{ width, maxWidth: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      {/* The call card */}
      <div
        style={{
          width: "100%",
          borderRadius: 28,
          overflow: "hidden",
          background: "linear-gradient(165deg, #14210f 0%, #0e150c 45%, #100a02 100%)",
          boxShadow: "0 0 60px rgba(63,174,110,0.20), 0 40px 80px rgba(0,0,0,0.5), inset 0 0 0 1.5px rgba(255,255,255,0.07)",
          fontFamily: "var(--font-inter), system-ui, sans-serif",
        }}
      >
        {/* Header: caller + live status */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 18px",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(63,174,110,0.06)",
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: GREEN,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: state.speaking === "scuttle" ? "0 0 0 5px rgba(63,174,110,0.22)" : "none",
              transition: "box-shadow 0.3s ease",
            }}
          >
            <Image src="/assets/squirrel_logo.png" alt="Scuttle" width={30} height={30} style={{ borderRadius: "50%" }} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 15, fontWeight: 800, color: "white", lineHeight: 1.1 }}>Scuttle</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
              {state.status === "ringing" ? "Squirrel Brain · incoming call" : state.status === "ended" ? "call ended" : "on the line · two-way"}
            </div>
          </div>
          {state.status === "live" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Waveform active={state.speaking === "scuttle"} color={GREEN} />
              <span style={{ width: 8, height: 8, borderRadius: 99, background: "#ef4444", boxShadow: "0 0 8px #ef4444" }} aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Body */}
        {state.status === "ringing" ? (
          <div style={{ padding: "34px 22px 30px", display: "flex", flexDirection: "column", alignItems: "center", gap: 18, textAlign: "center" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {!reduceMotion &&
                [0, 1].map((i) => (
                  <motion.span
                    key={i}
                    style={{ position: "absolute", width: 88, height: 88, borderRadius: "50%", border: `2px solid ${GREEN}` }}
                    animate={{ scale: [1, 1.9], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
                  />
                ))}
              <div style={{ width: 88, height: 88, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                <Image src="/assets/squirrel_logo.png" alt="Scuttle calling" width={58} height={58} style={{ borderRadius: "50%" }} />
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,245,232,0.75)", margin: 0, maxWidth: 250, lineHeight: 1.5 }}>
              Your squirrel is calling. Answer it — then <strong style={{ color: "white" }}>talk back like a real call.</strong>
              <br />
              <span style={{ fontSize: 11, color: "rgba(255,245,232,0.5)" }}>🔊 turn your sound on — it speaks out loud</span>
            </p>
            <button
              onClick={answer}
              className="active:scale-[0.97] transition-transform"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                background: GREEN,
                color: "white",
                fontWeight: 800,
                fontSize: 15,
                padding: "13px 26px",
                borderRadius: 999,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 6px 22px rgba(63,174,110,0.45)",
              }}
            >
              <svg width="17" height="17" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M3.5 5.5c0-.55.45-1 1-1h1.25a.5.5 0 01.49.38l.5 2a.5.5 0 01-.16.49l-.8.67c.57 1.15 1.53 2.11 2.68 2.68l.67-.8a.5.5 0 01.49-.16l2 .5a.5.5 0 01.38.49V12a1 1 0 01-1 1C6.35 13 3.5 10.15 3.5 5.5z" fill="white" />
              </svg>
              Answer &amp; try it
            </button>
          </div>
        ) : (
          <>
            {/* Transcript */}
            <div
              ref={scrollRef}
              style={{ height: 330, overflowY: "auto", padding: "18px 16px", display: "flex", flexDirection: "column", gap: 12 }}
            >
              <AnimatePresence initial={false}>
                {state.bubbles.map((b) => (
                  <motion.div
                    key={b.id}
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ display: "flex", flexDirection: "column", alignItems: b.by === "you" ? "flex-end" : "flex-start", gap: 5 }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: 0.4, textTransform: "uppercase", color: b.by === "you" ? "rgba(255,122,26,0.9)" : "rgba(63,174,110,0.9)" }}>
                        {b.by === "you" ? "You" : "Scuttle"}
                      </span>
                    </div>
                    <div
                      style={{
                        maxWidth: "86%",
                        padding: "10px 13px",
                        borderRadius: 15,
                        borderTopRightRadius: b.by === "you" ? 4 : 15,
                        borderTopLeftRadius: b.by === "you" ? 15 : 4,
                        background: b.by === "you" ? "rgba(255,122,26,0.16)" : "rgba(63,174,110,0.13)",
                        border: `1px solid ${b.by === "you" ? "rgba(255,122,26,0.3)" : "rgba(63,174,110,0.28)"}`,
                        color: "#fff5e8",
                        fontSize: 13.5,
                        lineHeight: 1.5,
                      }}
                    >
                      {b.text}
                    </div>
                    {b.tag && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 1, padding: "4px 10px", borderRadius: 999, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                      >
                        <span style={{ color: GREEN, fontSize: 11, fontWeight: 800 }}>✓</span>
                        <span style={{ fontSize: 10.5, color: "rgba(255,245,232,0.72)", lineHeight: 1.3 }}>{b.tag}</span>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Scuttle "typing" while the next line is queued */}
              {state.status === "live" && !state.choices && state.speaking === "scuttle" && (
                <div style={{ alignSelf: "flex-start", padding: "8px 12px", borderRadius: 15, background: "rgba(63,174,110,0.1)" }}>
                  <TypingDots />
                </div>
              )}
            </div>

            {/* Choice chips — the "two-way": the visitor picks what THEY say */}
            <div style={{ padding: "0 16px 18px", minHeight: 8 }}>
              <AnimatePresence>
                {state.choices && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", flexDirection: "column", gap: 8 }}
                  >
                    <div style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: 0.5, textTransform: "uppercase", color: "rgba(255,122,26,0.85)", marginBottom: 2, textAlign: "center" }}>
                      👇 Your turn — say something back
                    </div>
                    {state.choices.map((c, i) => (
                      <button
                        key={i}
                        onClick={() => dispatch({ type: "choose", index: i })}
                        className="active:scale-[0.98] transition-transform"
                        style={{
                          width: "100%",
                          textAlign: "left",
                          padding: "11px 15px",
                          borderRadius: 13,
                          background: "rgba(255,122,26,0.12)",
                          border: "1px solid rgba(255,122,26,0.35)",
                          color: "#fff5e8",
                          fontSize: 13.5,
                          fontWeight: 600,
                          cursor: "pointer",
                        }}
                      >
                        “{c.label}”
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {state.status === "ended" && (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                  <p style={{ fontSize: 12.5, color: "rgba(255,245,232,0.6)", margin: 0, textAlign: "center" }}>
                    That&rsquo;s a real two-way call — you talked, it acted.
                  </p>
                  <button
                    onClick={restart}
                    style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(63,174,110,0.15)", color: GREEN, fontSize: 13, fontWeight: 700, padding: "9px 18px", borderRadius: 999, border: "1px solid rgba(63,174,110,0.35)", cursor: "pointer" }}
                  >
                    ↺ Take the call again
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Honest micro-label */}
      <p style={{ fontSize: 11, color: "rgba(138,112,96,0.7)", margin: 0, textAlign: "center", maxWidth: 320 }}>
        A preview of a real two-way call. In the app, you speak — out loud, in your own words —{" "}
        <span style={{ color: ORANGE }}>and your squirrel does it.</span>
      </p>
    </div>
  );
}
