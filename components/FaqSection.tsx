// Visible FAQ + matching FAQPage JSON-LD. Two jobs:
// 1) SEO/AEO: these questions target the near-empty, high-intent search lane the
//    competitive analysis surfaced — "can Claude/ChatGPT set a reminder on my
//    phone", "AI that can call me", "second brain that takes action". The answers
//    are written to be quotable verbatim by AI answer engines.
// 2) Native <details> keeps every answer in the DOM (crawlable) with no client JS.

const FAQS: { q: string; a: string }[] = [
  {
    q: "Can Claude or ChatGPT set a reminder or alarm on my phone?",
    a: "Not on their own — AI assistants like Claude and ChatGPT can't fire a real, time-based alarm or reminder on your phone. Squirrel Brain closes that gap. It has a built-in MCP (Model Context Protocol) server, so you can connect Claude, ChatGPT, or any AI agent and it can set a real alarm, read your day, file things to boards, and even call your phone — all on your behalf.",
  },
  {
    q: "What is Squirrel Brain?",
    a: "Squirrel Brain is an iOS app that turns photos, voice notes, screenshots, and forwarded texts into reminders, alarms, and calendar events — then makes sure you follow through, including a real phone call that rings right through Silent mode, Focus, and a locked screen. It's built for three jobs at once: work, family, and AI agents.",
  },
  {
    q: "How does an AI agent actually do things on my phone with Squirrel Brain?",
    a: "Through the built-in MCP server. You generate a personal key in the app and connect your agent (Claude, ChatGPT, OpenClaw, or your own). The agent then gets a set of tools — set an alarm, create an item, read your daily brief, append to a forever note, save a link, and trigger a real phone call — and every action it takes is traceable back to the agent that made it.",
  },
  {
    q: "Do I need to set up an AI agent to use it?",
    a: "No. Squirrel Brain works great entirely on its own — snap a photo, say it, or forward a text and it becomes a reminder. The AI-agent and MCP features are an optional power-up for people who want their assistant to act on their phone.",
  },
  {
    q: "How is it different from a notes app or the Reminders app?",
    a: "Most apps only store what you capture — it just sits there. Squirrel Brain acts on it: it sets alarms, adds calendar events, organizes photos into boards, and calls you when something can't slip. And unlike any of them, an AI agent can drive the whole thing for you.",
  },
  {
    q: "What does it cost, and what devices does it run on?",
    a: "iPhone only for now. Two simple plans, billed monthly with a 7-day free trial: Standard is $9.99/month with 10 hours of meeting recording, and Plus is $14.99/month with 20 hours. Everything else — photos, notes, reminders, voice capture, phone-call alarms, link stash, and the Burrow — is unlimited on both. Squirrel Brain is pre-launch — join the launch list and you'll be first into the beta.",
  },
];

const ORIGIN = "https://squirrelbrainapp.com";
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${ORIGIN}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FaqSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-border" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
            Common questions
          </p>
          <h2
            id="faq-heading"
            className="font-display font-extrabold text-ink text-balance"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.1 }}
          >
            Wait — my AI can do <span className="text-accent">that?</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((f) => (
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
  );
}
