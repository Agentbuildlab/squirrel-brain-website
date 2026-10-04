import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { renderLegalMarkdown } from "@/lib/legal-doc";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Squirrel Brain collects, uses, shares and protects your information.",
  alternates: { canonical: "/legal/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <LegalDoc html={renderLegalMarkdown("privacy-policy-final.md")} />;
}
