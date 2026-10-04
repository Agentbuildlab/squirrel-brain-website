import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Free to use",
  description:
    "Squirrel Brain is free to use at launch. There is nothing to buy and no trial to start.",
  alternates: { canonical: "/pricing" },
};

// Free-launch page. The earlier two-plan pricing page (Standard / Plus, 7-day
// trial) was removed on 2026-10-04 because 1.0 launches free with the paywall off.
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
                Free to use
              </h1>
            </FadeIn>
            <FadeIn immediate delay={0.08}>
              <p className="text-xl text-muted mb-4">
                Squirrel Brain is free to use at launch. There is nothing to buy and no
                trial to start.
              </p>
            </FadeIn>
            <FadeIn immediate delay={0.14}>
              <p className="text-base text-muted mb-10">
                Paid plans may come later. If they do, we will say so clearly before
                anyone is asked to pay.
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
