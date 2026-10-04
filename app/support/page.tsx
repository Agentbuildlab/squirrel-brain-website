import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { renderLegalMarkdown } from "@/lib/legal-doc";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Squirrel Brain: contact us, FAQs on deleting your account, reminders and calls, permissions and your data.",
  alternates: { canonical: "/support" },
};

export default function SupportPage() {
  return <LegalDoc html={renderLegalMarkdown("support.md")} />;
}
