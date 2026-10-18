import Link from "next/link";
import AgentAnswerPage from "@/components/AgentAnswerPage";
import { pageMeta } from "@/lib/pageMeta";

const H1 = "Is there a calendar with an MCP server?";

export const metadata = pageMeta(
  `${H1} | Squirrel Brain`,
  "Yes. Squirrel Brain is a calendar and reminder app for iPhone with a hosted MCP server and a personal API key.",
  "/calendar-mcp-server",
);

const FAQS = [
  {
    q: "What kind of server is it?",
    a: "A hosted remote MCP server. The agent sends your personal key in a custom header. Any MCP client that can send that header can connect.",
  },
  {
    q: "What can the agent change?",
    a: "It can read today's agenda, search notes and calendar events, add an event with an alarm, move it, or cancel it. A change can become an alarm, a reminder, or a phone call on your iPhone.",
  },
  {
    q: "Does the edit reach my phone?",
    a: "Server changes are saved right away and reach the phone (and its Calendar) after the app syncs.",
  },
  {
    q: "Can I use ChatGPT?",
    a: "ChatGPT on Business, Enterprise, and Edu plans can add a custom MCP server. This page does not claim ChatGPT can send the X-API-Key header.",
  },
];

export default function Page() {
  return (
    <AgentAnswerPage slug="calendar-mcp-server" h1={H1} faqs={FAQS}>
      <p>
        Yes, Squirrel Brain is a calendar and reminder app for iPhone with a hosted MCP server, so any MCP client that can send a custom header can read and update it on its own with a personal API key. Claude Code, Claude Desktop, and Cursor are examples.
      </p>
      <p>
        The agent can read today&rsquo;s agenda, search events and notes, add a calendar event with an alarm, and change or cancel it. You can revoke the key, and each change is labeled with the agent that made it. Server changes are saved right away and reach the phone (and its Calendar) after the app syncs.
      </p>
      <p>
        Coming soon to iPhone, and free to use at launch. Start with a key at{" "}
        <Link href="/signup" className="text-accent font-semibold underline underline-offset-4">signup</Link>
        . The{" "}
        <Link href="/ai-agent-calendar" className="text-accent font-semibold underline underline-offset-4">AI agent calendar</Link>
        {" "}page explains what the agent can do. Connection help is on the{" "}
        <Link href="/mcp" className="text-accent font-semibold underline underline-offset-4">MCP page</Link>
        {" "}and the{" "}
        <Link href="/mcp-docs" className="text-accent font-semibold underline underline-offset-4">developer docs</Link>.
      </p>
    </AgentAnswerPage>
  );
}
