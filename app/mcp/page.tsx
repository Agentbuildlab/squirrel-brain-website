import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CallDemoSection from "@/components/CallDemoSection";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { WAITLIST_HREF } from "@/lib/config";

export const metadata: Metadata = {
  title: "The MCP memory + delivery layer for your AI agents | Squirrel Brain",
  description:
    "Squirrel Brain is an MCP server that gives your AI agents a persistent shared brain and a real line to your phone — set alarms, read your day, file what they find, and place an actual voice call. Works with Claude Code, Cursor, or any agent you run.",
  alternates: { canonical: "/mcp" },
};

// The COMPLETE live tool set (32), grouped. Names must match the server's
// tools/list exactly — agents and directory reviewers read both.
const TOOL_GROUPS: { label: string; tools: string[] }[] = [
  { label: "Capture & save", tools: ["create_item", "create_alarm", "create_link", "add_to_forever_note"] },
  { label: "Reach you IRL", tools: ["cell_alert", "notify_human", "send_portal_message"] },
  {
    label: "Recall the shared brain",
    tools: [
      "search_items",
      "find_items",
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
  { label: "Alarms", tools: ["cancel_alarm", "list_alarms"] },
  { label: "Organize & update", tools: ["update_item", "mark_item_done", "move_to_board", "remove_from_forever_note"] },
  { label: "Messages", tools: ["get_portal_messages", "delete_portal_messages"] },
  {
    label: "Account & cleanup",
    tools: [
      "get_squirrel_brain_help",
      "get_api_key_usage",
      "rotate_api_key",
      "delete_item",
      "delete_items_by_status",
      "delete_items_by_maker",
    ],
  },
];
const TOOL_COUNT = TOOL_GROUPS.reduce((n, g) => n + g.tools.length, 0);

// The two things agents fundamentally can't do alone.
const MOATS = [
  {
    tag: "Persistent memory",
    title: "One brain your whole fleet shares",
    body: "Not a vector store you bolt on and babysit. It's the same brain the human uses — so what your coding agent files, your research agent (and the person) can find later. Memory survives the session, the tool, and the model. Semantic search, a daily brief, boards, and a forever-note that never gets wiped.",
  },
  {
    tag: "Real-world delivery",
    title: "A line to the human's actual phone",
    body: "Every other agent is trapped behind a screen the person has to be looking at. Squirrel Brain is the last mile: when something can't wait, your agent places a real phone call and speaks — or fires an escalating alarm, or a push. It reaches the human in the physical world, on its own, unattended.",
  },
];

// Concrete, believable agent scenarios.
const SCENARIOS = [
  {
    who: "A coding agent",
    story:
      "finishes a 40-minute migration at 2 a.m., runs the tests green, and — instead of waiting in a terminal nobody's watching — calls your phone: “Migration's done, tests passed, staged for review.”",
  },
  {
    who: "A research agent",
    story:
      "digs up that the visa window you asked about closes Friday. It doesn't bury it in a chat log — it schedules a call for 8 a.m. with the summary, so the deadline actually reaches you.",
  },
  {
    who: "An assistant agent",
    story:
      "remembers, across every session and every tool you run, that your daughter's recital is Thursday — because it lives in one shared brain, not that agent's ephemeral context window.",
  },
  {
    who: "Any agent",
    story:
      "can schedule its own follow-up: “re-check the deploy in four hours.” It sets the alarm on itself, then acts when it fires — a real feedback loop, not a one-shot request.",
  },
];

// Why it's safe to hand an agent a line to your phone.
const TRUST = [
  { title: "Scoped, revocable keys", body: "Each agent gets a personal API key, scoped to one brain and killable in a tap. No shared god-token." },
  { title: "Every write is attributed", body: "Nothing anonymous ever lands in your brain — each item is stamped with the exact agent that created it, and you can wipe one agent's writes in one call." },
  { title: "The server enforces honesty", body: "An agent can't report a success it didn't achieve — the portal verifies the real effect before it confirms. No hallucinated “done.”" },
  { title: "Spend is capped", body: "Per-agent and fleet-wide cost ceilings are enforced server-side, so a runaway loop can't run up your bill or your phone." },
];

const STEPS = [
  {
    n: "1",
    title: "Mint a key in the app",
    body: "Open Squirrel Brain and generate a personal API key. It's yours — scoped to your brain, revocable anytime.",
  },
  {
    n: "2",
    title: "Point your agent at the portal",
    body: "Add the MCP server to Claude Code, Claude Desktop, or Cursor — or wire it into your own agent. The 32 tools appear automatically. No glue code.",
  },
  {
    n: "3",
    title: "It acts on your brain",
    body: "Now your agent can remember, set reminders, read your day, file things, and reach you on your terms — every action traceable to the agent that made it.",
  },
];

const MCP_FAQS: { q: string; a: string }[] = [
  {
    q: "What does Squirrel Brain give an agent that a vector DB doesn't?",
    a: "Two things. First, it's not just recall — it acts: set a real iPhone alarm, add a calendar event, file a photo, append to a forever-note. Second, it's the delivery layer: an agent can place an actual phone call to the human and speak, so time-sensitive results don't die in a chat log. And the memory is shared with the person and every other agent, not siloed to one tool.",
  },
  {
    q: "Can my agent schedule its own callbacks?",
    a: "Yes. An agent can create an alarm or a cell_alert for a future time and act when it fires — a real feedback loop. It can re-check a deploy in four hours, follow up on a lead next Tuesday, or ring you the morning a deadline lands.",
  },
  {
    q: "Is it safe to give an agent a line to my phone?",
    a: "It's built for exactly that. Every agent uses its own scoped, revocable key; every write is attributed to the agent that made it (and wipeable per-agent); the server enforces honesty so an agent can't claim an action it didn't perform; and per-agent + fleet spend caps stop a runaway loop cold.",
  },
  {
    q: "Which AI tools can connect?",
    a: "Anything that speaks MCP and can send an API-key header: Claude Code, Claude Desktop, Cursor, and custom agents you host yourself — OpenClaw, LangChain, or plain scripts. Consumer chat apps like ChatGPT can't connect custom MCP tool servers yet.",
  },
  {
    q: "Can Claude or ChatGPT set an alarm on my phone on their own?",
    a: "Not by themselves — chat assistants can't fire a real, time-based alarm on your iPhone. Squirrel Brain closes that gap: the app turns anything you say, snap, or forward into real alarms, and MCP-capable agents can drive it directly through the portal.",
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

// A real, copyable MCP client config (public endpoint; anon bearer + your key).
const CONFIG_SNIPPET = `{
  "mcpServers": {
    "squirrel-brain": {
      "url": "https://geczbtsjfbvfukdzdemr.supabase.co/functions/v1/mcp-server",
      "headers": {
        "X-API-Key": "sb_your_personal_key",
        "Authorization": "Bearer <supabase-anon>",
        "X-Agent-Name": "your-agent"
      }
    }
  }
}`;

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
              width: 760, height: 760, top: "-20%", left: "50%", transform: "translateX(-50%)",
              background: "radial-gradient(circle, rgba(255,122,26,0.16) 0%, rgba(244,166,77,0.05) 45%, transparent 70%)",
              filter: "blur(70px)",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <FadeIn immediate>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#FF7A1A" }}>
                For AI agents · MCP server
              </p>
            </FadeIn>
            <FadeIn immediate delay={0.06}>
              <h1
                id="mcp-hero-heading"
                className="font-display font-extrabold text-balance mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.06, color: "#fff5e8" }}
              >
                Give your agents a memory{" "}
                <span style={{ color: "#FF7A1A" }}>— and a phone line to you.</span>
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.12}>
              <p
                className="text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-8"
                style={{ color: "rgba(255,245,232,0.72)" }}
              >
                Every agent you run is trapped in its window: it forgets between sessions, and it
                can&rsquo;t reach you once you&rsquo;ve walked away from the screen. Squirrel Brain is the
                missing half &mdash; one <strong style={{ color: "#fff5e8" }}>persistent brain your whole fleet shares</strong>,
                plus a <strong style={{ color: "#fff5e8" }}>real line to your phone</strong>: a push, a spoken
                message, or an actual call it places itself. Wire it in over MCP in about three lines.
              </p>
            </FadeIn>

            {/* Copyable connect snippet — dev credibility */}
            <FadeIn immediate delay={0.16}>
              <div className="max-w-2xl mx-auto mb-8 text-left">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{ border: "1px solid rgba(255,245,232,0.14)", background: "rgba(0,0,0,0.35)" }}
                >
                  <div
                    className="flex items-center gap-2 px-4 py-2.5"
                    style={{ borderBottom: "1px solid rgba(255,245,232,0.1)" }}
                  >
                    <span style={{ width: 10, height: 10, borderRadius: 99, background: "#ef4444", opacity: 0.7 }} />
                    <span style={{ width: 10, height: 10, borderRadius: 99, background: "#F4A64D", opacity: 0.7 }} />
                    <span style={{ width: 10, height: 10, borderRadius: 99, background: "#3fae6e", opacity: 0.7 }} />
                    <span className="ml-2 text-xs font-mono" style={{ color: "rgba(255,245,232,0.45)" }}>mcp.json</span>
                  </div>
                  <pre className="px-4 py-4 overflow-x-auto text-xs sm:text-sm leading-relaxed" style={{ color: "rgba(255,245,232,0.85)" }}>
                    <code className="font-mono">{CONFIG_SNIPPET}</code>
                  </pre>
                </div>
                <p className="text-xs mt-2" style={{ color: "rgba(255,245,232,0.4)" }}>
                  That&rsquo;s the whole integration. Exact values + every tool&rsquo;s parameters live in the{" "}
                  <a href="/mcp-docs" style={{ color: "#FF7A1A" }} className="hover:underline">developer docs</a>.
                </p>
              </div>
            </FadeIn>

            <FadeIn immediate delay={0.22}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={WAITLIST_HREF}
                  className="inline-flex items-center gap-2 font-bold text-base px-7 py-3.5 rounded-full hover:opacity-90 active:scale-[0.98] transition-all"
                  style={{ background: "#FF7A1A", color: "white", boxShadow: "0 4px 24px rgba(255,122,26,0.4)" }}
                >
                  Get a developer invite
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
              <p className="text-sm mt-6" style={{ color: "rgba(255,245,232,0.45)" }}>
                Works with Claude Code, Claude Desktop, Cursor & self-hosted agents (OpenClaw, LangChain, your own scripts).
                <br className="hidden sm:block" /> ChatGPT can&rsquo;t connect custom MCP servers yet. And if a human never touches any of this &mdash; the app does everything on its own.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* The two moats */}
        <section className="py-20 lg:py-28" aria-labelledby="mcp-moat-heading">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">The two things agents can't do alone</p>
                <h2
                  id="mcp-moat-heading"
                  className="font-display font-extrabold text-ink text-balance"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  Remember everything. Reach you anywhere.
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOATS.map((m, i) => (
                <FadeIn key={m.title} delay={i * 0.08}>
                  <div className="rounded-3xl border border-border bg-white p-8 h-full">
                    <span
                      className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,122,26,0.1)", color: "#FF7A1A" }}
                    >
                      {m.tag}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-ink mb-3">{m.title}</h3>
                    <p className="text-muted leading-relaxed">{m.body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Agent scenarios */}
        <section className="py-20 lg:py-28 border-y border-border" style={{ background: "#faf6f0" }} aria-labelledby="mcp-scn-heading">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">What it unlocks</p>
                <h2
                  id="mcp-scn-heading"
                  className="font-display font-extrabold text-ink text-balance"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  What your agent does with hands and a voice.
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {SCENARIOS.map((s, i) => (
                <FadeIn key={s.who} delay={i * 0.06}>
                  <div className="rounded-3xl border border-border bg-white p-6 h-full">
                    <p className="leading-relaxed text-ink">
                      <strong className="text-accent">{s.who}</strong> {s.story}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* The full tool set */}
        <section className="py-20 lg:py-28" style={{ background: "#1a1208" }} aria-labelledby="mcp-tools-heading">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "#FF7A1A" }}>The API</p>
              <h2
                id="mcp-tools-heading"
                className="font-display font-extrabold text-balance mb-3"
                style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.1, color: "#fff5e8" }}
              >
                {TOOL_COUNT} tools, live today.
              </h2>
              <p className="text-base mb-10" style={{ color: "rgba(255,245,232,0.6)" }}>
                The complete set your agent can call &mdash; names match the server&rsquo;s{" "}
                <span className="font-mono">tools/list</span> exactly.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4 mb-8 text-left">
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
                          style={{ background: "rgba(255,122,26,0.12)", border: "1px solid rgba(255,122,26,0.25)", color: "#FF7A1A" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm" style={{ color: "rgba(255,245,232,0.5)" }}>
                Every tool, with parameters, is in the{" "}
                <a href="/mcp-docs" style={{ color: "#FF7A1A" }} className="hover:underline">developer docs</a>.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Trust — safe to hand an agent your phone */}
        <section className="py-20 lg:py-28" aria-labelledby="mcp-trust-heading">
          <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto mb-14">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Built to be trusted</p>
                <h2
                  id="mcp-trust-heading"
                  className="font-display font-extrabold text-ink text-balance"
                  style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  Handing an agent your phone, safely.
                </h2>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TRUST.map((c, i) => (
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
              {STEPS.map((s) => (
                <FadeIn key={s.n} delay={Number(s.n) * 0.08}>
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
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white border-t border-border" aria-labelledby="mcp-faq-heading">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mcpFaqJsonLd) }} />
          <div className="max-w-3xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-12">
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Agent FAQ</p>
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
                    <span className="flex-shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true" style={{ fontSize: "1.5rem", lineHeight: 1 }}>+</span>
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
                Give your AI a memory that lives on your phone — and can ring it.
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
