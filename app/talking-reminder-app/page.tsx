import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("talking-reminder-app");

export default function Page() {
  return <LandingPage slug="talking-reminder-app" />;
}
