// Reusable "try the live demo" section — drops the interactive call demo onto
// any page that features the call-you capability. Each placement passes a
// `theme` so the phone plays a message that fits the page (faith, sales, etc.).
// Server component; it just frames the client <InteractiveCall>.

import InteractiveCall from "@/components/InteractiveCall";
import { DEMO_VOICES, type DemoTheme } from "@/lib/demoVoices";

export default function CallDemoSection({
  theme = "default",
  heading,
  sub,
  eyebrow,
}: {
  /** Picks the voice + transcript + section copy that fit the page. */
  theme?: DemoTheme;
  /** Optional overrides (default to the theme's copy). */
  heading?: string;
  sub?: string;
  eyebrow?: string;
}) {
  const v = DEMO_VOICES[theme];
  const eb = eyebrow ?? v.eyebrow;
  const hd = heading ?? v.heading;
  const sb = sub ?? v.sub;

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-24"
      style={{ background: "#0e0a02" }}
      aria-labelledby="calldemo-heading"
    >
      {/* Green glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 640,
          height: 640,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(63,174,110,0.14) 0%, rgba(255,122,26,0.04) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center flex flex-col items-center">
        <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#3fae6e" }}>
          {eb}
        </p>
        <h2
          id="calldemo-heading"
          className="font-display font-extrabold leading-tight mb-4"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "#fff5e8" }}
        >
          {hd}
        </h2>
        <p className="text-base mb-10 max-w-md" style={{ color: "rgba(255,245,232,0.72)" }}>
          {sb}
        </p>
        <InteractiveCall audioSrc={v.audio} transcript={v.transcript} />
        <p className="text-xs mt-6 max-w-sm" style={{ color: "rgba(255,245,232,0.5)" }}>
          That&rsquo;s Scuttle&rsquo;s real voice. In the app it&rsquo;s a{" "}
          <span style={{ color: "#3fae6e", fontWeight: 700 }}>two-way call</span> — you answer and
          talk back, and it does what you ask.
        </p>
      </div>
    </section>
  );
}
