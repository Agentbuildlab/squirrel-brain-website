"use client";

/**
 * Gotcha #2 — Proof you can produce (the founder's signature story).
 * Snap every serial number + the shipping receipt before it ships; months later
 * when they say "we never got it," forward a dated, GPS-stamped record.
 * Also: deposits, warranties, insurance. Before (serial box) → after (proof record).
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T } from "@/components/v2/PhoneKit";

const GREEN = "#3fae6e";

export default function ProofGotchaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "#faf6f0" }}
      aria-labelledby="proof-gotcha-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* After — the proof record (phone-left rhythm: put proof on the right) */}
        <motion.div
          className="lg:order-2"
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <div
            className="rounded-3xl p-6"
            style={{ background: "#fff", border: `1.5px solid ${T.border}`, boxShadow: "0 12px 36px rgba(26,18,8,0.1)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span
                className="flex items-center justify-center rounded-full"
                style={{ width: 28, height: 28, background: `${GREEN}1f`, color: GREEN }}
                aria-hidden="true"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span style={{ fontSize: 12, fontWeight: 800, color: GREEN, letterSpacing: 0.4, textTransform: "uppercase" }}>
                Shipment proof · ready to forward
              </span>
            </div>

            <h3 className="font-display font-bold text-ink mb-1" style={{ fontSize: "1.15rem" }}>
              📦 Repair return — Account #4471
            </h3>
            <p className="text-sm text-muted mb-4">
              Shipped Jun 9 · UPS 1Z 999 AA1 0123 · <span style={{ color: GREEN, fontWeight: 600 }}>📍 Memphis service hub</span>
            </p>

            <div className="rounded-2xl p-4 mb-3" style={{ background: "#faf6f0", border: `1px solid ${T.border}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: T.textSub, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 6 }}>
                Serial numbers in the box (photographed)
              </div>
              {["SN A8X-44715", "SN A8X-44716", "SN A8X-44717"].map((sn) => (
                <div key={sn} className="flex items-center gap-2 py-0.5">
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: GREEN, display: "inline-block" }} aria-hidden="true" />
                  <span className="font-mono text-sm text-ink">{sn}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: `${GREEN}1a`, color: GREEN }}>
                4 photos · dated &amp; GPS-stamped
              </span>
              <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white" style={{ background: GREEN }}>
                Share as proof
              </span>
            </div>

            <div
              style={{ background: "#1a1208", borderRadius: 12, padding: "10px 12px", display: "flex", alignItems: "flex-start", gap: 8, marginTop: 14 }}
            >
              <span style={{ fontSize: 16, lineHeight: 1 }} aria-hidden="true">🐿️</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#e8a84a", marginBottom: 2 }}>Your squirrel</div>
                <div style={{ fontSize: 12, color: "rgba(255,245,232,0.9)", lineHeight: 1.5 }}>
                  Dated, GPS-stamped, a photo of every serial. Forward it and the argument&rsquo;s over.
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copy + the box you snap */}
        <motion.div
          className="lg:order-1"
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: GREEN }}>
            Proof you can produce
          </p>
          <h2
            id="proof-gotcha-heading"
            className="font-display font-extrabold text-ink text-balance mb-5"
            style={{ fontSize: "clamp(1.9rem, 3.6vw, 3rem)", lineHeight: 1.08 }}
          >
            &ldquo;We never got it.&rdquo;{" "}
            <span style={{ color: GREEN }}>Actually — here&rsquo;s the proof.</span>
          </h2>
          <p className="text-lg text-muted leading-relaxed mb-4 max-w-lg">
            Before that repair ships back, snap every serial number going in the box and the shipping
            receipt. Six weeks later when they email <em>&ldquo;we never received this&rdquo;</em> — you
            forward a <strong className="text-ink">dated, GPS-stamped record with a photo of every serial</strong>.
            Argument over. (This is the moment Squirrel Brain was built for.)
          </p>
          <p className="text-base text-muted leading-relaxed mb-6 max-w-lg">
            Same trick wins a <strong className="text-ink">deposit dispute</strong> (&ldquo;it was already
            like that&rdquo; — with a timestamp), a <strong className="text-ink">warranty claim</strong>, or
            an <strong className="text-ink">insurance photo</strong>. Free photo apps store the picture.
            Only your squirrel turns it into proof you can hand over.
          </p>

          <div
            className="relative rounded-2xl overflow-hidden max-w-sm"
            style={{ border: `1.5px solid ${T.border}`, boxShadow: "0 8px 24px rgba(26,18,8,0.1)" }}
          >
            <Image src="/assets/before_serialbox.webp" alt="An open box of equipment with serial numbers, before it ships" width={760} height={570} className="w-full h-auto" />
            <div className="absolute bottom-2 left-2 rounded-md px-2 py-1" style={{ background: "rgba(26,18,8,0.7)" }}>
              <span className="text-[11px] font-semibold" style={{ color: "rgba(255,245,232,0.9)" }}>
                You snap each serial + the receipt
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
