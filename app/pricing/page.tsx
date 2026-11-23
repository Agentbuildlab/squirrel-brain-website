import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Pricing: $14.99/month",
  description:
    "Squirrel Brain is $14.99/month, billed by Apple through your App Store account. Cancel any time.",
  alternates: { canonical: "/pricing" },
};

// One price: $14.99/month (Adam, 2026-11-23). Billing is Apple's. No trial claim here:
// any intro offer is shown by the App Store itself.
export default function PricingPage() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <section
          className="pt-28 pb-20 text-center"
          aria-labelledby="pricing-heading"
          style={{ background: "linear-gradient(160deg, #FFF0E6 0%, #faf7f2 60%)" }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <FadeIn immediate>
              <h1
                id="pricing-heading"
                className="font-display text-5xl sm:text-6xl font-extrabold text-ink mb-5"
              >
                $14.99/month
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.08}>
              <p className="text-xl text-muted mb-4">
                One plan, everything included: the assistant that calls you, photo and
                voice capture, your calendar, reminders and notes.
              </p>
            </FadeIn>
            <FadeIn immediate delay={0.14}>
              <p className="text-base text-muted mb-10">
                Billed monthly by Apple through your App Store account. Cancel any time
                in your iPhone&apos;s Settings.
              </p>
            </FadeIn>
            <FadeIn immediate delay={0.2}>
              <CtaButton size="lg" />
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
