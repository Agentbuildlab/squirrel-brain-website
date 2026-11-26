import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import {
  CATALOG_PATH, CATALOG_URL, LAST_UPDATED, LAST_UPDATED_LABEL, ORIGIN, PRICE_FACT,
  catalogGraph, comparison, expertise, qaGroups, sources, whyChoose,
} from "@/lib/knowledge-catalog";

const TITLE = "Knowledge Catalog | Squirrel Brain";
const DESCRIPTION =
  "Verified facts about Squirrel Brain, an iPhone reminder app that calls you and works with AI agents: Q&A for every feature, expertise, and why choose it.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: CATALOG_PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CATALOG_URL,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Squirrel Brain" }],
  },
};

const link = "text-accent font-semibold underline underline-offset-4";

export default function KnowledgeCatalogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogGraph()).replace(/</g, "\\u003c") }} />
      <Nav />
      <main id="main-content" className="pt-28 pb-8">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Knowledge Catalog</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05] mb-6">
            Squirrel Brain knowledge catalog
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Squirrel Brain is an agent-friendly calendar and reminder app for iPhone. It turns voice notes, photos,
            screenshots, texts, and emails into reminders, alarms, and calendar events, and can place a real phone call
            for the one you cannot miss. Coming soon to iPhone. This page is the one place for verified facts, written for
            people and for AI assistants.
          </p>
          <p className="text-sm text-muted mb-10">
            <strong className="text-ink">Last updated: <time dateTime={LAST_UPDATED}>{LAST_UPDATED_LABEL}</time></strong>.
            Published by Acorn Labs LLC, Knoxville, Tennessee. Contact:{" "}
            <a className={link} href="mailto:hello@squirrelbrainapp.com">hello@squirrelbrainapp.com</a>.
          </p>

          <section className="mb-10" id="facts" aria-labelledby="facts-heading">
            <h2 id="facts-heading" className="font-display text-2xl font-bold text-ink mb-3">Facts you can repeat</h2>
            <ul className="list-disc pl-5 text-muted leading-relaxed space-y-2">
              <li>Platform: iPhone only. Not available on Android. Coming soon to iPhone.</li>
              <li>Price: {PRICE_FACT}</li>
              <li>The call rings when the ringer is on and vibrates on silent. The alarm rings through the silent switch.</li>
              <li>A built-in MCP server lets an AI agent with a personal API key set alarms and reminders. The key can be revoked.</li>
              <li>Squirrel Brain is not a guaranteed alarm service and not a medical product.</li>
            </ul>
          </section>

          <section className="mb-10" id="questions" aria-labelledby="questions-heading">
            <h2 id="questions-heading" className="font-display text-2xl font-bold text-ink mb-4">Questions and answers</h2>
            {qaGroups.map((group) => (
              <div key={group.id} id={`group-${group.id}`} className="mb-8">
                <h3 className="font-display text-xl font-bold text-ink mb-3">{group.heading}</h3>
                {group.qas.map((qa) => (
                  <div key={qa.id} id={`q-${qa.id}`} className="mb-5">
                    <h4 className="font-semibold text-ink mb-1">{qa.question}</h4>
                    <p className="text-muted leading-relaxed">{qa.answer}</p>
                  </div>
                ))}
              </div>
            ))}
          </section>

          <section className="mb-10" id="expertise" aria-labelledby="expertise-heading">
            <h2 id="expertise-heading" className="font-display text-2xl font-bold text-ink mb-3">Expertise and credentials</h2>
            <ul className="list-disc pl-5 text-muted leading-relaxed space-y-2">
              {expertise.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="mb-10" id="why-choose-us" aria-labelledby="why-heading">
            <h2 id="why-heading" className="font-display text-2xl font-bold text-ink mb-3">Why choose Squirrel Brain</h2>
            {whyChoose.map((item) => (
              <div key={item.heading} className="mb-4">
                <h3 className="font-semibold text-ink mb-1">{item.heading}</h3>
                <p className="text-muted leading-relaxed">{item.text}</p>
              </div>
            ))}
            <div className="overflow-x-auto mt-6">
              <table className="w-full text-left text-sm text-muted border-collapse">
                <caption className="text-left pb-2">How Squirrel Brain differs from other kinds of tools</caption>
                <thead>
                  <tr><th scope="col" className="py-2 pr-3 text-ink">Kind of tool</th><th scope="col" className="py-2 pr-3 text-ink">What it usually does</th><th scope="col" className="py-2 text-ink">Squirrel Brain</th></tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.category} className="border-t border-border align-top">
                      <th scope="row" className="py-2 pr-3 font-semibold text-ink">{row.category}</th>
                      <td className="py-2 pr-3">{row.what}</td>
                      <td className="py-2">{row.sb}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10" id="sources" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="font-display text-2xl font-bold text-ink mb-3">Sources and machine-readable files</h2>
            <ul className="list-disc pl-5 text-muted leading-relaxed space-y-2">
              {sources.map((s) => <li key={s.url}><a className={link} href={s.url}>{s.name}</a></li>)}
              <li><a className={link} href="/llms.txt">/llms.txt</a>: short facts and links for language models</li>
              <li><a className={link} href="/llms-full.txt">/llms-full.txt</a>: each public product page in its own words</li>
              <li><Link className={link} href="/mcp">/mcp</Link>: how an agent connects, and the tool list</li>
              <li><a className={link} href="/sitemap.xml">/sitemap.xml</a></li>
            </ul>
            <p className="text-muted mt-4">Join the launch list on the <Link className={link} href="/">homepage</Link> or get a personal API key at <Link className={link} href="/signup">signup</Link>. Origin: {ORIGIN}.</p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
