import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScreenshotGotchaSection from "@/components/ScreenshotGotchaSection";
import ProofGotchaSection from "@/components/ProofGotchaSection";
import PixMoatSection from "@/components/PixMoatSection";
import CallSection from "@/components/CallSection";
import MorningBriefSection from "@/components/MorningBriefSection";
import MascotSection from "@/components/MascotSection";
import AgentBand from "@/components/AgentBand";
import FounderStorySection from "@/components/FounderStorySection";
import ExploreSection from "@/components/ExploreSection";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* 1 — HERO */}
        <HeroSection />

        {/* GOTCHA 1 — Screenshot it → it's on your calendar */}
        <ScreenshotGotchaSection />

        {/* GOTCHA 2 — "We never got it." → here's the proof */}
        <ProofGotchaSection />

        {/* GOTCHA 3 — Your camera roll, sorted for you (auto-ingestion moat) */}
        <PixMoatSection />

        {/* GOTCHA 4 — For the one thing you can't miss, it calls you */}
        <CallSection />

        {/* HIT — Two emails a day (real email pictures) */}
        <MorningBriefSection />

        {/* HIT — Meet your squirrel (brand warmth) */}
        <MascotSection />

        {/* HIT — Connect any AI agent (MCP moat) */}
        <AgentBand />

        {/* WHY THIS EXISTS — the vague founder origin */}
        <FounderStorySection />

        {/* EXPLORE — three big cards (Work / Family / Demos) */}
        <ExploreSection />

        {/* FINAL CTA */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
