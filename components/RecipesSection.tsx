"use client";

/**
 * Recipes feature section
 *
 * Real sales story: snap any recipe (handwritten card, a saved reel, the back of
 * the box) and it lands in your Recipes board — then ask for it at the stove.
 * Warm, food-forward beat. The phone shows the REAL in-app Recipes board
 * (recipes-board.webp); floating dish "polaroids" give it a layered, appetizing
 * feel rather than a flat card.
 */

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PhoneShot, T } from "@/components/v2/PhoneKit";

// Small rotated dish photo that floats around the phone (desktop only).
function FloatingDish({
  src,
  alt,
  style,
  rotate,
  inView,
  delay,
}: {
  src: string;
  alt: string;
  style: React.CSSProperties;
  rotate: number;
  inView: boolean;
  delay: number;
}) {
  return (
    <motion.div
      className="hidden lg:block"
      initial={{ opacity: 0, scale: 0.8, rotate: rotate * 0.3 }}
      animate={inView ? { opacity: 1, scale: 1, rotate } : {}}
      transition={{ duration: 0.55, delay, ease: [0.34, 1.3, 0.64, 1] }}
      style={{
        position: "absolute",
        width: 118,
        height: 118,
        borderRadius: 18,
        overflow: "hidden",
        border: "4px solid #fff",
        boxShadow: "0 14px 30px rgba(26,18,8,0.18)",
        zIndex: 3,
        ...style,
      }}
    >
      <Image src={src} alt={alt} fill sizes="118px" style={{ objectFit: "cover" }} />
    </motion.div>
  );
}

export default function RecipesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "radial-gradient(ellipse 90% 70% at 80% 20%, #fff3e9 0%, #faf6f0 55%)",
      }}
      aria-labelledby="recipes-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: copy + "snap this" card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:order-1 order-2"
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: T.orange }}
            >
              Recipes
            </p>
            <h2
              id="recipes-heading"
              className="font-display font-extrabold text-ink text-balance mb-5"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)", lineHeight: 1.1 }}
            >
              Snap the recipe.{" "}
              <span style={{ color: T.orange }}>Find it at the stove.</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-4">
              Grandma&rsquo;s handwritten card. That pasta reel you saved at midnight. The
              back of the soup can. Snap it and your squirrel drops it straight into your{" "}
              <strong className="text-ink">Recipes board</strong>.
            </p>
            <p className="text-base text-muted leading-relaxed mb-6">
              Then just ask while you&rsquo;re cooking —{" "}
              <em className="text-ink font-medium">
                &ldquo;what was that coconut curry?&rdquo;
              </em>{" "}
              — and it&rsquo;s right there. No more digging through 600 camera-roll
              screenshots to find the one you want.
            </p>

            {/* "You snap this" — the handwritten recipe card */}
            <div className="flex items-center gap-4">
              <div
                style={{
                  position: "relative",
                  width: 132,
                  height: 96,
                  borderRadius: 14,
                  overflow: "hidden",
                  border: `1.5px solid ${T.border}`,
                  boxShadow: "0 6px 18px rgba(26,18,8,0.12)",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/assets/recipe_card.png"
                  alt="A handwritten recipe card you snap"
                  fill
                  sizes="132px"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 6,
                    left: 6,
                    background: "rgba(26,18,8,0.68)",
                    borderRadius: 6,
                    padding: "3px 8px",
                  }}
                >
                  <span style={{ fontSize: 9, color: "rgba(255,245,232,0.9)", fontWeight: 600 }}>
                    You snap this
                  </span>
                </div>
              </div>
              <div
                aria-hidden="true"
                style={{ fontSize: 24, color: T.orange, fontWeight: 700 }}
              >
                →
              </div>
              <p className="text-sm text-muted leading-snug max-w-[140px]">
                …it&rsquo;s saved, sorted, and searchable forever.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: phone with floating dishes */}
          <motion.div
            className="relative flex justify-center lg:justify-end lg:order-2 order-1"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <div className="relative">
              {/* floating dish polaroids (desktop only) */}
              <FloatingDish
                src="/assets/recipe_pasta.png"
                alt="Rigatoni alla vodka"
                rotate={-8}
                inView={inView}
                delay={0.3}
                style={{ top: -28, left: -64 }}
              />
              <FloatingDish
                src="/assets/recipe_cookies.png"
                alt="Brown-butter chocolate-chip cookies"
                rotate={9}
                inView={inView}
                delay={0.42}
                style={{ bottom: 8, left: -78 }}
              />
              <FloatingDish
                src="/assets/recipe_tacos.png"
                alt="Carne asada street tacos"
                rotate={7}
                inView={inView}
                delay={0.5}
                style={{ top: 56, right: -54 }}
              />

              <PhoneShot
                src="/assets/screens/recipes-board.webp"
                alt="Squirrel Brain Recipes board — every recipe you've snapped, sorted and searchable"
                width={326}
                style={{ position: "relative", zIndex: 2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
