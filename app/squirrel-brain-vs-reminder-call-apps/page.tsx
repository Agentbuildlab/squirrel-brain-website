import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import AppStoreButton from "@/components/AppStoreButton";

const ORIGIN = "https://squirrelbrainapp.com";
const PATH = "/squirrel-brain-vs-reminder-call-apps";
const CHECKED = "October 14, 2026";

export const metadata: Metadata = {
  title: { absolute: "Squirrel Brain vs reminder-call apps" },
  description:
    "A factual comparison of Squirrel Brain with Zangy, Callme, ToDoCall, ReminderCall, and FocusCall. Only published product facts. The Squirrel Brain call vibrates on silent; the alarm rings through silent.",
  alternates: { canonical: PATH },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Squirrel Brain vs reminder-call apps",
    description:
      "What Squirrel Brain, Zangy, Callme, ToDoCall, ReminderCall, and FocusCall each publish about reminder calls — and what we did not verify.",
    url: `${ORIGIN}${PATH}`,
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Squirrel Brain" }],
  },
};

type Row = {
  name: string;
  href: string;
  source: string;
  what: string;
  price: string;
  silent: string;
};

// Each cell is a paraphrase of a public page we read on CHECKED, not an independent test.
const ROWS: Row[] = [
  {
    name: "Squirrel Brain",
    href: "/",
    source: "This site",
    what: "iPhone app. Voice notes, photos, screenshots, texts, and emails become reminders, alarms, notes, and calendar events. Optional MCP server so Claude Code, Claude Desktop, Cursor, or your own agent can set alarms and place a call. When you answer the call, you can talk back.",
    price: "Free to use at launch. Nothing to buy and no trial to start. Paid plans may come later.",
    silent:
      "The call vibrates on silent and rings only when the ringer is on. The alarm rings through the silent switch. Focus, Low Power Mode, and other iOS limits can still suppress an alarm.",
  },
  {
    name: "Zangy",
    href: "https://apps.apple.com/us/app/zangy-ai-phone-reminders/id6755998899",
    source: "App Store listing",
    what: "iPhone app (Zenius MMC). Schedules an AI phone call that speaks a message you type, or an MP3 you upload. One-time or recurring (daily, weekly, or monthly). Multiple verified phone numbers. Call transcripts. Calendar views.",
    price:
      "The listing shows the download as Free. Release notes mention paid plans, credits, and calling rates. The page we read did not show a dollar price.",
    silent: "The listing we read does not say whether the call rings when the iPhone silent switch is on.",
  },
  {
    name: "Callme",
    href: "https://apps.apple.com/us/app/callme-call-text-reminder/id6760204657",
    source: "App Store listing",
    what: "iPhone app (Han Fang). Phone-call and text reminders. You can snooze, reschedule, or complete a reminder by talking, and set a reminder for yourself or someone else. Release notes mention voice capture, SMS, and location-based reminders.",
    price: "The listing shows the download as Free. It does not publish a subscription price.",
    silent: "The listing says calls replace silent notifications. It does not say whether the call rings through the silent switch.",
  },
  {
    name: "ToDoCall",
    href: "https://apps.apple.com/us/app/todocall-ai-call-reminder/id6754931676",
    source: "App Store listing",
    what: "iPhone app (Miray Oltan). A voice call speaks the task. You can reply “Done,” “Remind me later,” or add another task. Their listing says it uses CallKit, Speech, and VoIP.",
    price:
      "Download is listed as Free, with in-app purchases named ToDoCall Pro at $9.99 and $59.99. The description says subscriptions are billed weekly. The prices we saw were not labeled with a period, so we are not assigning $9.99 or $59.99 to a week, month, or year.",
    silent: "The listing we read does not say whether the call rings through the silent switch.",
  },
  {
    name: "ReminderCall",
    href: "https://remindercall.app/",
    source: "remindercall.app",
    what: "Their site describes a real phone call over the phone network. A voice reads the reminder you wrote. Recurring schedules. SMS backup if you miss the call. They say it can ring the number the account is registered to, including a parent’s phone set up with that person’s agreement.",
    price: "Their site says free to download, and that calls require a subscription: $149.99/year or $6.99/week.",
    silent:
      "Their site says the call follows ring settings and that it “rings on silent.” That is their published wording. We did not test it.",
  },
  {
    name: "FocusCall",
    href: "https://focuscall.app/",
    source: "focuscall.app",
    what: "Their site describes an iPhone app that rings a verified US or Canada number and reads the task. Missed calls can be retried (they call this Nag Mode). On the call, 1 marks done, 2 snoozes an hour, 3 moves it to tomorrow, 9 cancels, and 0 stops every call. Optional read-only calendar and place-based reminders. iOS only, as of their page.",
    price:
      "Their site says the free plan includes 5 reminder calls a month, Pro is $9.99/month, and Pro+ is $19.99/month. They also say final launch pricing may change.",
    silent:
      "Their site says notifications get muted and a ringing phone does not. It does not explicitly say the call rings through the iPhone silent switch. We did not test it.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${ORIGIN}${PATH}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "Does the Squirrel Brain call ring when the phone is on silent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Squirrel Brain call vibrates on silent, like any incoming call, and it rings when the ringer is on. The alarm is what rings through the silent switch.",
      },
    },
    {
      "@type": "Question",
      name: "Is Squirrel Brain free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Squirrel Brain is free to use at launch. There is nothing to buy and no trial to start. Paid plans may come later.",
      },
    },
  ],
};

export default function ComparisonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Nav />
      <main id="main-content" className="pt-28 pb-8">
        <article className="max-w-5xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">Comparison</p>
          <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-ink leading-[1.05] mb-5 text-balance">
            Squirrel Brain vs reminder-call apps
          </h1>
          <p className="text-lg text-muted leading-relaxed max-w-3xl mb-4">
            Zangy, Callme, ToDoCall, ReminderCall, and FocusCall also place a phone call
            to remind you. This page only repeats what each product published about
            itself, plus what Squirrel Brain itself does. We did not install or test
            the other apps. Sources were read on {CHECKED}.
          </p>
          <p className="text-sm text-muted leading-relaxed max-w-3xl mb-10">
            On Squirrel Brain, the call vibrates on silent. Only the alarm rings through
            the silent switch. Where another product&rsquo;s page did not mention the
            silent switch, the table says so. That is not a claim that the feature is missing.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-border bg-white">
            <table className="min-w-[880px] w-full text-left text-sm">
              <caption className="sr-only">
                Published facts about Squirrel Brain, Zangy, Callme, ToDoCall, ReminderCall, and FocusCall
              </caption>
              <thead>
                <tr className="border-b border-border bg-bg">
                  <th scope="col" className="px-4 py-3 font-display font-bold text-ink w-[9rem]">
                    App
                  </th>
                  <th scope="col" className="px-4 py-3 font-display font-bold text-ink">
                    What they publish
                  </th>
                  <th scope="col" className="px-4 py-3 font-display font-bold text-ink w-[16rem]">
                    Price they publish
                  </th>
                  <th scope="col" className="px-4 py-3 font-display font-bold text-ink w-[16rem]">
                    Silent switch
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.name} className="border-b border-border align-top last:border-b-0">
                    <th scope="row" className="px-4 py-4 font-display font-bold text-ink">
                      {row.name === "Squirrel Brain" ? (
                        <Link href={row.href} className="text-accent underline underline-offset-4">
                          {row.name}
                        </Link>
                      ) : (
                        <a href={row.href} className="text-accent underline underline-offset-4">
                          {row.name}
                        </a>
                      )}
                      <span className="block mt-1 text-xs font-body font-normal text-muted">{row.source}</span>
                    </th>
                    <td className="px-4 py-4 text-muted leading-relaxed">{row.what}</td>
                    <td className="px-4 py-4 text-muted leading-relaxed">{row.price}</td>
                    <td className="px-4 py-4 text-muted leading-relaxed">{row.silent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="mt-12 max-w-3xl" aria-labelledby="ours-heading">
            <h2 id="ours-heading" className="font-display text-2xl font-bold text-ink mb-3">
              What this page is willing to say about Squirrel Brain
            </h2>
            <ul className="list-disc pl-5 text-muted leading-relaxed space-y-2">
              <li>It captures voice, photos, screenshots, texts, and emails, then turns them into reminders, alarms, notes, and calendar events.</li>
              <li>The call vibrates on silent. The alarm rings through the silent switch.</li>
              <li>Answering the call is a two-way conversation, not a recording you can only listen to.</li>
              <li>An optional MCP server lets Claude Code, Claude Desktop, Cursor, or your own agent set alarms and place a call. The app also works with no agent connected.</li>
              <li>It is free to use at launch. iPhone only.</li>
            </ul>
            <p className="mt-4 text-muted leading-relaxed">
              We are not claiming the other apps lack those capabilities. Their pages,
              as read on {CHECKED}, describe reminder calls and do not describe photo or
              screenshot capture, or an MCP server. That is a statement about those
              pages, not a test of the apps.
            </p>
          </section>

          <section className="mt-12 max-w-3xl" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="font-display text-2xl font-bold text-ink mb-4">
              Two questions we can answer about Squirrel Brain
            </h2>
            <div className="flex flex-col gap-3">
              <details className="rounded-2xl border border-border bg-white px-5 py-4" open>
                <summary className="font-display font-bold text-ink cursor-pointer">
                  Does the Squirrel Brain call ring on silent?
                </summary>
                <p className="mt-3 text-muted leading-relaxed">
                  No. It vibrates on silent, the way an incoming call does, and it rings
                  when the ringer is on. The alarm is what rings through the silent switch.
                </p>
              </details>
              <details className="rounded-2xl border border-border bg-white px-5 py-4">
                <summary className="font-display font-bold text-ink cursor-pointer">
                  Is Squirrel Brain free?
                </summary>
                <p className="mt-3 text-muted leading-relaxed">
                  Free to use at launch. Nothing to buy and no trial to start. See{" "}
                  <Link href="/pricing" className="text-accent font-semibold underline underline-offset-4">
                    pricing
                  </Link>
                  .
                </p>
              </details>
            </div>
          </section>

          <div className="mt-12 flex flex-wrap items-center gap-3">
            <AppStoreButton />
            <Link href="/for-ai" className="text-sm font-semibold text-muted hover:text-ink">
              For AI bots
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
