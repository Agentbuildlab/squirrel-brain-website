import type { Metadata } from "next";
import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import AgentCalendarSection from "@/components/AgentCalendarSection";

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

// 2026-10-13 simplify (Adam): cut the home page to four sections so the promise
// isn't restated five times over ~1,180 words. Hero (with the interactive ringing
// call — the one differentiating hook, shown not told) · a compact Benefits block ·
// a short FAQ · the final CTA. The richer narrative components — SegmentDoors,
// PixMoatSection, CallSection, CallMeDemo — are kept in the repo (now unused) so the
// longer treatment can be restored or reused; they're just no longer stacked here.
export default function HomePage() {
  return (
    <>
      <Script src="/pixel-intro.js" strategy="afterInteractive" />
      <Nav />
      <main id="main-content">
        {/* 1 — HERO: the second brain that RINGS YOU BACK (phone shown ringing) */}
        <HeroSection />

        {/* 2 — BENEFITS: the three core promises in four scannable lines */}
        <BenefitsSection />

        {/* Agent calendar — server-rendered; hero H1, demo, and pricing stay put */}
        <AgentCalendarSection />

        {/* 3 — FAQ: product questions — the AI/AEO lane lives on /mcp now */}
        <FaqSection />

        {/* 4 — FINAL CTA */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
