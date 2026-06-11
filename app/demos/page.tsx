import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import DeviceFrame from "@/components/DeviceFrame";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Watch it Work",
  description:
    "Short demo clips showing Squirrel Brain in action — voice-to-alarm, receipt scanning, parking pin, meeting mode, and more.",
};

const DEMOS = [
  {
    id: 1,
    title: "Voice to calendar in 8 seconds",
    label: "DEMO: \"Dentist Thursday at 2\" → alarm",
    duration: "~8s",
    tags: ["voice", "calendar"],
  },
  {
    id: 2,
    title: "Receipt scan → return reminder",
    label: "DEMO: receipt snap → return-window prompt",
    duration: "~12s",
    tags: ["photo", "reminder"],
  },
  {
    id: 3,
    title: "Parking pin → find my car",
    label: "DEMO: park snap → exact pin days later",
    duration: "~10s",
    tags: ["photo", "GPS"],
  },
  {
    id: 4,
    title: "Burrow chat + suggestion chips",
    label: "DEMO: Pip chat + smart chips",
    duration: "~15s",
    tags: ["chat", "AI"],
  },
  {
    id: 5,
    title: "Voice recall: \"find the receipt\"",
    label: "DEMO: voice search → Pip finds it",
    duration: "~12s",
    tags: ["voice", "search"],
  },
  {
    id: 7,
    title: "Meeting Mode — record → extract",
    label: "DEMO: meeting recording → action list",
    duration: "~20s",
    tags: ["voice", "meeting"],
  },
  {
    id: 9,
    title: "YouTube link → stash + reminder",
    label: "DEMO: link stash → reminder set",
    duration: "~10s",
    tags: ["link", "reminder"],
  },
  {
    id: 10,
    title: "Whiteboard → checklist",
    label: "DEMO: whiteboard photo → task list",
    duration: "~12s",
    tags: ["photo", "tasks"],
  },
  {
    id: 11,
    title: "Schedule photo → whole season of alarms",
    label: "DEMO: soccer schedule → 6 games added",
    duration: "~15s",
    tags: ["photo", "calendar"],
    featured: true,
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
                    <DeviceFrame placeholderLabel={demo.label} className="w-32 mx-auto" />
                    <div>
                      <h3
                        id={`demo-title-${demo.id}`}
                        className="font-display text-base font-bold text-ink mb-1"
                      >
                        {demo.title}
                      </h3>
                      <p className="text-xs text-muted">{demo.duration}</p>
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
