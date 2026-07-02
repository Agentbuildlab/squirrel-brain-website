import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preserve legacy static pages that live in /public
  async rewrites() {
    return [
      {
        source: "/mcp",
        destination: "/mcp/index.html",
      },
      {
        source: "/signup",
        destination: "/signup.html",
      },
      {
        source: "/dashboard",
        destination: "/dashboard.html",
      },
      // Footer legal links (were 404 — the docs lived outside /public until 2026-07-02)
      {
        source: "/legal/privacy-policy",
        destination: "/legal/privacy-policy.html",
      },
      {
        source: "/legal/terms-of-use",
        destination: "/legal/terms-of-use.html",
      },
    ];
  },
};

export default nextConfig;
