"use client";

// PostHog analytics for the marketing site.
//
// What this gives us with zero per-component wiring:
//  • Pageviews on every App Router navigation (captured manually below, because
//    client-side route changes don't trigger a full page load).
//  • Autocapture of clicks (PostHog default) — so every CTA click, including the
//    "Join the launch list" buttons, is tracked without extra code.
//  • The waitlist conversion itself is captured explicitly in Footer.tsx.
//
// person_profiles: "identified_only" keeps anonymous browsing cheap and private —
// a PostHog person profile is only created once someone submits their email
// (Footer calls posthog.identify on a successful signup).

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";
import { POSTHOG_KEY, POSTHOG_HOST } from "@/lib/config";

let inited = false;

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Initialise once on first mount.
  useEffect(() => {
    if (inited || typeof window === "undefined") return;
    posthog.init(POSTHOG_KEY, {
      api_host: POSTHOG_HOST,
      person_profiles: "identified_only",
      capture_pageview: false, // we capture pageviews manually for the App Router
      capture_pageleave: true,
      // Click maps / scroll maps on the marketing pages.
      capture_heatmaps: true,
      // Session replay — only records once you flip "Record user sessions" ON in
      // the PostHog project settings. Inputs are masked so the email someone
      // types into the launch-list form is never captured.
      session_recording: { maskAllInputs: true },
    });
    inited = true;
  }, []);

  // Capture a pageview on every route change.
  useEffect(() => {
    if (!inited) return;
    let url = window.location.origin + pathname;
    const qs = searchParams?.toString();
    if (qs) url += `?${qs}`;
    posthog.capture("$pageview", { $current_url: url });
  }, [pathname, searchParams]);

  return null;
}
