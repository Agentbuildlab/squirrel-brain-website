import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("voice-note-reminder-app");

export default function Page() {
  return <LandingPage slug="voice-note-reminder-app" />;
}
