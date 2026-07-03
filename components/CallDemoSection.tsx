// Reusable "try the live demo" section — drops the interactive call demo onto
// any page that features the call-you capability (segment pages + the call
// landing pages). Server component; it just frames the client <InteractiveCall>.

import InteractiveCall from "@/components/InteractiveCall";

export default function CallDemoSection({
  heading = "Let Scuttle call you — right now",
  sub = "This is the real thing: tap Answer and your squirrel rings you in its own voice — the same call that reaches you when something actually matters. No download, no sign-up.",
  eyebrow = "See it for yourself",
}: {
  heading?: string;
  sub?: string;
  eyebrow?: string;
}) {
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
          {eyebrow}
        </p>
        <h2
          id="calldemo-heading"
          className="font-display font-extrabold leading-tight mb-4"
          style={{ fontSize: "clamp(1.9rem, 4vw, 3rem)", color: "#fff5e8" }}
        >
          {heading}
        </h2>
        <p className="text-base mb-10 max-w-md" style={{ color: "rgba(255,245,232,0.72)" }}>
          {sub}
        </p>
        <InteractiveCall />
      </div>
    </section>
  );
}
