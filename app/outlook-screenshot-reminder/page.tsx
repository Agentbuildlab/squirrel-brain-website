import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("outlook-screenshot-reminder");

export default function Page() {
  return <LandingPage slug="outlook-screenshot-reminder" />;
}
