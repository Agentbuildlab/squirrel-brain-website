import Link from "next/link";
import AgentAnswerPage from "@/components/AgentAnswerPage";
import { pageMeta } from "@/lib/pageMeta";

const H1 = "Can an AI agent put events and alarms on my iPhone?";

export const metadata = pageMeta(
  `${H1} | Squirrel Brain`,
  "Yes. An AI agent can put a calendar event and an alarm on your iPhone through Squirrel Brain, using a personal API key.",
  "/ai-agent-schedule-reminders-iphone",
);

const FAQS = [
  {
    q: "Is it a real alarm on the iPhone?",
    a: "Yes. The agent can put a timed event on your calendar and schedule an iPhone alarm. It can also move, reschedule, or cancel that alarm.",
  },
  {
    q: "Can it become a phone call?",
    a: "A change can become an alarm, a reminder, or a phone call on your iPhone. Server changes are saved right away and reach the phone (and its Calendar) after the app syncs.",
  },
  {
    q: "Who is allowed to do this?",
    a: "Whoever holds your personal key. You can revoke the key, and each change is labeled with the agent that made it.",
  },
  {
    q: "Do I need the app installed today?",
    a: "Coming soon to iPhone, and free to use at launch. You can get a key now at signup and connect an MCP client.",
  },
];

export default function Page() {
  return (
    <AgentAnswerPage slug="ai-agent-schedule-reminders-iphone" h1={H1} faqs={FAQS}>
      <p>
        Yes, an AI agent can put a calendar event and an alarm on your iPhone through Squirrel Brain, using a personal API key. It can also move, reschedule, or cancel that event, and the result can be an alarm, a reminder, or a phone call.
      </p>
      <p>
        The agent can read today&rsquo;s agenda before it adds anything, list the alarms already set, and search the events you already have. You can revoke the key, and each change is labeled with the agent that made it. Server changes are saved right away and reach the phone (and its Calendar) after the app syncs.
      </p>
      <p>
        Coming soon to iPhone, and free to use at launch. Get a key at{" "}
        <Link href="/signup" className="text-accent font-semibold underline underline-offset-4">signup</Link>
        , then add the server to any MCP client that can send a custom header. The{" "}
        <Link href="/ai-agent-calendar" className="text-accent font-semibold underline underline-offset-4">AI agent calendar</Link>
        , the{" "}
        <Link href="/mcp" className="text-accent font-semibold underline underline-offset-4">MCP page</Link>
        , and the{" "}
        <Link href="/mcp-docs" className="text-accent font-semibold underline underline-offset-4">developer docs</Link>
        {" "}walk through the rest.
      </p>
    </AgentAnswerPage>
  );
}
