import type { Metadata } from "next";
import MarkdownPage from "@/components/MarkdownPage";
import { renderContentMarkdown } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use Squirrel Brain.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return <MarkdownPage html={renderContentMarkdown("legal/terms.md")} />;
}
