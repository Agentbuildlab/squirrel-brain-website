"use client";

/**
 * LinkStash feature section
 * Real sales story: save from anywhere, find by plain language
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneShot, T } from "@/components/v2/PhoneKit";
import FadeIn from "@/components/FadeIn";

export default function LinkStashSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "white" }}
      aria-labelledby="linkstash-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: phone */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <PhoneShot
              src="/assets/screens/links-v2.webp"
              alt="LinkStash — links organized by source, searchable by plain language"
              width={340}
            />
          </motion.div>

          {/* RIGHT: copy */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: T.orange }}
            >
              LinkStash
            </p>
            <h2
              id="linkstash-heading"
              className="font-display font-extrabold text-ink text-balance mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.1 }}
            >
              Saved by you.{" "}
              <span style={{ color: T.orange }}>Found by asking.</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-4">
              You already &ldquo;save&rdquo; links on YouTube, TikTok, and Instagram. But the
              list hits 50+, and three months later you can&rsquo;t find that one funny skit
              about the soccer coach. Or the Amazon gift you wanted to get Mom.
            </p>
            <p className="text-base text-muted leading-relaxed mb-4">
              Stash any link from anywhere — then just ask:{" "}
              <em className="text-ink font-medium">
                &ldquo;find the YouTube about the funny soccer-coach skit&rdquo;
              </em>{" "}
              or{" "}
              <em className="text-ink font-medium">
                &ldquo;find that gift for Mom&rdquo;
              </em>{" "}
              — and it pulls right up.
            </p>
            <p className="text-base text-muted leading-relaxed">
              Organized by source automatically. Searchable by plain language.{" "}
              <strong className="text-ink">Your link list actually works now.</strong>
            </p>

            {/* Source chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["YouTube", "TikTok", "Instagram", "Amazon", "X / Twitter", "Pinterest", "Any URL"].map((src) => (
                <span
                  key={src}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{
                    background: T.pastelPeach,
                    color: T.orange,
                  }}
                >
                  {src}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
