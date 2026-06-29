import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("photo-to-reminder-app");

export default function Page() {
  return <LandingPage slug="photo-to-reminder-app" />;
}
