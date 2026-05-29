# Privacy Policy — DRAFT FOR REVIEW

**Squirrel Brain**
Effective Date: [PLACEHOLDER - INSERT DATE]
Last Updated: [PLACEHOLDER - INSERT DATE]

---

## 1. Introduction

Welcome to Squirrel Brain ("we," "us," or "our"). We built Squirrel Brain to be a trusted personal assistant — a place where you can capture voice memos, photos, notes, and tasks without worrying about what happens to your information.

This Privacy Policy explains what personal information we collect, why we collect it, who we share it with, how long we keep it, and what rights you have over it. Please read it carefully. By using Squirrel Brain, you agree to the practices described here.

If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, Section 12 contains additional disclosures required by the General Data Protection Regulation (GDPR). If you are a California resident, Section 13 contains additional disclosures required by the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).

**Contact for privacy matters:**
Email: [PLACEHOLDER - USE A DEDICATED PRIVACY@ ADDRESS]
Website: https://squirrelbrainapp.com
[PLACEHOLDER - LEGAL REVIEW NEEDED: A physical mailing address is required under GDPR Article 13(1)(a)]

---

## 2. Who This Policy Applies To

This Privacy Policy applies to all users of the Squirrel Brain iOS application and the squirrelbrainapp.com website, including users who signed up for the pre-launch waitlist.

**Squirrel Brain is not directed at children under the age of 13.** We do not knowingly collect personal information from children under 13.

[PLACEHOLDER - LEGAL REVIEW: If you intend to allow users aged 13–17, add a provision. COPPA applies to children under 13. California AADC and other state laws impose obligations for users under 18.]

---

## 3. Information We Collect

### 3.1 Voice Recordings

When you use the microphone feature, the app records your voice on-device. The audio file is then transmitted to our servers and to OpenAI (our AI processing partner) for transcription and structuring into notes, tasks, and reminders. The original audio file is stored so you can replay recordings.

**What this means:** Your voice recordings are processed by OpenAI and stored in Supabase.

### 3.2 Photos and Images

When you photograph something, upload from your photo library, or share a screenshot via the Share Extension, the image is transmitted to Google's Gemini AI vision service for analysis and text/date extraction. The extracted data is stored in Supabase as structured notes.

**What this means:** Photos you share with Squirrel Brain — including people, documents, or location landmarks — are sent to Google's AI service.

### 3.3 Typed and Written Notes

Text you type directly is processed by OpenAI's AI models to extract tasks, dates, and actionable items. The original text and extracted data are stored in Supabase.

### 3.4 Location Data

With your permission, Squirrel Brain optionally tags notes with your GPS location at the time of capture. Location data is stored as note metadata in Supabase. You can revoke location access via iOS Settings at any time, but previously stored location data is not automatically deleted.

### 3.5 Calendar Data

With your permission, Squirrel Brain reads from and writes to your Apple Calendar to:
- Create new calendar events from AI-extracted dates/times
- Read existing events to compile your Daily Brief

Calendar event content may be processed by AI to generate your Daily Brief. We do not store your entire calendar independently.

### 3.6 Push Notification Tokens

Your device push notification token is stored in Supabase solely to deliver alarm and reminder notifications you configure.

### 3.7 Email Address

We collect your email address when you:
- Sign in with Apple (Apple may provide your address or a relay address)
- Enable the Daily Brief feature (morning summary, 4 PM nudge, all-clear emails)
- Sign up for the pre-launch waitlist on squirrelbrainapp.com

We use Resend to deliver all emails. Your email is shared with Resend for this purpose.

### 3.8 Authentication Data (Sign In with Apple)

We use Apple's Sign In with Apple. Apple provides us a unique user identifier and, optionally, your email. We do not receive your Apple ID password.

### 3.9 AI Assistant / Telegram Bot Interactions

Some users interact with a Squirrel Brain AI assistant ("Pip") via Telegram. Messages sent to the bot are processed by our AI systems under this Privacy Policy. **Telegram operates under its own Privacy Policy independently of ours.**

### 3.10 Analytics Data (Planned — Not Yet Active)

We plan to integrate PostHog to collect anonymized usage data (feature usage, screen visits, button taps). Analytics data will not include note content, voice recordings, or photos. This policy will be updated when activated.

### 3.11 Technical and Device Data

We may automatically collect device type, OS version, app version, crash reports, and general usage patterns to maintain and improve the app.

---

## 4. How We Use Your Information

| Purpose | Data Used | Legal Basis (GDPR) |
|---|---|---|
| Core app functionality (transcribing voice, structuring notes, creating tasks) | Voice, photos, notes, location | Performance of contract / Legitimate interests |
| Daily Brief and notification emails | Email, calendar data, notes | Performance of contract / Consent |
| Push notifications and alarms | Push token, alarm settings | Performance of contract |
| Authentication and account management | Apple user ID, email | Performance of contract |
| Calendar event creation | Calendar access, extracted dates | Performance of contract / Consent |
| App quality improvement | Aggregated/anonymized patterns | Legitimate interests |
| Waitlist/product update communications | Email (waitlist) | Consent |
| Analytics (when activated) | Anonymized usage events | Legitimate interests / Consent |
| Legal compliance | As required | Legal obligation |

---

## 5. Third-Party Services That Receive Your Data

### 5.1 OpenAI
**What we share:** Text of typed notes and content of voice recordings.
**Why:** AI transcription and structuring.
**OpenAI Privacy Policy:** https://openai.com/policies/privacy-policy
[PLACEHOLDER - LEGAL REVIEW: Confirm OpenAI's current API data retention and training policies. Execute DPA if required under GDPR.]

### 5.2 Google (Gemini AI)
**What we share:** Photos, screenshots, images.
**Why:** AI vision processing and text/date extraction.
**Google Privacy Policy:** https://policies.google.com/privacy
[PLACEHOLDER - LEGAL REVIEW: Review Google Cloud/Gemini API data processing terms. Execute DPA for GDPR compliance before sending EU user data.]

### 5.3 Supabase
**What we share:** All user-generated content — notes, voice clips, photo metadata, task lists, location tags, alarm settings, push tokens, email addresses, device identifiers.
**Why:** Cloud database infrastructure.
**Supabase Privacy Policy:** https://supabase.com/privacy
[PLACEHOLDER - LEGAL REVIEW: Confirm Supabase database region. For GDPR, EU data stored in the US requires Standard Contractual Clauses or DPF participation.]

### 5.4 Resend
**What we share:** Email address and email content (Daily Brief, nudges, all-clear).
**Why:** Email delivery service.
**Resend Privacy Policy:** https://resend.com/legal/privacy-policy

### 5.5 Apple
**What we share:** Apple user identifier (Sign In), notification payloads (APNs), calendar data flows through EventKit on-device.
**Why:** Authentication, push notifications, calendar integration.
**Apple Privacy Policy:** https://www.apple.com/legal/privacy/

### 5.6 Telegram
**What we share:** Messages sent to the Telegram bot (if you use this feature).
**Why:** AI assistant interaction via Telegram.
**Telegram Privacy Policy:** https://telegram.org/privacy
**Important:** Telegram's privacy practices are separate and independent from ours.

### 5.7 PostHog (Planned — Not Yet Active)
**What we share (when activated):** Anonymized usage events. No note content, voice recordings, or photos.
**Why:** Product analytics.
**PostHog Privacy Policy:** https://posthog.com/privacy

---

## 6. What We Do Not Do

- **We do not sell your personal information** to third parties, data brokers, or advertisers.
- **We do not use your data for advertising targeting** on any platform.
- **We do not share your data with other Squirrel Brain users.** All data is private to your account.
- **We do not share your data with data brokers** or marketing companies.
- **We do not collect payment information.** Payments (if/when introduced) will be processed by Apple's App Store.
- **We do not use your voice recordings, photos, or note content for any purpose other than providing app features** and, in anonymized/aggregated form, improving those features.

---

## 7. AI Processing Disclosure

Squirrel Brain is fundamentally AI-powered. A substantial portion of your personal information — voice recordings, photos, written notes — is processed by AI systems including third-party AI providers (OpenAI and Google Gemini).

**Key disclosures:**
- **Automated decision-making:** The app uses AI to automatically structure your inputs into tasks, reminders, calendar events, and notes. These are organizational tools you can review and edit.
- **Accuracy:** AI transcription and extraction is not perfect. Always review AI-generated tasks and calendar events.
- **Third-party AI models:** Your content is processed by OpenAI's and Google's AI models. We are not the operators of those AI systems.
- **No high-stakes profiling:** We do not use AI to make decisions about your creditworthiness, employment, legal status, or any other significant determination.

[PLACEHOLDER - LEGAL REVIEW: EU AI Act (fully applicable August 2026) and US state AI transparency laws (Colorado, Connecticut, Texas) impose obligations. Have counsel assess whether any features constitute "high-risk AI systems."]

---

## 8. Data Retention

| Data Type | Retention Period |
|---|---|
| Notes, tasks, structured data | Until you delete the item or delete your account |
| Voice recordings (audio files) | Until you delete the recording or delete your account |
| Photos / image data | Until you delete the item or delete your account |
| Location tags | Until you delete the associated note or delete your account |
| Push notification tokens | Until you sign out or delete your account |
| Email address | Until account deletion; waitlist emails until dissolved or unsubscribed |
| Calendar data | Not stored independently; cached data deleted on account deletion |
| Account identifiers | Deleted on account deletion, subject to legal hold obligations |
| Analytics data (when activated) | [PLACEHOLDER - set PostHog retention, typically 12–24 months] |
| Crash logs | [PLACEHOLDER - typically 90 days] |

After account deletion, we will delete or anonymize your personal information within **[PLACEHOLDER - e.g., 30] days**, except where required by law.

[PLACEHOLDER - LEGAL REVIEW: GDPR requires specific retention periods, not vague language. Define concrete maximum retention windows for each data category after account deletion and document the business justification.]

---

## 9. Data Security

We implement industry-standard security measures including:
- TLS/HTTPS encrypted transmission
- Encrypted storage in Supabase (encryption at rest)
- Access controls limiting team member access to user data
- Secure API key management

No method of transmission or storage is 100% secure. If you discover a security vulnerability, please contact us at [PLACEHOLDER - privacy@squirrelbrainapp.com].

In the event of a data breach posing a risk to your rights, we will notify affected users and applicable regulatory authorities as required by law (within 72 hours under GDPR Article 33; without unreasonable delay under US state breach notification laws).

---

## 10. Your Rights and Choices

### 10.1 Access
Request a copy of the personal information we hold about you.

### 10.2 Deletion (Right to Erasure)
Delete your account and associated data at any time.
**To delete your account:** [PLACEHOLDER - INSERT IN-APP ACCOUNT DELETION STEPS. Apple App Store Guidelines (5.1.1) require in-app account deletion. Failure to implement is grounds for rejection.]

You may also request deletion by emailing [PLACEHOLDER - privacy@squirrelbrainapp.com].

### 10.3 Correction
Correct inaccurate personal information by editing within the app or contacting us.

### 10.4 Data Portability
Request an export of your personal data by contacting [PLACEHOLDER - privacy@squirrelbrainapp.com].

### 10.5 Opt Out of Emails
Unsubscribe from Daily Brief and nudge emails via:
- The unsubscribe link in any email
- App notification settings
- Direct contact with us

### 10.6 Location, Notifications, Calendar
Revoke any device permission at any time in iOS Settings > Privacy & Security.

---

## 11. Data Transfers

Squirrel Brain is operated from the United States. If you are outside the US, your personal information will be transferred to, stored, and processed in the US and potentially other countries where our third-party service providers operate.

[PLACEHOLDER - LEGAL REVIEW: For GDPR compliance, data transfers to the US must be covered by an adequacy decision, Standard Contractual Clauses (SCCs), or another valid transfer mechanism. Confirm that Supabase, OpenAI, Google, Resend, and Telegram have appropriate transfer mechanisms for EU data. This is a material GDPR obligation.]

---

## 12. Additional Rights for EEA, UK, and Swiss Users (GDPR)

### 12.1 Legal Basis for Processing

| Processing Activity | Legal Basis |
|---|---|
| Core app features (notes, voice, photos, alarms) | Performance of contract (Art. 6(1)(b)) |
| Location tagging, calendar access, optional emails, analytics | Consent (Art. 6(1)(a)) |
| Security, fraud prevention, aggregate analytics | Legitimate interests (Art. 6(1)(f)) |
| Legal compliance | Legal obligation (Art. 6(1)(c)) |

[PLACEHOLDER - LEGAL REVIEW: Assess whether voice recordings constitute biometric data under GDPR Article 9 (special category data). If so, you need an Article 9(2) basis — most likely explicit consent — with appropriate safeguards.]

### 12.2 Your GDPR Rights

- **Right of access (Article 15)**
- **Right to rectification (Article 16)**
- **Right to erasure (Article 17)** — "right to be forgotten"
- **Right to restrict processing (Article 18)**
- **Right to data portability (Article 20)**
- **Right to object (Article 21)**
- **Rights related to automated decision-making (Article 22)**

Contact us at [PLACEHOLDER - privacy@squirrelbrainapp.com] to exercise these rights. We respond within 30 days (extendable by 60 days for complex requests with notice).

You may also lodge a complaint with your local supervisory authority: https://edpb.europa.eu/about-edpb/about-edpb/members_en

### 12.3 Data Protection Officer

[PLACEHOLDER - LEGAL REVIEW: Determine whether a DPO is required under GDPR Article 37.]

---

## 13. Additional Rights for California Residents (CCPA/CPRA)

### 13.1 Categories of Personal Information Collected

| Category | Examples | Collected? |
|---|---|---|
| Identifiers | Email address, Apple user ID, device identifiers | Yes |
| Audio/visual data | Voice recordings, photos | Yes |
| Geolocation data | GPS location at note capture | Yes |
| Internet/network activity | App usage, crash logs | Yes |
| Inferences | AI-extracted tasks, dates, notes | Yes |
| Sensitive Personal Information | Voice recordings, precise geolocation | Yes |

### 13.2 Your California Rights

- **Right to Know:** Categories and specific pieces of personal information collected
- **Right to Delete:** Request deletion, subject to exceptions
- **Right to Correct:** Request correction of inaccurate information
- **Right to Opt-Out of Sale or Sharing:** We do not sell or share personal information
- **Right to Limit Sensitive PI Use:** Our current use is already limited to service provision
- **Right to Non-Discrimination:** We will not discriminate for exercising rights

Contact [PLACEHOLDER - privacy@squirrelbrainapp.com] to exercise California rights. We respond within 45 days (extendable by 45 days with notice).

[PLACEHOLDER - LEGAL REVIEW: Confirm CCPA applicability thresholds (>$25M revenue, >100K consumers, or >50% revenue from selling PI). A small startup may not technically meet thresholds — confirm with counsel. Publishing these disclosures voluntarily is still good practice.]

---

## 14. Changes to This Privacy Policy

When we make material changes, we will:
- Update the "Last Updated" date
- Post a notice within the app
- For material changes, send email notification or display in-app notification

Continued use after the effective date constitutes acceptance.

---

## 15. Contact Us

**Email:** [PLACEHOLDER - privacy@squirrelbrainapp.com — register before publishing]
**Website:** https://squirrelbrainapp.com
**Mailing address:** [PLACEHOLDER - INSERT REGISTERED BUSINESS ADDRESS]

We respond to all privacy inquiries within **30 days**.

---

## Appendix: Third-Party Data Processors Summary

| Service | Purpose | Data Received | Privacy Policy |
|---|---|---|---|
| OpenAI | AI transcription and note structuring | Voice recordings, typed notes | openai.com/policies/privacy-policy |
| Google (Gemini) | AI vision / image analysis | Photos, screenshots | policies.google.com/privacy |
| Supabase | Cloud database / storage | All user data | supabase.com/privacy |
| Resend | Email delivery | Email address, email content | resend.com/legal/privacy-policy |
| Apple | Auth, push notifications, calendar | Apple user ID, notification payloads | apple.com/legal/privacy |
| Telegram | Bot message delivery (optional) | Bot message content | telegram.org/privacy |
| PostHog | Analytics (planned) | Anonymized usage events | posthog.com/privacy |

---

## CRITICAL ITEMS FLAGGED FOR LEGAL REVIEW

1. Contact email — register privacy@squirrelbrainapp.com
2. Physical/registered business address — required under GDPR
3. In-app account deletion flow — Apple requires this
4. GDPR transfer mechanisms — confirm SCCs or DPF for Supabase, OpenAI, Google, Resend
5. Data Processing Agreements (DPAs) — execute with OpenAI and Google under GDPR Art. 28
6. OpenAI API data retention — confirm current terms on model training and retention
7. Google Gemini API data terms — confirm enterprise/API data processing terms
8. Supabase region — confirm for GDPR data residency
9. Special category data — voice recordings may qualify as biometric data under GDPR Art. 9 or IL BIPA, WA My Health MY Data Act, TX CUBI
10. EU AI Act compliance — assess features against obligations (effective August 2026)
11. **Illinois BIPA** — HIGH LITIGATION RISK: voice data and face geometry from photos may trigger BIPA; requires standalone written consent and public retention/destruction policy; $1,000-$5,000 per violation; active class action litigation
12. Concrete retention periods — replace vague language with specific day-count windows
13. CCPA applicability thresholds — verify with counsel
14. DPO requirement — assess whether required
15. PostHog retention period — set specific event data retention window
