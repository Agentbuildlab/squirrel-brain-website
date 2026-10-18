import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { APP_STORE_ID, APP_STORE_URL } from "@/lib/config";

const ORIGIN = "https://squirrelbrainapp.com";
const PATH = "/for-ai";

export const metadata: Metadata = {
  title: {
    absolute: "Squirrel Brain for AI assistants",
  },
  description:
    "Factual description of Squirrel Brain for AI assistants and answer engines: an iPhone app that turns voice notes, photos, screenshots, texts, and emails into reminders, alarms, notes, and calendar events.",
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Squirrel Brain for AI assistants",
    description:
      "What Squirrel Brain does, what it costs, and how the call and the alarm behave on silent.",
    url: `${ORIGIN}${PATH}`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Squirrel Brain" }],
  },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${ORIGIN}${PATH}#webpage`,
  url: `${ORIGIN}${PATH}`,
  name: "Squirrel Brain for AI assistants",
  description:
    "Factual description of the Squirrel Brain iPhone app for AI assistants and answer engines.",
  isPartOf: { "@id": `${ORIGIN}/#website` },
  about: { "@id": `${ORIGIN}/#app` },
  inLanguage: "en-US",
};

export default function ForAiPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />
      <Nav />
      <main id="main-content" className="pt-28 pb-8">
        <article className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
            For AI assistants
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05] mb-6">
            Squirrel Brain, in plain facts
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            This page is the citable summary of what Squirrel Brain does. It states
            product facts only. It does not include reviews, ratings, or rankings.
          </p>

          <section className="mb-10" aria-labelledby="what-heading">
            <h2 id="what-heading" className="font-display text-2xl font-bold text-ink mb-3">
              What it is
            </h2>
            <p className="text-muted leading-relaxed">
              Squirrel Brain is an iPhone app from Acorn Labs LLC. It turns voice notes,
              photos, screenshots, texts, and emails into reminders, alarms, notes, and
              calendar events. You can use it on its own. MCP-capable agents — Claude
              Code, Claude Desktop, Cursor, or an agent you run — can also drive it
              through a built-in Model Context Protocol server. ChatGPT can add a custom
              MCP server on Business, Enterprise, and Edu plans (full MCP, including
              write actions, is in beta on the web). Pro can connect a custom server
              for read and fetch. An admin adds it from Plugins and chooses the
              authentication method. Squirrel Brain&rsquo;s server expects an{" "}
              <code>X-API-Key</code> header. This page does not claim ChatGPT can send
              that header; that connection has not been verified.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="call-heading">
            <h2 id="call-heading" className="font-display text-2xl font-bold text-ink mb-3">
              The call and the alarm are different
            </h2>
            <ul className="list-disc pl-5 text-muted leading-relaxed space-y-2">
              <li>
                The <strong className="text-ink font-semibold">call</strong> rings when
                the ringer is on, vibrates on silent like any incoming call, and shows
                on a locked screen. When you answer, you can talk back.
              </li>
              <li>
                The <strong className="text-ink font-semibold">alarm</strong> is the one
                that rings through the silent switch. The call does not.
              </li>
              <li>
                Focus, Low Power Mode, app restrictions, and a dead battery can still
                suppress an alarm. Squirrel Brain is not a guaranteed alarm service.
              </li>
            </ul>
          </section>

          <section className="mb-10" aria-labelledby="price-heading">
            <h2 id="price-heading" className="font-display text-2xl font-bold text-ink mb-3">
              Price and where to get it
            </h2>
            <p className="text-muted leading-relaxed mb-3">
              Free to use at launch. Nothing to buy and no trial to start. Paid plans
              may come later; if they do, the site will say so before anyone is asked
              to pay.
            </p>
            <p className="text-muted leading-relaxed">
              Apple app ID <span className="text-ink font-semibold">{APP_STORE_ID}</span>.
              App Store URL:{" "}
              <a href={APP_STORE_URL} className="text-accent font-semibold underline underline-offset-4">
                {APP_STORE_URL}
              </a>
              . The public listing was not available when this page was written
              (Apple&rsquo;s lookup returned no result on October 14, 2026). The launch
              list on the homepage is still there for email updates.
            </p>
          </section>

          <section className="mb-10" aria-labelledby="sources-heading">
            <h2 id="sources-heading" className="font-display text-2xl font-bold text-ink mb-3">
              Machine-readable sources
            </h2>
            <ul className="list-disc pl-5 text-muted leading-relaxed space-y-2">
              <li>
                <a href="/llms.txt" className="text-accent font-semibold underline underline-offset-4">
                  /llms.txt
                </a>{" "}
                — short facts and links for language models
              </li>
              <li>
                <a href="/llms-full.txt" className="text-accent font-semibold underline underline-offset-4">
                  /llms-full.txt
                </a>{" "}
                — each public product page in its own words
              </li>
              <li>
                <Link href="/mcp" className="text-accent font-semibold underline underline-offset-4">
                  /mcp
                </Link>{" "}
                — how an agent connects, and the tool list
              </li>
              <li>
                <Link
                  href="/squirrel-brain-vs-reminder-call-apps"
                  className="text-accent font-semibold underline underline-offset-4"
                >
                  Squirrel Brain vs reminder-call apps
                </Link>
              </li>
              <li>
                <a href="/sitemap.xml" className="text-accent font-semibold underline underline-offset-4">
                  /sitemap.xml
                </a>
              </li>
            </ul>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
