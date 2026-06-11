"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Direction to slide in from */
  from?: "bottom" | "left" | "right" | "none";
  /**
   * Animate on mount instead of waiting for the scroll observer.
   * REQUIRED for above-the-fold content: the SSR HTML ships at opacity 0,
   * so anything that delays the IntersectionObserver (slow hydration,
   * webviews, tiny viewports) would otherwise leave the hero blank.
   */
  immediate?: boolean;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  from = "bottom",
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduceMotion = useReducedMotion();

  const show = immediate || inView || reduceMotion;

  // immediate/reduced-motion content renders VISIBLE in the SSR HTML itself —
  // an above-the-fold hero must never depend on JS hydration to appear.
  const initial =
    immediate || reduceMotion
      ? { opacity: 1, y: 0, x: 0 }
      : {
          opacity: 0,
          y: from === "bottom" ? 20 : 0,
          x: from === "left" ? -20 : from === "right" ? 20 : 0,
        };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={show ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
