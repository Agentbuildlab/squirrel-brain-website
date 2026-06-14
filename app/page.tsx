import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CapturesSection from "@/components/CapturesSection";
import PixMoatSection from "@/components/PixMoatSection";
import CallSection from "@/components/CallSection";
import MascotSection from "@/components/MascotSection";
import MorningBriefSection from "@/components/MorningBriefSection";
import ProofSection from "@/components/ProofSection";
import OutlookSection from "@/components/OutlookSection";
import LinkStashSection from "@/components/LinkStashSection";
import RecipesSection from "@/components/RecipesSection";
import AgentBand from "@/components/AgentBand";
import ExploreSection from "@/components/ExploreSection";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* 1 — HERO: mascot bobs in, big phone with Daily Countdown, canonical headline */}
        <HeroSection />

        {/* 2 — IT CAPTURES EVERYTHING: scroll-scrubbed phone transformation */}
        <CapturesSection />

        {/* 2.5 — THE PIX MOAT: auto-ingestion, auto-filing, find-the-link, GPS, location surfacing */}
        <PixMoatSection />

        {/* 3 — IT ACTUALLY CALLS YOU: dark band, CallKit screen, pumped-up copy */}
        <CallSection />

        {/* 4 — MASCOT BEAT: squirrel tilts/waves, personality + warmth */}
        <MascotSection />

        {/* 4.5 — MORNING BRIEF: two emails a day (real email pictures) */}
        <MorningBriefSection />

        {/* 5 — OUTLOOK IMPORT: tired of missing Outlook reminders? before→after */}
        <OutlookSection />

        {/* 6 — LINKSTASH: saved by you, found by asking */}
        <LinkStashSection />

        {/* 7 — RECIPES: snap any recipe → Recipes board → ask at the stove */}
        <RecipesSection />

        {/* 8 — PROOF / REAL LIFE: staggered scroll-box reveals, before photos */}
        <ProofSection />

        {/* 8 — AGENT BAND: connect any AI agent to your brain */}
        <AgentBand />

        {/* 8.5 — EXPLORE: three big cards (Work / Family / Demos) */}
        <ExploreSection />

        {/* 9 — FINAL CTA: squirrel points at button, pulsing glow */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
