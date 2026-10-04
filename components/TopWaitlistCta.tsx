"use client";

// Above-the-fold launch-list form for product pages. Same endpoint and the
// same `waitlist_signup` event as the footer (page path included).

import { useId, useState } from "react";
import { submitLaunchSignup, WAITLIST_PROMISE, type LaunchSignupResponse } from "@/components/waitlistSignup";

export default function TopWaitlistCta() {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<LaunchSignupResponse>({});

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setMessage("");
    const outcome = await submitLaunchSignup(email, website);
    if (outcome.ok) {
      setResult(outcome.data);
      setStatus("done");
      setMessage(
        outcome.data.already
          ? "You're already on the list — we'll be in touch the moment it's ready."
          : "You're on the list! We'll email you the moment Squirrel Brain is ready."
      );
      setEmail("");
    } else {
      setStatus("error");
      setMessage(outcome.error);
    }
  }

  return (
    <div className="max-w-md">
      <p className="text-sm font-semibold text-ink mb-3">{WAITLIST_PROMISE}</p>
      {status === "done" ? (
        <p
          className="rounded-lg px-3.5 py-3 text-sm"
          style={{ background: "#E2F5EC", border: "1px solid rgba(63,174,110,0.3)", color: "#1f6b43" }}
          role="status"
        >
          {typeof result.position === "number"
            ? `You're #${result.position} on the launch list.`
            : message}
        </p>
      ) : (
        <form className="flex flex-col sm:flex-row gap-2" onSubmit={handleSubmit} aria-label="Launch list signup">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <input
            id={emailId}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="flex-1 min-w-0 text-sm bg-white border border-border rounded-lg px-3 py-2.5 text-ink placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
            autoComplete="email"
          />
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="text-sm font-bold bg-accent text-white px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity whitespace-nowrap disabled:opacity-60"
          >
            {status === "loading" ? "Joining…" : "Join the launch list"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="text-xs mt-2" style={{ color: "#c0392b" }} role="alert">
          {message}
        </p>
      )}
    </div>
  );
}
