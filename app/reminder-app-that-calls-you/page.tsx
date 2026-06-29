import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("reminder-app-that-calls-you");

export default function Page() {
  return <LandingPage slug="reminder-app-that-calls-you" />;
}
