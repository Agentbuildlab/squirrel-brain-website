import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SegmentDoors from "@/components/SegmentDoors";
import PixMoatSection from "@/components/PixMoatSection";
import CallSection from "@/components/CallSection";
import CallMeDemo from "@/components/CallMeDemo";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";

// Homepage-specific SEO. The hero H1 carries the differentiator ("the second
// brain that rings you back"); the keyword target lives in the <title> +
// description instead. `absolute` bypasses the "%s — Squirrel Brain" template
// so the brand still reads first. Do NOT churn the <title> — it indexed day 1.
export const metadata: Metadata = {
  title: {
    absolute: "Squirrel Brain | AI Reminder App for Voice Notes, Photos & Screenshots",
  },
  description:
    "Squirrel Brain is an AI reminder app that turns voice notes, photos, screenshots, texts, and emails into reminders, alarms, and calendar events — and for the one thing you can't miss, it calls your phone.",
  alternates: { canonical: "/" },
};

// 2026-07-02 redesign (research-backed): ONE promise above the fold (the call,
// shown ringing), a single primary CTA, then the segment doors ("which busy are
// you?") that route + tag each audience for the PostHog segment experiment.
// 2026-07-03 (Adam): trimmed to SIX sections — hero · segment doors · the AI-sort
// wow · the call deep-dive · FAQ · final CTA — to cut the "too busy" feeling.
// Removed from the homepage (components kept for the landing pages): the screenshot
// gotcha, the proof gotcha, and the founder-story band.
export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* 1 — HERO: the second brain that RINGS YOU BACK (phone shown ringing) */}
        <HeroSection />

        {/* 2 — SEGMENT DOORS: six kinds of busy, instrumented (segment_door_click) */}
        <SegmentDoors />

        {/* 3 — THE AI WOW: your camera roll, sorted for you (auto-ingestion moat) */}
        <PixMoatSection />

        {/* 4 — THE DEEP DIVE: the call, full story (hero promised it; this proves it) */}
        <CallSection />

        {/* LIVE DEMO — "Scuttle calls you right now" (renders null until
            CALL_ME_DEMO_ENABLED + the app-side endpoint exist — see spec) */}
        <CallMeDemo />

        {/* 5 — FAQ: targets "can my AI set a reminder on my phone" search/AEO lane */}
        <FaqSection />

        {/* 6 — FINAL CTA */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
