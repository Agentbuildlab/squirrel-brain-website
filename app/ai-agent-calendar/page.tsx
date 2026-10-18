import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import { PhoneShot } from "@/components/v2/PhoneKit";
import { pageMeta } from "@/lib/pageMeta";

const PATH = "/ai-agent-calendar";
const ORIGIN = "https://squirrelbrainapp.com";
const TITLE = "AI Agent Calendar: one your agent can update on its own | Squirrel Brain";
const DESCRIPTION =
  "The calendar your AI agent can use on its own. A personal API key lets any MCP client read and update Squirrel Brain on iPhone. Coming soon to iPhone. Free to use at launch.";

export const metadata = pageMeta(TITLE, DESCRIPTION, PATH);

const FAQS = [
  {
    q: "Can an agent update my calendar without me typing it in?",
    a: "Yes. With a personal API key, an MCP client can add, move, and cancel calendar events on its own. You can revoke the key, and each change is labeled with the agent that made it.",
  },
  {
    q: "What shows up on my iPhone?",
    a: "Server changes are saved right away and reach the phone (and its Calendar) after the app syncs. A change can become an alarm, a reminder, or a phone call.",
  },
  {
    q: "How does an agent connect?",
    a: "Get a personal key at signup, add Squirrel Brain to any MCP client that can send a custom header, and the agent can read and update the calendar. Claude Code, Claude Desktop, and Cursor are examples.",
  },
  {
    q: "Can ChatGPT connect?",
    a: "ChatGPT on Business, Enterprise, and Edu plans can add a custom MCP server. This page does not claim ChatGPT can send the X-API-Key header. That connection has not been verified.",
  },
  {
    q: "Is the iPhone app out, and what does it cost?",
    a: "Coming soon to iPhone. It is free to use at launch. Nothing to buy and no trial to start. You can get a key now at signup.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": `${ORIGIN}${PATH}#app`,
      name: "Squirrel Brain",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS",
      url: `${ORIGIN}${PATH}`,
      description: DESCRIPTION,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/PreOrder",
        url: `${ORIGIN}/signup`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${ORIGIN}${PATH}#faq`,
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${ORIGIN}${PATH}#breadcrumbs`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${ORIGIN}/` },
        { "@type": "ListItem", position: 2, name: "AI agent calendar", item: `${ORIGIN}${PATH}` },
      ],
    },
  ],
};

export default function AiAgentCalendarPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav />
      <main id="main-content">
        <section
          className="relative pt-28 pb-16 overflow-hidden"
          aria-labelledby="agent-cal-heading"
          style={{ background: "linear-gradient(160deg, #FFF0E6 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-sm text-muted mb-4" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-ink">Home</Link>
                <span aria-hidden="true"> / </span>
                <span className="text-ink">AI agent calendar</span>
              </nav>
              <FadeIn immediate>
                <p className="inline-flex items-center gap-2 bg-accent-light text-accent text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
                  Coming soon to iPhone
                </p>
              </FadeIn>
              <FadeIn immediate delay={0.08}>
                <h1
                  id="agent-cal-heading"
                  className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-ink leading-[1.05] mb-5 text-balance"
                >
                  The calendar your AI agent can use on its own
                </h1>
              </FadeIn>
              <FadeIn immediate delay={0.15}>
                <p className="text-lg text-muted leading-relaxed max-w-xl">
                  Squirrel Brain is an agent-friendly calendar and reminder app for iPhone:
                  any MCP client can read and update it on its own with a personal API key.
                  Coming soon to iPhone, and free to use at launch.
                </p>
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

        <section className="py-16 lg:py-20" aria-label="What an agent can do">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col gap-14">
            <article>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">What an agent can do</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 text-balance">
                Read the day, then change the calendar
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                An agent with your key can read today&rsquo;s agenda, including what is overdue
                and what is due today. It can list, search, and find notes, tasks, and calendar
                events. It can add a calendar event with an iPhone alarm, move or reschedule it,
                change it, mark it done, or cancel it, and it can list the alarms already set.
                It can save a note, a checklist, or a link, add or remove a line on your forever
                note, and file a photo onto a board. It can send a banner to your phone and chat
                with you in the Agent Portal. A change can become a real alarm, a reminder, or a
                phone call on your iPhone.
              </p>
            </article>

            <article>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">How to connect</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 text-balance">
                Three steps, then the agent works
              </h2>
              <ol className="flex flex-col gap-3 text-lg text-muted leading-relaxed list-decimal pl-5">
                <li>
                  Get a personal key at{" "}
                  <Link href="/signup" className="text-accent font-semibold underline underline-offset-4">signup</Link>
                  . It is ready right away. You can also make one in the iOS app. Coming soon to iPhone.
                </li>
                <li>
                  Add Squirrel Brain to any MCP client that can send a custom header. Claude Code,
                  Claude Desktop, and Cursor are examples. Setup details are on the{" "}
                  <Link href="/mcp" className="text-accent font-semibold underline underline-offset-4">MCP page</Link>
                  {" "}and the{" "}
                  <Link href="/mcp-docs" className="text-accent font-semibold underline underline-offset-4">developer docs</Link>.
                </li>
                <li>The agent reads and updates your calendar on its own.</li>
              </ol>
              <p className="mt-4 text-lg text-muted leading-relaxed">
                ChatGPT on Business, Enterprise, and Edu plans can add a custom MCP server.
                This page does not claim ChatGPT can send the X-API-Key header.
              </p>
            </article>

            <article>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Your key</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 text-balance">
                You can revoke it, and every change is labeled
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                The key is yours. Revoke it and the agent loses access. Each change is labeled
                with the agent that made it, so you can see who added or moved an event.
              </p>
            </article>

            <article>
              <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">On your iPhone</p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-4 text-balance">
                Saved now, on the phone after it syncs
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                Server changes are saved right away and reach the phone (and its Calendar) after the app syncs.
              </p>
            </article>
          </div>
        </section>

        <section className="py-16 lg:py-20 border-t border-border" aria-labelledby="cal-faq-heading">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 id="cal-faq-heading" className="font-display text-2xl sm:text-3xl font-bold text-ink mb-8">
              Questions
            </h2>
            <div className="flex flex-col gap-3">
              {FAQS.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-border bg-white px-5 py-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-display font-bold text-ink list-none">
                    <span>{f.q}</span>
                    <span className="text-accent group-open:rotate-45 transition-transform" aria-hidden="true" style={{ fontSize: "1.5rem", lineHeight: 1 }}>+</span>
                  </summary>
                  <p className="mt-3 text-muted leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
