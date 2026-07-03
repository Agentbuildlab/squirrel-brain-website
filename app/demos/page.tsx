import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CallDemoSection from "@/components/CallDemoSection";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Watch it Work",
  description:
    "Short films of Squirrel Brain in action — for work, for family, and for your AI agents. Voice and photos turned into reminders, alarms, boards, and a phone call that rings right through Silent mode, Focus, and a locked screen.",
  alternates: { canonical: "/demos" },
};

type Film = { src: string; title: string; sub: string; og?: boolean };
type Lane = { label: string; accent: string; band: string; blurb: string; films: Film[] };

const LANES: Lane[] = [
  {
    label: "For Work",
    accent: "#FF7A1A",
    band: "linear-gradient(160deg, #FFF0E6 0%, #ffffff 72%)",
    blurb: "Catch what slips between jobs — follow-ups, proof, and the things you leave behind.",
    films: [
      { src: "FlagshipFollowup", title: "The Follow-Up That Would Have Slipped", sub: "Snap a card, catch the promise.", og: true },
      { src: "TheCall", title: "The Call Before You Blow the Call", sub: "It doesn't just remind you — it talks you through it." },
      { src: "ScuttleCheckin", title: "Your Squirrel Checks In", sub: "Every day, a call — not a notification you'll swipe away." },
      { src: "MeetingRamble", title: "Walk Out. Ramble. Done.", sub: "Talk it through; it writes the to-dos." },
      { src: "WhereDidILeave", title: "Where Did I Leave That?", sub: "Proof for the things you leave behind." },
    ],
  },
  {
    label: "For Family",
    accent: "#2a6aee",
    band: "linear-gradient(160deg, #E8F1FF 0%, #ffffff 72%)",
    blurb: "The whole household in one brain — schedules, receipts, doses, and piles that sort themselves.",
    films: [
      { src: "InvisibleLoad", title: "The Invisible Load", sub: "The hundred little things — remembered before they slip." },
      { src: "TwoJobs", title: "Two Jobs. One Brain.", sub: "Carrying work and family at the same time — both worlds, one brain." },
      { src: "FamilyLoad", title: "The Family Load, Finally Caught", sub: "One photo of the season → every date on your calendar.", og: true },
      { src: "BoxesOrganize", title: "The Boxes Organize Themselves", sub: "Snap it. Restash it. Find it later." },
      { src: "SortYourDay", title: "Your Day, Waiting to Be Sorted", sub: "Snap the pile; it sorts itself." },
      { src: "ForeverNote", title: "The List That Never Gets Lost", sub: "A note that never erases." },
    ],
  },
  {
    label: "For your AI",
    accent: "#2f9e63",
    band: "linear-gradient(160deg, #E2F5EC 0%, #ffffff 72%)",
    blurb: "Give your AI hands — real alarms, real calls, and your boards, over MCP.",
    films: [
      { src: "FlagshipAI", title: "Your AI Finally Has Hands", sub: "Claude can't set an alarm on your phone. This lets it.", og: true },
      { src: "AgentCleanup", title: "The Agent That Cleans Up Your Day", sub: "Your AI tidies the pile and files it." },
    ],
  },
];

function FilmCard({ film, accent, label }: { film: Film; accent: string; label: string }) {
  return (
    <div className="flex flex-col gap-3">
      <div
        className="relative rounded-3xl overflow-hidden bg-black mx-auto w-full"
        style={{ aspectRatio: "9 / 16", maxWidth: 320, border: `1px solid ${accent}33`, boxShadow: "0 18px 44px rgba(26,18,8,0.16)" }}
      >
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          src={`/demos/${film.src}.mp4`}
          poster={`/demos/posters/${film.src}.jpg`}
          playsInline
          controls
          preload="none"
          className="w-full h-full object-cover"
        />
        {film.og && (
          <span
            className="pointer-events-none absolute top-3 left-3 text-[11px] font-bold text-white px-2.5 py-1 rounded-full"
            style={{ background: accent, boxShadow: "0 4px 14px rgba(0,0,0,0.25)" }}
          >
            ★ The original
          </span>
        )}
        <span
          className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold text-white/90 px-2.5 py-1 rounded-full"
          style={{ background: "rgba(0,0,0,0.45)" }}
        >
          ▶ Tap for sound
        </span>
      </div>
      <div className="text-center max-w-[320px] mx-auto">
        <span
          className="inline-block text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-1.5"
          style={{ background: `${accent}1a`, color: accent }}
        >
          {label}
        </span>
        <h3 className="font-display font-bold text-ink" style={{ fontSize: "1.05rem", lineHeight: 1.2 }}>
          {film.title}
        </h3>
        <p className="text-sm text-muted leading-snug mt-1">{film.sub}</p>
      </div>
    </div>
  );
}

export default function DemosPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section
          className="pt-28 pb-14"
          aria-labelledby="demos-hero-heading"
          style={{ background: "linear-gradient(160deg, #F5F0FF 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn immediate>
              <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                Short films · work · family · your AI
              </div>
            </FadeIn>
            <FadeIn immediate delay={0.08}>
              <h1 id="demos-hero-heading" className="font-display text-5xl sm:text-6xl font-extrabold text-ink leading-tight mb-5">
                Watch it work
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.15}>
              <p className="text-lg text-muted max-w-xl mx-auto">
                Short, narrated films of Squirrel Brain doing its thing — grouped by what it&rsquo;s for.
                Tap any one to play with sound.
              </p>
            </FadeIn>
          </div>
        </section>

        {LANES.map((lane, li) => (
          <section
            key={lane.label}
            className="py-16 border-b border-border"
            style={{ background: lane.band }}
            aria-label={lane.label}
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <FadeIn>
                <div className="text-center mb-10">
                  <span
                    className="inline-block text-xs font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full mb-3"
                    style={{ background: lane.accent, color: "#fff" }}
                  >
                    {lane.label}
                  </span>
                  <p className="text-muted max-w-xl mx-auto" style={{ fontSize: "1.02rem" }}>
                    {lane.blurb}
                  </p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 justify-items-center">
                {lane.films.map((film, i) => (
                  <FadeIn key={film.src} delay={i * 0.05}>
                    <FilmCard film={film} accent={lane.accent} label={lane.label} />
                  </FadeIn>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-white" aria-labelledby="demos-cta-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2 id="demos-cta-heading" className="font-display text-3xl font-bold text-ink mb-5">
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
      <CallDemoSection theme="demospage" />
      <Footer />
    </>
  );
}
