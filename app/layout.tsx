import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/config";
import LenisProvider from "@/components/LenisProvider";
import StructuredData from "@/components/StructuredData";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://squirrelbrainapp.com"),
  title: {
    default: `${SITE_NAME} — Say it. Snap it. It's handled.`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "AI agent reminders",
    "set alarm from ChatGPT",
    "MCP server for reminders",
    "AI that can call my phone",
    "second brain app that takes action",
    "photo to calendar app",
    "voice note to reminder",
    "agent-friendly app",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/assets/squirrel_logo.png",
    apple: "/assets/squirrel_logo.png",
  },
  // Set NEXT_PUBLIC_GSC_VERIFICATION in Vercel to the token from Google Search
  // Console's "HTML tag" verification method; omitted automatically if unset.
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  openGraph: {
    title: `${SITE_NAME} — Say it. Snap it. It's handled.`,
    description: SITE_DESCRIPTION,
    url: "https://squirrelbrainapp.com",
    siteName: SITE_NAME,
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "Squirrel Brain — for work, family, and AI agents" },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Say it. Snap it. It's handled.`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">
        <StructuredData />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
