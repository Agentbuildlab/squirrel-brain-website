import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("scribbly-notes");

export default function Page() {
  return <LandingPage slug="scribbly-notes" />;
}
