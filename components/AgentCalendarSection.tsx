import Link from "next/link";

// Server-rendered homepage block. The hero H1, the ringing demo, and the
// pricing copy stay as they are — this is an extra section only.
export default function AgentCalendarSection() {
  return (
    <section
      className="py-16 lg:py-20 bg-white border-y border-border"
      aria-labelledby="agent-calendar-heading"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-bold tracking-widest uppercase text-accent mb-3">
          For AI agents
        </p>
        <h2
          id="agent-calendar-heading"
          className="font-display font-extrabold text-ink text-balance"
          style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)", lineHeight: 1.1 }}
        >
          The calendar your AI agent can use on its own
        </h2>
        <ul className="mt-8 mx-auto flex max-w-xl flex-col gap-3 text-left text-lg text-muted">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>Any MCP client can read and update it with a personal key.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>A change becomes a real alarm, reminder, or phone call on your iPhone.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
            <span>You can revoke the key, and each change is labeled with the agent that made it.</span>
          </li>
        </ul>
        <p className="mt-6 text-muted leading-relaxed">
          Server changes are saved right away and reach the phone (and its Calendar) after the app syncs.
        </p>
        <Link
          href="/ai-agent-calendar"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
        >
          AI agent calendar
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
