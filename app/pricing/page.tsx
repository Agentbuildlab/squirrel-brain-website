import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Squirrel Brain is free to start. Unlock everything for $9.99/month. No credit card required.",
};

const FREE_FEATURES = [
  "Voice capture → alarm or reminder",
  "Photo capture (schedule, receipt, whiteboard)",
  "Burrow chat with your squirrel",
  "Reads every calendar already on your iPhone",
  "Parking pin",
  "Up to 10 captures per month",
];

const PRO_FEATURES = [
  "Everything in Free",
  "Unlimited captures",
  "Pix boards (Receipts, Recipes, Meds, School)",
  "Meeting Mode — record + transcribe + extract",
  "Morning brief email",
  "Voice recall — search everything you've captured",
  "YouTube & link stash",
  "Call reminders — your squirrel rings your phone in its own voice",
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
                Free to start when we launch. Unlock everything for $9.99/mo — no
                credit card to get on the launch list.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Plans */}
        <section className="py-16" aria-labelledby="plans-heading">
          <h2 id="plans-heading" className="sr-only">Pricing plans</h2>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Free plan */}
            <FadeIn>
              <div className="bg-white rounded-3xl border border-border p-8 flex flex-col h-full">
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-muted mb-2">
                    Free
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-display text-5xl font-extrabold text-ink">$0</span>
                    <span className="text-muted pb-1">/month</span>
                  </div>
                  <p className="text-sm text-muted">No credit card. No time limit.</p>
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8" role="list">
                  {FREE_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckIcon color="#8a7060" />
                      {f}
                    </li>
                  ))}
                </ul>
                <CtaButton label="Join the launch list" className="w-full justify-center" />
              </div>
            </FadeIn>

            {/* Pro plan */}
            <FadeIn delay={0.1}>
              <div className="bg-accent-light rounded-3xl border border-accent/30 p-8 flex flex-col h-full relative overflow-hidden">
                {/* Recommended badge */}
                <div className="absolute top-6 right-6">
                  <span className="text-xs font-bold bg-accent text-white px-3 py-1 rounded-full">
                    Launch price locked
                  </span>
                </div>
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase text-accent mb-2">
                    Pro
                  </p>
                  <div className="flex items-end gap-1 mb-1">
                    <span className="font-display text-5xl font-extrabold text-ink">$9.99</span>
                    <span className="text-muted pb-1">/month</span>
                  </div>
                  <p className="text-sm text-muted">Unlimited captures. Everything unlocked.</p>
                </div>
                <ul className="flex flex-col gap-3 flex-1 mb-8" role="list">
                  {PRO_FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>
                <CtaButton label="Join the launch list" className="w-full justify-center" />
              </div>
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
                  q: "Does it need Google or Outlook?",
                  a: "No. Squirrel Brain reads every calendar already on your iPhone — no new accounts, no integrations.",
                },
                {
                  q: "Is there a free trial for Pro?",
                  a: "The free tier is unlimited in time — try it as long as you need. Pro unlocks the higher capture limits and advanced features.",
                },
                {
                  q: "What devices does it run on?",
                  a: "iPhone only. The TestFlight beta opens soon — join the launch list and you'll be among the first in.",
                },
                {
                  q: "Can I cancel anytime?",
                  a: "Yes. Managed through your normal App Store subscription — cancel any time from Settings.",
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
      <Footer />
    </>
  );
}
