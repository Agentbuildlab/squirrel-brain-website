import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CapturesSection from "@/components/CapturesSection";
import CallSection from "@/components/CallSection";
import MascotSection from "@/components/MascotSection";
import ProofSection from "@/components/ProofSection";
import OutlookSection from "@/components/OutlookSection";
import LinkStashSection from "@/components/LinkStashSection";
import AgentBand from "@/components/AgentBand";
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

        {/* 3 — IT ACTUALLY CALLS YOU: dark band, CallKit screen, pumped-up copy */}
        <CallSection />

        {/* 4 — MASCOT BEAT: squirrel tilts/waves, personality + warmth */}
        <MascotSection />

        {/* 5 — OUTLOOK IMPORT: tired of missing Outlook reminders? before→after */}
        <OutlookSection />

        {/* 6 — LINKSTASH: saved by you, found by asking */}
        <LinkStashSection />

        {/* 7 — PROOF / REAL LIFE: staggered scroll-box reveals, before photos */}
        <ProofSection />

        {/* 8 — AGENT BAND: connect any AI agent to your brain */}
        <AgentBand />

        {/* 9 — FINAL CTA: squirrel points at button, pulsing glow */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
