# App Store Optimization (ASO) draft — Squirrel Brain

Draft for later use when the App Store listing goes live. **Nothing here is published yet.**
Verify every capability claim against the shipping build before submitting (see
"Claims to verify" at the bottom). Apple app ID: `6766505549`.

> Truth rules (same as the website): no fake reviews/ratings, no medical/ADHD-treatment
> claims, no "breaks iOS rules" claims. Use "loud alarms", "phone-call-style reminders",
> "rings your phone", "call reminders where supported".

---

## App name (30 chars max)
Apple counts the full name against 30 characters. Options (char counts noted):

- `Squirrel Brain: AI Reminders` — 28 ✅
- `Squirrel Brain: Voice Reminders` — 31 ❌ (too long — trim to `Squirrel Brain: Voice Remind`)
- `Squirrel Brain: Snap Reminders` — 30 ✅

**Recommended:** `Squirrel Brain: AI Reminders` (broadest intent, fits).

## Subtitle (30 chars max)
- `Voice, photo & screenshot tasks` — 31 ❌ → use `Voice, photo & snap reminders` (29 ✅)
- `AI reminders from anything` — 26 ✅
- `Speak, snap & never forget` — 26 ✅

**Recommended:** `AI reminders from anything` or `Speak, snap & never forget`.

## Keyword field (100 chars max, comma-separated, NO spaces, singular, don't repeat
words already in name/subtitle)
Apple auto-pluralises and combines keywords into phrases, so don't waste space on
plurals, spaces, or the words "app"/"reminder" if they're already in the name.

```
alarm,task,todo,calendar,note,voice,photo,screenshot,memory,secondbrain,followup,productivity,work,text,email,snap
```
(94 chars — adjust as needed.)

## Promotional text (170 chars, updatable any time without review)
> Speak it, snap it, or screenshot it — Squirrel Brain turns scattered notes, photos,
> and messages into reminders, alarms, and calendar events. Now in early access.

## Description (4000 chars max) — angle draft
Lead paragraph:

> Squirrel Brain helps busy people remember what matters. Speak a thought, snap a photo,
> screenshot a message, or save something important — Squirrel Brain turns it into a
> reminder, alarm, note, or calendar event so it doesn't disappear in your camera roll,
> your inbox, or your head.

Suggested body sections (each a short paragraph or bulleted feature):

- **Capture any way you think of it** — voice notes, photos, screenshots, forwarded
  texts and emails all become something that actually nudges you.
- **It acts, it doesn't just store** — sets alarms, adds calendar events, organizes
  photos into boards, and follows up so things get done.
- **Hard-to-miss reminders** — for the one thing you can't miss, get a loud alarm or a
  phone-call-style reminder that rings your phone. *(Verify exact iOS behavior before
  publishing — see below.)*
- **Turn screenshots into reminders** — perfect for locked-down work inboxes and Outlook
  events you can't sync.
- **Photos that do work** — receipts, whiteboards, parking spots, schedules, serial
  numbers — read, filed, and searchable later.
- **Built for work and family** — sales reps, service techs, busy parents, and anyone
  whose to-dos are scattered everywhere.
- **Connect your AI assistant (optional)** — a built-in MCP server lets Claude, ChatGPT,
  or any agent set reminders on your behalf.

Close with: pricing line + "iPhone only · 7-day free trial."

## What's New (per release)
Keep it human and specific to the build. Avoid keyword stuffing here — Apple doesn't index it heavily.

## Screenshots / preview (the biggest ASO conversion lever)
Reuse the website's proven shots and captions. First 2-3 screenshots matter most:
1. Home + Daily Countdown ("Your day at a glance")
2. Screenshot → reminder ("Screenshot it. It becomes a reminder.")
3. Pix boards ("Photos, sorted and searchable")
4. The call/alarm ("A reminder loud enough to actually reach you")
5. The Burrow ("Ask your second brain anything")

---

## Claims to verify before publishing the listing
- [ ] **Silent mode / Focus / locked-screen ringing** — confirm the exact, current
      behavior of the call/alarm on a real device and word the listing to match. Apple
      rejects overstated capability claims. The website currently says "rings right
      through Silent mode, Focus, and a locked screen" — keep listing wording consistent
      with whatever is actually true on the shipping build.
- [ ] **Outlook import by screenshot** — confirm it extracts title/time/location reliably.
- [ ] **GPS-stamped photo proof** — confirm GPS + timestamp are stored as described.
- [ ] **Pricing** — Standard $9.99 / Plus $14.99 with 7-day trial (confirmed 2026-06-16;
      re-confirm at submission).
- [ ] **MCP / AI-agent actions** — confirm the listed agent capabilities match live tools.
