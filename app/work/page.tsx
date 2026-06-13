import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { PhoneShot } from "@/components/v2/PhoneKit";

export const metadata: Metadata = {
  title: "For the Field",
  description:
    "Squirrel Brain for sales reps, delivery drivers, service techs, and contractors. Voice debriefs, GPS photo proof, and follow-ups that ring your phone.",
};

const FEATURES = [
  {
    title: "Voice capture between stops",
    body: "Pull up to the next call, talk through what just happened. Squirrel Brain extracts the follow-ups, the promised callbacks, and the dates — so you never lose ground between windshield and front door.",
    screen: "/assets/screens/home-v3.webp",
    screenAlt: "Home showing captured voice note in calendar",
  },
  {
    title: "GPS-stamped photo proof",
    body: "Snap what you left on-site. Squirrel Brain reads the photo, pulls the job details, and stores a timestamped record. Proof of delivery, service, or install — instantly in the Burrow.",
    screen: "/assets/screens/pix.webp",
    screenAlt: "Pix showing GPS-stamped photo boards",
  },
  {
    title: "Parking pin",
    body: "Tap once when you park. Days later, when you've walked three blocks in every direction — Squirrel Brain drops you straight back. No hunting.",
    screen: "/assets/screens/pix.webp",
    screenAlt: "Pix showing parking photo saved",
  },
  {
    title: "Meeting Mode for windshield time",
    body: "Drive and debrief at the same time. Meeting Mode records and transcribes while you drive. You get a clean action list waiting at your next stop.",
    screen: "/assets/screens/notes.webp",
    screenAlt: "Notes with meeting action items extracted",
  },
  {
    title: "4 PM nudge",
    body: "Every weekday at 4 PM, your daily brief recaps open follow-ups, tomorrow's commitments, and anything you captured that hasn't been resolved. Nothing slips through end-of-day.",
    screen: "/assets/screens/home-v3.webp",
    screenAlt: "Home dashboard with daily summary",
  },
  {
    title: "Follow-ups that ring your phone",
    body: "When a follow-up actually matters — your squirrel rings your phone and speaks in its own voice. Not a push notification. An actual call that you can't miss while driving.",
    screen: "/assets/screens/calendar.webp",
    screenAlt: "Calendar showing upcoming follow-up with alarm",
  },
];

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative pt-28 pb-20 overflow-hidden"
          aria-labelledby="work-hero-heading"
          style={{ background: "linear-gradient(160deg, #FFF0E6 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn immediate>
                <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <rect x="2" y="3" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                    <path d="M4 3V2a2 2 0 014 0v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  For the field
                </div>
              </FadeIn>
              <FadeIn immediate delay={0.08}>
                <h1
                  id="work-hero-heading"
                  className="font-display text-5xl sm:text-6xl font-extrabold text-ink leading-[1.05] mb-5 text-balance"
                >
                  Your head is full.{" "}
                  <span className="text-accent">Your phone isn't.</span>
                </h1>
              </FadeIn>
              <FadeIn immediate delay={0.15}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  For sales reps, delivery drivers, service techs, and contractors. Every
                  job detail captured between stops. Every follow-up handled before
                  end of day.
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.2}>
                <CtaButton size="lg" />
              </FadeIn>
            </div>
            <FadeIn immediate from="right" delay={0.1} className="flex justify-center lg:justify-end">
              <PhoneShot
                src="/assets/screens/home-v3.webp"
                alt="Squirrel Brain home — voice capture lands as a calendar event"
                width={240}
              />
            </FadeIn>
          </div>
        </section>

        {/* Feature grid */}
        <section className="py-20" aria-labelledby="work-features-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="work-features-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-12 text-center"
              >
                Everything you need between stops
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.07}>
                  <div className="bg-white rounded-3xl border border-border p-6 flex flex-col gap-4 h-full">
                    <div className="flex justify-center">
                      <PhoneShot src={f.screen} alt={f.screenAlt} width={100} />
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink">{f.title}</h3>
                    <p className="text-sm text-muted leading-relaxed flex-1">{f.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-20 bg-white border-t border-border"
          aria-labelledby="work-cta-heading"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="work-cta-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5"
              >
                Your next call is in 8 minutes. Capture this one first.
              </h2>
              <p className="text-muted text-lg mb-8">
                Free to start. No setup. Just tap and talk.
              </p>
              <CtaButton size="lg" />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
