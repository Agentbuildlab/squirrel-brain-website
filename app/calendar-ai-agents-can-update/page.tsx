import Link from "next/link";
import AgentAnswerPage from "@/components/AgentAnswerPage";
import { pageMeta } from "@/lib/pageMeta";

const H1 = "Is there a calendar AI agents can update on their own?";

export const metadata = pageMeta(
  `${H1} | Squirrel Brain`,
  "Yes. Squirrel Brain is a calendar and reminder app for iPhone that an AI agent can read and update on its own with a personal API key.",
  "/calendar-ai-agents-can-update",
);

const FAQS = [
  {
    q: "Can I shut off an agent's access?",
    a: "Yes. Revoke the key and that agent can no longer make changes.",
  },
  {
    q: "Will I know which agent edited an event?",
    a: "Yes. Each change is labeled with the agent that made it.",
  },
  {
    q: "When does it reach my iPhone?",
    a: "Server changes are saved right away and reach the phone (and its Calendar) after the app syncs.",
  },
  {
    q: "Where do I get a key?",
    a: "Coming soon to iPhone. You can get a personal key now at signup. It is free to use at launch.",
  },
];

export default function Page() {
  return (
    <AgentAnswerPage slug="calendar-ai-agents-can-update" h1={H1} faqs={FAQS}>
      <p>
        Yes, Squirrel Brain is a calendar and reminder app for iPhone that an AI agent can read and update on its own with a personal API key. The agent can add an event, move it, or cancel it, and each change is labeled with the agent that made it.
      </p>
      <p>
        You can revoke the key. Server changes are saved right away and reach the phone (and its Calendar) after the app syncs, as an alarm, a reminder, or a phone call. The agent can also read today&rsquo;s agenda, search notes and calendar events, save a note or a link, send a banner, and file a photo onto a board.
      </p>
      <p>
        Coming soon to iPhone, and free to use at launch. Get a key at{" "}
        <Link href="/signup" className="text-accent font-semibold underline underline-offset-4">signup</Link>
        , then add Squirrel Brain to any MCP client that can send a custom header. Claude Code, Claude Desktop, and Cursor are examples. See the{" "}
        <Link href="/ai-agent-calendar" className="text-accent font-semibold underline underline-offset-4">AI agent calendar</Link>
        , the{" "}
        <Link href="/mcp" className="text-accent font-semibold underline underline-offset-4">MCP page</Link>
        , and the{" "}
        <Link href="/mcp-docs" className="text-accent font-semibold underline underline-offset-4">developer docs</Link>.
      </p>
    </AgentAnswerPage>
  );
}
