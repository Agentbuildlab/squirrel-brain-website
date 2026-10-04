import type { Metadata } from "next";
import MarkdownPage from "@/components/MarkdownPage";
import { renderContentMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Squirrel Brain collects, uses and protects your information.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return <MarkdownPage html={renderContentMarkdown("legal/privacy.md")} />;
}
