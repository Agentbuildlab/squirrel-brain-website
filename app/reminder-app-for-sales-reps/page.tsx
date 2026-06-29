import type { Metadata } from "next";
import LandingPage, { landingMetadata } from "@/components/LandingPage";

export const metadata: Metadata = landingMetadata("reminder-app-for-sales-reps");

export default function Page() {
  return <LandingPage slug="reminder-app-for-sales-reps" />;
}
