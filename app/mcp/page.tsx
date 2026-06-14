import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { TESTFLIGHT_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Connect any AI agent",
  description:
    "Squirrel Brain has a built-in MCP portal. Connect Claude, ChatGPT, or any agent to set alarms, read your day, file photos, and send a voice message — or a real call — straight to your phone.",
};

const TOOLS = [
  "create_alarm",
  "create_item",
  "pip_call",
  "notify_human",
  "list_items",
  "get_daily_brief",
  "add_to_forever_note",
  "create_link",
  "get_agent_context",
  "generate_api_key",
];

const CAPABILITIES = [
  {
    title: "Set alarms & reminders",
    body: "Your agent schedules a real alarm on your phone — the same one your squirrel uses, escalation and all.",
  },
  {
    title: "Read your day",
    body: "Pull your calendar, open follow-ups, and the morning brief, so an agent can reason about what's actually on your plate.",
  },
  {
    title: "Call you for real",
    body: "For the one thing that can't slip, an agent can trigger a phone call that breaks through silent mode — not a notification you'll swipe away.",
  },
  {
    title: "File to your boards",
    body: "Drop a note, a link, or a captured item straight onto the right Pix board — it shows up in the app like you snapped it yourself.",
  },
  {
    title: "Keep a forever note",
    body: "Append to the running list that never gets erased, so an agent's output sticks around exactly where you'll look for it.",
  },
  {
    title: "Send a voice message",
    body: "Have your squirrel speak an agent's message in its own voice — a warm nudge instead of one more line of text.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Generate a key in the app",
    body: "Open Squirrel Brain and mint a personal API key. It's yours — scoped to your brain, revocable anytime.",
  },
  {
    n: "2",
    title: "Point your agent at the portal",
    body: "Add the MCP server to Claude, ChatGPT, or any custom agent. The tools show up automatically — no glue code.",
  },
  {
    n: "3",
    title: "It acts on your brain",
    body: "Now your agent can set reminders, read your day, file things, and reach you on your terms — every write is traceable to the agent that made it.",
  },
];

export default function McpPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero — dark band */}
        <section
          className="relative pt-32 pb-20 overflow-hidden"
          style={{ background: "#1a1208" }}
          aria-labelledby="mcp-hero-heading"
        >
          <div
            className="absolute pointer-events-none"
            style={{
              width: 760,
              height: 760,
              top: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
              background:
                "radial-gradient(circle, rgba(255,122,26,0.16) 0%, rgba(244,166,77,0.05) 45%, transparent 70%)",
              filter: "blur(70px)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <FadeIn immediate>
              <p
                className="text-xs font-bold tracking-widest uppercase mb-4"
                style={{ color: "#FF7A1A" }}
              >
                External agents · MCP portal
              </p>
            </FadeIn>
            <FadeIn immediate delay={0.06}>
              <h1
                id="mcp-hero-heading"
                className="font-display font-extrabold text-balance mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.06, color: "#fff5e8" }}
              >
                Connect any AI agent{" "}
                <span style={{ color: "#FF7A1A" }}>to your brain.</span>
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.12}>
              <p
                className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
                style={{ color: "rgba(255,245,232,0.72)" }}
              >
                Squirrel Brain has a built-in MCP portal. Let Claude, ChatGPT, or your own agent set
                alarms, read your day, file what it finds, and reach you with a message — or a real
                phone call — straight on your phone. Your squirrel becomes the memory layer for every
                AI tool you use.
              </p>
            </FadeIn>

            {/* Tool pills */}
            <FadeIn immediate delay={0.18}>
              <div className="flex flex-wrap justify-center gap-2 mb-9 max-w-2xl mx-auto">
                {TOOLS.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-full"
                    style={{
                      background: "rgba(255,122,26,0.12)",
                      border: "1px solid rgba(255,122,26,0.25)",
                      color: "#FF7A1A",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn immediate delay={0.24}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={TESTFLIGHT_URL}
                  className="inline-flex items-center gap-2 font-bold text-base px-7 py-3.5 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
                  style={{ background: "#FF7A1A", color: "white", boxShadow: "0 4px 24px rgba(255,122,26,0.4)" }}
                >
                  Get the beta — it&rsquo;s free
                </a>
                <a
                  href="/mcp-docs"
                  className="inline-flex items-center gap-2 font-bold text-base px-7 py-3.5 rounded-full transition-colors"
                  style={{ border: "1.5px solid rgba(255,245,232,0.25)", color: "#fff5e8" }}
                >
                  Developer docs
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* What your agent can do */}
        <section className="py-20 lg:py-28" aria-labelledby="mcp-cap-heading">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">What it can do</p>
                <h2
                  id="mcp-cap-heading"
                  className="font-display font-extrabold text-ink text-balance"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  Your agent, with hands on your phone.
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAPABILITIES.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.06}>
                  <div className="rounded-3xl border border-border bg-white p-6 h-full">
                    <h3 className="font-display text-lg font-bold text-ink mb-2">{c.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{c.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 lg:py-28 border-y border-border" style={{ background: "#faf6f0" }} aria-labelledby="mcp-how-heading">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">How it works</p>
                <h2
                  id="mcp-how-heading"
                  className="font-display font-extrabold text-ink text-balance"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  Three steps. No glue code.
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((s, i) => (
                <FadeIn key={s.n} delay={i * 0.08}>
                  <div className="rounded-3xl border border-border bg-white p-7 h-full">
                    <div
                      className="flex items-center justify-center rounded-2xl font-display font-extrabold text-white mb-5"
                      style={{ width: 48, height: 48, background: "#FF7A1A", fontSize: "1.4rem" }}
                    >
                      {s.n}
                    </div>
                    <h3 className="font-display text-lg font-bold text-ink mb-2">{s.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{s.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.2}>
              <p className="text-center mt-12 text-base text-muted max-w-2xl mx-auto leading-relaxed">
                Every write is attributed to the agent that made it — so nothing anonymous ever
                lands in your brain. Read the full tool list and auth flow in the{" "}
                <a href="/mcp-docs" className="text-accent font-semibold hover:underline">developer docs</a>.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-border" aria-labelledby="mcp-cta-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 id="mcp-cta-heading" className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5 text-balance">
                Give your AI a memory that lives on your phone.
              </h2>
              <p className="text-muted text-lg mb-8">Free to start. iOS · $9.99/mo to unlock everything.</p>
              <CtaButton size="lg" />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
