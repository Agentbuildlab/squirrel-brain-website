import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/config";

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
  openGraph: {
    title: `${SITE_NAME} — Say it. Snap it. It's handled.`,
    description: SITE_DESCRIPTION,
    images: ["/assets/squirrel_treehouse.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Say it. Snap it. It's handled.`,
    description: SITE_DESCRIPTION,
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
        {children}
      </body>
    </html>
  );
}
