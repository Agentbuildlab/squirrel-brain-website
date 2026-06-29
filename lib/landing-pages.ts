// SEO landing-page registry.
//
// One data module powers eight clean, server-rendered, fully-crawlable landing
// pages (see components/LandingPage.tsx). Each entry targets a specific
// long-tail search and links back to the homepage + sibling pages.
//
// TRUTH RULES baked in here (do not loosen without Adam's OK):
//  • No reviews, ratings, testimonials, or press claims.
//  • Call/alarm copy mirrors the site's existing, established phrasing:
//    "phone-call-style reminders", "loud alarms", "rings your phone".
//  • iOS only. Pre-launch → every CTA points at the launch list.

export type LandingSection = {
  /** Optional small uppercase eyebrow above the H2 */
  eyebrow?: string;
  h2: string;
  body: string;
  /** Optional supporting bullet points */
  bullets?: string[];
};

export type LandingFaq = { q: string; a: string };

export type LandingPageData = {
  slug: string;
  /** <title> — keyword-forward, brand at the end */
  title: string;
  /** meta description */
  description: string;
  /** Small badge text in the hero */
  eyebrow: string;
  /** H1 — exactly one per page */
  h1: string;
  subhead: string;
  /** Real in-app screenshot (under /public/assets/screens) + accurate alt */
  heroShot: { src: string; alt: string };
  sections: LandingSection[];
  faqs: LandingFaq[];
  /** slugs of related landing pages to cross-link */
  related: string[];
};

// Descriptive anchor text for internal links (no "click here").
export const LANDING_ANCHORS: Record<string, string> = {
  "ai-reminder-app": "AI reminder app",
  "screenshot-to-reminder-app": "turn screenshots into reminders",
  "voice-note-reminder-app": "turn voice notes into reminders",
  "photo-to-reminder-app": "turn photos into reminders",
  "loud-reminder-app": "loud reminder app",
  "second-brain-app": "second brain app",
  "reminder-app-for-sales-reps": "reminder app for sales reps",
  "outlook-screenshot-reminder": "Outlook screenshot reminders",
  "can-chatgpt-set-iphone-reminder": "can ChatGPT set an iPhone reminder?",
  "reminder-app-that-calls-you": "a reminder app that calls you",
  "ai-agent-reminder-app": "let an AI agent set reminders",
  "reminder-app-for-field-service": "reminder app for field service",
  "reminder-app-for-parents": "reminder app for busy parents",
};

export const LANDING_PAGES: LandingPageData[] = [
  {
    slug: "ai-reminder-app",
    title: "AI Reminder App for Voice Notes, Photos & Screenshots | Squirrel Brain",
    description:
      "Squirrel Brain is an AI reminder app that turns voice notes, photos, screenshots, texts, and emails into reminders, alarms, notes, and calendar events — then makes sure you follow through.",
    eyebrow: "AI reminder app",
    h1: "The AI reminder app for everything you forget",
    subhead:
      "Speak it, snap it, or screenshot it — Squirrel Brain turns scattered information into reminders, alarms, notes, and calendar events, then makes sure you follow through.",
    heroShot: {
      src: "/assets/screens/home-v4.webp",
      alt: "Squirrel Brain home screen showing the day's captured events and a live countdown",
    },
    sections: [
      {
        eyebrow: "Capture anything",
        h2: "Capture it any way you think of it",
        body: "Most reminder apps make you stop, type, and set a time. Squirrel Brain meets you where the thought happens. Say it out loud, snap a photo, screenshot a message, or forward a text or email — the AI reads it, pulls out what matters, and turns it into something that actually nudges you.",
        bullets: [
          "Voice notes become tasks, alarms, and calendar events",
          "Photos and screenshots become searchable, actionable reminders",
          "Forwarded texts and emails become to-dos that follow up with you",
        ],
      },
      {
        eyebrow: "It acts, it doesn't just store",
        h2: "A reminder app that does something with what you capture",
        body: "A note app just holds your words until you go looking for them. Squirrel Brain acts: it sets the alarm, adds the calendar event, files the photo onto the right board, and calls you when something genuinely can't slip. The point isn't to store your life — it's to hand the right thing back at the right moment.",
      },
      {
        eyebrow: "Built for busy people",
        h2: "For work, family, and the things that fall through the cracks",
        body: "Squirrel Brain is built for people whose work, family, texts, emails, and calendar live in five different places. Sales reps capturing follow-ups between stops. Parents juggling soccer schedules and permission slips. Anyone whose brain has too many tabs open. It pulls the scattered pieces into one place that reminds you out loud.",
      },
    ],
    faqs: [
      {
        q: "What is Squirrel Brain?",
        a: "Squirrel Brain is an iOS app that turns voice notes, photos, screenshots, texts, and emails into reminders, alarms, notes, and calendar events — then makes sure you follow through, including phone-call-style reminders that ring your phone. It's built for busy people whose to-dos are scattered across work, family, and their inbox.",
      },
      {
        q: "How is Squirrel Brain different from a normal reminder app?",
        a: "Most reminder apps only store what you type. Squirrel Brain captures the way you actually think — voice, photo, screenshot, or forwarded message — and then acts on it: it sets alarms, adds calendar events, organizes photos, and calls you when something can't slip.",
      },
      {
        q: "Does it use AI?",
        a: "Yes. Squirrel Brain uses AI to read your voice notes, photos, screenshots, and messages, understand what matters, and turn it into the right reminder, alarm, note, or calendar event. It can also connect to AI assistants like Claude and ChatGPT through a built-in MCP server.",
      },
      {
        q: "What device does it run on?",
        a: "iPhone, for now. Squirrel Brain is pre-launch — join the launch list and you'll be first into the beta.",
      },
    ],
    related: ["can-chatgpt-set-iphone-reminder", "reminder-app-that-calls-you", "screenshot-to-reminder-app", "voice-note-reminder-app", "photo-to-reminder-app", "second-brain-app"],
  },

  {
    slug: "screenshot-to-reminder-app",
    title: "Screenshot to Reminder App — Turn Screenshots Into Reminders | Squirrel Brain",
    description:
      "Screenshot a text, email, appointment, or to-do and Squirrel Brain turns it into a reminder, alarm, or calendar event — so the things you screenshot don't vanish in your camera roll.",
    eyebrow: "Screenshot → reminder",
    h1: "Turn screenshots into reminders",
    subhead:
      "Screenshot a text, an email, an appointment, or a to-do — Squirrel Brain reads it and turns it into a reminder, alarm, or calendar event so it never gets buried in your camera roll.",
    heroShot: {
      src: "/assets/screens/countdown-budget.webp",
      alt: "Squirrel Brain home screen counting down to an event captured from a screenshot",
    },
    sections: [
      {
        eyebrow: "The screenshot graveyard",
        h2: "You screenshot it so you won't forget — then you forget",
        body: "We all do it. A confirmation text, a flight time, an appointment, a thing a coworker asked for — you screenshot it instead of writing it down. Then it sinks into 4,000 other photos and you never see it again. Squirrel Brain fixes the part where the screenshot was supposed to remind you.",
      },
      {
        eyebrow: "How it works",
        h2: "Screenshot it, and it becomes something that nudges you",
        body: "Send a screenshot to Squirrel Brain and the AI reads the text in the image — the date, the time, the task, the name. It turns that into a reminder, a calendar event, or a loud alarm, and it can start a live countdown on your home screen so the thing stays in front of you.",
        bullets: [
          "Reads dates and times out of the image automatically",
          "Becomes a reminder, calendar event, or alarm — not just a saved picture",
          "You review and confirm before anything is set",
        ],
      },
      {
        eyebrow: "Locked-down inboxes",
        h2: "Perfect for messages you can't act on directly",
        body: "Company Outlook you can't sync? A text from a number you'll lose? A confirmation in an app with no reminder feature? Screenshot it. Squirrel Brain becomes the layer that turns any message — from anywhere — into a reminder that actually reaches you.",
      },
    ],
    faqs: [
      {
        q: "Can Squirrel Brain turn screenshots into reminders?",
        a: "Yes. Send Squirrel Brain a screenshot — of a text, an email, an appointment, or a to-do — and its AI reads the text in the image and turns it into a reminder, alarm, or calendar event. You review and confirm before anything is scheduled.",
      },
      {
        q: "Does it read the date and time from the screenshot?",
        a: "Yes. Squirrel Brain pulls dates and times out of the image where they're present, so a screenshotted appointment can become a calendar event or alarm without you retyping it. If something is ambiguous, it asks before setting it.",
      },
      {
        q: "What kinds of screenshots work best?",
        a: "Texts, emails, calendar invites, confirmations, receipts, and to-do lists all work well — anything with readable text. It's especially handy for messages in locked-down apps or company inboxes you can't add reminders to directly.",
      },
      {
        q: "Does it work on iPhone?",
        a: "Yes — Squirrel Brain is an iPhone app. It's pre-launch, so join the launch list to be first into the beta.",
      },
    ],
    related: ["outlook-screenshot-reminder", "photo-to-reminder-app", "ai-reminder-app", "loud-reminder-app"],
  },

  {
    slug: "voice-note-reminder-app",
    title: "Voice Note Reminder App — Speak a Thought, Get a Reminder | Squirrel Brain",
    description:
      "Squirrel Brain turns voice notes into tasks, alarms, reminders, and calendar events. Speak a thought on the move and your squirrel hands it back exactly when it matters.",
    eyebrow: "Voice note → reminder",
    h1: "Turn voice notes into tasks, alarms, and calendar events",
    subhead:
      "Speak a thought — walking, driving, between meetings — and Squirrel Brain turns it into a task, note, alarm, or calendar event, then hands it back exactly when it matters.",
    heroShot: {
      src: "/assets/screens/burrow.webp",
      alt: "The Burrow in Squirrel Brain answering a question from everything the user has spoken and captured",
    },
    sections: [
      {
        eyebrow: "Think out loud",
        h2: "The fastest way to capture is to just say it",
        body: "Typing a reminder means stopping what you're doing, opening an app, and setting a time. Talking doesn't. Tap once and talk — Squirrel Brain listens, pulls out the follow-ups, the dates, and the promises, and turns the important parts into things that nudge you later.",
        bullets: [
          "One tap to start; say it in plain language",
          "Extracts tasks, dates, and follow-ups from what you said",
          "Becomes a reminder, alarm, calendar event, or saved note",
        ],
      },
      {
        eyebrow: "Ask it back",
        h2: "Everything you said, answerable later",
        body: "Your voice notes don't disappear into a list you never reopen. Ask your squirrel in plain language — \"what did I promise the Johnson account?\" — and it answers from everything you've captured. It's a memory you can talk to, both directions.",
      },
      {
        eyebrow: "On the move",
        h2: "Made for hands-busy moments",
        body: "Walking out of a meeting, driving between stops, holding a kid in one arm — those are exactly the moments good ideas and real to-dos slip away. Voice capture is built for them, so the thought is saved before it's gone.",
      },
    ],
    faqs: [
      {
        q: "Can I use voice notes to create reminders?",
        a: "Yes. Tap once and speak — Squirrel Brain listens, understands what you said, and turns it into a task, reminder, alarm, or calendar event. You can review what it captured before it's set.",
      },
      {
        q: "Can I ask about things I said earlier?",
        a: "Yes. Squirrel Brain's Burrow lets you ask in plain language — like \"what did I say I'd follow up on?\" — and it answers from everything you've captured by voice, photo, or screenshot.",
      },
      {
        q: "Do I have to set the time myself?",
        a: "If you say a time, Squirrel Brain uses it. If you don't, it won't guess silently — it prompts you so a reminder never lands at the wrong moment.",
      },
      {
        q: "Does it work hands-free on iPhone?",
        a: "Squirrel Brain is an iPhone app built around fast, one-tap voice capture for hands-busy moments. It's pre-launch — join the launch list to get early access.",
      },
    ],
    related: ["ai-reminder-app", "second-brain-app", "photo-to-reminder-app", "loud-reminder-app"],
  },

  {
    slug: "photo-to-reminder-app",
    title: "Photo to Reminder App — Turn Photos Into Searchable Notes | Squirrel Brain",
    description:
      "Take a photo of something important and Squirrel Brain makes it searchable and actionable — receipts, whiteboards, parking spots, serial numbers, and schedules become reminders and notes you can find later.",
    eyebrow: "Photo → reminder",
    h1: "Turn photos into searchable notes and reminders",
    subhead:
      "Take a picture of something that matters — a receipt, a whiteboard, a parking spot, a schedule — and Squirrel Brain reads it, files it, and makes it searchable and actionable.",
    heroShot: {
      src: "/assets/screens/pix-wall-v2.webp",
      alt: "Pix board wall in Squirrel Brain showing photos auto-sorted into boards like receipts, parking, and schedules",
    },
    sections: [
      {
        eyebrow: "Photos that do work",
        h2: "Your camera roll is full of things you meant to act on",
        body: "A photo of a receipt, a whiteboard after a meeting, the row your car is parked in, a kid's soccer schedule on the fridge. You took the picture for a reason — then it joined thousands of others. Squirrel Brain reads what's in the photo and turns it into a note, a reminder, or a calendar event you can actually find again.",
        bullets: [
          "Reads text, dates, and details out of the photo",
          "Auto-sorts photos onto boards — receipts, meds, schedules, parking",
          "Search by what's in the picture, in plain language",
        ],
      },
      {
        eyebrow: "Boards, not chaos",
        h2: "Auto-sorted into boards you can search",
        body: "Squirrel Brain groups your photos into boards by what they are — receipts together, schedules together, parking together. Months later you don't scroll; you ask. \"Where did I park at the airport?\" \"What was that serial number?\" It finds it.",
      },
      {
        eyebrow: "Proof when it counts",
        h2: "Timestamped, GPS-stamped proof for field work",
        body: "Snap what you delivered or installed and Squirrel Brain stores a timestamped, GPS-stamped record. When someone says \"we never got it,\" the proof is one search away — which makes it as useful on a job site as it is on the fridge.",
      },
    ],
    faqs: [
      {
        q: "Can Squirrel Brain turn photos into reminders?",
        a: "Yes. Take a photo of something important — a receipt, a whiteboard, a schedule, a serial number — and Squirrel Brain reads it and turns it into a searchable note, reminder, or calendar event. You review what it captured before anything is set.",
      },
      {
        q: "Can I search my photos by what's in them?",
        a: "Yes. Squirrel Brain reads the contents of your photos and sorts them onto boards, so you can search in plain language — like \"where did I park\" or \"the wine we liked\" — instead of scrolling your camera roll.",
      },
      {
        q: "Does it add GPS and a timestamp?",
        a: "Yes. Photos can be stored with a timestamp and GPS location, which is useful as proof of delivery, service, or install for field work.",
      },
      {
        q: "Is it just for work?",
        a: "No — it's just as useful for everyday life: receipts, fridge schedules, parking spots, handwritten notes, and the things you snap so you won't forget them.",
      },
    ],
    related: ["screenshot-to-reminder-app", "reminder-app-for-sales-reps", "second-brain-app", "ai-reminder-app"],
  },

  {
    slug: "loud-reminder-app",
    title: "Loud Reminder App — Hard-to-Miss Reminders & Alarms | Squirrel Brain",
    description:
      "For people who miss quiet notifications. Squirrel Brain sends loud alarms and phone-call-style reminders that ring your phone — so the one thing you can't miss actually reaches you.",
    eyebrow: "Loud reminders",
    h1: "A loud reminder app for people who miss quiet notifications",
    subhead:
      "A normal notification is one gray banner in a stack of fifty. For the things you truly can't miss, Squirrel Brain gets loud — with alarms and phone-call-style reminders that ring your phone.",
    heroShot: {
      src: "/assets/screens/calendar-v2.webp",
      alt: "Squirrel Brain calendar showing an upcoming reminder set with a loud alarm",
    },
    sections: [
      {
        eyebrow: "Quiet notifications fail",
        h2: "A banner you don't see is not a reminder",
        body: "Push notifications pile up, get swiped away, and vanish while your phone is face-down. If you've ever missed something important because the alert was silent or buried, the problem isn't you — it's that the reminder was too quiet to do its job.",
      },
      {
        eyebrow: "Get loud on purpose",
        h2: "Loud alarms and phone-call-style reminders",
        body: "For the one thing that genuinely can't slip, Squirrel Brain escalates. Instead of a banner, it can fire a loud alarm or ring your phone with a phone-call-style reminder that speaks to you — so it's hard to miss, even when your screen is locked.",
        bullets: [
          "Loud alarms for time-critical reminders",
          "Phone-call-style reminders that ring your phone",
          "You choose which reminders get the loud treatment",
        ],
      },
      {
        eyebrow: "You decide what's loud",
        h2: "Loud only when it matters",
        body: "Not everything should shout. You pick which reminders escalate to a loud alarm or a call, and which stay gentle. The big ones get loud; the small ones stay quiet — so the volume always means something.",
      },
    ],
    faqs: [
      {
        q: "Can Squirrel Brain help if I miss normal notifications?",
        a: "Yes — that's exactly what it's built for. For reminders you truly can't miss, Squirrel Brain can fire a loud alarm or ring your phone with a phone-call-style reminder, instead of a quiet banner that's easy to swipe away.",
      },
      {
        q: "What is a phone-call-style reminder?",
        a: "Instead of a silent push notification, Squirrel Brain can reach you with a reminder that rings your phone like a call and speaks to you — designed to be hard to miss even when your screen is locked.",
      },
      {
        q: "Will every reminder be loud?",
        a: "No. You choose which reminders escalate to a loud alarm or a call and which stay gentle, so the loud ones always mean something.",
      },
      {
        q: "Does it work on iPhone?",
        a: "Yes, Squirrel Brain is an iPhone app. It's pre-launch — join the launch list to be first into the beta.",
      },
    ],
    related: ["reminder-app-that-calls-you", "ai-reminder-app", "voice-note-reminder-app", "outlook-screenshot-reminder", "reminder-app-for-sales-reps"],
  },

  {
    slug: "second-brain-app",
    title: "Second Brain App That Takes Action | Squirrel Brain",
    description:
      "A practical second brain app that doesn't just store notes — it acts. Squirrel Brain captures voice, photos, and screenshots, then sets reminders, alarms, and calendar events so you actually follow through.",
    eyebrow: "Second brain",
    h1: "A second brain that doesn't just store — it acts",
    subhead:
      "Most second-brain apps are a beautiful place to put things and never look at them again. Squirrel Brain captures the way you think and then does something with it.",
    heroShot: {
      src: "/assets/screens/burrow.webp",
      alt: "The Burrow in Squirrel Brain answering a plain-language question from everything the user has captured",
    },
    sections: [
      {
        eyebrow: "Storage isn't the problem",
        h2: "You don't need another place to put things",
        body: "Notebooks, notes apps, and bookmark piles are great at storing and terrible at reminding. The hard part was never writing it down — it's getting the right thing back at the right time. A second brain that just stores is a filing cabinet you forget to open.",
      },
      {
        eyebrow: "Capture → act",
        h2: "It turns what you capture into action",
        body: "Speak it, snap it, or screenshot it, and Squirrel Brain sets the alarm, adds the calendar event, files the photo, and calls you when something can't slip. The information doesn't just sit there — it moves things forward.",
        bullets: [
          "Voice notes, photos, screenshots, and forwarded messages all become action",
          "Ask your captured memory questions in plain language",
          "Reminders, alarms, and calendar events, not just stored text",
        ],
      },
      {
        eyebrow: "Talk to it both ways",
        h2: "A memory you can talk to — and that talks back",
        body: "Ask \"what did I say I'd do for Mom this week?\" and your squirrel answers from everything you've captured. And through a built-in MCP server, AI assistants like Claude and ChatGPT can use your second brain too — reading your day and setting things up on your behalf.",
      },
    ],
    faqs: [
      {
        q: "What makes Squirrel Brain a second brain?",
        a: "It captures the things you'd otherwise forget — by voice, photo, screenshot, or forwarded message — keeps them searchable, and lets you ask questions in plain language. The difference is that it also acts on them, setting reminders, alarms, and calendar events.",
      },
      {
        q: "How is it different from a notes app?",
        a: "A notes app stores text until you go find it. Squirrel Brain acts: it sets alarms, adds calendar events, organizes photos, and reaches out to you when something matters — so things actually get done, not just recorded.",
      },
      {
        q: "Can my AI assistant use it?",
        a: "Yes. Squirrel Brain has a built-in MCP server, so AI assistants like Claude and ChatGPT can read your day and set reminders, notes, and alarms on your behalf. Setting up an agent is optional — the app works great on its own.",
      },
      {
        q: "What device does it run on?",
        a: "iPhone, for now. Squirrel Brain is pre-launch — join the launch list to get early access.",
      },
    ],
    related: ["ai-agent-reminder-app", "ai-reminder-app", "voice-note-reminder-app", "photo-to-reminder-app", "loud-reminder-app"],
  },

  {
    slug: "reminder-app-for-sales-reps",
    title: "Reminder App for Sales Reps & Field Service | Squirrel Brain",
    description:
      "Squirrel Brain helps sales reps and field techs capture customer follow-ups, equipment photos, serial numbers, meeting notes, and deadlines — and turns them into reminders that ring your phone before they slip.",
    eyebrow: "For reps & field service",
    h1: "The reminder app for sales reps and people on the move",
    subhead:
      "Capture customer follow-ups, equipment photos, serial numbers, meeting notes, and deadlines the moment they happen — and let your squirrel make sure each one gets handled before end of day.",
    heroShot: {
      src: "/assets/screens/pix-wall-v2.webp",
      alt: "Pix board wall in Squirrel Brain showing GPS-stamped job photos sorted into boards",
    },
    sections: [
      {
        eyebrow: "Between stops",
        h2: "The follow-ups happen in the car, not at a desk",
        body: "The promise you made on a call, the part number on a unit, the thing the customer asked for — those land while you're driving to the next stop, not while you're sitting at a CRM. Talk it out and Squirrel Brain captures the follow-up, the date, and the detail before it's gone.",
        bullets: [
          "Voice capture for follow-ups between stops",
          "Photo capture for equipment, serial numbers, and job sites",
          "Deadlines become reminders that actually reach you",
        ],
      },
      {
        eyebrow: "Proof of work",
        h2: "GPS-stamped photo proof for every job",
        body: "Snap what you delivered or installed and Squirrel Brain stores a timestamped, GPS-stamped record on the right board. When a customer says \"we never got it,\" the proof is one search away — no more digging through your camera roll on the phone in the parking lot.",
      },
      {
        eyebrow: "Your inbox, handled",
        h2: "Outlook events and a morning brief that keeps you ahead",
        body: "Screenshot a locked-down Outlook event and it becomes a reminder with a live countdown. Every workday opens with a short email of your meetings and open follow-ups, and a 4 PM nudge catches anything still hanging before the drive home. For the follow-up that truly can't slip, your squirrel rings your phone.",
      },
    ],
    faqs: [
      {
        q: "Is Squirrel Brain useful for work follow-ups?",
        a: "Yes — it's built for it. Sales reps and field techs use it to capture follow-ups, equipment photos, serial numbers, meeting notes, and deadlines on the move, then get reminded before anything slips. For the ones that truly matter, it can ring your phone.",
      },
      {
        q: "Can it store proof of delivery or service?",
        a: "Yes. Photos can be saved with a timestamp and GPS location and sorted onto boards, so proof of delivery, service, or install is searchable in seconds.",
      },
      {
        q: "Does it work with Outlook?",
        a: "If your company locks down your Outlook calendar, you can screenshot an event and Squirrel Brain turns it into a reminder with a live countdown — so you stop missing events because the reminder fired silently.",
      },
      {
        q: "What does it cost?",
        a: "Two simple plans billed monthly with a 7-day free trial. See the pricing page for current details. Squirrel Brain is pre-launch — join the launch list to get early access.",
      },
    ],
    related: ["reminder-app-for-field-service", "outlook-screenshot-reminder", "photo-to-reminder-app", "voice-note-reminder-app", "loud-reminder-app"],
  },

  {
    slug: "outlook-screenshot-reminder",
    title: "Outlook Screenshot Reminder App — Never Miss an Outlook Event | Squirrel Brain",
    description:
      "If your company Outlook notifications are too quiet or locked down, screenshot the event and Squirrel Brain turns it into a reminder with a live countdown and a hard-to-miss alert.",
    eyebrow: "Outlook → reminder",
    h1: "Never miss an Outlook event again",
    subhead:
      "When company policy locks down your calendar app and the Outlook reminder fires while your phone is face-down, you miss it. Screenshot the event instead — Squirrel Brain turns it into a reminder you'll actually catch.",
    heroShot: {
      src: "/assets/screens/countdown-budget.webp",
      alt: "Squirrel Brain home screen counting down to a Budget Review meeting captured from an Outlook screenshot",
    },
    sections: [
      {
        eyebrow: "The locked-down calendar problem",
        h2: "Your Outlook reminder fired — and you never saw it",
        body: "Plenty of companies don't let you sync Outlook to your personal phone, or the reminder is just one more quiet banner you miss. So you find out about the 2 PM meeting at 2:05. The calendar isn't the problem — the reminder being too quiet and too locked-down is.",
      },
      {
        eyebrow: "Screenshot it",
        h2: "Screenshot the event, and your squirrel takes it from there",
        body: "Take a screenshot of the Outlook event — the title, the time, the room. Squirrel Brain reads it, creates the reminder, and starts a live countdown on your home screen so the meeting stays in front of you. No syncing, no IT ticket, no policy fight.",
        bullets: [
          "Reads the title, date, time, and location from the screenshot",
          "Starts a live countdown to your next thing on the home screen",
          "Can ring your phone with a phone-call-style reminder before it starts",
        ],
      },
      {
        eyebrow: "Hard to miss",
        h2: "A reminder loud enough to actually reach you",
        body: "For the meeting you can't be late to, Squirrel Brain can escalate from a banner to a loud alarm or a phone-call-style reminder that rings your phone. The quiet Outlook ping becomes something you won't sleep through or swipe away.",
      },
    ],
    faqs: [
      {
        q: "How do I turn an Outlook event into a reminder?",
        a: "Take a screenshot of the Outlook event and send it to Squirrel Brain. It reads the title, date, time, and location from the image and creates a reminder with a live countdown — no calendar syncing required.",
      },
      {
        q: "Why not just sync my Outlook calendar?",
        a: "Many companies don't allow it, or the built-in reminder is too quiet to catch. Screenshotting the event sidesteps the lockdown and lets Squirrel Brain give you a hard-to-miss reminder instead.",
      },
      {
        q: "Can it make the reminder loud?",
        a: "Yes. For events you can't miss, Squirrel Brain can escalate to a loud alarm or a phone-call-style reminder that rings your phone, rather than a quiet banner.",
      },
      {
        q: "Does this work on iPhone?",
        a: "Yes — Squirrel Brain is an iPhone app. It's pre-launch, so join the launch list to be first into the beta.",
      },
    ],
    related: ["screenshot-to-reminder-app", "loud-reminder-app", "reminder-app-for-sales-reps", "ai-reminder-app"],
  },

  {
    slug: "can-chatgpt-set-iphone-reminder",
    title: "Can ChatGPT Set a Reminder on My iPhone? | Squirrel Brain",
    description:
      "ChatGPT and Claude can't set a real alarm or reminder on your iPhone on their own — their tasks only fire inside their app. Squirrel Brain's built-in MCP server bridges the gap so an AI agent can set a real reminder, alarm, or call.",
    eyebrow: "ChatGPT + your iPhone",
    h1: "Can ChatGPT set a reminder on your iPhone?",
    subhead:
      "Short answer: not on its own. ChatGPT and Claude can only nudge you inside their own app — they can't fire a real iPhone alarm or reminder. Squirrel Brain is the bridge that lets them.",
    heroShot: {
      src: "/assets/screens/burrow.webp",
      alt: "The Burrow in Squirrel Brain, where an AI agent can read your day and set reminders on your behalf",
    },
    sections: [
      {
        eyebrow: "The honest answer",
        h2: "Why ChatGPT can't ring your phone by itself",
        body: "ChatGPT's and Claude's built-in \"tasks\" or \"reminders\" only run inside the assistant's own app — they can't reach into iOS to set a real alarm, add a calendar event, or ring your phone. Apple doesn't let a chat app schedule system alarms for you. So if you've asked ChatGPT to \"remind me at 3 PM\" and nothing happened on your lock screen, that's why.",
      },
      {
        eyebrow: "The bridge",
        h2: "Squirrel Brain gives an AI agent real actions on your phone",
        body: "Squirrel Brain has a built-in MCP (Model Context Protocol) server. You generate a personal key in the app, connect ChatGPT, Claude, or any agent, and it gets a real set of tools — set an alarm, create a reminder, read your day, file a note, and even trigger a phone-call-style reminder — all on your behalf, on your actual phone.",
        bullets: [
          "Connect Claude, ChatGPT, OpenClaw, or your own agent over MCP",
          "The agent sets real alarms, reminders, and calendar events — not in-chat notes",
          "Every action is traceable back to the agent that made it",
        ],
      },
      {
        eyebrow: "Optional, not required",
        h2: "You don't need an AI agent to use it",
        body: "The MCP server is a power-up, not a requirement. Squirrel Brain works great on its own — speak it, snap it, or screenshot it and it becomes a reminder. The agent connection is there for people who want their assistant to actually do things on their phone.",
      },
    ],
    faqs: [
      {
        q: "Can ChatGPT or Claude set a reminder or alarm on my iPhone?",
        a: "Not on their own. ChatGPT and Claude can only create tasks that live inside their own app — they can't set a real iOS alarm, reminder, or calendar event. Squirrel Brain closes that gap with a built-in MCP server, so a connected agent can set a real reminder, alarm, or call on your behalf.",
      },
      {
        q: "How does Squirrel Brain let an AI agent act on my phone?",
        a: "You generate a personal key in the app and connect your agent over MCP (Model Context Protocol). The agent then gets real tools — set an alarm, create an item, read your daily brief, save a link, and trigger a phone-call-style reminder — and every action is traceable to the agent that made it.",
      },
      {
        q: "Which AI assistants work with it?",
        a: "Any MCP-compatible agent — including Claude and ChatGPT — plus your own custom agents. It's standard MCP, so it isn't locked to one assistant.",
      },
      {
        q: "Do I have to connect an agent at all?",
        a: "No. Squirrel Brain works fully on its own — voice, photo, and screenshot capture all become reminders without any AI agent. Connecting an agent is an optional power feature.",
      },
    ],
    related: ["ai-agent-reminder-app", "ai-reminder-app", "reminder-app-that-calls-you", "second-brain-app"],
  },

  {
    slug: "reminder-app-that-calls-you",
    title: "A Reminder App That Calls You — an AI Voice, Not a Banner | Squirrel Brain",
    description:
      "Squirrel Brain doesn't just remind you — it calls you. The call rings through Silent mode, and when you pick up an AI voice actually talks to you: your day, a pep talk, or a quick prep before your next meeting.",
    eyebrow: "It calls you",
    h1: "A reminder app that actually calls you",
    subhead:
      "Not a banner you swipe away — a real call that rings through Silent mode. And it's not a robocall: pick up and an AI voice talks to you about your day, hypes you up, or walks you through the meeting you're about to walk into.",
    heroShot: {
      src: "/assets/screens/calendar-v2.webp",
      alt: "Squirrel Brain calendar showing a reminder set to ring the phone like a call",
    },
    sections: [
      {
        eyebrow: "Notifications fail",
        h2: "You've swiped away a reminder and forgotten it 30 seconds later",
        body: "It's not a discipline problem. A banner notification competes with fifty others, disappears when your phone is face-down, and is gone the moment you swipe. For something that genuinely matters, a quiet, dismissible alert is the wrong tool.",
      },
      {
        eyebrow: "It talks to you",
        h2: "It's not a beep — an AI voice actually talks to you",
        body: "Pick up and it isn't a pre-recorded chime. An AI voice tells you what it called about in plain language — the reminder, what's on your day, or the points you asked it to cover. It rings through Silent mode, so it reaches you even when everything else is muted.",
        bullets: [
          "Rings through Silent mode, Focus, and a locked screen",
          "An AI voice speaks your reminder and your day — not a canned recording",
          "Call it back and ask, or have it call you — both directions",
        ],
      },
      {
        eyebrow: "Tell it what to say",
        h2: "A pep talk, a daily brief, or a prep call before your meeting",
        body: "Ask it to call you twice a day with a pep talk about your day. Tell it you've got a meeting at 2 and to ring you beforehand and run through the five main points. It's a reminder, a morning brief, a hype call, and a meeting prep — in your ear, exactly when you need it.",
        bullets: [
          "Schedule recurring check-in or pep-talk calls",
          "A prep call before a meeting that covers your key points",
          "You pick which reminders are worth a call",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it really ring through Silent mode?",
        a: "Yes. The reminder comes through like a real phone call, so it rings even when your phone is on Silent or in a Focus mode, and on a locked screen — for the reminders you flag as important.",
      },
      {
        q: "What does it say when it calls?",
        a: "An AI voice tells you what it called about in plain language — your reminder, what's coming up on your day, or the points you asked it to cover. It's generated for you in the moment, not a pre-recorded message.",
      },
      {
        q: "Can it call me before a meeting and prep me?",
        a: "Yes. Tell it about the meeting and ask it to call beforehand and go over your main points, and it will ring you and walk through them so you go in ready.",
      },
      {
        q: "Can it call me with a daily pep talk or check-in?",
        a: "Yes. You can have it call you on a schedule — for example twice a day — with a check-in or a pep talk about your day.",
      },
      {
        q: "Does every reminder call me?",
        a: "No. You decide which reminders escalate to a call and which stay as a normal nudge, so a ring always means it matters.",
      },
    ],
    related: ["loud-reminder-app", "ai-reminder-app", "voice-note-reminder-app", "outlook-screenshot-reminder"],
  },

  {
    slug: "ai-agent-reminder-app",
    title: "Let an AI Agent Set Reminders on Your Phone | Squirrel Brain",
    description:
      "Connect Claude, ChatGPT, or any AI agent to Squirrel Brain's built-in MCP server and let it set real alarms, reminders, and calendar events on your iPhone — and even call your phone — on your behalf.",
    eyebrow: "AI agents",
    h1: "Let your AI agent set reminders on your phone",
    subhead:
      "Squirrel Brain is the action layer for your AI assistant. Through a built-in MCP server, Claude, ChatGPT, or any agent can set real reminders, alarms, and calendar events on your actual phone.",
    heroShot: {
      src: "/assets/screens/burrow.webp",
      alt: "The Burrow in Squirrel Brain, where a connected AI agent reads the day and sets reminders",
    },
    sections: [
      {
        eyebrow: "The missing layer",
        h2: "Your AI assistant is smart, but it can't touch your phone",
        body: "AI agents can plan your week and draft your messages, but they hit a wall at your phone — they can't set a real alarm, add a calendar event, or ring you. There's no consumer app that gives an agent those actions. Squirrel Brain is that missing layer.",
      },
      {
        eyebrow: "Built-in MCP server",
        h2: "Real tools, over the standard your agent already speaks",
        body: "Squirrel Brain ships an MCP (Model Context Protocol) server. Connect your agent with a personal key and it gets a real toolset: set an alarm, create a reminder or note, read your daily brief, save a link, append to a forever note, and trigger a phone-call-style reminder — every action logged to the agent that made it.",
        bullets: [
          "Standard MCP — works with Claude, ChatGPT, OpenClaw, or your own agent",
          "Set alarms, reminders, calendar events, notes, and calls",
          "Read your day so the agent acts with real context",
        ],
      },
      {
        eyebrow: "On your terms",
        h2: "You hold the key",
        body: "Nothing happens without the key you generate in the app, and every agent action is traceable. Connect one agent or several; revoke access any time. Your phone, your rules — the agent just gets a safe, auditable way to help.",
      },
    ],
    faqs: [
      {
        q: "Can an AI agent set reminders on my phone?",
        a: "Yes — through Squirrel Brain. Connect Claude, ChatGPT, or any MCP-compatible agent to Squirrel Brain's built-in MCP server and it can set real alarms, reminders, and calendar events on your phone, and even trigger a phone-call-style reminder, on your behalf.",
      },
      {
        q: "What is MCP?",
        a: "MCP (Model Context Protocol) is an open standard that lets AI agents use external tools. Squirrel Brain exposes a set of tools over MCP, so any MCP-compatible agent can act on your phone in a structured, auditable way.",
      },
      {
        q: "Is it safe to connect an agent?",
        a: "You generate a personal key to connect an agent, every action it takes is traceable back to it, and you can revoke access at any time. Nothing happens without your key.",
      },
      {
        q: "Do I need an agent to use Squirrel Brain?",
        a: "No. The app works fully on its own — voice, photo, and screenshot capture all become reminders. The AI-agent layer is an optional power feature.",
      },
    ],
    related: ["can-chatgpt-set-iphone-reminder", "second-brain-app", "ai-reminder-app", "reminder-app-that-calls-you"],
  },

  {
    slug: "reminder-app-for-field-service",
    title: "Reminder App for Field Service Techs & Contractors | Squirrel Brain",
    description:
      "Squirrel Brain captures the job, reminds you loud enough to catch, and keeps GPS-stamped photo proof — all in one app for field service techs, contractors, and installers.",
    eyebrow: "For field service",
    h1: "The reminder app for field service techs and contractors",
    subhead:
      "Capture the job between stops, get a reminder loud enough to actually catch, and keep timestamped, GPS-stamped photo proof of every site — all in one app.",
    heroShot: {
      src: "/assets/screens/pix-wall-v2.webp",
      alt: "Pix board wall in Squirrel Brain showing GPS-stamped job-site photos sorted into boards",
    },
    sections: [
      {
        eyebrow: "Capture on site",
        h2: "Catch the job detail before you're on to the next one",
        body: "The part number, the thing the customer asked for, the follow-up you promised — it all happens on site, not at a desk. Talk it out or snap a photo and Squirrel Brain reads it, logs the detail, and sets the reminder before you've pulled out of the driveway.",
        bullets: [
          "Voice capture for follow-ups and job notes between stops",
          "Photo capture for equipment, serial numbers, and conditions",
          "Reminders that ring your phone when a job can't slip",
        ],
      },
      {
        eyebrow: "Proof of work",
        h2: "GPS-stamped photo proof, filed automatically",
        body: "Snap what you installed, delivered, or serviced and Squirrel Brain stores it with a timestamp and GPS location on the right board. When a customer disputes it, the proof is one search away — not buried in a camera roll of 5,000 photos.",
      },
      {
        eyebrow: "One app, not five",
        h2: "Reminders and proof in the same place",
        body: "Most crews juggle a reminder app, a notes app, and a camera roll. Squirrel Brain does capture, loud reminders, and proof together — so the follow-up that rings you and the photo that proves the job are in one searchable place.",
      },
    ],
    faqs: [
      {
        q: "How does Squirrel Brain help field service techs?",
        a: "It captures job details by voice or photo on site, sets reminders that ring your phone when something can't slip, and stores timestamped, GPS-stamped photo proof of every job — all in one searchable app.",
      },
      {
        q: "Can it store proof of service or install?",
        a: "Yes. Photos are saved with a timestamp and GPS location and sorted onto boards, so proof of delivery, service, or install is searchable in seconds.",
      },
      {
        q: "Will I actually catch the reminders?",
        a: "For jobs that can't slip, Squirrel Brain can ring your phone with a phone-call-style reminder instead of a quiet banner — so a reminder reaches you even on a noisy site.",
      },
      {
        q: "What device does it run on?",
        a: "iPhone, for now. Squirrel Brain is pre-launch — join the launch list to get early access.",
      },
    ],
    related: ["reminder-app-for-sales-reps", "photo-to-reminder-app", "loud-reminder-app", "outlook-screenshot-reminder"],
  },

  {
    slug: "reminder-app-for-parents",
    title: "Reminder App for Busy Parents — Snap It, Don't Forget It | Squirrel Brain",
    description:
      "Snap the permission slip, the flyer, the field-trip date — Squirrel Brain turns it into a reminder and calendar event so busy parents never miss the things scattered across backpacks, texts, and the fridge.",
    eyebrow: "For busy parents",
    h1: "The reminder app for busy parents",
    subhead:
      "Permission slips, soccer schedules, party invites, school flyers — snap a photo and Squirrel Brain turns it into a reminder and a calendar event, so the thing on the fridge doesn't become the thing you forgot.",
    heroShot: {
      src: "/assets/screens/pix-wall-v2.webp",
      alt: "Pix board wall in Squirrel Brain with snapped schedules, receipts, and school papers sorted into boards",
    },
    sections: [
      {
        eyebrow: "It's everywhere",
        h2: "The family calendar lives in backpacks, texts, and the fridge",
        body: "A permission slip in a backpack, a field-trip date in a class text, a party invite stuck to the fridge, a coach's schedule screenshot — no single calendar has all of it, which is exactly why things get missed. Squirrel Brain pulls the scattered pieces into one place.",
      },
      {
        eyebrow: "Snap it",
        h2: "Photograph it, and it becomes the reminder",
        body: "Take a picture of the slip, the flyer, or the schedule and Squirrel Brain reads the dates and details, sets the reminders, and adds the calendar events. Snap a soccer schedule and every game can become an alarm — no typing each one in.",
        bullets: [
          "Snap schedules, slips, flyers, and invites — it reads the dates",
          "Reminders and calendar events created for you",
          "A reminder that rings your phone for the things you can't miss",
        ],
      },
      {
        eyebrow: "Find it later",
        h2: "And everything's searchable when you need it",
        body: "Receipts for returns, the field-trip form, the birthday party address — Squirrel Brain sorts your photos onto boards so months later you just ask instead of scrolling. The mental load of remembering it all moves off your plate.",
      },
    ],
    faqs: [
      {
        q: "How does Squirrel Brain help busy parents?",
        a: "Snap a permission slip, schedule, flyer, or invite and Squirrel Brain reads the dates and turns it into reminders and calendar events. It keeps the scattered family to-dos — from backpacks, texts, and the fridge — in one searchable place.",
      },
      {
        q: "Can it turn a soccer or activity schedule into reminders?",
        a: "Yes. Photograph the schedule and Squirrel Brain can read the dates and create reminders or calendar events for each one, instead of you typing them in by hand.",
      },
      {
        q: "Will it remind me loudly enough?",
        a: "For the things you truly can't miss, Squirrel Brain can ring your phone with a phone-call-style reminder rather than a quiet banner you might swipe away.",
      },
      {
        q: "Does it work on iPhone?",
        a: "Yes — Squirrel Brain is an iPhone app. It's pre-launch, so join the launch list to be first into the beta.",
      },
    ],
    related: ["photo-to-reminder-app", "screenshot-to-reminder-app", "loud-reminder-app", "second-brain-app"],
  },
];

export function getLandingPage(slug: string): LandingPageData | undefined {
  return LANDING_PAGES.find((p) => p.slug === slug);
}

export function landingSlugs(): string[] {
  return LANDING_PAGES.map((p) => p.slug);
}
