import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("ai-agent-reminder-app");

export default function Page() {
  return <LandingPage slug="ai-agent-reminder-app" />;
}
