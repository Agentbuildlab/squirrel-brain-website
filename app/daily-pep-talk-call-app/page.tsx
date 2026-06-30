import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("daily-pep-talk-call-app");

export default function Page() {
  return <LandingPage slug="daily-pep-talk-call-app" />;
}
