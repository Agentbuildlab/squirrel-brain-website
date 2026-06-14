import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { PhoneShot } from "@/components/v2/PhoneKit";

export const metadata: Metadata = {
  title: "Watch it Work",
  description:
    "Short demo clips showing Squirrel Brain in action — voice-to-alarm, receipt scanning, parking pin, meeting mode, and more.",
};

const DEMOS = [
  {
    id: 1,
    title: "Voice to calendar, easily",
    caption: "Say \"Dentist Thursday at 2\" — your squirrel sets the event. No typing, no menus.",
    duration: "voice",
    tags: ["voice", "calendar"],
    screen: "/assets/screens/calendar-v2.webp",
    screenAlt: "Calendar showing the event your squirrel set from your voice",
  },
  {
    id: 2,
    title: "Receipt scan → return reminder",
    caption: "Snap a receipt — your squirrel reads the date and asks if you want a return reminder",
    duration: "~12s",
    tags: ["photo", "reminder"],
    screen: "/assets/screens/receipts-board.webp",
    screenAlt: "Receipts board with the snapped receipt filed and a return reminder",
  },
  {
    id: 3,
    title: "Parking pin → find my car",
    caption: "Snap where you parked — GPS-stamped and waiting when you need it",
    duration: "~10s",
    tags: ["photo", "GPS"],
    screen: "/assets/screens/parking-board-v2.webp",
    screenAlt: "Parking board with your P3 spot, GPS-pinned on the photo",
  },
  {
    id: 4,
    title: "Your day at a glance — Daily Countdown",
    caption: "Open the app and the Daily Countdown shows exactly what's next and how long you've got",
    duration: "glance",
    tags: ["calendar", "AI"],
    screen: "/assets/screens/home-v4.webp",
    screenAlt: "Home showing the Daily Countdown to the next event",
  },
  {
    id: 5,
    title: "Voice recall: \"find the receipt\"",
    caption: "Speak a search — your squirrel finds it instantly from everything you've captured",
    duration: "~12s",
    tags: ["voice", "search"],
    screen: "/assets/screens/burrow.webp",
    screenAlt: "The Burrow answering a recall question in plain language",
  },
  {
    id: 7,
    title: "Meeting Mode — record → extract action items",
    caption: "Record your debrief — your squirrel files the action items (Send the Q3 deck, Follow up with Sarah) straight into your notes",
    duration: "meeting",
    tags: ["voice", "meeting"],
    screen: "/assets/screens/meeting-extract.webp",
    screenAlt: "Notes showing action items Scuttle extracted from a meeting",
  },
];

const TAG_COLORS: Record<string, string> = {
  voice: "bg-orange-50 text-orange-600",
  calendar: "bg-blue-50 text-blue-600",
  photo: "bg-purple-50 text-purple-600",
  reminder: "bg-green-50 text-green-600",
  GPS: "bg-yellow-50 text-yellow-700",
  chat: "bg-pink-50 text-pink-600",
  AI: "bg-indigo-50 text-indigo-600",
  search: "bg-teal-50 text-teal-600",
  meeting: "bg-rose-50 text-rose-600",
  link: "bg-cyan-50 text-cyan-600",
  tasks: "bg-lime-50 text-lime-700",
};

export default function DemosPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="pt-28 pb-16"
          aria-labelledby="demos-hero-heading"
          style={{ background: "linear-gradient(160deg, #F5F0FF 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <rect x="1" y="2" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none"/>
                  <path d="M5 4.5l3 1.5-3 1.5V4.5z" fill="currentColor"/>
                </svg>
                Demo reel
              </div>
            </FadeIn>
            <FadeIn immediate delay={0.08}>
              <h1
                id="demos-hero-heading"
                className="font-display text-5xl sm:text-6xl font-extrabold text-ink leading-tight mb-5"
              >
                Watch it work
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.15}>
              <p className="text-lg text-muted max-w-xl mx-auto mb-6">
                Short, honest clips of Squirrel Brain doing its thing. No narration, no
                polished ads — just real app behaviour.
              </p>
            </FadeIn>
            <FadeIn immediate delay={0.2}>
              <p className="text-sm text-muted/70">
                Demo clips are in production — placeholders show what each clip covers.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Demo grid — 2-up so phones are readable */}
        <section className="py-16" aria-labelledby="demo-grid-heading">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 id="demo-grid-heading" className="sr-only">All demos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {DEMOS.map((demo, i) => (
                <FadeIn key={demo.id} delay={i * 0.06}>
                  <article
                    className="bg-white rounded-3xl border border-border p-6 flex flex-col gap-5 h-full"
                    aria-labelledby={`demo-title-${demo.id}`}
                  >
                    <div className="flex justify-center">
                      <PhoneShot src={demo.screen} alt={demo.screenAlt} width={300} />
                    </div>
                    <div>
                      <h3
                        id={`demo-title-${demo.id}`}
                        className="font-display text-base font-bold text-ink mb-1"
                      >
                        {demo.title}
                      </h3>
                      <p className="text-xs text-muted mb-2">{demo.duration}</p>
                      <p className="text-sm text-muted/80 leading-snug">{demo.caption}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {demo.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TAG_COLORS[tag] ?? "bg-bg text-muted"}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-border" aria-labelledby="demos-cta-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="demos-cta-heading"
                className="font-display text-3xl font-bold text-ink mb-5"
              >
                Seen enough? Get on the launch list.
              </h2>
              <p className="text-muted text-lg mb-8">
                We&rsquo;ll email you the moment it opens — and you&rsquo;ll be first into the beta.
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
