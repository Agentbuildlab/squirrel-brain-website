import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { PhoneShot } from "@/components/v2/PhoneKit";

export const metadata: Metadata = {
  title: "For the Family",
  description:
    "Squirrel Brain for busy parents. Snap a soccer schedule and get every game as an alarm. Receipts, recipes, meds, school docs — all organised in Pix boards.",
};

const FEATURES = [
  {
    title: "Snap a schedule, get a whole season",
    body: "Photo-only capture. Snap the crumpled soccer schedule pinned to the fridge. Squirrel Brain reads it, finds every game date, and asks: \"Found 6 games — add them all?\" One tap. Every alarm set.",
    highlight: true,
    screen: "/assets/screens/calendar.webp",
    screenAlt: "Calendar with soccer season games added",
  },
  {
    title: "Pix boards — for every pile on the counter",
    body: "Receipts. Recipes. Meds. School permission slips. Snap and file them into the right board. Everything is searchable by voice later: \"find the field trip form\" just works.",
    screen: "/assets/screens/pix.webp",
    screenAlt: "Pix photo boards showing organised family photos",
  },
  {
    title: "Return-window reminders",
    body: "Snap a receipt. Squirrel Brain reads the store and the amount, then asks if you want a reminder before the return window closes. No more missed returns.",
    screen: "/assets/screens/notes.webp",
    screenAlt: "Notes showing return reminder extracted from receipt",
  },
  {
    title: "Morning brief",
    body: "Every morning, a short email: what's on the calendar today, what the kids have, and anything you captured yesterday that's still open. The whole family load in 30 seconds.",
    screen: "/assets/screens/home-v3.webp",
    screenAlt: "Home dashboard with today's family schedule",
  },
  {
    title: "Voice recall",
    body: "\"Find the permission slip for the science trip.\" \"What was the pediatrician's number?\" \"When does soccer practice start?\" Your squirrel searches everything you've ever captured and answers back.",
    screen: "/assets/screens/home-v3.webp",
    screenAlt: "Home showing voice search results",
  },
];

export default function FamilyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative pt-28 pb-20 overflow-hidden"
          aria-labelledby="family-hero-heading"
          style={{ background: "linear-gradient(160deg, #F0F7FF 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn immediate>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                    <circle cx="8.5" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                    <path d="M1 10c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                  </svg>
                  For the family load
                </div>
              </FadeIn>
              <FadeIn immediate delay={0.08}>
                <h1
                  id="family-hero-heading"
                  className="font-display text-5xl sm:text-6xl font-extrabold text-ink leading-[1.05] mb-5 text-balance"
                >
                  The whole family
                  {" "}<span className="text-blue-500">in one brain.</span>
                </h1>
              </FadeIn>
              <FadeIn immediate delay={0.15}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  Snap schedules, receipts, permission slips, and meds. Squirrel Brain
                  reads every photo, sets every alarm, and reminds you before anything
                  slips. Reads every calendar already on your iPhone — nothing new to
                  connect.
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.2}>
                <CtaButton size="lg" />
              </FadeIn>
            </div>
            <FadeIn immediate from="right" delay={0.1} className="flex justify-center lg:justify-end">
              <PhoneShot
                src="/assets/screens/calendar.webp"
                alt="Calendar showing soccer season added from a single photo"
                width={240}
              />
            </FadeIn>
          </div>
        </section>

        {/* The money demo — full-width highlight */}
        <section className="py-16 bg-white border-y border-border" aria-labelledby="schedule-demo-heading">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                  The demo that says everything
                </p>
                <h2
                  id="schedule-demo-heading"
                  className="font-display text-3xl font-bold text-ink mb-4"
                >
                  One photo. An entire season of alarms.
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  That crumpled soccer schedule on the fridge? Snap it. Your squirrel reads
                  every date, every game, every practice. You see them listed out.
                  Tap &ldquo;Add all&rdquo; — they land directly on your iPhone calendar with
                  an alarm before each one.
                </p>
                <p className="text-muted leading-relaxed">
                  No typing. No calendar app. Just a phone camera and a tap.
                </p>
              </div>
            </FadeIn>
            <FadeIn from="right" delay={0.1} className="flex justify-center">
              <PhoneShot
                src="/assets/screens/calendar.webp"
                alt="Calendar with full soccer season automatically added"
                width={180}
              />
            </FadeIn>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-20" aria-labelledby="family-features-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="family-features-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-12 text-center"
              >
                Less chaos. More done.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div
                    className={`rounded-3xl border p-6 flex flex-col gap-4 h-full ${
                      f.highlight
                        ? "bg-accent-light border-accent/20"
                        : "bg-white border-border"
                    }`}
                  >
                    <div className="flex justify-center">
                      <PhoneShot src={f.screen} alt={f.screenAlt} width={100} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">{f.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 bg-white border-t border-border"
          aria-labelledby="family-cta-heading"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="family-cta-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5"
              >
                The next schedule lands on the fridge tomorrow.
              </h2>
              <p className="text-muted text-lg mb-8">
                Snap it. Free to start.
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
