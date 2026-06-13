"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// ── Shared v2 design tokens (mirrors app's theme.ts) ───────────────────────
export const T = {
  bg: "#f8f4ee",
  bgAlt: "#faf6f0",
  card: "#ffffff",
  text: "#1f1a14",
  textSub: "#9a8c7a",
  orange: "#FF7A1A",
  orangeLight: "#FFF0E6",
  green: "#3fae6e",
  blue: "#2a6aee",
  blueLight: "#dbe9fb",
  border: "#efe7db",
  pastelPeach: "#fde8d8",
  pastelGreen: "#dff0e0",
  pastelPurple: "#ece4f8",
  pastelBlue: "#dbe9fb",
  pastelYellow: "#fbeecb",
  darkBg: "#1a1208",
};

// ── iPhone frame wrapper ────────────────────────────────────────────────────

interface PhoneShellProps {
  children: ReactNode;
  width?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function PhoneShell({ children, width = 280, className = "", style }: PhoneShellProps) {
  const height = Math.round(width * 2.165); // ~9:19.5 ratio
  const dynamicIslandW = Math.round(width * 0.357);
  const dynamicIslandH = Math.round(width * 0.1);

  return (
    <div
      className={className}
      style={{
        width,
        height,
        borderRadius: width * 0.107, // ~3rem at 280
        background: T.darkBg,
        padding: `${Math.round(width * 0.05)}px ${Math.round(width * 0.036)}px`,
        boxShadow:
          "0 48px 96px rgba(255,122,26,0.22), 0 12px 32px rgba(26,18,8,0.28), inset 0 0 0 1.5px rgba(255,255,255,0.08)",
        position: "relative",
        flexShrink: 0,
        ...style,
      }}
    >
      {/* Dynamic island */}
      <div
        style={{
          width: dynamicIslandW,
          height: dynamicIslandH,
          background: T.darkBg,
          borderRadius: 999,
          margin: `0 auto ${Math.round(width * 0.036)}px`,
        }}
        aria-hidden="true"
      />

      {/* Screen content */}
      <div
        style={{
          borderRadius: width * 0.079, // ~2.2rem at 280
          overflow: "hidden",
          height: `calc(100% - ${dynamicIslandH + Math.round(width * 0.086) + Math.round(width * 0.05)}px)`,
          position: "relative",
          background: T.bg,
        }}
      >
        {children}
      </div>

      {/* Home bar */}
      <div
        style={{
          width: Math.round(width * 0.321),
          height: 4,
          borderRadius: 2,
          background: "rgba(255,255,255,0.2)",
          margin: `${Math.round(width * 0.036)}px auto 0`,
        }}
        aria-hidden="true"
      />
    </div>
  );
}

// ── Status bar (top of every screen) ───────────────────────────────────────

export function StatusBar({ time = "9:41" }: { time?: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px 4px",
      }}
    >
      <span style={{ fontSize: 10, fontWeight: 700, color: T.textSub }}>{time}</span>
      <div style={{ display: "flex", gap: 3, alignItems: "center" }}>
        {/* Signal bars */}
        {[3, 5, 7, 9].map((h, i) => (
          <div
            key={i}
            style={{
              width: 3,
              height: h,
              borderRadius: 1,
              background: i < 3 ? T.text : T.border,
              opacity: 0.7,
            }}
          />
        ))}
        {/* Battery */}
        <div
          style={{
            width: 18,
            height: 10,
            borderRadius: 2,
            border: `1.5px solid ${T.textSub}`,
            position: "relative",
            marginLeft: 2,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 1.5,
              right: 4,
              borderRadius: 1,
              background: T.orange,
            }}
          />
          <div
            style={{
              position: "absolute",
              right: -4,
              top: 2.5,
              width: 2.5,
              height: 4,
              borderRadius: "0 1px 1px 0",
              background: T.textSub,
            }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Page header ────────────────────────────────────────────────────────────

export function PageHeader({
  title,
  sub,
}: {
  title: string;
  sub?: string;
}) {
  return (
    <div style={{ padding: "6px 16px 10px" }}>
      <div style={{ fontSize: 18, fontWeight: 800, color: T.text, letterSpacing: -0.3 }}>
        {title}
      </div>
      {sub && (
        <div style={{ fontSize: 10, color: T.textSub, marginTop: 1 }}>{sub}</div>
      )}
    </div>
  );
}

// ── Scroll-box row card (the core v2 list item) ─────────────────────────────
// Left colored edge · bold title · time in accent color · pills

interface ScrollBoxRowProps {
  accentColor: string; // orange = SB items, blue = calendar
  title: string;
  time?: string;
  date?: string;
  dayNum?: string | number;
  location?: string;
  source?: string;
  pills?: { label: string; color: string; bg: string }[];
  erased?: boolean;
}

export function ScrollBoxRow({
  accentColor,
  title,
  time,
  date,
  dayNum,
  location,
  source,
  pills = [],
}: ScrollBoxRowProps) {
  return (
    <div
      style={{
        background: T.card,
        borderRadius: 16,
        marginBottom: 6,
        overflow: "hidden",
        border: `1px solid ${T.border}`,
        display: "flex",
        boxShadow: "0 1px 4px rgba(26,18,8,0.05)",
      }}
    >
      {/* Colored left edge */}
      <div style={{ width: 4, background: accentColor, flexShrink: 0 }} />

      {/* Left column: erase + day number */}
      <div
        style={{
          width: 36,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "8px 0",
          flexShrink: 0,
          borderRight: `1px solid ${T.border}`,
        }}
      >
        <div style={{ fontSize: 7, fontWeight: 700, color: T.textSub, letterSpacing: 0.5 }}>
          ERASE
        </div>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            border: `1.5px solid ${T.border}`,
            marginTop: 3,
          }}
        />
        {dayNum !== undefined && (
          <div
            style={{
              fontSize: 15,
              fontWeight: 900,
              color: accentColor,
              marginTop: 5,
              lineHeight: 1,
            }}
          >
            {dayNum}
          </div>
        )}
      </div>

      {/* Main content */}
      <div style={{ flex: 1, padding: "8px 10px 8px 8px", minWidth: 0 }}>
        {/* Date + time row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 2,
          }}
        >
          {date && (
            <span style={{ fontSize: 9, color: T.textSub, fontWeight: 500 }}>{date}</span>
          )}
          {time && (
            <span style={{ fontSize: 9, fontWeight: 700, color: accentColor }}>{time}</span>
          )}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: T.text,
            lineHeight: 1.3,
            marginBottom: 3,
          }}
        >
          {title}
        </div>

        {/* Location */}
        {location && (
          <div style={{ fontSize: 9, color: T.textSub, marginBottom: 3 }}>
            📍 {location}
          </div>
        )}

        {/* Source */}
        {source && (
          <div style={{ fontSize: 9, color: T.textSub, marginBottom: 4 }}>{source}</div>
        )}

        {/* Pills */}
        {pills.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 4 }}>
            {pills.map((pill, i) => (
              <span
                key={i}
                style={{
                  fontSize: 8,
                  fontWeight: 700,
                  color: pill.color,
                  background: pill.bg,
                  borderRadius: 999,
                  padding: "2px 6px",
                }}
              >
                {pill.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Capture bar (bottom of phone) ──────────────────────────────────────────

export function CaptureBar({
  placeholder = "Ask your squirrel…",
  liveText,
}: {
  placeholder?: string;
  liveText?: string;
}) {
  return (
    <div
      style={{
        margin: "6px 8px 8px",
        background: T.card,
        borderRadius: 999,
        border: `1px solid ${T.border}`,
        display: "flex",
        alignItems: "center",
        gap: 6,
        padding: "6px 6px",
        boxShadow: "0 2px 8px rgba(26,18,8,0.08)",
      }}
    >
      {/* Camera + Plus */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 999,
          background: T.orange,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          position: "relative",
        }}
      >
        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M2 4.5a1.5 1.5 0 011.5-1.5h.5l.8-1h3l.8 1h.5A1.5 1.5 0 0110.5 4.5v5A1.5 1.5 0 019 11H4A1.5 1.5 0 012.5 9.5v-5zM6.5 9a2 2 0 100-4 2 2 0 000 4z"
            fill="white"
          />
        </svg>
        {/* camera badge */}
        <div
          style={{
            position: "absolute",
            bottom: -2,
            right: -2,
            width: 10,
            height: 10,
            borderRadius: 999,
            background: T.text,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="6" height="6" viewBox="0 0 6 6" fill="none">
            <path d="M3 1v4M1 3h4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Text placeholder or live transcript */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {liveText ? (
          <span style={{ fontSize: 9, fontWeight: 500, color: T.text }}>{liveText}</span>
        ) : (
          <span style={{ fontSize: 9, color: T.textSub }}>{placeholder}</span>
        )}
      </div>

      {/* Mic */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 999,
          background: liveText ? T.orange : T.border,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          boxShadow: liveText ? `0 0 0 4px rgba(255,122,26,0.2)` : "none",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <rect x="3.5" y="1" width="5" height="7" rx="2.5" fill={liveText ? "white" : T.textSub} />
          <path
            d="M2 6.5a4 4 0 008 0M6 10.5v1.5"
            stroke={liveText ? "white" : T.textSub}
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

// ── Tab bar ───────────────────────────────────────────────────────────────

const TABS = [
  { label: "Home", icon: "M3 9l3-3 3 3 3-3 3 3M3 13h12" },
  { label: "Calendar", icon: "M2 5h10M2 3h10v9H2zM5 3V1M7 3V1" },
  { label: "Stash", icon: "M2 9l3.5-5 3 4 2-2 3 3" },
  { label: "Pip", icon: "M7 3a4 4 0 110 8 4 4 0 010-8z" },
  { label: "Settings", icon: "M6 1.5A4.5 4.5 0 106 10.5M3 8l1.5 1.5M9 1.5l1.5 1.5" },
];

export function TabBar({ active = 0 }: { active?: number }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        background: T.card,
        borderTop: `1px solid ${T.border}`,
        padding: "6px 0 4px",
      }}
    >
      {TABS.map((tab, i) => (
        <div
          key={tab.label}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            opacity: i === active ? 1 : 0.45,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
            <path
              d={tab.icon}
              stroke={i === active ? T.orange : T.text}
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: 7,
              fontWeight: i === active ? 700 : 500,
              color: i === active ? T.orange : T.textSub,
            }}
          >
            {tab.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Animated pulsing ring (for call screen) ────────────────────────────────

export function PulseRing({
  color = T.orange,
  size = 80,
  children,
}: {
  color?: string;
  size?: number;
  children?: ReactNode;
}) {
  return (
    <div style={{ position: "relative", width: size, height: size }}>
      {/* Outer rings */}
      {[1.6, 1.35, 1.1].map((scale, i) => (
        <motion.div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 999,
            border: `2px solid ${color}`,
            opacity: 0,
          }}
          animate={{ scale: [1, scale], opacity: [0.6, 0] }}
          transition={{
            duration: 2,
            delay: i * 0.55,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
      {/* Center */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 999,
          background: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `0 4px 20px ${color}60`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
