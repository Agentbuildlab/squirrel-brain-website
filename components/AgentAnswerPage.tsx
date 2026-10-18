// Answer pages share the landing-page layout: server-rendered hero, short
// sections, FAQ, and related links. Copy stays in the 150–300 word range.
// FadeIn is a visual wrapper; the HTML is in the document without client JS.

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { PhoneShot } from "@/components/v2/PhoneKit";

const ORIGIN = "https://squirrelbrainapp.com";

export type AnswerFaq = { q: string; a: string };

const RELATED = [
  { href: "/ai-agent-calendar", label: "AI agent calendar" },
  { href: "/mcp", label: "MCP server" },
  { href: "/mcp-docs", label: "Developer docs" },
  { href: "/signup", label: "Get an API key" },
];

export default function AgentAnswerPage({
  slug,
  h1,
  faqs,
  children,
}: {
  slug: string;
  h1: string;
  faqs: AnswerFaq[];
  children: React.ReactNode;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${ORIGIN}/${slug}#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      <Nav />
      <main id="main-content">
        <section
          className="relative pt-28 pb-16 overflow-hidden"
          aria-labelledby="answer-heading"
          style={{ background: "linear-gradient(160deg, #FFF0E6 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn immediate>
                <p className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                  AI agent calendar
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.08}>
                <h1
                  id="answer-heading"
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.05] mb-5 text-balance"
                >
                  {h1}
                </h1>
              </FadeIn>
              <FadeIn immediate delay={0.15}>
                <div className="text-lg text-muted leading-relaxed max-w-xl flex flex-col gap-4">{children}</div>
              </FadeIn>
            </div>
            <FadeIn immediate from="right" delay={0.1} className="flex justify-center lg:justify-end">
              <PhoneShot
                src="/assets/screens/calendar-v2.webp"
                alt="Squirrel Brain calendar screen listing upcoming events"
                width={300}
              />
            </FadeIn>
          </div>
        </section>

        <section className="py-16 lg:py-20" aria-labelledby="answer-faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              id="answer-faq-heading"
              className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8 text-balance"
            >
              Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-border bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-bold text-ink list-none">
                    <span style={{ fontSize: "1.05rem" }}>{f.q}</span>
                    <span className="flex-shrink-0 text-accent transition-transform group-open:rotate-45" aria-hidden="true" style={{ fontSize: "1.5rem", lineHeight: 1 }}>
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-white border-t border-border" aria-labelledby="answer-related-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id="answer-related-heading" className="font-display text-xl font-bold text-ink mb-5 text-center">
              Keep reading
            </h2>
            <nav className="flex flex-wrap justify-center gap-3" aria-label="Related pages">
              {RELATED.filter((item) => item.href !== `/${slug}`).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-accent border border-accent/30 rounded-full px-4 py-2 hover:bg-accent-light transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
