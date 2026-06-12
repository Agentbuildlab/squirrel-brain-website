import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import ScrollHero from "@/components/ScrollHero";
import DarkBand from "@/components/DarkBand";
import ProofStrip from "@/components/ProofStrip";
import PremiumDoors from "@/components/PremiumDoors";

// ── How-it-works steps ─────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    title: "Capture in one breath",
    body: "Tap the mic and talk. Or snap a photo of anything — a schedule, a receipt, a whiteboard, a parking spot. That's the whole capture.",
  },
  {
    num: "02",
    title: "AI extracts everything",
    body: "Pip reads it. Every date, task, amount, and deadline pulled out automatically. You review, tap confirm.",
  },
  {
    num: "03",
    title: "It hounds you",
    body: "Alarms fire at the right time. The morning brief recaps what's coming. Pip's voice rings your phone when something actually matters.",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* ── A: SCROLL-DRIVEN HERO ──────────────────────────────────────── */}
        <ScrollHero />

        {/* ── B: DARK CINEMATIC BAND — follow-through story ─────────────── */}
        <DarkBand />

        {/* ── C: PROOF STRIP — 3 cinematic demo tiles ───────────────────── */}
        <ProofStrip />

        {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
        <section
          className="py-24"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, #FFF0E6 0%, #faf7f2 70%)",
          }}
          aria-labelledby="how-heading"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase text-accent/70 mb-4">
                How it works
              </p>
              <h2
                id="how-heading"
                className="font-display font-extrabold text-ink mb-14"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Dead simple by design.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.12} from="bottom">
                  <div className="flex flex-col">
                    <span
                      className="font-display font-extrabold mb-5 select-none leading-none"
                      style={{
                        fontSize: "clamp(3rem, 5vw, 4.5rem)",
                        color: "rgba(255,122,26,0.15)",
                      }}
                      aria-hidden="true"
                    >
                      {step.num}
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{step.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── D: DOORS ──────────────────────────────────────────────────── */}
        <PremiumDoors />

        {/* ── MEET PIP ──────────────────────────────────────────────────── */}
        <section
          className="py-24 border-y border-border"
          style={{ background: "#faf7f2" }}
          aria-labelledby="pip-heading"
        >
          <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn from="left">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent/70 mb-4">
                  Meet Pip
                </p>
                <h2
                  id="pip-heading"
                  className="font-display font-extrabold text-ink mb-6 text-balance"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                  The squirrel that actually follows up.
                </h2>
                <p className="text-lg text-muted leading-relaxed mb-5">
                  Pip lives inside Squirrel Brain. Chat with her in the Burrow, get
                  a morning brief, or — when something truly can&rsquo;t slip — she
                  rings your phone and speaks in her own voice.
                </p>
                <p className="text-base text-muted leading-relaxed mb-10">
                  She reads every calendar already on your iPhone. No new accounts to
                  connect, no integrations to set up.
                </p>
                <CtaButton label="Try Pip for free" size="lg" />
              </div>
            </FadeIn>

            <FadeIn from="right" delay={0.1} className="flex justify-center lg:justify-end">
              {/* Squirrel art */}
              <div className="relative">
                <Image
                  src="/brand/squirrel_treehouse.webp"
                  alt="Squirrel Brain treehouse — Pip's home"
                  width={440}
                  height={360}
                  className="rounded-3xl object-cover w-full max-w-md"
                  style={{
                    boxShadow: "0 32px 64px rgba(255,122,26,0.15), 0 8px 24px rgba(26,18,8,0.1)",
                  }}
                />
                {/* Floating Pip label */}
                <div
                  className="absolute -bottom-4 left-8 rounded-2xl px-5 py-3 flex items-center gap-3"
                  style={{
                    background: "#1a1208",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
                    style={{ background: "rgba(255,122,26,0.2)" }}
                    aria-hidden="true"
                  >
                    🐿
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Pip</div>
                    <div className="text-xs" style={{ color: "rgba(255,245,232,0.6)" }}>
                      Your Squirrel Brain
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── PRICING TEASER ────────────────────────────────────────────── */}
        <section
          className="py-20 bg-white border-b border-border"
          aria-labelledby="pricing-heading"
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase text-accent/70 mb-4">
                Pricing
              </p>
              <h2
                id="pricing-heading"
                className="font-display font-extrabold text-ink mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                Free to start.
              </h2>
              <p className="text-xl text-muted mb-2">
                Try everything. Unlock unlimited for{" "}
                <strong className="text-ink">$9.99/mo</strong> when you&rsquo;re ready.
              </p>
              <p className="text-sm text-muted/70 mb-10">No credit card required to get started.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CtaButton label="Get the beta" size="lg" />
                <Link
                  href="/pricing"
                  className="inline-flex items-center text-sm font-semibold text-muted hover:text-ink transition-colors gap-1.5"
                >
                  See what&rsquo;s included
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────────────── */}
        <section
          className="py-28 relative overflow-hidden"
          aria-labelledby="final-cta-heading"
          style={{
            background: "linear-gradient(135deg, #FFF0E6 0%, #faf7f2 50%, #FFF0E6 100%)",
          }}
        >
          {/* Decorative blobs */}
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255,122,26,0.12) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(232,168,74,0.1) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <div className="mb-8">
                <Image
                  src="/brand/squirrel_logo.webp"
                  alt="Squirrel Brain"
                  width={80}
                  height={80}
                  className="mx-auto rounded-2xl"
                  style={{
                    boxShadow: "0 8px 24px rgba(255,122,26,0.25)",
                  }}
                />
              </div>
              <h2
                id="final-cta-heading"
                className="font-display font-extrabold text-ink mb-6 text-balance"
                style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)", lineHeight: "1.05" }}
              >
                Your memory is full.{" "}
                <span className="text-accent">Let Pip carry it.</span>
              </h2>
              <p className="text-xl text-muted mb-12 max-w-xl mx-auto leading-relaxed">
                Join the beta. Say one thing. Watch it become an alarm. That&rsquo;s the whole demo.
              </p>
              <CtaButton label="Get the beta — it's free" size="lg" />
              <p className="mt-5 text-xs text-muted/60">
                iOS only · free to start · $9.99/mo to unlock everything
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
