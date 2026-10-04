import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("adhd-reminder-app");

export default function Page() {
  return <LandingPage slug="adhd-reminder-app" />;
}
