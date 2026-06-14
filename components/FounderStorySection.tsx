"use client";

/**
 * "Why this exists" — the founder origin, told vague + general (no personal
 * specifics). Sits in the lower third, before the final CTA. Warm, quiet, a
 * personal note that earns the product.
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T } from "@/components/v2/PhoneKit";

export default function FounderStorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "#faf6f0" }}
      aria-labelledby="founder-heading"
    >
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <div className="flex justify-center mb-6">
            <Image
              src="/assets/squirrel_logo.png"
              alt="Squirrel Brain"
              width={64}
              height={64}
              style={{ filter: "drop-shadow(0 10px 16px rgba(26,18,8,0.16))" }}
            />
          </div>
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: T.orange }}>
            Why this exists
          </p>
          <h2
            id="founder-heading"
            className="font-display font-extrabold text-ink text-balance mb-8"
            style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.8rem)", lineHeight: 1.12 }}
          >
            Built by a small team who needed it first.
          </h2>

          <div className="space-y-5 text-left mx-auto max-w-2xl">
            <p className="text-lg leading-relaxed text-muted">
              It started with a few of us carrying more than any brain is built to hold —
              appointments that dinged once and vanished, things handed off and forgotten, the slow
              dread of a dispute we couldn&rsquo;t prove our side of, and the one text in a flood
              of twenty that actually needed an answer.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              We tried every notes app and reminder list and kept hitting the same wall: capturing
              a thing is easy, but a captured thing just <em>sits there</em>. So we built the
              opposite — <strong className="text-ink">something that catches what slips the instant
              it happens and hands it back exactly when it counts.</strong>
            </p>
            <p className="text-lg leading-relaxed text-muted">
              We built it for ourselves first. Turned out everyone we showed needed it just as badly.
            </p>
          </div>

          <p
            className="mt-10 font-display font-bold text-balance"
            style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: T.orange, lineHeight: 1.3 }}
          >
            Catch the thing — and let it hand itself back exactly when it matters.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
