"use client";

/**
 * Morning Brief — two emails a day, zero noise. Moved to the home page.
 * Shows the ACTUAL emails (a morning brief + a 4 PM check-in), side by side,
 * instead of another phone screen.
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T } from "@/components/v2/PhoneKit";

function EmailCard({
  src,
  alt,
  label,
  delay,
  inView,
}: {
  src: string;
  alt: string;
  label: string;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 w-full max-w-sm"
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay }}
    >
      <span
        className="text-xs font-bold tracking-widest uppercase"
        style={{ color: T.orange }}
      >
        {label}
      </span>
      <div
        className="rounded-2xl overflow-hidden w-full"
        style={{ border: `1px solid ${T.border}`, boxShadow: "0 12px 36px rgba(26,18,8,0.12)" }}
      >
        <Image src={src} alt={alt} width={720} height={812} className="w-full h-auto" />
      </div>
    </motion.div>
  );
}

export default function MorningBriefSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "radial-gradient(ellipse 90% 70% at 50% 0%, #fff3e9 0%, #faf6f0 55%)" }}
      aria-labelledby="brief-heading"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: T.orange }}>
            Morning brief
          </p>
          <h2
            id="brief-heading"
            className="font-display font-extrabold text-ink text-balance mb-4"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}
          >
            Two emails a day. <span style={{ color: T.orange }}>Zero noise.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed">
            No app to open. A short <strong className="text-ink">morning brief</strong> lands in your
            inbox — your day, plus today&rsquo;s weather, a &ldquo;this day in history&rdquo;, and a
            joke to start things off. Then a <strong className="text-ink">4 PM check-in</strong> with
            anything still open. That&rsquo;s it. Two emails, done.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-start justify-center gap-8 lg:gap-12">
          <EmailCard
            src="/assets/email_morning.webp"
            alt="The morning brief email — weather, your day, this day in history, and a joke"
            label="Every morning"
            delay={0.15}
            inView={inView}
          />
          <EmailCard
            src="/assets/email_afternoon.webp"
            alt="The 4 PM check-in email — what's still open today"
            label="Every afternoon · 4 PM"
            delay={0.28}
            inView={inView}
          />
        </div>
      </div>
    </section>
  );
}
