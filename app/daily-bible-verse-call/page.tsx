import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("daily-bible-verse-call");

export default function Page() {
  return <LandingPage slug="daily-bible-verse-call" />;
}
