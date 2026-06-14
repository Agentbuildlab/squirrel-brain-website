import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { PhoneShot } from "@/components/v2/PhoneKit";
import Image from "next/image";

export const metadata: Metadata = {
  title: "For the Field",
  description:
    "Squirrel Brain for sales reps, service techs, and contractors. Voice capture, GPS photo proof, Outlook import, and follow-ups that ring your phone.",
};

const FEATURES = [
  {
    title: "Voice capture — say it, it's saved",
    body: "Walk out of a meeting and talk through what just happened. Your squirrel extracts the follow-ups, the promised callbacks, and the dates — so nothing slips between conversations.",
    screen: "/assets/screens/home-v4.webp",
    screenAlt: "Home showing captured voice note landing as a calendar event",
  },
  {
    title: "GPS-stamped photo proof",
    body: "Snap what you left on-site. Your squirrel reads the photo, logs the job details, and stores a timestamped record with GPS. Proof of delivery, service, or install — in the Burrow instantly.",
    screen: "/assets/screens/pix-v3.webp",
    screenAlt: "Pix showing GPS-stamped photo boards",
  },
  {
    title: "Meeting Mode — record your debriefs",
    body: "Tap record and let the meeting run. Your squirrel captures it in short chunks, transcribes in the background, then pulls out the action items, follow-ups, and deadlines — and drops them straight into your notes. Clean list, no effort.",
    screen: "/assets/screens/meeting-record.webp",
    screenAlt: "Meeting Mode recording — chunked transcription running in the background",
  },
  {
    title: "4 PM nudge",
    body: "Every weekday at 4 PM, your daily brief recaps open follow-ups, tomorrow's commitments, and anything you captured that hasn't been resolved. Nothing slips through end of day.",
    screen: "/assets/screens/home-v4.webp",
    screenAlt: "Home dashboard with daily summary",
  },
  {
    title: "Follow-ups that ring your phone",
    body: "When a follow-up actually matters, your squirrel rings your phone and speaks in its own voice. Not a push notification. A real call that cuts through everything else.",
    screen: "/assets/screens/calendar-v2.webp",
    screenAlt: "Calendar showing upcoming follow-up with alarm",
  },
  {
    title: "LinkStash — save what you find",
    body: "Drop any link from Safari, YouTube, or anywhere else. It lands in your stash, organized by source. Three months later, just ask — your squirrel finds it by plain language.",
    screen: "/assets/screens/links-v2.webp",
    screenAlt: "LinkStash with saved links organized by source",
  },
];

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative pt-28 pb-20 overflow-hidden"
          aria-labelledby="work-hero-heading"
          style={{ background: "linear-gradient(160deg, #FFF0E6 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn immediate>
                <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <rect x="2" y="3" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                    <path d="M4 3V2a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  For reps and people on the move
                </div>
              </FadeIn>
              <FadeIn immediate delay={0.08}>
                <h1
                  id="work-hero-heading"
                  className="font-display text-5xl sm:text-6xl font-extrabold text-ink leading-[1.05] mb-5 text-balance"
                >
                  Your brain has too many tabs open.{" "}
                  <span className="text-accent">Let&rsquo;s close some of them.</span>
                </h1>
              </FadeIn>
              <FadeIn immediate delay={0.15}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  For sales reps, service techs, and contractors. Every job detail captured
                  the moment it happens. Every follow-up handled before end of day.
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.2}>
                <CtaButton size="lg" />
              </FadeIn>
            </div>
            <FadeIn immediate from="right" delay={0.1} className="flex justify-center lg:justify-end">
              <PhoneShot
                src="/assets/screens/home-v4.webp"
                alt="Squirrel Brain home — Daily Countdown and captured calendar events"
                width={320}
              />
            </FadeIn>
          </div>
        </section>

        {/* Outlook import — the money section for work users */}
        <section className="py-20 bg-white border-y border-border" aria-labelledby="outlook-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3 text-center">
                Outlook import
              </p>
              <h2
                id="outlook-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4 text-center text-balance"
              >
                Tired of missing Outlook reminders?
              </h2>
              <p className="text-lg text-muted leading-relaxed max-w-2xl mx-auto text-center mb-12">
                Company policy locks you out of your calendar app. So you miss the Outlook event because the reminder fired
                when your phone was face-down. There&rsquo;s an easier way.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <FadeIn>
                <div>
                  <div
                    className="rounded-2xl overflow-hidden border border-border mb-5"
                    style={{ boxShadow: "0 4px 20px rgba(26,18,8,0.08)" }}
                  >
                    <Image
                      src="/assets/outlook_event.png"
                      alt="Outlook calendar event — screenshot this"
                      width={480}
                      height={300}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                  <p className="text-sm font-semibold text-muted text-center">
                    1. Screenshot your Outlook event
                  </p>
                </div>
              </FadeIn>
              <FadeIn from="right" delay={0.1}>
                <div className="flex flex-col items-center gap-4">
                  <PhoneShot
                    src="/assets/screens/calendar-v2.webp"
                    alt="Calendar — Outlook event now lives in Squirrel Brain with reminders"
                    width={320}
                  />
                  <p className="text-sm font-semibold text-muted text-center">
                    2. It drops straight into your squirrel — one tap
                  </p>
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={0.15}>
              <div className="mt-10 max-w-2xl mx-auto text-center">
                <p className="text-base text-muted leading-relaxed">
                  Now it lives with everything else: reminders, the daily countdown, and a real phone
                  call before it if it matters.{" "}
                  <strong className="text-ink">Never miss an Outlook event again.</strong>
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Feature grid — 2-up layout, bigger phones */}
        <section className="py-20" aria-labelledby="work-features-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="work-features-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-12 text-center"
              >
                Everything you need between stops
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURES.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div className="bg-white rounded-3xl border border-border p-6 flex flex-col gap-5 h-full">
                    <div className="flex justify-center">
                      <PhoneShot src={f.screen} alt={f.screenAlt} width={260} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">{f.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* MCP / agent moat — connect any AI */}
        <section
          className="py-20 border-y border-border"
          style={{ background: "#faf6f0" }}
          aria-labelledby="work-mcp-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                Agent-friendly
              </p>
              <h2
                id="work-mcp-heading"
                className="font-display text-3xl font-bold text-ink mb-4"
              >
                Connect any AI agent to your brain.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
                Squirrel Brain has a built-in MCP server. Claude, ChatGPT, or any custom agent can
                set alarms, read your tasks, and send voice messages straight to your phone.
                Your squirrel becomes the memory layer for every AI tool you use.
              </p>
              <a
                href="/mcp"
                className="inline-flex items-center gap-2 text-accent font-bold hover:opacity-80 transition-opacity"
              >
                Developer docs
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 bg-white border-t border-border"
          aria-labelledby="work-cta-heading"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="work-cta-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5"
              >
                Your next meeting is in 20 minutes. Capture this one first.
              </h2>
              <p className="text-muted text-lg mb-8">
                Free to start. No setup. Just tap and talk.
              </p>
              <CtaButton size="lg" />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
