import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import DeviceFrame from "@/components/DeviceFrame";
import CtaButton from "@/components/CtaButton";
import { TESTFLIGHT_URL } from "@/lib/config";

// ─── Door tile data ──────────────────────────────────────────────────────────
const DOORS = [
  {
    href: "/work",
    label: "For Work",
    headline: "I work in the field",
    sub: "Voice debriefs between stops. GPS-stamped proof photos. Follow-up calls that ring your phone.",
    bg: "bg-accent-light",
    accent: "text-accent",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="8" width="20" height="14" rx="2" stroke="#FF7A1A" strokeWidth="1.8" fill="none"/>
        <path d="M10 8V6a2 2 0 012-2h4a2 2 0 012 2v2" stroke="#FF7A1A" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M4 14h20" stroke="#FF7A1A" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: "/family",
    label: "For Family",
    headline: "I run the family",
    sub: "Snap a soccer schedule. Every game, every alarm, auto-extracted. Receipts, meds, school docs — organised.",
    bg: "bg-[#F0F7FF]",
    accent: "text-[#3B82F6]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="10" cy="10" r="3" stroke="#3B82F6" strokeWidth="1.8" fill="none"/>
        <circle cx="19" cy="10" r="3" stroke="#3B82F6" strokeWidth="1.8" fill="none"/>
        <path d="M4 22c0-3.31 2.69-6 6-6h8c3.31 0 6 2.69 6 6" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    href: "/demos",
    label: "Watch it Work",
    headline: "Watch it work",
    sub: "Short clips showing voice-to-alarm, receipt scanning, parking pin, and more. No signup needed.",
    bg: "bg-[#F5F0FF]",
    accent: "text-[#7C3AED]",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="6" width="22" height="16" rx="3" stroke="#7C3AED" strokeWidth="1.8" fill="none"/>
        <path d="M12 10.5l5 3.5-5 3.5V10.5z" fill="#7C3AED"/>
      </svg>
    ),
  },
  {
    href: "/mcp",
    label: "Developers & Agents",
    headline: "Developers & AI agents",
    sub: "24 MCP tools. Full REST API. Build on top of Squirrel Brain or connect your AI agent to real-world reminders.",
    bg: "bg-[#F0FFF4]",
    accent: "text-[#059669]",
    quiet: true,
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M7 10l-4 4 4 4M21 10l4 4-4 4M16 6l-4 16" stroke="#059669" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

// ─── How-it-works steps ───────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    title: "Capture in one breath",
    body: "Tap the mic and talk. Or snap a photo of anything — a schedule, a receipt, a whiteboard, a parking spot. That's the whole capture.",
  },
  {
    num: "02",
    title: "AI extracts everything",
    body: "Pip reads it. Every date, task, amount, and deadline is pulled out automatically. You review, tap confirm.",
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
        {/* ── HERO ─────────────────────────────────────────────────────────── */}
        <section
          className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden pt-16"
          aria-labelledby="hero-heading"
        >
          {/* Warm background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, #FFF0E6 0%, #faf7f2 70%)",
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            {/* Left: copy */}
            <div>
              <FadeIn delay={0.05}>
                <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6 tracking-wide">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                    <circle cx="6" cy="6" r="6"/>
                  </svg>
                  Now in beta
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <h1
                  id="hero-heading"
                  className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-ink leading-[1.05] tracking-tight text-balance"
                >
                  Say it.{" "}
                  <span className="text-accent">Snap it.</span>
                  <br />
                  It's handled.
                </h1>
              </FadeIn>

              <FadeIn delay={0.18}>
                <p className="mt-5 text-lg sm:text-xl text-muted leading-relaxed max-w-md">
                  Squirrel Brain turns voice notes and photos into alarms,
                  reminders, and calendar events — then makes sure you follow
                  through.
                </p>
              </FadeIn>

              <FadeIn delay={0.25}>
                <div className="mt-8 flex flex-wrap gap-4 items-center">
                  <CtaButton size="lg" />
                  <Link
                    href="/demos"
                    className="text-sm font-semibold text-muted hover:text-ink transition-colors flex items-center gap-1.5"
                  >
                    Watch how it works
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </FadeIn>

              <FadeIn delay={0.32}>
                <p className="mt-4 text-xs text-muted/70">
                  Free to start · $9.99/mo · iOS only
                </p>
              </FadeIn>
            </div>

            {/* Right: hero device frame */}
            <FadeIn delay={0.15} from="right" className="flex justify-center lg:justify-end">
              <DeviceFrame
                placeholderLabel={"DEMO: schedule photo\n→ alarms set"}
                imageSrc="/assets/01-home.png"
                imageAlt="Squirrel Brain app showing the home screen"
                className="w-48 sm:w-56 lg:w-64"
              />
            </FadeIn>
          </div>
        </section>

        {/* ── PROOF STRIP ──────────────────────────────────────────────────── */}
        <section
          className="py-16 border-y border-border bg-white"
          aria-labelledby="proof-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="proof-heading"
                className="font-display text-center text-2xl sm:text-3xl font-bold text-ink mb-10"
              >
                Three seconds of effort. Zero things forgotten.
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="9" y="2" width="6" height="11" rx="3" stroke="#FF7A1A" strokeWidth="1.8" fill="none"/>
                      <path d="M5 10a7 7 0 0014 0M12 21v-4" stroke="#FF7A1A" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                  demo: "DEMO: voice → alarm in 8s",
                  caption: "\"Dentist Thursday at 2\" → alarm appears instantly.",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2" stroke="#FF7A1A" strokeWidth="1.8" fill="none"/>
                      <path d="M7 9h10M7 13h6" stroke="#FF7A1A" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  ),
                  demo: "DEMO: receipt → return reminder",
                  caption: "Snap a receipt. \"Return closes June 24 — remind you?\"",
                },
                {
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="11" r="4" stroke="#FF7A1A" strokeWidth="1.8" fill="none"/>
                      <path d="M12 2v2M12 20v2M2 11h2M20 11h2" stroke="#FF7A1A" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  ),
                  demo: "DEMO: parking pin → find my car",
                  caption: "Snap where you parked. Days later — exact pin.",
                },
              ].map(({ icon, demo, caption }, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="bg-bg rounded-3xl p-6 flex flex-col items-center text-center gap-4 h-full border border-border">
                    <div className="w-12 h-12 rounded-2xl bg-accent-light flex items-center justify-center">
                      {icon}
                    </div>
                    <DeviceFrame placeholderLabel={demo} className="w-32" />
                    <p className="text-sm text-muted leading-snug">{caption}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── DOORS GRID ───────────────────────────────────────────────────── */}
        <section
          className="py-20"
          aria-labelledby="doors-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="doors-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3 text-balance"
              >
                What kind of forgetter are you?
              </h2>
              <p className="text-muted text-lg mb-10 max-w-xl">
                Squirrel Brain fits your life. Pick the story that sounds like yours.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DOORS.map((door, i) => (
                <FadeIn key={door.href} delay={i * 0.08}>
                  <Link
                    href={door.href}
                    className={`group relative flex flex-col p-8 rounded-3xl border border-border hover:border-accent/40 transition-all hover:shadow-md hover:-translate-y-0.5 ${door.bg} ${door.quiet ? "opacity-90" : ""}`}
                    aria-label={`${door.label}: ${door.headline}`}
                  >
                    <div className="mb-4">{door.icon}</div>
                    <p className="text-xs font-bold tracking-widest uppercase text-muted mb-2">
                      {door.label}
                    </p>
                    <h3 className={`font-display text-2xl font-bold mb-2 ${door.accent}`}>
                      {door.headline}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">{door.sub}</p>
                    <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-accent transition-colors">
                      Learn more
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────────────────────── */}
        <section
          className="py-20 bg-white border-y border-border"
          aria-labelledby="how-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="how-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-12 text-center"
              >
                How it works
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={i * 0.1} from="bottom">
                  <div className="flex flex-col">
                    <span className="font-display text-5xl font-extrabold text-accent/20 mb-4 select-none" aria-hidden="true">
                      {step.num}
                    </span>
                    <h3 className="font-display text-xl font-bold text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted leading-relaxed text-sm">{step.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── MEET PIP ─────────────────────────────────────────────────────── */}
        <section
          className="py-20"
          aria-labelledby="pip-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn from="left">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">
                  Meet Pip
                </p>
                <h2
                  id="pip-heading"
                  className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5 text-balance"
                >
                  The squirrel that actually follows up
                </h2>
                <p className="text-muted leading-relaxed mb-5">
                  Pip lives inside Squirrel Brain. Chat with her in the Burrow,
                  get a morning brief in your inbox, or — when something truly
                  can't slip — she rings your phone and speaks in Pip's voice.
                </p>
                <p className="text-muted leading-relaxed mb-8">
                  She reads every calendar already on your iPhone. No new
                  accounts to connect, no integrations to set up.
                </p>
                <CtaButton label="Try Pip for free" />
              </div>
            </FadeIn>

            <FadeIn from="right" delay={0.1} className="flex justify-center lg:justify-end gap-6 flex-wrap">
              <DeviceFrame
                imageSrc="/assets/04-notes.png"
                imageAlt="Squirrel Brain Burrow chat with Pip"
                placeholderLabel={"Burrow chat\nwith Pip"}
                className="w-40 sm:w-48"
              />
              <DeviceFrame
                imageSrc="/assets/daily_brief_mockup.png"
                imageAlt="Morning brief email from Pip"
                placeholderLabel={"Morning brief\nemail from Pip"}
                className="w-40 sm:w-48"
              />
            </FadeIn>
          </div>
        </section>

        {/* ── PRICING TEASER ───────────────────────────────────────────────── */}
        <section
          className="py-16 bg-white border-t border-border"
          aria-labelledby="pricing-heading"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="pricing-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4"
              >
                Free to start
              </h2>
              <p className="text-muted text-lg mb-2">
                Try everything. Unlock unlimited for{" "}
                <strong className="text-ink">$9.99/mo</strong> when you're ready.
              </p>
              <p className="text-sm text-muted/80 mb-8">No credit card required to get started.</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <CtaButton label="Get the beta" size="lg" />
                <Link
                  href="/pricing"
                  className="inline-flex items-center text-sm font-semibold text-muted hover:text-ink transition-colors gap-1"
                >
                  See what's included
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
        <section
          className="py-24"
          aria-labelledby="final-cta-heading"
          style={{
            background: "linear-gradient(135deg, #FFF0E6 0%, #faf7f2 50%, #FFF0E6 100%)",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <div className="mb-6">
                <Image
                  src="/assets/squirrel_logo.png"
                  alt="Squirrel Brain"
                  width={64}
                  height={64}
                  className="mx-auto rounded-2xl"
                />
              </div>
              <h2
                id="final-cta-heading"
                className="font-display text-4xl sm:text-5xl font-extrabold text-ink mb-5 text-balance"
              >
                Your memory is full.{" "}
                <span className="text-accent">Let Pip carry it.</span>
              </h2>
              <p className="text-muted text-xl mb-10 max-w-xl mx-auto">
                Join the beta. Say one thing. See it become an alarm. That's the
                whole demo.
              </p>
              <CtaButton label="Get the beta — it's free" size="lg" />
              <p className="mt-4 text-xs text-muted/70">iOS only · free to start · $9.99/mo to unlock everything</p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
