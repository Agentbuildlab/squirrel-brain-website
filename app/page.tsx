import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ExploreSection from "@/components/ExploreSection";
import ScreenshotGotchaSection from "@/components/ScreenshotGotchaSection";
import ProofGotchaSection from "@/components/ProofGotchaSection";
import PixMoatSection from "@/components/PixMoatSection";
import CallSection from "@/components/CallSection";
import MorningBriefSection from "@/components/MorningBriefSection";
import FounderStorySection from "@/components/FounderStorySection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";

// Homepage-specific SEO. The hero H1 stays as the brand line ("Your brain has
// too many tabs open") because it converts; the keyword target lives in the
// <title> + description instead. `absolute` bypasses the "%s — Squirrel Brain"
// template so the brand still reads first.
export const metadata: Metadata = {
  title: {
    absolute: "Squirrel Brain | AI Reminder App for Voice Notes, Photos & Screenshots",
  },
  description:
    "Squirrel Brain is an AI reminder app that turns voice notes, photos, screenshots, texts, and emails into reminders, alarms, notes, and calendar events so busy people don't forget what matters.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* 1 — HERO: "you're not forgetful, you're outnumbered" + the tabs line */}
        <HeroSection />

        {/* 2 — EXPLORE up top: Work / Family / Demos / Agents — so people see where to look */}
        <ExploreSection />

        {/* GOTCHA 1 — Screenshot a text/email → a to-do that nudges you */}
        <ScreenshotGotchaSection />

        {/* GOTCHA 2 — "We never got it." → here's the proof */}
        <ProofGotchaSection />

        {/* GOTCHA 3 — Your camera roll, sorted for you (auto-ingestion moat) */}
        <PixMoatSection />

        {/* GOTCHA 4 — For the one thing you can't miss, it CALLS you */}
        <CallSection />

        {/* HIT — Two emails a day (real email pictures) */}
        <MorningBriefSection />

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
