import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Agent skills that can call their human",
  description:
    "Download ready-made Squirrel Brain agent skills for human escalation: place a clear phone call, listen for the answer, route it back to the right task, and verify follow-through.",
  alternates: { canonical: "/skills" },
};

const FLOW = [
  ["1", "Detect", "The agent recognizes a real decision, repeated failure, or unsafe impasse — not just a keyword."],
  ["2", "Explain", "It names the task, describes verified state, gives numbered options, and recommends one."],
  ["3", "Call", "Squirrel Brain rings the human's iPhone and speaks the complete decision brief."],
  ["4", "Listen", "The skill polls the private MCP Portal for the new spoken answer."],
  ["5", "Act", "The answer goes back to the owning task, and artifact progress proves it was applied."],
];

const SKILLS = [
  {
    name: "Contact Your Human",
    file: "/skills/downloads/contact-human.zip",
    label: "Core skill",
    summary:
      "A secure, reusable human-in-the-loop skill for any agent. It calls with useful context and options, captures the spoken reply, routes it, and verifies the result.",
    command: 'unzip -o contact-human.zip -d "${CODEX_HOME:-$HOME/.codex}/skills"',
    includes: ["Clear-call quality gate", "Two-way reply polling", "Old-message correlation protection", "Route + applied-state receipts"],
  },
  {
    name: "Supervisor Loop",
    file: "/skills/downloads/supervisor-loop.zip",
    label: "Fleet skill",
    summary:
      "A dedicated watchdog for multiple work sessions. It detects stalls, verifies real artifacts, nudges the right task, and uses Contact Your Human for five-minute escalation.",
    command: 'unzip -o supervisor-loop.zip -d "${CODEX_HOME:-$HOME/.codex}/skills"',
    includes: ["Automatic task discovery", "Artifact-gated nudges", "One-intervention fleet lock", "Decision follow-through verification"],
  },
];

export default function SkillsPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <div className="h-20 bg-bg" aria-hidden="true" />
        <section className="relative overflow-hidden pt-20 pb-20" style={{ background: "#1a1208" }}>
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true" style={{
            background: "radial-gradient(circle at 50% 5%, rgba(255,122,26,.20), transparent 48%)",
          }} />
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <FadeIn immediate>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-4">Squirrel Brain agent skills</p>
              <h1 className="font-display font-extrabold text-balance text-white mb-6" style={{ fontSize: "clamp(2.35rem, 6vw, 4.7rem)", lineHeight: 1.02 }}>
                Your agent got stuck. <span className="text-accent">It called you.</span>
              </h1>
              <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,245,232,.74)" }}>
                Download the complete loop: a useful phone briefing, your spoken answer, delivery back to the right task, and proof that the decision moved the work forward.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className="py-20 px-6" aria-labelledby="skills-heading">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="max-w-2xl mb-10">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Ready to install</p>
                <h2 id="skills-heading" className="font-display font-extrabold text-3xl sm:text-5xl text-ink mb-4">Two skills. One closed loop.</h2>
                <p className="text-muted text-lg leading-relaxed">Start with Contact Your Human. Add Supervisor Loop when several agents or coding sessions need one delivery-minded watchdog.</p>
              </div>
            </FadeIn>

            <div className="grid lg:grid-cols-2 gap-6">
              {SKILLS.map((skill, index) => (
                <FadeIn key={skill.name} delay={index * 0.08}>
                  <article className="h-full rounded-3xl border border-border bg-white p-7 sm:p-9 shadow-sm">
                    <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">{skill.label}</p>
                    <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mb-3">{skill.name}</h3>
                    <p className="text-muted leading-relaxed mb-6">{skill.summary}</p>
                    <ul className="space-y-2 mb-7" aria-label={`${skill.name} includes`}>
                      {skill.includes.map((item) => (
                        <li key={item} className="flex gap-2.5 text-sm text-ink">
                          <span className="text-accent font-bold" aria-hidden="true">✓</span>{item}
                        </li>
                      ))}
                    </ul>
                    <a href={skill.file} download className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-white hover:opacity-90 transition-opacity">
                      Download {skill.name}
                    </a>
                    <div className="mt-5 rounded-xl p-4" style={{ background: "#1a1208" }}>
                      <p className="text-[11px] uppercase tracking-widest font-bold mb-2" style={{ color: "rgba(255,245,232,.55)" }}>Install</p>
                      <code className="text-sm break-all" style={{ color: "#fff5e8" }}>{skill.command}</code>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" style={{ background: "#f3eadf" }} aria-labelledby="loop-heading">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">No dead ends</p>
              <h2 id="loop-heading" className="font-display font-extrabold text-3xl sm:text-5xl text-ink mb-10">The complete intervention loop</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {FLOW.map(([number, title, body], index) => (
                <FadeIn key={number} delay={index * 0.05}>
                  <div className="h-full rounded-2xl bg-white border border-border p-5">
                    <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center font-extrabold mb-4">{number}</div>
                    <h3 className="font-display font-bold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6" aria-labelledby="security-heading">
          <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <FadeIn>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Built to share safely</p>
              <h2 id="security-heading" className="font-display font-extrabold text-3xl sm:text-4xl text-ink">The skill never ships your identity or key.</h2>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="space-y-5 text-muted leading-relaxed">
                <p><strong className="text-ink">No embedded secrets.</strong> API keys live in the user&rsquo;s MCP configuration, environment, or operating-system Keychain—never in the downloaded files.</p>
                <p><strong className="text-ink">No personal defaults.</strong> The package contains no person&rsquo;s name, account id, Portal thread, device id, or private filesystem path.</p>
                <p><strong className="text-ink">No false delivery claims.</strong> A call counts only when Squirrel Brain returns a real delivery receipt. Replies are matched by an invisible call identifier, so the human can simply say “option one” and unrelated Portal messages are rejected.</p>
                <p><strong className="text-ink">Revocable access.</strong> Each Squirrel Brain key is scoped to its owner and can be rotated from the app. Read the <Link href="/mcp-docs" className="text-accent font-semibold hover:underline">MCP setup and security docs</Link>.</p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
