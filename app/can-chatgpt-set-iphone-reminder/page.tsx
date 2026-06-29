import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("can-chatgpt-set-iphone-reminder");

export default function Page() {
  return <LandingPage slug="can-chatgpt-set-iphone-reminder" />;
}
