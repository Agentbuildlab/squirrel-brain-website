import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CallDemoSection from "@/components/CallDemoSection";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Two simple plans: Standard at $9.99/month (10 hours of meeting recording) and Plus at $14.99/month (20 hours). Everything else is unlimited on both. 7-day free trial, cancel anytime.",
  alternates: { canonical: "/pricing" },
};

// Everything except meeting recording is UNLIMITED on both plans — the bundle is
// identical, the only difference is monthly recording hours. Both cards render
// this same list so the "unlimited on both" point reads at a glance.
const EVERYTHING = [
  "Unlimited photos, notes & reminders",
  "Voice capture → alarm, reminder, or calendar event",
  "A real phone call when it matters — rings if your ringer's on, vibrates on silent, on a locked screen",
  "Pix boards: receipts, recipes, meds, schedules",
  "The Burrow — AI chat with your squirrel",
  "Link & YouTube stash + a forever note",
  "Morning brief email + 4 PM nudge",
  "Optional MCP portal — your AI tools can plug in",
];

const PLANS = [
  {
    name: "Standard",
    price: "$9.99",
    hours: "10 hours",
    tagline: "Everything in Squirrel Brain, plus 10 hours of meeting recording each month.",
    featured: false,
    badge: null as string | null,
  },
  {
    name: "Plus",
    price: "$14.99",
    hours: "20 hours",
    tagline: "Everything in Standard — with 20 hours of meeting recording each month.",
    featured: true,
    badge: "Double the recording",
  },
];

function CheckIcon({ color = "#FF7A1A" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill={color} fillOpacity="0.12"/>
      <path d="M5 8l2.5 2.5L11 5.5" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="pt-28 pb-12 text-center"
          aria-labelledby="pricing-heading"
          style={{ background: "linear-gradient(160deg, #FFF0E6 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeIn immediate>
              <h1
                id="pricing-heading"
                className="font-display text-5xl sm:text-6xl font-extrabold text-ink mb-5"
              >
                Simple, honest pricing
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.08}>
              <p className="text-xl text-muted max-w-xl mx-auto">
                Your whole brain in one app — captures, reminders, the Burrow, and meeting
                notes. Everything&rsquo;s unlimited except meeting recording, so the only
                choice is how many hours you need.
              </p>
            </FadeIn>
            <FadeIn immediate delay={0.14}>
              <p className="text-sm font-semibold text-accent mt-4">
                7-day free trial · monthly billing · cancel anytime
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16" aria-labelledby="plans-heading">
          <h2 id="plans-heading" className="sr-only">Pricing plans</h2>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLANS.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <div
                  className={
                    plan.featured
                      ? "bg-accent-light rounded-3xl border border-accent/30 p-8 flex flex-col h-full relative overflow-hidden"
                      : "bg-white rounded-3xl border border-border p-8 flex flex-col h-full relative overflow-hidden"
                  }
                >
                  {plan.badge && (
                    <div className="absolute top-6 right-6">
                      <span className="text-xs font-bold bg-accent text-white px-3 py-1 rounded-full">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  <div className="mb-6">
                    <p
                      className={
                        plan.featured
                          ? "text-xs font-bold tracking-widest uppercase text-accent mb-2"
                          : "text-xs font-bold tracking-widest uppercase text-muted mb-2"
                      }
                    >
                      {plan.name}
                    </p>
                    <div className="flex items-end gap-1 mb-2">
                      <span className="font-display text-5xl font-extrabold text-ink">{plan.price}</span>
                      <span className="text-muted pb-1">/month</span>
                    </div>
                    <p className="text-sm text-muted">{plan.tagline}</p>
                  </div>
                  <ul className="flex flex-col gap-3 flex-1 mb-6" role="list">
                    {EVERYTHING.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                        <CheckIcon color={plan.featured ? "#FF7A1A" : "#8a7060"} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {/* The one differentiator — monthly meeting-recording hours */}
                  <div
                    className="rounded-2xl px-4 py-3 mb-8 flex items-center gap-2.5"
                    style={{ background: "#FF7A1A14", border: "1px solid #FF7A1A33" }}
                  >
                    <span className="text-lg" aria-hidden="true">🎙️</span>
                    <span className="text-sm font-bold text-ink">
                      {plan.hours} of meeting recording <span className="font-normal text-muted">/ month</span>
                    </span>
                  </div>
                  <CtaButton label="Join the launch list" className="w-full justify-center" />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* The only difference, spelled out plainly */}
          <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-8">
            <FadeIn>
              <p className="text-center text-sm text-muted leading-relaxed">
                Everything except meeting recording is <span className="font-semibold text-ink">unlimited on both plans</span>.
                The only difference is your monthly recording hours — <span className="font-semibold text-ink">10 on Standard, 20 on Plus</span>.
                Both start with a 7-day free trial and are billed monthly; cancel anytime.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* FAQ / guardrails callout */}
        <section
          className="py-16 bg-white border-t border-border"
          aria-labelledby="faq-heading"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <FadeIn>
              <h2
                id="faq-heading"
                className="font-display text-2xl font-bold text-ink mb-8 text-center"
              >
                Good to know
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  q: "What's the difference between Standard and Plus?",
                  a: "Only meeting-recording hours: Standard includes 10 hours a month, Plus includes 20. Everything else — photos, notes, reminders, voice capture, phone-call alarms, link stash, and the Burrow — is unlimited on both.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes — every plan starts with a 7-day free trial. After that it's $9.99/month for Standard or $14.99/month for Plus, billed monthly. Cancel anytime.",
                },
                {
                  q: "Does it need Google or Outlook?",
                  a: "No. Squirrel Brain reads every calendar already on your iPhone — no new accounts, no integrations.",
                },
                {
                  q: "What devices does it run on, and can I cancel?",
                  a: "iPhone only for now. Subscriptions are managed through your normal App Store subscription, so you can cancel any time from Settings. The TestFlight beta opens soon — join the launch list and you'll be among the first in.",
                },
              ].map(({ q, a }) => (
                <FadeIn key={q}>
                  <div className="bg-bg rounded-2xl border border-border p-5">
                    <h3 className="font-display font-bold text-sm text-ink mb-2">{q}</h3>
                    <p className="text-sm text-muted leading-relaxed">{a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20" aria-labelledby="pricing-cta-heading">
          <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
            <FadeIn>
              <h2
                id="pricing-cta-heading"
                className="font-display text-3xl font-bold text-ink mb-5"
              >
                Be first when it opens
              </h2>
              <p className="text-muted text-lg mb-8">
                Join the launch list — we&rsquo;ll email you the moment it&rsquo;s ready.
              </p>
              <CtaButton size="lg" />
            </FadeIn>
          </div>
        </section>
      </main>
      <CallDemoSection
        theme="default"
        eyebrow="What you're paying for"
        heading="Hear what it does — right now"
        sub="This call — the one that saves you from the costly slip-up — is what you're paying for. Tap the phone and hear it in Scuttle's own voice. No download, no sign-up."
      />
      <Footer />
    </>
  );
}
