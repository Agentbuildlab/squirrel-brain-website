import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CapturesSection from "@/components/CapturesSection";
import CallSection from "@/components/CallSection";
import MascotSection from "@/components/MascotSection";
import ProofSection from "@/components/ProofSection";
import FinalCta from "@/components/FinalCta";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* 1 — HERO: mascot bobs in, phone settles, headline SSR-visible */}
        <HeroSection />

        {/* 2 — IT CAPTURES EVERYTHING: scroll-scrubbed phone transformation */}
        <CapturesSection />

        {/* 3 — IT ACTUALLY CALLS YOU: dark band, CallKit screen, phone shakes */}
        <CallSection />

        {/* 4 — MASCOT BEAT: squirrel tilts/waves, personality + warmth */}
        <MascotSection />

        {/* 5 — PROOF / REAL LIFE: staggered scroll-box reveals, before photos */}
        <ProofSection />

        {/* 6 — FINAL CTA: squirrel points at button, pulsing glow */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
