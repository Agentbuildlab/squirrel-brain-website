import Link from "next/link";
import AgentAnswerPage from "@/components/AgentAnswerPage";
import { pageMeta } from "@/lib/pageMeta";

const H1 = "How do I give my AI assistant access to my calendar with an API key?";

export const metadata = pageMeta(
  `${H1} | Squirrel Brain`,
  "Get a personal Squirrel Brain key at signup, then add the server to an MCP client that can send a custom header.",
  "/give-ai-assistant-calendar-access-api-key",
);

const FAQS = [
  {
    q: "Where do I get the key?",
    a: "At signup, right away, or later in the iOS app. The key starts with sb_. Coming soon to iPhone.",
  },
  {
    q: "What if I want to stop access?",
    a: "Revoke the key. The old key stops working, and you can make a new one.",
  },
  {
    q: "Which assistants can connect?",
    a: "Any MCP client that can send a custom header. Claude Code, Claude Desktop, and Cursor are examples.",
  },
  {
    q: "Can I use ChatGPT?",
    a: "ChatGPT on Business, Enterprise, and Edu plans can add a custom MCP server. This page does not claim ChatGPT can send the X-API-Key header.",
  },
];

export default function Page() {
  return (
    <AgentAnswerPage slug="give-ai-assistant-calendar-access-api-key" h1={H1} faqs={FAQS}>
      <p>
        Create a personal Squirrel Brain key at signup, then add the server to an MCP client that can send a custom header. The assistant can then read and update your calendar on its own, and you can revoke the key at any time.
      </p>
      <p>
        Three steps. Open{" "}
        <Link href="/signup" className="text-accent font-semibold underline underline-offset-4">signup</Link>
        {" "}and copy the key. Add Squirrel Brain in your MCP client and send the key as the X-API-Key header. Ask the agent to read today&rsquo;s agenda or add an event. Each change is labeled with the agent that made it. Server changes are saved right away and reach the phone (and its Calendar) after the app syncs, as an alarm, a reminder, or a phone call.
      </p>
      <p>
        Coming soon to iPhone, and free to use at launch. The{" "}
        <Link href="/ai-agent-calendar" className="text-accent font-semibold underline underline-offset-4">AI agent calendar</Link>
        {" "}page lists what the agent can do. The{" "}
        <Link href="/mcp" className="text-accent font-semibold underline underline-offset-4">MCP page</Link>
        {" "}and the{" "}
        <Link href="/mcp-docs" className="text-accent font-semibold underline underline-offset-4">developer docs</Link>
        {" "}cover the connection.
      </p>
    </AgentAnswerPage>
  );
}
