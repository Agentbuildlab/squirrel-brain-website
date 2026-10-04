import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("live-call-assistant-reminders");

export default function Page() {
  return <LandingPage slug="live-call-assistant-reminders" />;
}
