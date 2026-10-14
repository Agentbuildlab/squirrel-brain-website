// Visible FAQ + matching FAQPage JSON-LD. Product-first: the AI/agent questions
// (and their AEO lane — "can Claude/ChatGPT set a reminder on my phone") moved to
// /mcp, which carries its own FAQPage JSON-LD. Native <details> keeps every answer
// in the DOM (crawlable) with no client JS.

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is Squirrel Brain?",
    a: "Squirrel Brain is an iOS app that turns photos, voice notes, screenshots, and forwarded texts into reminders, alarms, and calendar events — then makes sure you follow through, including a real phone call for the one thing you can't miss.",
  },
  {
    q: "What happens to the call when my phone's on silent?",
    a: "It comes through like any incoming call: it rings when your ringer's on, vibrates on silent, and shows on your locked screen either way. Because it's a real call — not a system alarm — the silent switch mutes the ring just like it does for any call. You can also silence every reminder with one switch in the app.",
  },
  {
    q: "What does it cost, and what devices does it run on?",
    a: "iPhone only for now, and free to use at launch — nothing to buy and no trial to start. Paid plans may come later; if they do, we'll say so clearly first. Join the launch list and we'll email you when it's ready.",
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
