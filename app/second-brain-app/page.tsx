import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("second-brain-app");

export default function Page() {
  return <LandingPage slug="second-brain-app" />;
}
