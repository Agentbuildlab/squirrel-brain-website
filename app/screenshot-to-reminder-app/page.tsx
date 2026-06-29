import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("screenshot-to-reminder-app");

export default function Page() {
  return <LandingPage slug="screenshot-to-reminder-app" />;
}
