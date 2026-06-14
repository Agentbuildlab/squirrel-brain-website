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
import FinalCta from "@/components/FinalCta";

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

        {/* FINAL CTA */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
