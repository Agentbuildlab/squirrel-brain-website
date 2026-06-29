// Shared, server-rendered template for the SEO landing pages (see
// lib/landing-pages.ts). Everything here is plain server-rendered HTML so the
// copy and the FAQ are fully in the DOM for crawlers and AI answer engines —
// no client JS is required to read the content. FadeIn is a thin client wrapper
// for the entrance animation only.

import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";
import { PhoneShot } from "@/components/v2/PhoneKit";
import {
  getLandingPage,
  LANDING_ANCHORS,
  type LandingPageData,
} from "@/lib/landing-pages";

const ORIGIN = "https://squirrelbrainapp.com";

/** Build per-page metadata (title, description, canonical, OG) from the registry. */
export function landingMetadata(slug: string): Metadata {
  const p = getLandingPage(slug);
  if (!p) return {};
  const url = `${ORIGIN}/${p.slug}`;
  return {
    // absolute → bypass the root "%s — Squirrel Brain" template; our titles
    // already carry the brand ("… | Squirrel Brain").
    title: { absolute: p.title },
    description: p.description,
    alternates: { canonical: `/${p.slug}` },
    openGraph: {
      title: p.title,
      description: p.description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
    },
  };
}

function FaqJsonLd({ p }: { p: LandingPageData }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${ORIGIN}/${p.slug}#faq`,
    mainEntity: p.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function LandingPage({ slug }: { slug: string }) {
  const p = getLandingPage(slug);
  if (!p) return null;

  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative pt-28 pb-20 overflow-hidden"
          aria-labelledby="lp-hero-heading"
          style={{ background: "linear-gradient(160deg, #FFF0E6 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn immediate>
                <p className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                  {p.eyebrow}
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.08}>
                <h1
                  id="lp-hero-heading"
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.05] mb-5 text-balance"
                >
                  {p.h1}
                </h1>
              </FadeIn>
              <FadeIn immediate delay={0.15}>
                <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                  {p.subhead}
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.2}>
                <div className="flex flex-wrap items-center gap-4">
                  <CtaButton size="lg" />
                  <Link
                    href="/demos"
                    className="text-sm font-semibold text-muted hover:text-ink transition-colors inline-flex items-center gap-1.5"
                  >
                    Watch it work
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            </div>
            <FadeIn immediate from="right" delay={0.1} className="flex justify-center lg:justify-end">
              <PhoneShot src={p.heroShot.src} alt={p.heroShot.alt} width={320} />
            </FadeIn>
          </div>
        </section>

        {/* Value sections */}
        <section className="py-16 lg:py-20" aria-label={`How ${p.eyebrow} works`}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
            {p.sections.map((s) => (
              <FadeIn key={s.h2}>
                <article>
                  {s.eyebrow && (
                    <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                      {s.eyebrow}
                    </p>
                  )}
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 text-balance">
                    {s.h2}
                  </h2>
                  <p className="text-lg text-muted leading-relaxed">{s.body}</p>
                  {s.bullets && (
                    <ul className="mt-5 flex flex-col gap-2.5">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-muted">
                          <span
                            className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent"
                            aria-hidden="true"
                          />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* What is Squirrel Brain — links back to homepage with descriptive anchor */}
        <section className="py-16 bg-white border-y border-border" aria-labelledby="lp-about-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="lp-about-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 text-balance"
              >
                One app for everything you don&rsquo;t want to forget
              </h2>
              <p className="text-lg text-muted leading-relaxed mb-6">
                {p.eyebrow} is one of the things Squirrel Brain does. The{" "}
                <Link href="/" className="text-accent font-semibold hover:opacity-80 transition-opacity">
                  Squirrel Brain AI reminder app
                </Link>{" "}
                turns voice notes, photos, screenshots, texts, and emails into reminders,
                alarms, notes, and calendar events — then makes sure you follow through.
              </p>
              <CtaButton />
            </FadeIn>
          </div>
        </section>

        {/* FAQ — visible + FAQPage JSON-LD */}
        <section className="py-16 lg:py-20" aria-labelledby="lp-faq-heading">
          <FaqJsonLd p={p} />
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
                  Common questions
                </p>
                <h2
                  id="lp-faq-heading"
                  className="font-display font-extrabold text-ink text-balance"
                  style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)", lineHeight: 1.1 }}
                >
                  Questions, answered
                </h2>
              </div>
            </FadeIn>
            <div className="flex flex-col gap-3">
              {p.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-border bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
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

        {/* Related pages — internal links with descriptive anchors */}
        <section className="py-14 bg-white border-t border-border" aria-labelledby="lp-related-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2
              id="lp-related-heading"
              className="font-display text-xl font-bold text-ink mb-5 text-center"
            >
              Explore more of what Squirrel Brain does
            </h2>
            <nav className="flex flex-wrap justify-center gap-3" aria-label="Related pages">
              {p.related.map((slug) => (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="text-sm font-semibold text-accent border border-accent/30 rounded-full px-4 py-2 hover:bg-accent-light transition-colors"
                >
                  {LANDING_ANCHORS[slug] ?? slug}
                </Link>
              ))}
            </nav>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 border-t border-border" aria-labelledby="lp-cta-heading">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="lp-cta-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-ink mb-5 text-balance"
              >
                Stop trying to remember it all
              </h2>
              <p className="text-muted text-lg mb-8">
                Join the launch list — we&rsquo;ll email you the moment Squirrel Brain is ready.
              </p>
              <CtaButton size="lg" />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
