# Squirrel Brain — Launch & Growth Playbook

Everything that's already done, plus the handful of steps only you can do (each pre-written so it's
copy-paste, not homework). Written for a first-time launcher. Site is LIVE at https://squirrelbrainapp.com.

> Truth rules for ALL copy below: no fake reviews/ratings, no "#1", no medical/ADHD-treatment claims.
> Call wording stays "phone-call-style reminders / rings your phone / loud alarms." iOS only. Pre-launch.

---

## ✅ Already done for you (live in production)
- **13 SEO landing pages** targeting real searches (AI reminder app, screenshot/voice/photo → reminder,
  loud/call reminders, second brain, sales reps, field service, parents, Outlook, "can ChatGPT set an
  iPhone reminder", "let an AI agent set reminders").
- **Technical SEO**: per-page titles/meta/canonicals (fixed a duplicate-canonical bug), Open Graph +
  Twitter images on every page, Organization/WebSite/SoftwareApplication/FAQPage structured data,
  sitemap with lastmod, robots + llms.txt (agent-friendly).
- **Analytics**: PostHog live — pageviews, click autocapture, a `waitlist_signup` conversion event,
  plus session-replay + heatmaps ready to switch on.
- **Indexing kickstart**: all URLs submitted to Bing/Yandex via IndexNow.

## 🔑 The 5 things only YOU can do (≈30 min total)

### 1. Google Search Console (biggest one — this is how Google finds you)
1. Go to https://search.google.com/search-console → "Add property" → **URL prefix** →
   `https://squirrelbrainapp.com`.
2. Easiest verification = the **HTML tag** method. It gives you a token like
   `<meta name="google-site-verification" content="ABC123..." />` — copy just the `ABC123...` part.
3. In **Vercel → squirrel-brain-website → Settings → Environment Variables**, add:
   `NEXT_PUBLIC_GSC_VERIFICATION` = `ABC123...` (the token). Redeploy (or tell me and I'll redeploy).
   The site already supports this var — it'll output the tag automatically.
4. Back in Search Console, click **Verify**, then **Sitemaps** → submit `sitemap.xml`.

### 2. Bing Webmaster Tools (covers Bing + ChatGPT search)
- https://www.bing.com/webmasters → **Import from Google Search Console** (2 clicks once #1 is done).

### 3. PostHog — confirm it's working + turn on replay
- Open your PostHog project → **Activity** (or "Events"). Load the site / submit a test email at the
  footer → you should see `$pageview` and `waitlist_signup` events within a minute.
- To watch how visitors use the site: **Settings → Session Replay → toggle "Record user sessions" ON.**
  (The code already masks the email field for privacy.)
- Nice-to-have: build a **funnel** Pageview → `waitlist_signup` to see your conversion rate.

### 4. www redirect (2 min, removes a duplicate-content risk)
- **Vercel → Settings → Domains** → make `www.squirrelbrainapp.com` **redirect** to
  `squirrelbrainapp.com`. (Canonicals already point to the non-www version, so this is cleanup.)

### 5. Refresh Blotato (only if you want me to auto-post social)
- Your Blotato connection expired. Refresh the key at https://my.blotato.com/settings/api and tell me —
  then I can publish the posts below to your connected accounts directly. Otherwise just copy-paste them.

---

## 📣 Ready-to-paste launch posts
All link to https://squirrelbrainapp.com. Swap to your App Store link once live.

### X / Twitter (thread or single)
> Your AI can write your emails but it can't set an alarm on your phone.
>
> I'm building Squirrel Brain: speak it, snap it, or screenshot it — and it becomes a real reminder,
> alarm, or calendar event. For the stuff you can't miss, it rings your phone like a call.
>
> It even lets Claude/ChatGPT set reminders on your phone (built-in MCP).
> Early access → squirrelbrainapp.com

### LinkedIn
> We forget things not because we're careless — because the reminder lives in five different places:
> a text, an email, a screenshot, a photo on the fridge, a calendar we can't sync.
>
> I'm building Squirrel Brain (iOS): capture anything by voice, photo, or screenshot and it turns into
> a reminder, alarm, or calendar event — then follows up so it doesn't slip. For the few things that
> truly can't slip, it rings your phone like a call instead of a banner you swipe away.
>
> It also connects to AI assistants (Claude, ChatGPT) so they can set reminders on your actual phone.
> We're pre-launch and opening early access: squirrelbrainapp.com

### Reddit (communities that fit — read each sub's rules first; lead with the problem, not the link)
Good fits: r/productivity, r/iphone, r/apple, r/shortcuts, r/Entrepreneur (post sparingly, be a person).
> **Built an app because my AI assistant couldn't set an alarm on my phone**
> I kept asking ChatGPT to remind me of things and nothing ever fired on my lock screen — turns out it
> can only nudge you inside its own app. So I built Squirrel Brain: snap/say/screenshot something and it
> becomes a real reminder, alarm, or calendar event, and for the important stuff it rings your phone like
> a call. It also exposes an MCP server so Claude/ChatGPT can set reminders on your phone for you.
> It's iOS, pre-launch — would love feedback on whether this solves a real problem for you.
> [link in comments to respect sub rules]

### Instagram / Threads (caption)
> Speak it. Snap it. Screenshot it. 🐿️ Squirrel Brain turns the things you'd forget into reminders,
> alarms, and calendar events — and rings your phone for the ones you can't miss. iOS early access at the
> link. #productivity #iphone #reminders #secondbrain

### Product Hunt (set up a "Coming Soon" page now to collect followers pre-launch)
- Tagline: **The AI reminder app for everything you forget**
- Description: Speak it, snap it, or screenshot it — Squirrel Brain turns voice notes, photos,
  screenshots, texts, and emails into reminders, alarms, notes, and calendar events. For the things you
  can't miss, it rings your phone like a call. Connect Claude or ChatGPT to set reminders for you.

### Hacker News (save for actual launch day — "Show HN")
> Show HN: Squirrel Brain – turn voice/photos/screenshots into reminders; AI agents can set them too
> (Lead the comment with the MCP angle — HN cares about the agent/MCP capability.)

---

## 🎯 Where your best free traffic will come from (priority order)
1. **The AI-agent / MCP angle** — genuinely uncontested. "Can ChatGPT set a reminder on my iPhone" has
   real demand and zero consumer apps answering it. Your `/can-chatgpt-set-iphone-reminder` and
   `/ai-agent-reminder-app` pages target it; lean into it on X/HN/Reddit too.
2. **"Reminder that calls you"** — small but hungry niche; the existing apps only call, they don't capture.
3. **Screenshot-to-reminder** — rising demand, thin competitors; your depth wins.
4. **Communities** (Reddit/HN) for the first humans; **SEO** compounds over the following weeks.

## Next pages worth building later (from the content research, all truthful)
`/email-to-reminder-app`, `/text-to-reminder-app`, `/photo-to-calendar-app`,
`/alarm-that-bypasses-silent-mode` (verify the claim first), `/remember-where-i-parked-app`,
`/capture-everything-app`. Say the word and I'll build any of them like the existing 13.
