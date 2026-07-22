// Per-section themed demo voices. Each themed page's interactive phone plays a
// DIFFERENT Scuttle greeting (real "nova" voice), so a faith page hears a faith
// call, a sales page hears a pump-up, etc. The homepage hero uses "default".
//
// `transcript` MUST match the words in the audio file (it's shown as the on-call
// caption for muted users + accessibility). `eyebrow`/`heading`/`sub` theme the
// section copy so the whole block fits the page it's on.

export type DemoTheme =
  | "default"
  | "moat"
  | "faith"
  | "peptalk"
  | "sales"
  | "field"
  | "parents"
  | "loud"
  | "agents"
  | "work"
  | "family"
  | "callsyou"
  | "chatgpt"
  | "aireminder"
  | "secondbrain"
  | "outlook"
  | "demospage"
  | "pricingpage"
  | "mcppage";

export interface DemoVoice {
  /** Public path to the mp3 (same real "nova" voice as the app). */
  audio: string;
  /** The spoken words — shown as the on-call caption; must match the audio. */
  transcript: string;
  eyebrow: string;
  heading: string;
  sub: string;
}

export const DEMO_VOICES: Record<DemoTheme, DemoVoice> = {
  default: {
    audio: "/audio/scuttle-demo.mp3",
    transcript:
      "Hey — it's Scuttle, from Squirrel Brain. You just answered, so let me show you what I actually do. When you tell me something matters — a form that's due, your meds, a meeting — I hold onto it, and I ring you like this, the moment it counts. No app to open, no notification to miss. That's the whole idea. Talk soon!",
    eyebrow: "See it for yourself",
    heading: "Let Scuttle call you — right now",
    sub: "This is the real thing: tap the phone and your squirrel rings you in its own voice — the same call that reaches you when something actually matters. No download, no sign-up.",
  },
  moat: {
    audio: "/audio/scuttle-moat.mp3",
    transcript:
      "Hey, it's Scuttle again. Here's what makes me different from every other reminder: for the one thing you truly can't miss, I don't send a notification you'll ignore — I call your phone and say it out loud, in my own voice, and reach you on a locked screen when it counts. That's the call that actually saves you. Talk soon!",
    eyebrow: "Why it works",
    heading: "The call you can't miss",
    sub: "Tap the phone and hear the call that reaches you on a locked screen when it counts — in Scuttle's own voice. No download, no sign-up.",
  },
  faith: {
    audio: "/audio/scuttle-faith.mp3",
    transcript:
      "Hey, it's Scuttle. You asked me to call you with a little faith today, so here it is: be strong and take heart — you are not walking through this day alone. Hold onto that, take a breath, and let it carry you. I'll call again tomorrow, same time. Talk soon.",
    eyebrow: "A little faith, out loud",
    heading: "Get an encouraging faith call — right now",
    sub: "Tap the phone and hear the kind of daily call Scuttle makes — a word of strength and faith, in a real voice. No download, no sign-up.",
  },
  peptalk: {
    audio: "/audio/scuttle-peptalk.mp3",
    transcript:
      "Hey, it's Scuttle — this one's your pep talk. Listen to me: you've got this. Whatever is weighing on you today, you are stronger than it, and you do not have to do it all at once. One step, then the next. Now go show today who's boss. Talk soon!",
    eyebrow: "Your daily hype call",
    heading: "Get a pep talk — right now",
    sub: "Tap the phone and let Scuttle hype you up out loud — exactly like the daily pep-talk call. No download, no sign-up.",
  },
  sales: {
    audio: "/audio/scuttle-sales.mp3",
    transcript:
      "Hey, it's Scuttle — pump-up call, let's go! You've got follow-ups to make and I am not letting a single one slip. Winners follow up, and that deal closes because you picked up the phone. Go be relentless, go be charming, go close it. Talk soon — now go get paid!",
    eyebrow: "Close more, forget nothing",
    heading: "Get a sales pump-up call — right now",
    sub: "Tap the phone and let Scuttle fire you up before your next call — the follow-up nudge that actually reaches you. No download, no sign-up.",
  },
  field: {
    audio: "/audio/scuttle-field.mp3",
    transcript:
      "Hey, it's Scuttle. You've got a job coming up, and I've got everything — the address, the parts, the photos you snapped on site. Nothing is getting forgotten, and your proof is logged. Go knock it out and make it look easy. Talk soon!",
    eyebrow: "Every job, every detail",
    heading: "Get the job-site call — right now",
    sub: "Tap the phone and hear how Scuttle calls you with the address, the parts, and your logged proof — so nothing slips on site. No download, no sign-up.",
  },
  parents: {
    audio: "/audio/scuttle-parents.mp3",
    transcript:
      "Hey, it's Scuttle. You've got a lot of little people counting on you, so here's your reminder — the appointment, the permission slip, the thing you promised. I'm holding all of it so you don't have to. You're doing better than you think. Talk soon!",
    eyebrow: "For the mental load",
    heading: "Get the reminder call — right now",
    sub: "Tap the phone and hear how Scuttle calls you about the thing you promised — so it never slips through a busy day. No download, no sign-up.",
  },
  loud: {
    audio: "/audio/scuttle-loud.mp3",
    transcript:
      "Hey — it's Scuttle, and this is the reminder you can't sleep through. When it really matters, I don't send a quiet little notification you'll swipe away — I call your phone, out loud, until you've actually got it. No more, I forgot. Talk soon!",
    eyebrow: "Not another quiet ping",
    heading: "Get the reminder you can't miss — right now",
    sub: "Tap the phone and hear the call that says it out loud in a real voice — not a notification you'll swipe away. No download, no sign-up.",
  },
  agents: {
    audio: "/audio/scuttle-agents.mp3",
    transcript:
      "Hey, it's Scuttle. Your A-I agents can reach you right here — when one of them needs you, it rings this phone and I speak up in my own voice. Your assistants finally have a way to actually get your attention, day or night. Talk soon!",
    eyebrow: "The delivery layer for your agents",
    heading: "Let your AI agents call you — right now",
    sub: "Tap the phone and hear how an agent reaches you: it rings this phone and Scuttle speaks up, in a real voice. No download, no sign-up.",
  },
  work: {
    audio: "/audio/scuttle-work.mp3",
    transcript:
      "Hey, it's Scuttle. That meeting, that deadline, the thing your boss is going to ask about — I've got it, and when it's time, I call so it never slips through the cracks. Walk in looking on top of it, because you are. Talk soon!",
    eyebrow: "Look on top of it",
    heading: "Get the call before you forget — right now",
    sub: "Tap the phone and hear how Scuttle calls you about the meeting, the deadline, the ask — so nothing slips at work. No download, no sign-up.",
  },
  family: {
    audio: "/audio/scuttle-family.mp3",
    transcript:
      "Hey, it's Scuttle. Family runs on a hundred little things nobody wrote down — the pickup, the refill, the birthday. I hold them, and I call you right when they matter. You've got enough tabs open; let me carry a few. Talk soon!",
    eyebrow: "For the family CEO",
    heading: "Get the family reminder call — right now",
    sub: "Tap the phone and hear how Scuttle calls you about the pickup, the refill, the birthday — the hundred things nobody wrote down. No download, no sign-up.",
  },
  callsyou: {
    audio: "/audio/scuttle-callsyou.mp3",
    transcript:
      "Hey, it's Scuttle. Yeah — I'm the reminder app that actually calls you. Not a badge, not a banner you'll swipe away. When it's time, your phone rings, and I tell you out loud exactly what you can't forget. That's the whole point of me. Talk soon!",
    eyebrow: "The reminder that calls",
    heading: "Hear the call for yourself — right now",
    sub: "Tap the phone: this is the app that actually rings you, out loud, when it matters. No download, no sign-up.",
  },
  chatgpt: {
    audio: "/audio/scuttle-chatgpt.mp3",
    transcript:
      "Hey, it's Scuttle. Here's the thing ChatGPT can't do — actually ring your phone. I take what you tell me and I call you when it matters, out loud, in a real voice, right through your locked screen. That's the difference between a chat and a second brain. Talk soon!",
    eyebrow: "Beyond a chatbot",
    heading: "Hear what ChatGPT can't do — right now",
    sub: "Tap the phone and hear the call a chatbot can't make: a real ring, a real voice, right through your locked screen. No download, no sign-up.",
  },
  aireminder: {
    audio: "/audio/scuttle-aireminder.mp3",
    transcript:
      "Hey, it's Scuttle. I'm the A-I that doesn't just remember things — I chase you down when they're due. Speak it, snap it, or type it, and I'll call your phone the moment it counts. Smart enough to know what matters, stubborn enough to make sure you don't miss it. Talk soon!",
    eyebrow: "AI that follows through",
    heading: "Hear your AI call you — right now",
    sub: "Tap the phone: the AI reminder that doesn't just remember — it rings you when it counts. No download, no sign-up.",
  },
  secondbrain: {
    audio: "/audio/scuttle-secondbrain.mp3",
    transcript:
      "Hey, it's Scuttle — your second brain, calling. You handed this to me so you could stop holding it in your head, and now I'm ringing you at exactly the right moment so it actually gets done. That's a second brain that follows through. Talk soon!",
    eyebrow: "A brain that follows through",
    heading: "Hear your second brain call — right now",
    sub: "Tap the phone and hear your second brain ring you at exactly the right moment. No download, no sign-up.",
  },
  outlook: {
    audio: "/audio/scuttle-outlook.mp3",
    transcript:
      "Hey, it's Scuttle. Screenshot that email, that invite, that thing buried in your inbox — I'll read it, hold onto it, and call you before it's too late. No more, it got lost in my inbox. Talk soon!",
    eyebrow: "From inbox to a real call",
    heading: "Hear the call for yourself — right now",
    sub: "Tap the phone: screenshot the email, and Scuttle calls you before it's too late. No download, no sign-up.",
  },
  demospage: {
    audio: "/audio/scuttle-demospage.mp3",
    transcript:
      "Hey, it's Scuttle. You're here for the demos — but this, right here, is the real thing. Tap me on any page and I actually call you, in my own voice. That's not a video you're watching; that's exactly what happens on your phone. Talk soon!",
    eyebrow: "Not a video — the real thing",
    heading: "Skip the films — let it call you",
    sub: "Tap the phone: this isn't a demo film, it's the actual call, in Scuttle's own voice. No download, no sign-up.",
  },
  pricingpage: {
    audio: "/audio/scuttle-pricingpage.mp3",
    transcript:
      "Hey, it's Scuttle. Wondering if I'm worth it? This call — the one that reaches you and saves you from forgetting the thing that really costs you — that's what you're paying for. One saved slip-up pays for the whole year. Talk soon!",
    eyebrow: "What you're paying for",
    heading: "Hear what it does — right now",
    sub: "Tap the phone: this call — the one that saves you from the costly slip-up — is what you're paying for. No download, no sign-up.",
  },
  mcppage: {
    audio: "/audio/scuttle-mcppage.mp3",
    transcript:
      "Hey, it's Scuttle. Connect me over M-C-P, and your A-I agents get a voice — they can ring your actual phone, and I'll speak for them, out loud. Claude Code, Cursor, your own scripts — they finally reach you in the real world, not just a chat window. Talk soon!",
    eyebrow: "Give your agents a voice",
    heading: "Let your agents call you — right now",
    sub: "Tap the phone and hear how an agent reaches you over MCP: it rings your phone and Scuttle speaks for it. No download, no sign-up.",
  },
};

/** Landing-page slug → demo theme. Unlisted call-featuring slugs fall back to "default". */
export const LANDING_DEMO_THEME: Record<string, DemoTheme> = {
  "daily-bible-verse-call": "faith",
  "daily-pep-talk-call-app": "peptalk",
  "reminder-app-for-sales-reps": "sales",
  "reminder-app-for-field-service": "field",
  "reminder-app-for-parents": "parents",
  "loud-reminder-app": "loud",
  "ai-agent-reminder-app": "agents",
  "reminder-app-that-calls-you": "callsyou",
  "can-chatgpt-set-iphone-reminder": "chatgpt",
  "ai-reminder-app": "aireminder",
  "second-brain-app": "secondbrain",
  "outlook-screenshot-reminder": "outlook",
};
