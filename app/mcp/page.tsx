import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CallDemoSection from "@/components/CallDemoSection";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { WAITLIST_HREF } from "@/lib/config";

export const metadata: Metadata = {
  title: "The MCP portal for your AI agents",
  description:
    "Squirrel Brain has a built-in MCP portal. Connect Claude Code, Cursor, or any agent you run yourself, and it can set alarms, read your day, file photos, and send a voice message — or a real call — straight to your phone.",
  alternates: { canonical: "/mcp" },
};

// The COMPLETE live tool set (31), grouped. Names must match the server's
// tools/list exactly — agents and directory reviewers read both.
const TOOL_GROUPS: { label: string; tools: string[] }[] = [
  { label: "Capture & save", tools: ["create_item", "create_alarm", "create_link", "add_to_forever_note"] },
  { label: "Reminders & the call", tools: ["cell_alert", "cancel_alarm", "list_alarms"] },
  {
    label: "Recall the user's brain",
    tools: [
      "search_items",
      "list_items",
      "get_item",
      "get_daily_brief",
      "get_overdue_items",
      "get_nudge_candidates",
      "list_boards",
      "get_agent_context",
      "get_user_profile",
      "get_current_time",
    ],
  },
  { label: "Organize & update", tools: ["update_item", "mark_item_done", "move_to_board", "remove_from_forever_note"] },
  { label: "Reach the human", tools: ["notify_human", "send_portal_message", "get_portal_messages"] },
  {
    label: "Account & cleanup",
    tools: [
      "get_squirrel_brain_help",
      "get_api_key_usage",
      "rotate_api_key",
      "delete_item",
      "delete_items_by_status",
      "delete_items_by_maker",
      "delete_portal_messages",
    ],
  },
];
const TOOL_COUNT = TOOL_GROUPS.reduce((n, g) => n + g.tools.length, 0);

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
    body: "For the one thing that can't slip, an agent can have your squirrel call your phone — at a set time or right now — a real call that rings through Silent mode, Focus, and a locked screen, on its own, in your squirrel's own voice. Not a notification you'll swipe away.",
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
    body: "Add the portal to Claude Code, Claude Desktop, or Cursor — or wire it into your own agent. The tools show up automatically — no glue code.",
  },
  {
    n: "3",
    title: "It acts on your brain",
    body: "Now your agent can set reminders, read your day, file things, and reach you on your terms — every write is traceable to the agent that made it.",
  },
];

const MCP_FAQS: { q: string; a: string }[] = [
  {
    q: "Can Claude or ChatGPT set a reminder or alarm on my phone?",
    a: "Not on their own — chat assistants can't fire a real, time-based alarm on your iPhone. Squirrel Brain closes that gap two ways: the app itself turns whatever you say, snap, or forward into real alarms — no AI setup needed — and MCP-capable agents like Claude Code, Cursor, or your own agent can drive it directly. ChatGPT can't connect custom MCP servers like this yet.",
  },
  {
    q: "How does an agent actually do things on my phone?",
    a: "Through the built-in MCP server. You generate a personal key in the app and connect your agent — Claude Code, Cursor, or one you run yourself. The agent then gets a real tool set: set an alarm, create an item, read your daily brief, append to a forever note, save a link, and trigger a real phone call — and every action it takes is traceable back to the agent that made it.",
  },
  {
    q: "Which AI tools can connect?",
    a: "Anything that speaks MCP and can send an API-key header: Claude Code, Claude Desktop, Cursor, and custom agents you host yourself — OpenClaw, LangChain, or plain scripts. Consumer chat apps like ChatGPT can't connect custom MCP tool servers yet.",
  },
];

const mcpFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://squirrelbrainapp.com/mcp#faq",
  mainEntity: MCP_FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

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
                Connect your AI agents{" "}
                <span style={{ color: "#FF7A1A" }}>to your brain.</span>
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.12}>
              <p
                className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
                style={{ color: "rgba(255,245,232,0.72)" }}
              >
                Squirrel Brain has a built-in MCP portal. Point Claude Code, Cursor, or an agent you run
                yourself at it, and it can set alarms, read your day, file what it finds, and reach you with a
                message — or a real phone call. Your squirrel becomes the memory layer for the AI tools you
                already use.
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.15}>
              <p className="text-sm leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "rgba(255,245,232,0.45)" }}>
                Works with anything that speaks MCP and can send an API key — Claude Code, Claude
                Desktop, Cursor, and agents you host yourself (OpenClaw, LangChain, your own scripts).
                Consumer chat apps like ChatGPT can&rsquo;t connect custom MCP servers yet. And if you
                never touch any of this: the app does everything on its own.
              </p>
            </FadeIn>

            {/* The complete tool set — all {TOOL_COUNT}, grouped */}
            <FadeIn immediate delay={0.18}>
              <p className="text-sm font-bold tracking-wide mb-5" style={{ color: "rgba(255,245,232,0.6)" }}>
                {TOOL_COUNT} tools your agent can call — the whole set:
              </p>
              <div className="flex flex-col gap-4 mb-9 max-w-2xl mx-auto">
                {TOOL_GROUPS.map((g) => (
                  <div key={g.label} className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                    <span
                      className="text-xs font-bold uppercase tracking-widest flex-shrink-0 sm:w-44 sm:text-right"
                      style={{ color: "rgba(255,245,232,0.4)" }}
                    >
                      {g.label}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {g.tools.map((t) => (
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
                  </div>
                ))}
              </div>
              <p className="text-sm mb-9" style={{ color: "rgba(255,245,232,0.5)" }}>
                Every tool, with parameters, is in the{" "}
                <a href="/mcp-docs" style={{ color: "#FF7A1A" }} className="hover:underline">developer docs</a>.
              </p>
            </FadeIn>

            <FadeIn immediate delay={0.24}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={WAITLIST_HREF}
                  className="inline-flex items-center gap-2 font-bold text-base px-7 py-3.5 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
                  style={{ background: "#FF7A1A", color: "white", boxShadow: "0 4px 24px rgba(255,122,26,0.4)" }}
                >
                  Join the launch list
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

        {/* FAQ — MCP-specific; carries its own FAQPage JSON-LD */}
        <section className="py-20 bg-white border-t border-border" aria-labelledby="mcp-faq-heading">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(mcpFaqJsonLd) }}
          />
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                MCP FAQ
              </p>
              <h2
                id="mcp-faq-heading"
                className="font-display font-extrabold text-ink text-balance"
                style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.1 }}
              >
                Agent questions, <span className="text-accent">answered.</span>
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              {MCP_FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-border bg-bg px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-bold text-ink list-none">
                    <span style={{ fontSize: "1.05rem" }}>{f.q}</span>
                    <span
                      className="flex-shrink-0 text-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                      style={{ fontSize: "1.5rem", lineHeight: 1 }}
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-t border-border" aria-labelledby="mcp-cta-heading">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 id="mcp-cta-heading" className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5 text-balance">
                Give your AI a memory that lives on your phone.
              </h2>
              <p className="text-muted text-lg mb-8">Pre-beta — join the launch list and developer invites go out first.</p>
              <CtaButton size="lg" />
            </FadeIn>
          </div>
        </section>
      </main>
      <CallDemoSection theme="mcppage" />
      <Footer />
    </>
  );
}
