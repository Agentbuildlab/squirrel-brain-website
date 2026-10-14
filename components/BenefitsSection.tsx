import Link from "next/link";

// Compact benefits block (2026-10-13 simplify, Adam). Replaces the three long
// narrative sections that used to carry the pitch on the home page — SegmentDoors,
// PixMoatSection, and CallSection — with four scannable lines. Those components are
// kept in the repo (now unused) in case the longer treatment is wanted back; the
// home page just stops restating the same promise five times. Server component:
// no client JS, fully crawlable for search + AI answer engines.

type Benefit = { title: string; body: string; icon: React.ReactNode };

const sc = {
  stroke: "#FF7A1A",
  strokeWidth: 1.7,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const BENEFITS: Benefit[] = [
  {
    title: "Capture anything — it does the rest",
    body: "Snap a photo, speak a note, or forward a text — it becomes a reminder, alarm, or calendar event.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24"><path {...sc} d="M4 8.5h3l1.3-1.8h7.4L17 8.5h3a1 1 0 011 1V17a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5a1 1 0 011-1z" /><circle {...sc} cx="12" cy="13" r="3" /></svg>
    ),
  },
  {
    title: "The one you can't miss — it calls you",
    body: "A real phone call that rings when your ringer's on, vibrates on silent, and reaches you on a locked screen — and you can talk right back.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24"><path {...sc} d="M6 9a6 6 0 1112 0c0 5 2 6 2 6H4s2-1 2-6z" /><path {...sc} d="M10.2 20a2 2 0 003.6 0" /></svg>
    ),
  },
  {
    title: "A second brain that takes action",
    body: "Everything's filed, searchable, and GPS-stamped — not just stored. Ask for it and it's there.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24"><circle {...sc} cx="10.5" cy="10.5" r="6" /><path {...sc} d="M15 15l5 5" /></svg>
    ),
  },
  {
    title: "Optional: let your AI run it",
    body: "Connect Claude, Cursor, or your own agent over MCP — or use the app on its own. It never needs AI to work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24"><rect {...sc} x="4" y="7" width="16" height="12" rx="2.5" /><path {...sc} d="M12 7V4M9 12h.01M15 12h.01M9 15.5h6" /></svg>
    ),
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 lg:py-24 bg-bg" aria-labelledby="benefits-heading">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
            What it does
          </p>
          <h2
            id="benefits-heading"
            className="font-display font-extrabold text-ink text-balance"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.1 }}
          >
            Snap it, say it, stash it — <span className="text-accent">it handles the rest.</span>
          </h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {BENEFITS.map((b) => (
            <li
              key={b.title}
              className="flex items-start gap-4 rounded-2xl border border-border bg-white p-5 lg:p-6"
            >
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-xl"
                style={{ width: 46, height: 46, background: "rgba(255,122,26,0.12)" }}
                aria-hidden="true"
              >
                {b.icon}
              </span>
              <div>
                <h3 className="font-display font-bold text-ink mb-1" style={{ fontSize: "1.05rem" }}>
                  {b.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="text-center mt-8 text-sm text-muted">
          <Link href="/demos" className="font-bold underline underline-offset-4 text-accent hover:opacity-80">
            Watch it work
          </Link>
          {"  ·  "}
          <Link href="/mcp" className="font-bold underline underline-offset-4 text-accent hover:opacity-80">
            For AI agents
          </Link>
          {"  ·  "}
          Free to use at launch · iPhone
        </p>
      </div>
    </section>
  );
}
