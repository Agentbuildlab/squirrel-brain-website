import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { PhoneShot } from "@/components/v2/PhoneKit";
import RecipesSection from "@/components/RecipesSection";
import ProofSection from "@/components/ProofSection";

export const metadata: Metadata = {
  title: "For the Family",
  description:
    "Squirrel Brain for busy parents. Snap a soccer schedule and get every game as an alarm. Receipts, pix boards, morning brief with weather and a joke — all organised.",
};

const FEATURES = [
  {
    title: "Pix boards — for every pile on the counter",
    body: "Receipts. Recipes. Meds. School permission slips. Snap three of a kind and the board makes itself — no folders to set up. Everything's searchable by voice later: \"find the field trip form\" just works.",
    screen: "/assets/screens/pix-wall-v2.webp",
    screenAlt: "Pix board wall — every board your squirrel built, with a location banner",
  },
  {
    title: "Return-window reminders",
    body: "Snap a receipt. Your squirrel reads the store and the amount, then asks if you want a reminder before the return window closes. No more missed returns.",
    screen: "/assets/screens/receipts-board.webp",
    screenAlt: "Receipts board with snapped receipts and a return reminder",
  },
  {
    title: "Voice recall — find anything you ever snapped",
    body: "\"Find the permission slip for the science trip.\" \"What was the pediatrician's number?\" \"Am I free Sunday?\" Open the Burrow and just ask — your squirrel searches everything you've ever captured and answers back in plain language.",
    screen: "/assets/screens/burrow.webp",
    screenAlt: "The Burrow — chat with Scuttle to find anything you've captured",
  },
];

export default function FamilyPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative pt-28 pb-20 overflow-hidden"
          aria-labelledby="family-hero-heading"
          style={{ background: "linear-gradient(160deg, #F0F7FF 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn immediate>
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                    <circle cx="8.5" cy="4" r="2" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                    <path d="M1 10c0-1.66 1.34-3 3-3h4c1.66 0 3 1.34 3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none"/>
                  </svg>
                  For the family load
                </div>
              </FadeIn>
              <FadeIn immediate delay={0.08}>
                <h1
                  id="family-hero-heading"
                  className="font-display text-5xl sm:text-6xl font-extrabold text-ink leading-[1.05] mb-5 text-balance"
                >
                  The whole family{" "}
                  <span className="text-blue-500">in one brain.</span>
                </h1>
              </FadeIn>
              <FadeIn immediate delay={0.15}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  Snap schedules, receipts, permission slips, and meds. Your squirrel
                  reads every photo, sets every alarm, and reminds you before anything
                  slips. Reads every calendar already on your iPhone — nothing new to
                  connect.
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.2}>
                <CtaButton size="lg" />
              </FadeIn>
            </div>
            <FadeIn immediate from="right" delay={0.1} className="flex justify-center lg:justify-end">
              <PhoneShot
                src="/assets/screens/home-v4.webp"
                alt="Squirrel Brain home — the whole family's day at a glance"
                width={320}
              />
            </FadeIn>
          </div>
        </section>

        {/* Soccer / season snap — the money demo */}
        <section className="py-16 bg-white border-y border-border" aria-labelledby="schedule-demo-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                  The demo that says everything
                </p>
                <h2
                  id="schedule-demo-heading"
                  className="font-display text-3xl font-bold text-ink mb-4"
                >
                  Snap a whole season in one shot.
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  Photograph the soccer schedule on the fridge — or the school-year calendar
                  hanging in the hallway — and your squirrel fans it out into every single
                  game and event, all at once. You see them listed out. Tap &ldquo;Add all&rdquo; —
                  the whole season lands on your calendar.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  <strong className="text-ink">When it&rsquo;s game time, the address is already there.</strong>{" "}
                  Tap the location and it opens straight in Maps — turn-by-turn, no typing.
                  The address was captured right along with the event.
                </p>
                {/* The actual schedule you snap — make it unmistakable this is the INPUT */}
                <div className="max-w-sm">
                  <div
                    className="flex items-start gap-2.5 rounded-xl px-3.5 py-2.5 mb-3"
                    style={{ background: "#fde8d8", border: "1px solid rgba(255,122,26,0.25)" }}
                  >
                    <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1.1 }}>📸</span>
                    <p className="text-sm leading-snug" style={{ color: "#7a4a18" }}>
                      <strong className="text-ink">You take a photo of this.</strong> It&rsquo;s the
                      paper schedule on your fridge — Squirrel Brain doesn&rsquo;t make it, it{" "}
                      <em>reads</em> it and turns it into every game on your calendar.
                    </p>
                  </div>
                  <div
                    className="relative rounded-2xl overflow-hidden border border-border"
                    style={{ boxShadow: "0 8px 24px rgba(26,18,8,0.10)" }}
                  >
                    <Image
                      src="/assets/soccer_schedule_fun.webp"
                      alt="Acorn FC fall season schedule on the fridge — the photo you snap"
                      width={780}
                      height={1000}
                      className="w-full h-auto"
                    />
                    <div
                      className="absolute bottom-2 left-2 rounded-md px-2 py-1"
                      style={{ background: "rgba(26,18,8,0.72)" }}
                    >
                      <span
                        className="text-[10px] font-semibold"
                        style={{ color: "rgba(255,245,232,0.92)" }}
                      >
                        📸 The photo you take
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn from="right" delay={0.1} className="flex justify-center">
              <PhoneShot
                src="/assets/screens/calendar-v2.webp"
                alt="Calendar with full soccer season automatically added"
                width={320}
              />
            </FadeIn>
          </div>
        </section>

        {/* Parking — never lose your car */}
        <section className="py-16" style={{ background: "#faf6f0" }} aria-labelledby="parking-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <FadeIn from="right" delay={0.1} className="flex justify-center md:order-2">
              <PhoneShot
                src="/assets/screens/parking-board-v2.webp"
                alt="Parking board — your P3 spot saved and GPS-pinned"
                width={320}
              />
            </FadeIn>
            <FadeIn className="md:order-1">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                  Never lose your car again
                </p>
                <h2
                  id="parking-heading"
                  className="font-display text-3xl font-bold text-ink mb-4"
                >
                  Snap it. Pin it. Find it.
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  The stadium lot after the game. The mall when you&rsquo;ve forgotten which entrance
                  you came in. The airport when you fly back a week later with no idea where you left
                  it. Snap a photo of your car — or just the level-and-row sign — and it gets a GPS pin
                  automatically, right where you parked.
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  Whenever you&rsquo;re ready — an hour later or a week later — pull the photo up, tap
                  the pin, and your squirrel navigates you straight back to it. No more wandering the
                  lot row by row.
                </p>
                {/* The actual car photo you snap */}
                <div
                  className="relative rounded-2xl overflow-hidden border border-border max-w-sm"
                  style={{ boxShadow: "0 8px 24px rgba(26,18,8,0.10)" }}
                >
                  <Image
                    src="/assets/car_parked.webp"
                    alt="Your car parked in the garage on level P3"
                    width={900}
                    height={900}
                    className="w-full h-auto"
                  />
                  <div
                    className="absolute bottom-2 left-2 rounded-md px-2 py-1"
                    style={{ background: "rgba(26,18,8,0.7)" }}
                  >
                    <span
                      className="text-[10px] font-semibold"
                      style={{ color: "rgba(255,245,232,0.9)" }}
                    >
                      You snap this — GPS pinned automatically
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Feature grid — 2-up layout */}
        <section className="py-20" aria-labelledby="family-features-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="family-features-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-12 text-center"
              >
                Less chaos. More done.
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {FEATURES.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div className="rounded-3xl border border-border bg-white p-6 flex flex-col gap-5 h-full">
                    <div className="flex justify-center">
                      <PhoneShot src={f.screen} alt={f.screenAlt} width={260} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">{f.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* RECIPES (moved from home) */}
        <RecipesSection />

        {/* MEDS (moved from home) */}
        <ProofSection />

        {/* "Your squirrel, your way" — naming + companion section */}
        <section
          className="py-20 border-y border-border"
          style={{ background: "#faf6f0" }}
          aria-labelledby="your-squirrel-heading"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                Your squirrel, your way
              </p>
              <h2
                id="your-squirrel-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5"
              >
                You name it. It becomes yours.
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
                When you set up Squirrel Brain, you name your squirrel. Call it Scuttle, Hazel, Nutmeg,
                whatever feels right. From that moment, it&rsquo;s not just an app — it&rsquo;s a little
                companion that actually knows your life.
              </p>
              <p className="text-base text-muted leading-relaxed mb-6 max-w-2xl mx-auto">
                A morning hello. A nudge before the game. A &ldquo;hey, don&rsquo;t forget Sam&rsquo;s gift&rdquo; two days
                before the birthday. It checks in through the day in its own voice — warm, a little
                funny, and 100% on your side.
              </p>
              <p className="text-base text-muted leading-relaxed max-w-2xl mx-auto">
                It knows your schedule. It knows what matters to you. And unlike every other app on
                your phone, it actually follows through.
              </p>
              <div className="mt-12 flex flex-col items-center gap-4">
                <CtaButton size="lg" />
                <p className="text-muted text-base">Join the launch list — be first when it opens.</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
