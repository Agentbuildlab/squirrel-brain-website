"use client";

// "Scuttle calls you RIGHT NOW" — the show-don't-tell demo widget.
//
// Field-proven pattern (every voice-AI company leads with it): visitor enters
// their number, checks an explicit consent box, and gets ONE live call from
// Scuttle within seconds. Ships DARK (CALL_ME_DEMO_ENABLED=false) until the
// app-side endpoint exists — see docs/CALL_ME_DEMO_SPEC.md for the contract.
//
// TCPA note baked into the UX: unchecked-by-default consent checkbox, plain
// one-call language, no number storage for marketing. Server enforces rate
// limits; this UI is honest about what happens.

import { useState } from "react";
import posthog from "posthog-js";
import { CALL_ME_DEMO_ENABLED } from "@/lib/config";
import { T } from "@/components/v2/PhoneKit";

// Forgiving US-first phone parse: keep digits, allow leading +1/1.
function normalizePhone(raw: string): string | null {
  const digits = raw.replace(/[^\d]/g, "");
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `+${digits}`;
  return null;
}

export default function CallMeDemo() {
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "calling" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!CALL_ME_DEMO_ENABLED) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "calling") return;
    const normalized = normalizePhone(phone);
    if (!normalized) {
      setStatus("error");
      setMessage("Please enter a valid US phone number.");
      return;
    }
    if (!consent) {
      setStatus("error");
      setMessage("Please check the consent box so we're allowed to call you.");
      return;
    }
    setStatus("calling");
    setMessage("");
    posthog.capture("call_demo_requested");
    try {
      const res = await fetch("/api/call-me-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phone: normalized, consent: true }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus("done");
        setMessage("📞 Scuttle is dialing — your phone should ring in a few seconds.");
        posthog.capture("call_demo_placed");
      } else {
        setStatus("error");
        setMessage(data.error || "Couldn't place the call. Please try again in a minute.");
        posthog.capture("call_demo_failed", { status: res.status });
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't place the call. Please try again in a minute.");
    }
  }

  return (
    <section
      className="py-20 lg:py-28"
      style={{ background: T.darkBg }}
      aria-labelledby="call-demo-heading"
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#3fae6e" }}>
          Don&rsquo;t take our word for it
        </p>
        <h2
          id="call-demo-heading"
          className="font-display font-extrabold leading-tight mb-4"
          style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#fff5e8" }}
        >
          Scuttle will call you <span style={{ color: T.orange }}>right now.</span>
        </h2>
        <p className="text-base mb-8" style={{ color: "rgba(255,245,232,0.7)" }}>
          One real call, just to say hi — so you can hear exactly what &ldquo;the second brain
          that rings you back&rdquo; sounds like.
        </p>

        {status === "done" ? (
          <div
            className="rounded-xl px-5 py-4 text-base font-semibold"
            style={{ background: "rgba(63,174,110,0.15)", border: "1px solid rgba(63,174,110,0.35)", color: "#7ed8a5" }}
            role="status"
          >
            {message}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto" aria-label="Live call demo">
            <div className="flex gap-2">
              <label htmlFor="demo-phone" className="sr-only">
                Your phone number
              </label>
              <input
                id="demo-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                autoComplete="tel"
                className="flex-1 min-w-0 text-base rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff5e8" }}
              />
              <button
                type="submit"
                disabled={status === "calling"}
                className="font-bold text-base px-6 py-3.5 rounded-xl text-white whitespace-nowrap hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-60"
                style={{ background: "#3fae6e", boxShadow: "0 4px 20px rgba(63,174,110,0.4)" }}
              >
                {status === "calling" ? "Dialing…" : "Call me now"}
              </button>
            </div>
            <label
              className="flex items-start gap-2.5 mt-4 text-left text-xs cursor-pointer"
              style={{ color: "rgba(255,245,232,0.6)" }}
            >
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-0.5"
              />
              <span>
                I&rsquo;m asking Squirrel Brain to place <strong>one</strong> automated demo call to
                this number, right now. My number isn&rsquo;t stored or used for marketing.
              </span>
            </label>
            {status === "error" && (
              <p className="text-xs mt-3 text-left" style={{ color: "#ff9d8a" }} role="alert">
                {message}
              </p>
            )}
          </form>
        )}
      </div>
    </section>
  );
}
