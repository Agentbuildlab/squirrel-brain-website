// Visible FAQ + matching FAQPage JSON-LD. Product-first: the AI/agent questions
// (and their AEO lane — "can Claude/ChatGPT set a reminder on my phone") moved to
// /mcp, which carries its own FAQPage JSON-LD. Native <details> keeps every answer
// in the DOM (crawlable) with no client JS.

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is Squirrel Brain?",
    a: "Squirrel Brain is an iOS app that turns photos, voice notes, screenshots, and forwarded texts into reminders, alarms, and calendar events — then makes sure you follow through, including a real phone call that rings right through Silent mode, Focus, and a locked screen.",
  },
  {
    q: "How is it different from a notes app or the Reminders app?",
    a: "Most apps only store what you capture — it just sits there. Squirrel Brain acts on it: it sets alarms, adds calendar events, organizes photos into boards, and calls you when something can't slip.",
  },
  {
    q: "Does the call really ring through Silent mode?",
    a: "Yes. The call alarm is built on Apple's AlarmKit — the same OS-level machinery as the built-in Clock alarm — so it rings through Silent mode, Focus, and a locked screen. The only thing that mutes it is you, with the app's own 'Silence all reminders' switch.",
  },
  {
    q: "Can my AI tools use it too?",
    a: "If you want — it's completely optional, and the app never needs it. Squirrel Brain has a built-in MCP portal, so an MCP-capable agent — Claude Code, Cursor, or one you run yourself — can set alarms, file notes, and even have your squirrel call you. Everything about it lives on the MCP page.",
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
            Questions, <span className="text-accent">answered.</span>
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
