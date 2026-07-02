import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SegmentDoors from "@/components/SegmentDoors";
import ScreenshotGotchaSection from "@/components/ScreenshotGotchaSection";
import ProofGotchaSection from "@/components/ProofGotchaSection";
import PixMoatSection from "@/components/PixMoatSection";
import CallSection from "@/components/CallSection";
import FounderStorySection from "@/components/FounderStorySection";
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
// Homepage keeps THREE gotchas max before the call deep-dive — feature overload
// was measurably hurting comprehension (14 concepts → ~8).
export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* 1 — HERO: the second brain that RINGS YOU BACK (phone shown ringing) */}
        <HeroSection />

        {/* 2 — SEGMENT DOORS: six kinds of busy, instrumented (segment_door_click) */}
        <SegmentDoors />

        {/* GOTCHA 1 — Screenshot a text/email → a to-do that nudges you */}
        <ScreenshotGotchaSection />

        {/* GOTCHA 2 — Your camera roll, sorted for you (auto-ingestion moat) */}
        <PixMoatSection />

        {/* GOTCHA 3 — "We never got it." → here's the proof */}
        <ProofGotchaSection />

        {/* THE DEEP DIVE — the call, full story (hero promised it; this proves it) */}
        <CallSection />

        {/* WHY THIS EXISTS — the vague founder origin */}
        <FounderStorySection />

        {/* FAQ — targets "can my AI set a reminder on my phone" search/AEO lane */}
        <FaqSection />

        {/* FINAL CTA */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
