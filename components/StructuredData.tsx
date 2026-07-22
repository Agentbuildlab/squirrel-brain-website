// Site-wide JSON-LD structured data. This is the single biggest lever for both
// Google rich results AND for AI answer-engines (ChatGPT/Claude/Perplexity/AI
// Overviews) to understand and cite exactly what Squirrel Brain is. Rendered in
// the root layout so it appears on every page.

const ORIGIN = "https://squirrelbrainapp.com";

const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${ORIGIN}/#org`,
      name: "Squirrel Brain",
      legalName: "Acorn Labs LLC",
      url: ORIGIN,
      logo: `${ORIGIN}/assets/squirrel_logo.png`,
      description:
        "Maker of Squirrel Brain, an agent-friendly iOS memory and reminder app with a built-in Model Context Protocol (MCP) server.",
    },
    {
      "@type": "WebSite",
      "@id": `${ORIGIN}/#website`,
      url: ORIGIN,
      name: "Squirrel Brain",
      description:
        "Squirrel Brain turns photos, voice notes, screenshots, and forwarded texts into reminders, alarms, and calendar events — and, optionally, lets MCP-capable AI agents drive it for you.",
      publisher: { "@id": `${ORIGIN}/#org` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${ORIGIN}/#app`,
      name: "Squirrel Brain",
      applicationCategory: "ProductivityApplication",
      operatingSystem: "iOS",
      url: ORIGIN,
      image: `${ORIGIN}/og-image.png`,
      description:
        "Squirrel Brain is an iOS app that turns photos, voice notes, screenshots, and forwarded texts into reminders, alarms, and calendar events, then makes sure you follow through — including a real phone call that rings when your ringer's on, vibrates on silent, and reaches you on a locked screen. It also has an optional built-in MCP server, so MCP-capable AI agents (Claude Code, Cursor, or your own) can set alarms, read your day, file notes to boards, append to a forever note, and call your phone on your behalf. Built for work and family first — the AI hookup is there if you want it.",
      featureList: [
        "Turn a photo, voice note, screenshot, or forwarded text into a reminder, alarm, or calendar event",
        "Optional built-in MCP (Model Context Protocol) server — connect Claude Code, Cursor, OpenClaw, or your own agent",
        "A connected agent can set alarms, read your day, file items, append to a forever note, and call your phone",
        "Real phone-call reminders — they ring when your ringer's on, vibrate on silent, and reach you on a locked screen",
        "Pix boards: photos auto-sorted into boards (receipts, meds, schedules, parking)",
        "GPS-stamped photo proof for field work",
        "Reads every calendar already on your iPhone; import Outlook events by screenshot",
        "Daily morning-brief email and a 4 PM check-in nudge",
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Standard",
          price: "9.99",
          priceCurrency: "USD",
          availability: "https://schema.org/PreOrder",
          priceValidUntil: "2027-12-31",
          description:
            "Everything in Squirrel Brain — unlimited photos, notes, reminders, voice capture, phone-call alarms, link stash, and the Burrow — plus 10 hours of meeting recording each month. 7-day free trial, billed monthly.",
        },
        {
          "@type": "Offer",
          name: "Plus",
          price: "14.99",
          priceCurrency: "USD",
          availability: "https://schema.org/PreOrder",
          priceValidUntil: "2027-12-31",
          description:
            "Everything in Standard, with 20 hours of meeting recording each month. 7-day free trial, billed monthly.",
        },
      ],
      publisher: { "@id": `${ORIGIN}/#org` },
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
