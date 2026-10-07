# Privacy Policy — Squirrel Brain

Effective Date: October 8, 2026
Last Updated: October 8, 2026
Version: 3.1

---

## 1. Introduction

Welcome to Squirrel Brain ("we," "us," or "our"). Squirrel Brain is an AI-powered iOS personal productivity application. We built it to be a trusted personal assistant — a place where you can capture voice memos, photos, notes, and tasks without worrying about what happens to your information.

This Privacy Policy explains what personal information we collect, why we collect it, who we share it with, how long we keep it, your rights over it, and how we protect it. Please read it carefully.

This app processes voice recordings, photographs, and GPS location data using AI systems operated by third parties. By using Squirrel Brain, you acknowledge this processing and agree to the practices described here.

If you are located in the European Economic Area (EEA), United Kingdom, or Switzerland, Section 12 contains additional disclosures required by the General Data Protection Regulation (GDPR), including your right to lodge a complaint with a supervisory authority.

If you are a California resident, Section 13 contains additional disclosures required by the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).

If you are a resident of Illinois, Washington State, or Texas, Section 14 contains additional disclosures required by those states' biometric and health data privacy laws, which are directly relevant to voice recordings and photographic data processed by this app.

Data Controller and Contact for Privacy Matters:

Squirrel Brain / Acorn Labs LLC
Email: hello@squirrelbrainapp.com
Website: https://squirrelbrainapp.com

We respond to all privacy inquiries within 30 days.

---

## 2. Who This Policy Applies To

This Privacy Policy applies to:

- All users of the Squirrel Brain iOS application
- Visitors to squirrelbrainapp.com
- Users who signed up for the pre-launch waitlist

Age restriction. Squirrel Brain is available only to users age 17 and older; it is not directed at, marketed to, or intended for use by children or teens under 17. We do not knowingly collect personal information from anyone under 17, and we do not offer a parental-consent pathway for younger users. If you believe a person under 17 has provided us personal information, contact us immediately at hello@squirrelbrainapp.com and we will delete it. See our Terms of Use Section 2.1 for the full eligibility requirement.

We do not permit users under 17 at all (see the age restriction above), so we do not operate a parental-consent pathway for 13-to-17-year-olds. Because the Services are not designed, marketed, or made available to anyone under 17, the heightened obligations that apply to services directed at minors — including California's Age-Appropriate Design Code Act (AB 2273) and similar laws in Maryland, Connecticut, and Texas — do not apply to Squirrel Brain. If we ever decide to permit younger users, we will add the required consent mechanisms and disclosures before doing so, and will update this policy first.

---

## 3. Information We Collect

### 3.1 Voice Recordings

When you use the microphone feature, the app records your voice on-device. The audio file is transmitted to our servers and to OpenAI (for speech-to-text transcription). The resulting text is then transmitted to Anthropic's Claude (to structure it into notes, tasks, and reminders). The original audio file is stored in Supabase so you can replay recordings.

What this means: Your voice is captured, transmitted over the internet to OpenAI's servers for transcription and to Anthropic's servers for structuring, and stored in Supabase's cloud database.

Important notice regarding voice data and biometric laws: Voice recordings may constitute biometric identifiers under Illinois law (BIPA), Washington State law (My Health MY Data Act), and Texas law (CUBI). If you are a resident of those states, see Section 14 for important additional rights and consent requirements. We process voice data solely to provide the transcription and note-structuring features you request; we do not use voice data for speaker identification, authentication, or any biometric purpose.

### 3.1a Meeting Recordings

When you use Meeting Mode, the app records continuous audio in short segments (about five minutes each) for the duration of the meeting. Each segment is saved on your device and backed up to our secure cloud storage (Supabase, see Section 5) so you can replay the recording later and so it survives loss of your device. The audio is transmitted to our AI partner Google (Gemini, see Sections 5 and 7) to produce a transcript with speaker labels, and the transcript is then transmitted to our AI partner Anthropic (Claude, see Section 5) to reconcile it into a structured summary, action items, and follow-up notes. Retention and deletion of meeting audio follow the same schedule as other voice recordings (see the "Voice recordings (audio files)" row in Section 8): kept until you delete the recording or your account, and deleted within 30 days of account deletion.

Meeting-recording consent. Because a meeting recording necessarily captures the voices of everyone present, not just yours, you are solely responsible for obtaining the consent of every participant before you begin recording. You are the one who controls when a meeting recording starts and who is in the room; we process the resulting audio only as your service provider, at your direction, to give you the transcript and summary you asked for. See our Terms of Use Section 4.1 for your legal responsibility to obtain all required consents, which varies by jurisdiction (some states and countries require every participant's consent, not just one party's).

### 3.1b The Pip AI Assistant

Squirrel Brain includes an in-app conversational assistant, "Pip." Messages you send Pip, and the conversation history needed to understand your request, are processed by Anthropic's Claude AI models. Pip can take actions in the app on your behalf — creating reminders, searching your saved items, scheduling a call — and, when useful, can search the public web to answer a question; web search queries may be sent to xAI and, through xAI, to the underlying search provider. See Section 5 for full detail on each AI partner.

### 3.2 Photos and Images (PixNote)

You choose which images Squirrel Brain ever sees. The app processes an image only when you actively bring it in — by taking a photo in the app, selecting specific photos from your library, sharing a photo or screenshot to Squirrel Brain through the iOS share sheet, or — only if you turn this option on — automatically importing your new screenshots. When you bring in an image, it is transmitted to Google's Gemini AI vision service for analysis, text extraction, and date extraction. If that reading fails our checks, the image is sent to Anthropic's Claude to be read instead. The extracted facts may also be sent to Anthropic's Claude to decide which board or category the item belongs in and to keep your PixNotes organized. The extracted data is stored in Supabase as structured notes. A copy of the picture itself (the thumbnail shown on your PixNote) is also saved on your device and backed up to our secure, private cloud storage (Supabase, see Section 5), so your pictures survive loss of your device, a reinstall, or your phone automatically clearing the local copy. This image backup is locked to your account, is never made public, and is deleted when you delete the item or your account (see the photo/image retention row in Section 8). So you can later search your saved items by meaning rather than exact words, a short text summary of what an item contains may also be sent to Google's embedding service; the resulting search index is stored on your device.

We never access your whole camera roll. Squirrel Brain does not scan, browse, index, or upload your entire photo library. Photos you do not bring in are never seen by us or by our AI providers. The optional automatic screenshot import reads only your device's Screenshots album, only after you enable it, and you can turn it off at any time. We process only the specific images you choose to add — nothing else.

What this means: Images you bring into Squirrel Brain — including photos that may depict people, faces, documents, locations, or health-related information — are sent to Google's AI service (and, when a backup reading is needed, Anthropic's) over the internet, for those images and only those.

Important notice regarding photographic data: Photos that include faces may result in facial geometry data being processed by Google's Gemini service or, when a backup reading is needed, Anthropic's Claude. This may constitute biometric data under Illinois BIPA, Washington State My Health MY Data Act, and Texas CUBI. See Section 14. We do not intentionally collect facial geometry, and we do not retain or use any biometric data derived from faces for identification purposes.

Photos may also inadvertently capture health-related information (e.g., prescription labels, medical records, health apps). Such data is processed only to the extent necessary to extract the notes and tasks you request.

### 3.3 Typed and Written Notes

Text you type directly is processed by Anthropic's Claude AI models to extract tasks, dates, and actionable items. Your original text and the extracted data are stored in Supabase. You retain full ownership of your note content.

### 3.4 Location Data (GPS)

With your explicit permission, Squirrel Brain optionally tags notes with your GPS coordinates at the time of capture. This constitutes precise geolocation data, which is a sensitive category under CPRA (California) and other state laws. Location data is stored as note metadata in Supabase. Your saved location is also used to show weather and to work out which city you are in; see Section 5.11.

You can revoke location access at any time in iOS Settings > Privacy & Security > Location Services. Revoking permission prevents future location tagging but does not automatically delete previously stored location data. To delete past location tags, delete the associated notes or request account deletion.

### 3.5 Calendar Data

With your explicit permission, Squirrel Brain reads from and writes to your Apple Calendar via Apple's EventKit framework (on-device) to:

- Create new calendar events from AI-extracted dates and times
- Read existing calendar events to compile your Daily Brief

We do not upload your full calendar to our servers. Calendar data read for the Daily Brief is processed transiently and is not permanently stored independently of the notes and events you create through the app. Calendar event content summarized in the Daily Brief email may be processed by AI to generate that summary.

### 3.6 Push Notification Tokens

Your device's Apple Push Notification Service (APNs) token is stored in Supabase solely to deliver alarm and reminder notifications you configure. This token is a technical device identifier; it does not identify you by name. It is deleted when you sign out or delete your account.

### 3.7 Email Address

We collect your email address when you:

- Sign in with Apple (Apple may provide your actual address or a privacy relay address)
- Enable the Daily Brief feature (morning summary, 4 PM nudge, and all-clear emails)
- Sign up for the pre-launch waitlist on squirrelbrainapp.com

We use Resend to deliver all transactional and Daily Brief emails. Your email address is shared with Resend for this purpose. See Section 5.6.

### 3.8 Authentication Data (Sign In with Apple)

We use Apple's Sign In with Apple for authentication. Apple provides us with a unique anonymous user identifier and, at your option, your email address. We do not receive your Apple ID password. Your Apple Sign In credentials are managed by Apple under Apple's Privacy Policy.

### 3.9 Analytics Data in the App

Version 1.0 of the Squirrel Brain app does not send product-usage analytics to PostHog or to any other third-party analytics service. If we add analytics to the app in the future, we will update this policy in advance and describe what is collected, where it is processed and how to opt out. Analytics on our website are described in Section 3.12.

### 3.11 Technical and Device Data

We automatically collect:

- Device type and model
- Operating system version
- App version
- Crash reports and error logs
- Operational records needed to run and protect the service (for example, usage limits and error logs). Version 1.0 of the app does not include in-app usage analytics (see Section 3.9).

This information is used to maintain, improve, and debug the app. We do not link crash reports to your notes or voice recordings. Crash logs are retained for approximately 90 days.

Crash and performance reports: We use Sentry to receive crash reports and performance traces from the app. These reports are not intended to contain the content of your notes, voice recordings or photos. See Section 5.9.

Purchase status: We use RevenueCat, our subscription provider, which receives your purchase status and an app user ID so the app can unlock your plan. See Section 5.10.

### 3.12 Website Data (squirrelbrainapp.com)

When you visit squirrelbrainapp.com:

- Standard web server logs (IP address, browser type, referrer, page visited, timestamp) may be collected by our hosting provider (Vercel)
- If you submit the waitlist form, your email is stored in Supabase for pre-launch communications
- PostHog analytics are active on squirrelbrainapp.com (activated May 27, 2026). PostHog collects anonymized usage events — pages visited, button clicks, session data. PostHog is configured with `person_profiles: 'identified_only'`, meaning anonymous visitors are not profiled. No note content, voice recordings, or personal account data is collected via the website analytics. See Section 5.8 for more on PostHog on the website.

Before PostHog is configured to set cookies or device identifiers for visitors in the EEA, UK, or Switzerland, squirrelbrainapp.com will present a cookie/tracking consent banner offering those visitors the choice to accept or decline non-essential analytics cookies, consistent with the ePrivacy Directive and GDPR. Today, PostHog on the website is configured to identified-only profiles and does not set cross-site advertising cookies.

---

## 4. How We Use Your Information

| Purpose | Data Used | Legal Basis (GDPR) |
|---|---|---|
| Core app functionality — transcribing voice, structuring notes, extracting tasks and dates | Voice, photos, notes | Performance of contract (Art. 6(1)(b)) |
| Location tagging of notes; weather and city lookup | GPS location | Consent (Art. 6(1)(a)) |
| Daily Brief emails and notification emails | Email, calendar data, notes summary | Performance of contract + Consent (Art. 6(1)(a)/(b)) |
| Push notifications and alarms | Push token, alarm settings | Performance of contract (Art. 6(1)(b)) |
| Authentication and account management | Apple user ID, email | Performance of contract (Art. 6(1)(b)) |
| Calendar event creation | Calendar access, extracted dates | Performance of contract + Consent (Art. 6(1)(a)/(b)) |
| App quality improvement | Aggregated/anonymized patterns, crash logs | Legitimate interests (Art. 6(1)(f)) |
| Pre-launch waitlist communications | Email (waitlist) | Consent (Art. 6(1)(a)) |
| Legal compliance and fraud prevention | As required | Legal obligation (Art. 6(1)(c)) |

We do not use your personal information for any purpose incompatible with the purposes listed above. If we wish to use your data for a new purpose, we will update this policy and, where required, seek your consent.

Data minimization. In accordance with GDPR Article 5(1)(c) and the principle of data minimization, we collect only the data necessary for the specific purpose listed. For example, location data is only collected if you allow location access, and is used to tag notes and to show weather and your city (Section 5.11); calendar data is only read when you use the Daily Brief feature; photos are only processed when you use the PixNote feature.

---

## 5. Third-Party Services That Receive Your Data

We share your data with the following third-party services solely to operate the app features described in this policy. We do not authorize these services to use your data for their own advertising or marketing purposes. Squirrel Brain's AI features are built on four AI subprocessors, each handling a different kind of content — voice transcription and phone-call audio (OpenAI), the structuring of your notes, tasks, and meeting summaries, board/organization decisions, and the conversational "Pip" assistant (Anthropic), image and photo analysis plus semantic search (Google), and web search for the assistant (xAI) — described individually below.

### 5.1 OpenAI

What we share: Audio of your voice recordings, for transcription (meeting audio is sent only as a backup when our primary meeting transcription fails); audio from live voice calls and in-app voice features; during a live call, the call's instructions and the notes, reminders, and calendar entries Pip looks up to answer you; and the text Squirrel Brain reads aloud to you.
Why: Speech-to-text transcription of voice memos and meeting audio (Whisper), real-time voice conversation for live calls and voice features (OpenAI's real-time voice service), and text-to-speech generation for calls and spoken replies.
Data processing location: United States
OpenAI Privacy Policy: https://openai.com/policies/privacy-policy
OpenAI API Terms: https://openai.com/policies/terms-of-use

Acorn Labs LLC has a Zero Data Retention agreement with OpenAI. OpenAI does not store the content described above in its logs and does not use it to train its models. Two limits apply. Audio replies may be held for up to one hour to keep a conversation going, and OpenAI may retain content where the law requires or to investigate severe misuse of its services. Squirrel Brain does not send your photos or images to OpenAI. This agreement covers OpenAI only; the other AI providers described below handle content under their own terms. A Data Processing Agreement under GDPR Article 28 is in progress.

### 5.2 Anthropic (Claude)

What we share: The text of your typed and transcribed notes; extracted facts from your photos (dates, line items, document text) for board-placement and organization decisions; meeting transcripts, for reconciling them into structured summaries and action items; your messages to the in-app "Pip" assistant and the conversation history needed to answer you; and, when Google's reading of a photo fails our checks, the photo itself, to be read instead.
Why: Structuring your voice and typed input into tasks, dates, and reminders; organizing and placing PixNote photos into the right board; reconciling meeting recordings into notes and follow-ups; powering the conversational Pip assistant; and reading a photo as a backup when needed.
Data processing location: United States
Anthropic Privacy Policy: https://www.anthropic.com/legal/privacy
Anthropic Commercial Terms of Service: https://www.anthropic.com/legal/commercial-terms

Anthropic's published API terms state that API inputs and outputs are not used to train Anthropic's models by default. We rely on those published terms as our contractual basis for this processing today; a signed Data Processing Agreement formalizing this under GDPR Article 28 is in progress.

### 5.3 Google (Gemini AI)

What we share: Photos, screenshots, and images submitted through the PixNote or Share Extension features; audio from Meeting Mode recordings (for speaker-labeled transcription); and short text summaries of your saved items (for semantic search).
Why: AI vision processing — text extraction, date extraction, and scene description from images; meeting audio diarization and transcription; and generating the search embeddings that power meaning-based search of your saved items.
Data processing location: United States (Google Cloud)
Google Privacy Policy: https://policies.google.com/privacy
Google Cloud Data Processing Terms: https://cloud.google.com/terms/data-processing-addendum

Standard Gemini API terms state that content submitted through the API is not used to train Google's general-purpose models by default. We rely on those published terms as our contractual basis for this processing today; a signed Data Processing Agreement under GDPR Article 28 with Google is in progress.

### 5.4 xAI (Grok)

What we share: Search queries, when Pip searches the public web on your behalf.
Why: Web search for the Pip assistant, so it can answer questions with current information.
Data processing location: United States
xAI Privacy Policy: https://x.ai/legal/privacy-policy
xAI API Terms of Service: https://x.ai/legal/terms-of-service-api

xAI's published API terms state that API inputs are not used to train xAI's models by default for this API product. We rely on those published terms as our contractual basis for this processing today; a signed Data Processing Agreement formalizing this under GDPR Article 28 is in progress.

### 5.5 Supabase

What we share: All user-generated content — notes, voice audio files, PixNote image metadata, structured task lists, location tags, alarm settings, push notification tokens, email addresses, Apple user identifiers, and device information.
Why: Cloud database and file storage infrastructure.
Supabase Privacy Policy: https://supabase.com/privacy
Supabase DPA: https://supabase.com/legal/dpa

Our Supabase project is hosted in the United States and uses encryption at rest and in transit. Supabase offers a Data Processing Agreement under GDPR Article 28, which we are in the process of executing. If we expand to a significant EU user base, we will evaluate hosting a region-local database to reduce cross-border transfers.

### 5.6 Resend

What we share: Your email address and the content of Daily Brief emails and notification emails.
Why: Transactional email delivery service (Daily Brief, 4 PM nudge, all-clear notifications).
Resend Privacy Policy: https://resend.com/legal/privacy-policy

Resend offers a Data Processing Agreement, which we are in the process of executing. Resend's stated retention period for delivery logs is available in its Privacy Policy, linked above.

### 5.7 Apple

What we share: Apple anonymous user identifier (Sign In with Apple authentication), notification payloads (delivered via Apple Push Notification Service / APNs). Calendar data is accessed on-device through EventKit and does not flow through our servers except as described in Section 3.5.
Why: Authentication, push notification delivery, on-device calendar access.
Apple Privacy Policy: https://www.apple.com/legal/privacy/

Note: Apple's Sign In with Apple and APNs operate under Apple's Developer Program agreements and Privacy Policy. Apple is a data controller for its own processing of your Apple ID and APNs delivery.

### 5.8 PostHog (Website Only; Not Used in the App)

What we share: On squirrelbrainapp.com only, anonymized usage events such as pages visited and button clicks (see Section 3.12). PostHog is not used in version 1.0 of the app and receives no data from the app.
Why: Understanding how the website is used.
PostHog Privacy Policy: https://posthog.com/privacy

If we add PostHog or any other analytics to the app, we will update this policy in advance and disclose the data processing region, how IP addresses are handled, the legal basis and the retention period.

### 5.9 Sentry

What we share: Crash reports and performance traces from the app, which can include device type and model, operating system and app version, and technical error details. These reports are not intended to include the content of your notes, voice recordings or photos.
Why: Finding and fixing crashes and performance problems.
Sentry Privacy Policy: https://sentry.io/privacy/

### 5.10 RevenueCat

What we share: Your purchase status and an app user ID.
Why: RevenueCat is our subscription provider. It uses your purchase status to unlock your plan. Payments are handled by Apple, and we never see your card details.
RevenueCat Privacy Policy: https://www.revenuecat.com/privacy

### 5.11 Open-Meteo and OpenStreetMap

If you allow location access, Squirrel Brain saves your location and sends its coordinates to Open-Meteo (weather and air quality) and to OpenStreetMap, to show weather and work out which city you are in for your daily brief and assistant. If you ask about the weather somewhere else, the place name you say is sent to Open-Meteo. These services receive coordinates or a place name, not your notes, recordings, or photos. When your phone requests weather directly, Open-Meteo also sees your device's IP address.
Open-Meteo Terms and Privacy: https://open-meteo.com/en/terms
OpenStreetMap Foundation Privacy Policy: https://osmfoundation.org/wiki/Privacy_Policy

---

## 6. What We Do Not Do

We believe in being explicit about what we do not do with your data:

- We do not sell your personal information to third parties, data brokers, or advertisers.
- We do not share your personal information for cross-context behavioral advertising.
- We do not use your data for advertising targeting on any platform.
- We do not share your data with other Squirrel Brain users. All data is private to your account.
- We do not share your data with data brokers or marketing companies.
- Payments are handled by Apple. Our subscription provider RevenueCat receives your purchase status and an app user ID to unlock your plan. We never see your card details.
- We do not use your voice recordings, photos, or note content for any purpose other than providing the app features you request and, only in aggregated, anonymized form, improving those features.
- We do not use your voice recordings or photos to create biometric profiles, train facial recognition systems, or identify you by voice or facial geometry.
- We do not retain biometric identifiers (voice patterns, facial geometry) beyond the period necessary to complete the specific AI processing transaction you initiated.

---

## 7. AI Processing Disclosure

Squirrel Brain is fundamentally AI-powered. A substantial portion of your personal information — voice recordings, photos, typed notes, and your conversations with the Pip assistant — is processed by four third-party AI systems: OpenAI, Anthropic, Google, and xAI (see Section 5 for what each one handles).

Key disclosures:

- Automated decision-making and structuring: The app uses AI to automatically structure your voice, images, and text into tasks, reminders, calendar events, and notes. These are organizational tools you can always review, edit, and delete. We do not consider these to constitute high-stakes "automated decisions" under GDPR Article 22 because they do not produce legally significant or similarly significant effects on you.
- Accuracy: AI transcription and data extraction is not perfect. Always review AI-generated tasks, dates, and calendar events before relying on them for time-sensitive matters.
- Third-party AI models: Your content is processed by OpenAI's, Anthropic's, Google's, and xAI's AI models (see Section 5 for which one handles what). While we have contractual data processing terms with these providers, we are not the operators of their underlying AI systems.
- No high-stakes profiling: We do not use AI to make determinations about your creditworthiness, employment status, insurance eligibility, legal status, health diagnoses, or any other significant life determination.
- AI-generated content is a tool, not authoritative: Squirrel Brain does not provide medical, legal, financial, or professional advice. AI-extracted information from your notes is a personal organizational aid only.

EU AI Act Notice: The EU AI Act (Regulation 2024/1689) becomes fully applicable in August 2026. We are assessing our features against the Act's obligations for providers and deployers of AI systems.

We monitor the EU AI Act's phased obligations and have assessed that Squirrel Brain's features do not fall into the Act's prohibited or high-risk categories: the App does not make consequential decisions about credit, employment, insurance, law enforcement, or access to essential services, and every AI-generated task, reminder, or note is a suggestion you review and can edit or delete before it takes effect. As a limited-risk AI system, we satisfy the Act's transparency obligation through this AI Processing Disclosure. We will reassess this classification, and update this section, as the Act's guidance and our feature set evolve.

---

## 8. Data Retention

We retain personal information only as long as necessary for the purposes described in this policy.

| Data Type | Active Account Retention | Post-Deletion Retention |
|---|---|---|
| Notes, tasks, structured data | Until you delete the item or account | Deleted/anonymized within 30 days of account deletion |
| Voice recordings (audio files) | Until you delete the recording or account | Deleted/anonymized within 30 days of account deletion |
| Photos / image data | Until you delete the item or account | Deleted/anonymized within 30 days of account deletion |
| Location tags | Until you delete the associated note or account | Deleted/anonymized within 30 days of account deletion |
| Push notification tokens | Until you sign out or delete account | Deleted immediately on sign-out/deletion |
| Email address | Until account deletion; waitlist emails until you unsubscribe or list is dissolved | Deleted/anonymized within 30 days of account deletion |
| Calendar data | Not stored independently; transient cache cleared on logout | N/A |
| Account identifiers (Apple user ID) | Until account deletion | Deleted within 30 days; may be retained longer if required by applicable law |
| Crash logs | 90 days from generation | N/A |
| AI provider processing logs | OpenAI: not stored in OpenAI's logs under our Zero Data Retention agreement, subject to the two limits in Section 5.1. Anthropic, Google, and xAI: subject to each provider's API terms (Section 5). | Per each provider's API terms |
| Pre-launch waitlist emails | Until account created, list dissolved, or unsubscription | Deleted within 30 days of dissolution/unsubscription |

We maintain an internal Records of Processing Activities documenting the business justification for the retention periods above, consistent with GDPR Article 5(1)(e) and Article 30.

---

## 9. Data Security

We implement industry-standard security measures to protect your personal information:

- In transit: TLS/HTTPS encryption for all data transmissions between the app, our servers, and third-party services
- At rest: Encryption at rest in Supabase (AES-256 or equivalent)
- Access controls: Row-level security (RLS) in Supabase restricts each user's data to their account; team member access to user data is limited to what is necessary
- Credential management: API keys stored as environment variables, not in application code
- Minimal data access: We practice least-privilege access for internal systems

No method of transmission or storage is 100% secure. If you discover a security vulnerability, please contact us responsibly at: hello@squirrelbrainapp.com

Data breach notification. In the event of a data breach that poses a risk to your rights and freedoms, we will:

- Notify the relevant supervisory authority within 72 hours of becoming aware of the breach (GDPR Article 33; UK GDPR; applicable EU member state laws)
- Notify affected users without undue delay when the breach is likely to result in a high risk to your rights (GDPR Article 34)
- Comply with US state breach notification laws, which vary by state but generally require notification without unreasonable delay and within specific statutory windows (e.g., 30 days in California, 45 days in Florida, 60 days in many other states)

We maintain an internal incident response process covering breach detection and classification, an escalation path to meet the 72-hour supervisory-authority notification window, a user-notification template, and a breach log for GDPR Article 33(5) recordkeeping. Our agreements with Supabase, OpenAI, Anthropic, Google, and xAI are expected to require them to notify us of a security incident affecting your data without undue delay so we can meet our own notification obligations.

---

## 10. Your Rights and Choices

You have the following rights with respect to your personal information. To exercise any right, contact us at hello@squirrelbrainapp.com. We will respond within 30 days (with a possible 60-day extension for complex requests, with notice to you). We will not discriminate against you for exercising these rights.

### 10.1 Right of Access

Request a copy of the personal information we hold about you. We will provide this in a commonly used electronic format.

### 10.2 Right to Deletion (Right to Erasure)

Request deletion of your personal information. You can delete your account and all associated data at any time.

To delete your account in-app: Go to Settings > Account > Delete Account > Confirm. This permanently deletes your account and queues your personal data for deletion within 30 days. (Required per Apple App Store Guidelines Section 5.1.1(v).)

You may also request deletion by emailing hello@squirrelbrainapp.com. Note that we may retain certain data where required by law or to comply with legal obligations.

### 10.3 Right to Correction (Rectification)

Correct inaccurate personal information by editing within the app or contacting us.

### 10.4 Right to Data Portability

Request an export of your personal data in a machine-readable format (e.g., JSON or CSV) by contacting hello@squirrelbrainapp.com. We will provide your notes, tasks, and account data in a portable format within 30 days.

### 10.5 Right to Restrict Processing

In certain circumstances (e.g., while disputing the accuracy of data, or pending a deletion request), you may request that we restrict processing of your data rather than delete it.

### 10.6 Right to Object

You may object to processing based on legitimate interests at any time. We will cease processing unless we can demonstrate compelling legitimate grounds that override your interests.

### 10.7 Opt Out of Emails

Unsubscribe from Daily Brief and nudge emails via:

- The unsubscribe link in any email we send
- App notification settings
- Direct request at hello@squirrelbrainapp.com

We will process unsubscribe requests within 10 business days.

### 10.8 Revoke Device Permissions

Revoke location, microphone, camera, photo library, calendar, or notification permissions at any time in: iOS Settings > Privacy & Security. Revoking a permission does not delete previously collected data; use account deletion or the contact methods above for data deletion.

### 10.9 Do Not Sell or Share (California and applicable US states)

We do not sell or share your personal information. This right is therefore automatically honored. If you wish to confirm or document this, contact us.

### 10.10 Analytics in the App

Version 1.0 of the app does not collect product-usage analytics, so there is nothing to opt out of. If that changes, we will update this policy in advance and provide an in-app opt-out.

---

## 11. Data Transfers

Squirrel Brain is operated from the United States. Your personal information is processed and stored in the US by us and by our third-party service providers (OpenAI, Anthropic, Google, xAI, Supabase, Resend). If you are located outside the United States, your data will be transferred to and processed in the US.

For EEA, UK, and Swiss users: Data transfers to the United States must be made under a valid transfer mechanism under GDPR Chapter V. The specific mechanisms applicable to each of our providers are as follows:

| Service Provider | Transfer Mechanism |
|---|---|
| OpenAI | Standard Contractual Clauses (SCCs); OpenAI, L.L.C. is also self-certified under the EU-US Data Privacy Framework |
| Google (Gemini / Google Cloud) | EU-US Data Privacy Framework (Google LLC is certified); SCCs also available via Google Cloud DPA |
| Supabase | Standard Contractual Clauses via Supabase's underlying AWS infrastructure |
| Resend | Standard Contractual Clauses (per Resend's Data Processing Agreement) |
| PostHog (website analytics only) | To be confirmed; PostHog offers an EU-hosted Cloud option we will evaluate for EEA/UK/Swiss users |

We are executing GDPR Article 28 Data Processing Agreements with each processor named in Section 5 that may handle EU personal data, relying on Standard Contractual Clauses or an applicable adequacy/Data Privacy Framework certification as the transfer mechanism, and we have performed a preliminary Transfer Impact Assessment for our US-based processors.

---

## 12. Additional Rights for EEA, UK, and Swiss Users (GDPR)

### 12.1 Data Controller Identity

For GDPR purposes, the data controller is:

Acorn Labs LLC
Country of establishment: United States
Email: hello@squirrelbrainapp.com

Data Protection Officer (DPO):

We have assessed that Squirrel Brain's processing does not currently trigger the mandatory Data Protection Officer requirement under GDPR Article 37: we are not a public authority, we do not carry out large-scale systematic monitoring, and our processing of voice and photo data — while it may touch special-category-adjacent content — is not, at our current user volume, "large-scale" processing of special category data. We will re-assess this conclusion, and appoint a DPO if required, as our EU user base grows. Privacy questions in the meantime should be directed to hello@squirrelbrainapp.com.

EU Representative (if applicable):

We are in the process of designating an EU Representative under GDPR Article 27 (and a UK Representative under UK GDPR Article 27) ahead of any significant EU/UK user base; their contact details will be published here once appointed. Until then, EU and UK users should direct all privacy inquiries to hello@squirrelbrainapp.com, and we will respond as though those representatives were already in place.

### 12.2 Legal Basis for Processing

| Processing Activity | Legal Basis | GDPR Article |
|---|---|---|
| Core app features — voice transcription, note structuring, task extraction | Performance of contract | Art. 6(1)(b) |
| PixNote / photo processing | Performance of contract | Art. 6(1)(b) |
| Location tagging; weather and city lookup (optional) | Consent | Art. 6(1)(a) |
| Calendar reading for Daily Brief | Consent | Art. 6(1)(a) |
| Calendar event creation | Consent / Performance of contract | Art. 6(1)(a)/(b) |
| Daily Brief emails | Consent | Art. 6(1)(a) |
| Push notifications and alarms you configure | Performance of contract | Art. 6(1)(b) |
| Security and fraud prevention | Legitimate interests | Art. 6(1)(f) |
| Legal compliance | Legal obligation | Art. 6(1)(c) |

Special Category Data (GDPR Article 9):

Voice recordings may constitute biometric data under GDPR Article 4(14) and Article 9 if processed "for the purpose of uniquely identifying a natural person." While our processing is for transcription — not identification — this is a contested and evolving legal question.

Our intent is transcription and text/image extraction, not identification, and we do not use voice or photo data to build a biometric identification system. Because voiceprints and facial geometry can nonetheless fall within GDPR Article 9's special categories depending on how they are processed, we treat your affirmative action of using the voice or PixNote features (a clear, separate, opt-in action for each feature, distinct from merely accepting these policies) as explicit consent under Article 9(2)(a) to that specific processing. We have assessed that a full Data Protection Impact Assessment is not currently required given our processing scale and purpose, and will revisit that assessment, per Article 35, as usage grows.

Legitimate Interests Assessment (LIA): Where we rely on legitimate interests as our legal basis, we have assessed that our interests do not override your fundamental rights and freedoms. You may request a copy of our LIA for any specific processing activity by contacting hello@squirrelbrainapp.com.

### 12.3 Your GDPR Rights

You have the following rights under GDPR:

- Right of access (Article 15) — obtain confirmation and a copy of personal data we hold about you
- Right to rectification (Article 16) — correct inaccurate data
- Right to erasure (Article 17) — "right to be forgotten"
- Right to restrict processing (Article 18) — pause processing in certain circumstances
- Right to data portability (Article 20) — receive your data in a structured, commonly used, machine-readable format
- Right to object (Article 21) — object to processing based on legitimate interests
- Rights related to automated decision-making (Article 22) — not to be subject to solely automated decisions producing significant effects; request human review if applicable

Contact us at hello@squirrelbrainapp.com to exercise these rights. We respond within 30 days (extendable by up to 60 days for complex requests, with written notice to you within the first 30 days).

Right to Lodge a Complaint: If you believe we have violated your data protection rights, you have the right to lodge a complaint with your local supervisory authority. Find your authority at: https://edpb.europa.eu/about-edpb/about-edpb/members_en

For UK residents, the relevant authority is the Information Commissioner's Office (ICO): https://ico.org.uk

---

## 13. Additional Rights for California Residents (CCPA/CPRA)

### 13.1 Categories of Personal Information Collected in the Last 12 Months

| CPRA Category | Specific Examples | Collected? | Sources | Business Purpose |
|---|---|---|---|---|
| Identifiers | Email address, Apple user ID, device identifier, push token | Yes | User, Apple | Authentication, notifications, emails |
| Audio, electronic, visual, or similar information | Voice recordings, photographs | Yes | User (microphone/camera) | AI transcription, PixNote |
| Geolocation data (precise) | GPS coordinates at note capture | Yes (optional) | Device GPS | Note tagging; weather and city lookup |
| Internet or other electronic network activity | App feature usage, crash logs | Yes | App automatically | App improvement |
| Inferences drawn from personal information | AI-extracted tasks, dates, priorities | Yes | Derived from above | Note structuring |
| Sensitive Personal Information — Voice/audio recordings | Voice memos | Yes | User (microphone) | Core feature: AI transcription |
| Sensitive Personal Information — Precise geolocation | GPS coordinates | Yes (optional) | Device GPS | Note tagging; weather and city lookup |
| Sensitive Personal Information — Contents of communications | Note text, email content | Yes | User input | Core feature, email delivery |

### 13.2 Sensitive Personal Information — Disclosure and Limitation

Under CPRA, voice recordings and precise geolocation constitute Sensitive Personal Information (SPI). Our use of SPI is limited to the specific purposes described in this policy (providing the AI transcription feature, and the note-tagging and weather/city features, respectively). We do not use SPI for:

- Inferring characteristics about you
- Advertising
- Building consumer profiles beyond what is necessary for the features you use
- Any purpose not disclosed in this policy

You have the right to limit our use of your Sensitive Personal Information to the uses necessary to provide the services you request. Because our current use is already limited to service provision, this right is inherently honored. If you wish to confirm this in writing, contact hello@squirrelbrainapp.com.

### 13.3 Your California Rights

- Right to Know: Request disclosure of categories and specific pieces of personal information collected, the sources, the business/commercial purposes for collection, and the categories of third parties with whom we share it (Categories and sources listed in Section 13.1 above; third parties listed in Section 5)
- Right to Delete: Request deletion of your personal information, subject to exceptions (see Section 10.2)
- Right to Correct: Request correction of inaccurate personal information
- Right to Opt-Out of Sale or Sharing: We do not sell or share (as defined by CPRA) personal information. This right is automatically honored.
- Right to Limit Sensitive PI: Our use is already limited to service provision; see Section 13.2
- Right to Non-Discrimination: We will not deny services, charge higher prices, or provide lower quality services because you exercised a privacy right

To exercise California rights, contact hello@squirrelbrainapp.com. Response within 45 days (extendable by 45 days with notice). We will verify your identity before processing requests.

Authorized Agent Requests: California residents may designate an authorized agent to make requests. The agent must provide written authorization signed by you, or a power of attorney. We may verify the request directly with you.

We voluntarily extend the rights in this Section 13 to all California users regardless of whether Squirrel Brain currently meets CCPA/CPRA's applicability thresholds, given the sensitivity of the voice and photo data the App processes. If required by CPRA, a "Do Not Sell or Share My Personal Information" notice and a Privacy Notice at Collection will be presented at or before the relevant point of collection.

---

## 14. Biometric and Health Data — Illinois, Washington State, and Texas Residents

This section contains specific disclosures and legal notices required by state laws that cover biometric and health-related data. These laws are directly relevant because Squirrel Brain processes voice recordings and photographs.

### 14.1 Illinois Residents — Biometric Information Privacy Act (BIPA) (740 ILCS 14/)

This section constitutes a formal written policy required by BIPA Section 15(a).

What constitutes biometric data. Under BIPA, "biometric identifiers" include voiceprints and retina or iris scans, and "biometric information" includes any information based on a biometric identifier regardless of how it is captured or stored.

Our processing of voice data. Squirrel Brain captures voice recordings and transmits them to OpenAI for transcription. While our intent is transcription only (not speaker identification), the audio may constitute a "voiceprint" or be used to generate one under BIPA's broad definition.

Our processing of photographic data. Images you submit via PixNote or Share Extension may include faces. While our intent is text and date extraction only (not facial recognition), Google Gemini's vision AI (or, when a backup reading is needed, Anthropic's Claude) processes facial geometry as part of image analysis. This may implicate BIPA's provisions regarding face geometry.

Written Consent for Illinois Residents. By using Squirrel Brain's voice recording feature or PixNote/photo feature as an Illinois resident, you are providing written consent to our collection, use, and transmission to third-party AI processors (OpenAI, Anthropic, Google, and xAI, as applicable — see Section 5) of any biometric identifiers or biometric information in your voice recordings and photographs. If you do not consent, do not use these features.

Consistent with BIPA's written-consent requirement, this Section 14.1 discloses that biometric identifiers may be collected, the specific purpose (transcription or vision AI), the retention period above, and the third parties named in Section 5 that will process the data — a disclosure that, together with your affirmative choice to enable and use the microphone or camera/PixNote feature described above, we treat as satisfying BIPA's written-consent requirement. BIPA has a private right of action with statutory damages of $1,000 per negligent violation and $5,000 per intentional/reckless violation.

Retention and Destruction of Biometric Data.

In accordance with BIPA Section 15(a), our retention and destruction schedule for biometric data is as follows:

- Voice recordings: Retained in Supabase until you delete the recording or delete your account. Following account deletion, voice audio files are deleted within 30 days. We do not retain voice recordings beyond this period except as required by applicable law.
- Photographic data: Image files processed by Google Gemini (or, when a backup reading is needed, Anthropic's Claude) are not stored by us on a permanent basis beyond your active account. Image files are retained until you delete the associated note or delete your account. Following account deletion, image data is deleted within 30 days.
- Third-party processing: OpenAI processes voice recordings and live call audio under our Zero Data Retention agreement (Section 5.1). Anthropic, Google, and xAI process your data under their own API terms. See Section 5.
- Destruction: We permanently delete (not merely anonymize) biometric data in our custody upon account deletion within the 30-day window above.

No sale or profit from biometric data. In accordance with BIPA Section 15(c), we do not sell, lease, trade, or otherwise profit from users' biometric identifiers or biometric information.

No disclosure to third parties beyond service providers. In accordance with BIPA Section 15(d), we do not disclose biometric data to third parties other than OpenAI (voice transcription and live voice calls), Google Gemini (image vision analysis), and Anthropic's Claude (image analysis, when a backup reading is needed), as described in this policy and as necessary to complete the service. These disclosures require completion of the service and are not made for independent commercial purposes.

### 14.2 Washington State Residents — My Health MY Data Act (MHMD Act)

The Washington My Health MY Data Act (SB 5351, effective March 31, 2024 for regulated entities; June 30, 2024 for small businesses) broadly defines "consumer health data" to include data that identifies an attempt to obtain a health service, and data that could reasonably be linked to a consumer's health condition.

Voice data. Voice recordings may contain inadvertent disclosures of health information (e.g., references to symptoms, medications, or medical appointments). We process voice data only to the extent necessary to provide transcription services.

Photographic data. Photos may include health-related information (e.g., prescription bottles, medical forms, health tracking app screenshots). Such data is processed only to extract text and structured information you are affirmatively seeking to capture.

Your Washington State rights include:

- Right to confirm whether we collect, share, or sell your consumer health data
- Right to access your consumer health data
- Right to withdraw consent to our collection and sharing of consumer health data
- Right to have your consumer health data deleted
- Right not to be subject to geofencing around healthcare facilities [Note: this app does not implement geofencing]

To exercise these rights, contact hello@squirrelbrainapp.com.

We treat any consumer health data inadvertently captured in a voice recording or photo (see above) as within the scope of this policy's health-data disclosures, and we do not sell consumer health data or use it for any purpose beyond providing the feature you requested. This Section 14.2, together with Sections 3, 5, 6, 8, and 10.9 of this policy, is intended to satisfy the Act's requirement for a consumer health data privacy policy. We obtain your consent to this processing through your affirmative, opt-in use of the voice and PixNote features described in Sections 3.1 and 3.2.

### 14.3 Texas Residents — Capture or Use of Biometric Identifier (CUBI) Act (Tex. Bus. & Com. Code §503.001)

The Texas CUBI Act prohibits capturing biometric identifiers of an individual for commercial purposes without first: (a) informing the individual; and (b) receiving their consent.

Biometric identifiers under CUBI include retina or iris scans, fingerprints, voiceprints, and records of hand or face geometry.

Voice recordings. Squirrel Brain captures voice recordings that may constitute voiceprints under CUBI. By using the voice recording feature as a Texas resident, you consent to our capture and transmission to OpenAI of any voiceprints contained in your recordings for the purpose of transcription.

Photographic data. Images submitted via PixNote may contain face geometry. By using the PixNote or Share Extension feature as a Texas resident, you consent to our transmission to Google Gemini (or, when a backup reading is needed, Anthropic's Claude) of any face geometry data in your images for the purpose of AI vision analysis and text extraction.

We do not sell biometric identifiers. In accordance with CUBI, we do not sell, lease, or otherwise profit from biometric identifiers.

Consistent with CUBI's before-capture consent requirement, your affirmative choice to enable and use the microphone or camera/PixNote feature — together with the disclosures in this Section and in Section 14.1 — is the basis on which we treat CUBI's before-capture consent requirement as satisfied, rather than relying solely on acceptance of this policy.

---

## 15. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, features, or applicable law. When we make changes:

- We will update the "Last Updated" date at the top of this policy
- For material changes, we will: (a) provide in-app notification; (b) where we have your email, send you email notification; and (c) where required by law, seek fresh consent before resuming the affected processing
- For non-material changes (e.g., clarifications, typo corrections), we will update the date without separate notice

Continued use of the app after the effective date of an updated policy constitutes your acknowledgment of the changes. For material changes affecting how we process your data, we will seek fresh consent where legally required.

Where applicable law (including California's) requires affirmative consent rather than mere notice for a material, retroactive change to how we process your data, our in-app change notification will include an explicit opt-in action before the new practice applies to your existing data.

---

## 16. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices:

Email: hello@squirrelbrainapp.com
Website: https://squirrelbrainapp.com

To be appointed under GDPR Article 27 — see Section 12.1. In the meantime, direct EU inquiries to hello@squirrelbrainapp.com.
To be appointed under UK GDPR Article 27 — see Section 12.1. In the meantime, direct UK inquiries to hello@squirrelbrainapp.com.

We respond to all privacy inquiries within 30 days.

---

 Appendix A: Third-Party Data Processors Summary

| Service | Purpose | Data Received | DPA Executed? | Privacy Policy |
|---|---|---|---|---|
| OpenAI | Voice transcription; live voice calls; text-to-speech | Voice/meeting audio, live call audio and call text, text read aloud | In progress | openai.com/policies/privacy-policy |
| Anthropic (Claude) | Note/task structuring; photo organization; backup photo reading; meeting reconciliation; Pip assistant | Typed/transcribed text, extracted photo facts, some photos, meeting transcripts, Pip messages | In progress | anthropic.com/legal/privacy |
| Google (Gemini) | AI vision / image analysis; meeting diarization; search embeddings | Photos, screenshots, meeting audio, item summaries | In progress | policies.google.com/privacy |
| xAI (Grok) | Web search for the Pip assistant | Web search queries | In progress | x.ai/legal/privacy-policy |
| Supabase | Cloud database / storage | All user data | In progress | supabase.com/privacy |
| Resend | Email delivery | Email address, email content | In progress | resend.com/legal/privacy-policy |
| Apple | Auth, push notifications | Apple user ID, notification payloads | N/A (Apple Developer Agreement) | apple.com/legal/privacy |
| Sentry | Crash reports and performance traces | Device and app details, technical error data | To be confirmed | sentry.io/privacy |
| RevenueCat | Subscription management | Purchase status, app user ID | To be confirmed | revenuecat.com/privacy |
| Open-Meteo | Weather and air quality | Location coordinates or a place name; device IP address | To be confirmed | open-meteo.com/en/terms |
| OpenStreetMap | City name from location | Location coordinates | To be confirmed | osmfoundation.org/wiki/Privacy_Policy |
| PostHog | Website analytics only (not used in the app) | Anonymized website usage events | To be confirmed | posthog.com/privacy |

---

 Appendix B: GDPR Records of Processing Activities (Internal Reference)

Our internal Records of Processing Activities is maintained outside this public-facing policy and documents, for each processing activity: controller identity, purposes, data categories, data subject categories, recipients, international transfers and safeguards, retention periods, and security measures, consistent with GDPR Article 30.

---