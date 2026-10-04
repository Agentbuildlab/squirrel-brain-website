import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { renderLegalMarkdown } from "@/lib/legal-doc";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use Squirrel Brain.",
  alternates: { canonical: "/legal/terms-of-use" },
};

export default function TermsOfUsePage() {
  return <LegalDoc html={renderLegalMarkdown("terms-of-use-final.md")} />;
}
