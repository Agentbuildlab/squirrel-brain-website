"use client";

/**
 * Agent moat band — "Connect any AI agent to your brain"
 * Prominent homepage band linking to /mcp
 */

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { T } from "@/components/v2/PhoneKit";

export default function AgentBand() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section
      ref={ref}
      className="py-14 lg:py-16 overflow-hidden"
      style={{ background: T.darkBg }}
      aria-labelledby="agent-band-heading"
    >
      <motion.div
        className="max-w-5xl mx-auto px-6 lg:px-12 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{ color: T.orange }}
        >
          Agent-friendly
        </p>
        <h2
          id="agent-band-heading"
          className="font-display font-extrabold text-balance mb-4"
          style={{
            fontSize: "clamp(1.6rem, 3vw, 2.6rem)",
            lineHeight: 1.15,
            color: "#fff5e8",
          }}
        >
          Connect any AI agent to your brain.
        </h2>
        <p
          className="text-base leading-relaxed mb-6 max-w-2xl mx-auto"
          style={{ color: "rgba(255,245,232,0.6)" }}
        >
          Squirrel Brain has a built-in MCP server. Claude, ChatGPT, or any custom agent
          can set alarms, read your tasks, and send voice messages straight to your phone.
          Your squirrel becomes the memory layer for every AI tool you use.
        </p>

        {/* Tool pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {["pip_call", "create_alarm", "notify_human", "list_items", "get_daily_brief", "get_agent_context"].map((tool) => (
            <span
              key={tool}
              className="font-mono text-xs px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,122,26,0.12)",
                border: "1px solid rgba(255,122,26,0.25)",
                color: T.orange,
              }}
            >
              {tool}
            </span>
          ))}
        </div>

        <Link
          href="/mcp"
          className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
          style={{
            background: T.orange,
            color: "white",
            boxShadow: "0 4px 20px rgba(255,122,26,0.35)",
          }}
        >
          Developer docs
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </motion.div>
    </section>
  );
}
