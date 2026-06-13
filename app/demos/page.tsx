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
    title: "Voice to calendar in 8 seconds",
    caption: "Say \"Dentist Thursday at 2\" — your squirrel sets the alarm",
    duration: "~8s",
    tags: ["voice", "calendar"],
    screen: "/assets/screens/home-v3.webp",
    screenAlt: "Home dashboard showing calendar events",
  },
  {
    id: 2,
    title: "Receipt scan → return reminder",
    caption: "Snap a receipt — squirrel reads the date and asks if you want a return reminder",
    duration: "~12s",
    tags: ["photo", "reminder"],
    screen: "/assets/screens/notes.webp",
    screenAlt: "Notes showing captured receipt details",
  },
  {
    id: 3,
    title: "Parking pin → find my car",
    caption: "Snap where you parked — GPS-stamped and waiting when you need it",
    duration: "~10s",
    tags: ["photo", "GPS"],
    screen: "/assets/screens/pix-v2.webp",
    screenAlt: "Pix photo boards showing parking snap",
  },
  {
    id: 4,
    title: "Burrow chat + suggestion chips",
    caption: "Ask your squirrel anything — smart chips surface what's next",
    duration: "~15s",
    tags: ["chat", "AI"],
    screen: "/assets/screens/home-v3.webp",
    screenAlt: "Home showing squirrel suggestions",
  },
  {
    id: 5,
    title: "Voice recall: \"find the receipt\"",
    caption: "Speak a search — your squirrel finds it instantly from everything you've captured",
    duration: "~12s",
    tags: ["voice", "search"],
    screen: "/assets/screens/notes.webp",
    screenAlt: "Notes search results",
  },
  {
    id: 7,
    title: "Meeting Mode — record → extract",
    caption: "Record your debrief — squirrel pulls out the follow-ups and action items",
    duration: "~20s",
    tags: ["voice", "meeting"],
    screen: "/assets/screens/notes.webp",
    screenAlt: "Notes with meeting action items extracted",
  },
  {
    id: 9,
    title: "YouTube link → stash + reminder",
    caption: "Drop a link into the Burrow — it lands in your stash with an optional reminder",
    duration: "~10s",
    tags: ["link", "reminder"],
    screen: "/assets/screens/links.webp",
    screenAlt: "LinkStash with YouTube and other saved links",
  },
  {
    id: 10,
    title: "Whiteboard → checklist",
    caption: "Snap a whiteboard — squirrel converts it to a tappable task list",
    duration: "~12s",
    tags: ["photo", "tasks"],
    screen: "/assets/screens/notes.webp",
    screenAlt: "Notes with checklist extracted from whiteboard photo",
  },
  {
    id: 11,
    title: "Schedule photo → whole season of alarms",
    caption: "Snap the soccer schedule — squirrel finds every game and adds them all at once",
    duration: "~15s",
    tags: ["photo", "calendar"],
    featured: true,
    screen: "/assets/screens/calendar.webp",
    screenAlt: "Calendar with soccer games added across the month",
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

        {/* Demo grid */}
        <section className="py-16" aria-labelledby="demo-grid-heading">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 id="demo-grid-heading" className="sr-only">All demos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEMOS.map((demo, i) => (
                <FadeIn key={demo.id} delay={i * 0.06}>
                  <article
                    className={`bg-white rounded-3xl border p-5 flex flex-col gap-4 h-full ${
                      demo.featured ? "border-accent/30 ring-1 ring-accent/20" : "border-border"
                    }`}
                    aria-labelledby={`demo-title-${demo.id}`}
                  >
                    {demo.featured && (
                      <div className="text-xs font-bold text-accent tracking-wide uppercase">
                        Featured demo
                      </div>
                    )}
                    <div className="flex justify-center">
                      <PhoneShot src={demo.screen} alt={demo.screenAlt} width={120} />
                    </div>
                    <div>
                      <h3
                        id={`demo-title-${demo.id}`}
                        className="font-display text-base font-bold text-ink mb-1"
                      >
                        {demo.title}
                      </h3>
                      <p className="text-xs text-muted mb-1">{demo.duration}</p>
                      <p className="text-xs text-muted/80 leading-snug">{demo.caption}</p>
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
                Seen enough? Try the real thing.
              </h2>
              <p className="text-muted text-lg mb-8">
                Free to start. Your first capture takes 5 seconds.
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
