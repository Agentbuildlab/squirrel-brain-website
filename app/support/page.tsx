import type { Metadata } from "next";
import MarkdownPage from "@/components/MarkdownPage";
import { renderContentMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Squirrel Brain: contact us and read answers to common questions.",
  alternates: { canonical: "/support" },
};

export default function Page() {
  return <MarkdownPage html={renderContentMarkdown("legal/support.md")} />;
}
