# Privacy Policy — Squirrel Brain

**Effective Date:** May 27, 2026
**Last Updated:** May 27, 2026
**Version:** 2.0

---

## 1. Introduction

Welcome to Squirrel Brain ("we," "us," or "our"). Squirrel Brain is an AI-powered iOS personal productivity application. We built it to be a trusted personal assistant — a place where you can capture voice memos, photos, notes, and tasks without worrying about what happens to your information.

This Privacy Policy explains what personal information we collect, why we collect it, who we share it with, how long we keep it, your rights over it, and how we protect it. Please read it carefully.

**This app processes voice recordings, photographs, and GPS location data using AI systems operated by third parties.** By using Squirrel Brain, you acknowledge this processing and agree to the practices described here.

If you are located in the **European Economic Area (EEA), United Kingdom, or Switzerland**, Section 12 contains additional disclosures required by the General Data Protection Regulation (GDPR), including your right to lodge a complaint with a supervisory authority.

If you are a **California resident**, Section 13 contains additional disclosures required by the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).

If you are a **resident of Illinois, Washington State, or Texas**, Section 14 contains additional disclosures required by those states' biometric and health data privacy laws, which are directly relevant to voice recordings and photographic data processed by this app.

**Data Controller and Contact for Privacy Matters:**

Squirrel Brain / Acorn Labs LLC
Email: hello@squirrelbrainapp.com
Website: https://squirrelbrainapp.com
Mailing address: 116 Agnes Rd, Suite 200, Knoxville, TN 37919, USA

We respond to all privacy inquiries within **30 days**.

---

## 2. Who This Policy Applies To

This Privacy Policy applies to:

- All users of the Squirrel Brain iOS application
- Visitors to squirrelbrainapp.com
- Users who signed up for the pre-launch waitlist

**Age restriction.** Squirrel Brain is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe a child under 13 has provided us personal information, contact us immediately at hello@squirrelbrainapp.com and we will delete it.

[PLACEHOLDER — LEGAL REVIEW: If you permit users aged 13–17, you must add a parental consent mechanism and specific disclosures. California's Age-Appropriate Design Code Act (AADC, AB 2273) imposes heightened obligations for users under 18 — including default privacy settings, a Data Protection Impact Assessment, and prohibitions on certain data practices. Several other states have enacted similar laws (Maryland APIDA, Connecticut APDA, Texas SCOPE). Before expanding to minors, obtain legal review.]

---

## 3. Information We Collect

### 3.1 Voice Recordings

When you use the microphone feature, the app records your voice on-device. The audio file is transmitted to our servers and to **OpenAI** (our AI processing partner) for transcription and structuring into notes, tasks, and reminders. The original audio file is stored in Supabase so you can replay recordings.

**What this means:** Your voice is captured, transmitted over the internet to OpenAI's servers, and stored in Supabase's cloud database.

**Important notice regarding voice data and biometric laws:** Voice recordings may constitute biometric identifiers under Illinois law (BIPA), Washington State law (My Health MY Data Act), and Texas law (CUBI). If you are a resident of those states, see Section 14 for important additional rights and consent requirements. **We process voice data solely to provide the transcription and note-structuring features you request; we do not use voice data for speaker identification, authentication, or any biometric purpose.**

### 3.2 Photos and Images (PixNote)

When you photograph something, upload from your photo library, or share a screenshot via the Share Extension, the image is transmitted to **Google's Gemini AI vision service** for analysis, text extraction, and date extraction. The extracted data is stored in Supabase as structured notes.

**What this means:** Photos you share with Squirrel Brain — including photos that may depict people, faces, documents, locations, or health-related information — are sent to Google's AI service over the internet.

**Important notice regarding photographic data:** Photos that include faces may result in facial geometry data being processed by Google's Gemini service. This may constitute biometric data under Illinois BIPA, Washington State My Health MY Data Act, and Texas CUBI. See Section 14. We do not intentionally collect facial geometry, and we do not retain or use any biometric data derived from faces for identification purposes.

Photos may also inadvertently capture health-related information (e.g., prescription labels, medical records, health apps). Such data is processed only to the extent necessary to extract the notes and tasks you request.

### 3.3 Typed and Written Notes

Text you type directly is processed by **OpenAI's AI models** to extract tasks, dates, and actionable items. Your original text and the extracted data are stored in Supabase. You retain full ownership of your note content.

### 3.4 Location Data (GPS)

With your explicit permission, Squirrel Brain optionally tags notes with your GPS coordinates at the time of capture. This constitutes **precise geolocation data**, which is a sensitive category under CPRA (California) and other state laws. Location data is stored as note metadata in Supabase.

You can revoke location access at any time in iOS Settings > Privacy & Security > Location Services. Revoking permission prevents future location tagging but does **not** automatically delete previously stored location data. To delete past location tags, delete the associated notes or request account deletion.

### 3.5 Calendar Data

With your explicit permission, Squirrel Brain reads from and writes to your Apple Calendar via Apple's EventKit framework (on-device) to:

- Create new calendar events from AI-extracted dates and times
- Read existing calendar events to compile your Daily Brief

**We do not upload your full calendar to our servers.** Calendar data read for the Daily Brief is processed transiently and is not permanently stored independently of the notes and events you create through the app. Calendar event content summarized in the Daily Brief email may be processed by AI to generate that summary.

### 3.6 Push Notification Tokens

Your device's Apple Push Notification Service (APNs) token is stored in Supabase solely to deliver alarm and reminder notifications you configure. This token is a technical device identifier; it does not identify you by name. It is deleted when you sign out or delete your account.

### 3.7 Email Address

We collect your email address when you:

- Sign in with Apple (Apple may provide your actual address or a privacy relay address)
- Enable the Daily Brief feature (morning summary, 4 PM nudge, and all-clear emails)
- Sign up for the pre-launch waitlist on squirrelbrainapp.com

We use **Resend** to deliver all transactional and Daily Brief emails. Your email address is shared with Resend for this purpose. See Section 5.4.

### 3.8 Authentication Data (Sign In with Apple)

We use Apple's Sign In with Apple for authentication. Apple provides us with a unique anonymous user identifier and, at your option, your email address. We do not receive your Apple ID password. Your Apple Sign In credentials are managed by Apple under Apple's Privacy Policy.

### 3.9 Analytics Data (Planned — Not Yet Active)

We plan to integrate **PostHog** to collect anonymized usage data (feature usage, screen visits, button taps, crash events). When activated:

- Analytics data will **not** include note content, voice recording content, image content, or GPS coordinates
- Data will be aggregated and analyzed to improve app features and reliability
- You will be able to opt out of analytics collection

This policy will be updated with specific PostHog data practices before activation. [PLACEHOLDER — LEGAL REVIEW: Update this section when PostHog is activated. Confirm PostHog data processing region, retention periods, and whether IP addresses are collected (requiring disclosure and potentially consent under GDPR).]

### 3.11 Technical and Device Data

We automatically collect:

- Device type and model
- Operating system version
- App version
- Crash reports and error logs
- General usage patterns (e.g., which features are used, how often)

This information is used to maintain, improve, and debug the app. We do not link crash reports to your notes or voice recordings. Crash logs are retained for approximately 90 days.

### 3.12 Website Data (squirrelbrainapp.com)

When you visit squirrelbrainapp.com:

- Standard web server logs (IP address, browser type, referrer, page visited, timestamp) may be collected by our hosting provider (Vercel)
- If you submit the waitlist form, your email is stored in Supabase for pre-launch communications
- **PostHog analytics are active on squirrelbrainapp.com** (activated May 27, 2026). PostHog collects anonymized usage events — pages visited, button clicks, session data. PostHog is configured with `person_profiles: 'identified_only'`, meaning anonymous visitors are not profiled. No note content, voice recordings, or personal account data is collected via the website analytics. See Section 5.6 for more on PostHog data practices.

[ATTORNEY NOTE: A cookie consent banner / GDPR-compliant opt-in mechanism for PostHog analytics on the website should be evaluated before significant EU traffic is expected. Under GDPR, analytics that set cookies or fingerprint browsers typically require consent. PostHog's EU Cloud option should also be assessed for EU visitors.]

---

## 4. How We Use Your Information

| Purpose | Data Used | Legal Basis (GDPR) |
|---|---|---|
| Core app functionality — transcribing voice, structuring notes, extracting tasks and dates | Voice, photos, notes | Performance of contract (Art. 6(1)(b)) |
| Location tagging of notes | GPS location | Consent (Art. 6(1)(a)) |
| Daily Brief emails and notification emails | Email, calendar data, notes summary | Performance of contract + Consent (Art. 6(1)(a)/(b)) |
| Push notifications and alarms | Push token, alarm settings | Performance of contract (Art. 6(1)(b)) |
| Authentication and account management | Apple user ID, email | Performance of contract (Art. 6(1)(b)) |
| Calendar event creation | Calendar access, extracted dates | Performance of contract + Consent (Art. 6(1)(a)/(b)) |
| App quality improvement | Aggregated/anonymized patterns, crash logs | Legitimate interests (Art. 6(1)(f)) |
| Pre-launch waitlist communications | Email (waitlist) | Consent (Art. 6(1)(a)) |
| Analytics (when activated) | Anonymized usage events | Legitimate interests / Consent (Art. 6(1)(a)/(f)) |
| Legal compliance and fraud prevention | As required | Legal obligation (Art. 6(1)(c)) |

**We do not use your personal information for any purpose incompatible with the purposes listed above.** If we wish to use your data for a new purpose, we will update this policy and, where required, seek your consent.

**Data minimization.** In accordance with GDPR Article 5(1)(c) and the principle of data minimization, we collect only the data necessary for the specific purpose listed. For example, location data is only collected when you choose to tag a note; calendar data is only read when you use the Daily Brief feature; photos are only processed when you use the PixNote feature.

---

## 5. Third-Party Services That Receive Your Data

We share your data with the following third-party services solely to operate the app features described in this policy. We do not authorize these services to use your data for their own advertising or marketing purposes.

### 5.1 OpenAI

**What we share:** Content of voice recordings (as audio files for transcription) and text of typed notes.
**Why:** AI transcription of voice memos and AI structuring of notes into tasks, dates, and reminders.
**Data processing location:** United States
**OpenAI Privacy Policy:** https://openai.com/policies/privacy-policy
**OpenAI API Terms:** https://openai.com/policies/terms-of-use

[PLACEHOLDER — LEGAL REVIEW: (a) Confirm OpenAI's current API data retention policy — OpenAI's API terms state they do not use API inputs/outputs to train models by default, but confirm this is your agreement tier and that zero-data-retention (ZDR) is available and activated if needed. (b) Execute a GDPR Data Processing Agreement (DPA) with OpenAI under GDPR Article 28 before processing any EU resident data. OpenAI offers a DPA; request it. (c) Confirm the applicable Standard Contractual Clauses or other transfer mechanism for EU data transfers to OpenAI. (d) Update the specific API product name (GPT-4o-mini or successor) for accuracy in the Privacy Nutrition Label.]

### 5.2 Google (Gemini AI)

**What we share:** Photos, screenshots, and images submitted through the PixNote or Share Extension features.
**Why:** AI vision processing — text extraction, date extraction, and scene description from images.
**Data processing location:** United States (Google Cloud)
**Google Privacy Policy:** https://policies.google.com/privacy
**Google Cloud Data Processing Terms:** https://cloud.google.com/terms/data-processing-addendum

[PLACEHOLDER — LEGAL REVIEW: (a) Confirm which Google Cloud/Gemini API tier you are using and whether that tier includes a Data Processing Addendum that governs your use — Google Cloud generally offers a DPA under its Cloud Terms. Execute the DPA under GDPR Article 28 before sending EU user images. (b) Confirm Google's retention terms for API image inputs — standard Gemini API terms state inputs are not used to train models, but verify this for your specific API tier. (c) Confirm applicable transfer mechanism (Google is covered by EU-US Data Privacy Framework). (d) Assess whether photos submitted may include health-related data and whether Google Cloud HIPAA BAA is needed (likely not for a general productivity app, but note this risk).]

### 5.3 Supabase

**What we share:** All user-generated content — notes, voice audio files, PixNote image metadata, structured task lists, location tags, alarm settings, push notification tokens, email addresses, Apple user identifiers, and device information.
**Why:** Cloud database and file storage infrastructure.
**Supabase Privacy Policy:** https://supabase.com/privacy
**Supabase DPA:** https://supabase.com/legal/dpa

[PLACEHOLDER — LEGAL REVIEW: (a) Confirm the Supabase project database region. Supabase allows selection of AWS region — if you have EU users, consider provisioning in eu-central-1 or eu-west-1 to reduce cross-border transfer issues. (b) Execute Supabase's DPA under GDPR Article 28. (c) Confirm Supabase's encryption-at-rest and in-transit practices for the specific region chosen. (d) Supabase participates in the EU-US Data Privacy Framework via their hosting providers — confirm the specific transfer mechanism in writing.]

### 5.4 Resend

**What we share:** Your email address and the content of Daily Brief emails and notification emails.
**Why:** Transactional email delivery service (Daily Brief, 4 PM nudge, all-clear notifications).
**Resend Privacy Policy:** https://resend.com/legal/privacy-policy

[PLACEHOLDER — LEGAL REVIEW: Review Resend's DPA availability and execute one for EU users under GDPR Article 28. Confirm Resend's data retention for email delivery logs.]

### 5.5 Apple

**What we share:** Apple anonymous user identifier (Sign In with Apple authentication), notification payloads (delivered via Apple Push Notification Service / APNs). Calendar data is accessed on-device through EventKit and does not flow through our servers except as described in Section 3.5.
**Why:** Authentication, push notification delivery, on-device calendar access.
**Apple Privacy Policy:** https://www.apple.com/legal/privacy/

Note: Apple's Sign In with Apple and APNs operate under Apple's Developer Program agreements and Privacy Policy. Apple is a data controller for its own processing of your Apple ID and APNs delivery.

### 5.6 PostHog (Planned — Not Yet Active)

**What we share (when activated):** Anonymized usage events — feature interactions, screen views, button taps. No note content, voice recordings, photos, GPS coordinates, or email content.
**Why:** Product analytics to understand how features are used and improve the app.
**PostHog Privacy Policy:** https://posthog.com/privacy

[PLACEHOLDER — LEGAL REVIEW: Before activating PostHog, confirm: (a) PostHog data processing region (EU Cloud or US); (b) whether IP addresses are collected and masked; (c) applicable GDPR legal basis (legitimate interests vs. consent) and whether a cookie/tracking consent mechanism is required; (d) update this section with specific retention period for analytics events.]

---

## 6. What We Do Not Do

We believe in being explicit about what we do **not** do with your data:

- **We do not sell your personal information** to third parties, data brokers, or advertisers.
- **We do not share your personal information for cross-context behavioral advertising.**
- **We do not use your data for advertising targeting** on any platform.
- **We do not share your data with other Squirrel Brain users.** All data is private to your account.
- **We do not share your data with data brokers** or marketing companies.
- **We do not collect payment information.** If in-app purchases or subscriptions are introduced, they will be processed exclusively by Apple's App Store and governed by Apple's payment terms.
- **We do not use your voice recordings, photos, or note content for any purpose other than providing the app features you request** and, only in aggregated, anonymized form, improving those features.
- **We do not use your voice recordings or photos to create biometric profiles, train facial recognition systems, or identify you by voice or facial geometry.**
- **We do not retain biometric identifiers** (voice patterns, facial geometry) beyond the period necessary to complete the specific AI processing transaction you initiated.

---

## 7. AI Processing Disclosure

Squirrel Brain is fundamentally AI-powered. A substantial portion of your personal information — voice recordings, photos, and written notes — is processed by third-party AI systems (OpenAI and Google Gemini).

**Key disclosures:**

- **Automated decision-making and structuring:** The app uses AI to automatically structure your voice, images, and text into tasks, reminders, calendar events, and notes. These are organizational tools you can always review, edit, and delete. We do not consider these to constitute high-stakes "automated decisions" under GDPR Article 22 because they do not produce legally significant or similarly significant effects on you.
- **Accuracy:** AI transcription and data extraction is not perfect. Always review AI-generated tasks, dates, and calendar events before relying on them for time-sensitive matters.
- **Third-party AI models:** Your content is processed by OpenAI's and Google's AI models. While we have contractual data processing terms with these providers, we are not the operators of their underlying AI systems.
- **No high-stakes profiling:** We do not use AI to make determinations about your creditworthiness, employment status, insurance eligibility, legal status, health diagnoses, or any other significant life determination.
- **AI-generated content is a tool, not authoritative:** Squirrel Brain does not provide medical, legal, financial, or professional advice. AI-extracted information from your notes is a personal organizational aid only.

**EU AI Act Notice:** The EU AI Act (Regulation 2024/1689) becomes fully applicable in August 2026. We are assessing our features against the Act's obligations for providers and deployers of AI systems.

[PLACEHOLDER — LEGAL REVIEW: Have counsel assess each AI-powered feature against the EU AI Act's risk classification (prohibited, high-risk, limited-risk, minimal-risk). Pay particular attention to: (a) whether AI-driven reminders or nudges could constitute "subliminal manipulation" (prohibited); (b) whether any feature touches on health or personal safety (potentially high-risk); (c) the Act's transparency obligations for limited-risk AI systems including disclosure requirements toward users; (d) the Act's requirements for technical documentation and conformity assessments for higher-risk systems. Also assess US state AI transparency laws: Colorado SB21-169, Connecticut SB 1103, Texas HB 4337, Illinois HB 3773 all impose varying disclosure and risk-assessment obligations for AI systems that make "consequential decisions." Note: EU AI Act obligations for General Purpose AI providers at companies like OpenAI and Google may shift who bears primary compliance obligations — have counsel advise on your supply chain of AI obligations.]

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
| Analytics data (when activated) | 12 months | Anonymized on account deletion; not linked to personal data |
| Crash logs | 90 days from generation | N/A |
| AI provider processing logs | Subject to OpenAI/Google API terms — see Sections 5.1 and 5.2 | Per OpenAI/Google terms |
| Pre-launch waitlist emails | Until account created, list dissolved, or unsubscription | Deleted within 30 days of dissolution/unsubscription |

[PLACEHOLDER — LEGAL REVIEW: GDPR Article 5(1)(e) requires storage limitation — retain data "no longer than necessary." The 30-day post-deletion window is a reasonable operational standard, but document the business justification in your Records of Processing Activities (RoPA). GDPR also requires you to maintain a RoPA under Article 30 if you process personal data of EU residents at scale — create and maintain this internal document. Additionally: (a) confirm that Supabase deletion cascade rules actually enforce these timelines technically; (b) establish a deletion audit log; (c) confirm with OpenAI and Google their actual API data retention windows and obtain these in writing.]

---

## 9. Data Security

We implement industry-standard security measures to protect your personal information:

- **In transit:** TLS/HTTPS encryption for all data transmissions between the app, our servers, and third-party services
- **At rest:** Encryption at rest in Supabase (AES-256 or equivalent)
- **Access controls:** Row-level security (RLS) in Supabase restricts each user's data to their account; team member access to user data is limited to what is necessary
- **Credential management:** API keys stored as environment variables, not in application code
- **Minimal data access:** We practice least-privilege access for internal systems

No method of transmission or storage is 100% secure. If you discover a security vulnerability, please contact us responsibly at: hello@squirrelbrainapp.com

**Data breach notification.** In the event of a data breach that poses a risk to your rights and freedoms, we will:

- Notify the relevant supervisory authority within **72 hours** of becoming aware of the breach (GDPR Article 33; UK GDPR; applicable EU member state laws)
- Notify affected users **without undue delay** when the breach is likely to result in a high risk to your rights (GDPR Article 34)
- Comply with US state breach notification laws, which vary by state but generally require notification **without unreasonable delay** and within specific statutory windows (e.g., 30 days in California, 45 days in Florida, 60 days in many other states)

[PLACEHOLDER — LEGAL REVIEW: Establish an internal incident response plan that includes: (a) a breach detection and classification procedure; (b) an escalation and 72-hour supervisory notification workflow; (c) a template for user breach notifications; (d) a log of breach incidents for GDPR Article 33(5) recordkeeping. Also verify that Supabase, OpenAI, and Google contractually commit to notifying you of sub-processor breaches within a timeframe that allows you to meet your own 72-hour reporting obligation.]

---

## 10. Your Rights and Choices

You have the following rights with respect to your personal information. To exercise any right, contact us at hello@squirrelbrainapp.com. We will respond within **30 days** (with a possible 60-day extension for complex requests, with notice to you). We will not discriminate against you for exercising these rights.

### 10.1 Right of Access

Request a copy of the personal information we hold about you. We will provide this in a commonly used electronic format.

### 10.2 Right to Deletion (Right to Erasure)

Request deletion of your personal information. You can delete your account and all associated data at any time.

**To delete your account in-app:** Go to **Settings > Account > Delete Account > Confirm**. This permanently deletes your account and queues your personal data for deletion within 30 days. (Required per Apple App Store Guidelines Section 5.1.1(v).)

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

Revoke location, microphone, camera, photo library, calendar, or notification permissions at any time in: **iOS Settings > Privacy & Security**. Revoking a permission does not delete previously collected data; use account deletion or the contact methods above for data deletion.

### 10.9 Do Not Sell or Share (California and applicable US states)

We do not sell or share your personal information. This right is therefore automatically honored. If you wish to confirm or document this, contact us.

### 10.10 Opt Out of Analytics (When Activated)

When PostHog analytics are activated, we will provide an in-app opt-out mechanism. [PLACEHOLDER — Update with specific opt-out mechanism when PostHog is deployed.]

---

## 11. Data Transfers

Squirrel Brain is operated from the United States. Your personal information is processed and stored in the US by us and by our third-party service providers (OpenAI, Google, Supabase, Resend). If you are located outside the United States, your data will be transferred to and processed in the US.

**For EEA, UK, and Swiss users:** Data transfers to the United States must be made under a valid transfer mechanism under GDPR Chapter V. The specific mechanisms applicable to each of our providers are as follows:

| Service Provider | Transfer Mechanism |
|---|---|
| OpenAI | [PLACEHOLDER — Confirm: Standard Contractual Clauses (SCCs) or EU-US Data Privacy Framework (DPF). Verify in OpenAI's DPA.] |
| Google (Gemini / Google Cloud) | EU-US Data Privacy Framework (Google LLC is certified); SCCs also available via Google Cloud DPA |
| Supabase | [PLACEHOLDER — Confirm Supabase's transfer mechanism — likely SCCs via AWS; verify in Supabase DPA] |
| Resend | [PLACEHOLDER — Confirm Resend's transfer mechanism; request DPA] |
| PostHog | [PLACEHOLDER — Confirm when activated; PostHog EU Cloud available] |

[PLACEHOLDER — LEGAL REVIEW: (a) Execute valid GDPR Article 28 Data Processing Agreements with each processor that handles EU personal data. These are legally required — failure to have them is a direct GDPR violation subject to fines. (b) Verify that each SCC/DPF mechanism is current (post-Schrems II and Schrems III if applicable). (c) Conduct a Transfer Impact Assessment (TIA) for US providers under EDPB guidance. (d) Consider offering EU users a separately-hosted EU data option as the product matures.]

---

## 12. Additional Rights for EEA, UK, and Swiss Users (GDPR)

### 12.1 Data Controller Identity

For GDPR purposes, the data controller is:

Acorn Labs LLC
Country of establishment: United States
Email: hello@squirrelbrainapp.com

**Data Protection Officer (DPO):**

[PLACEHOLDER — LEGAL REVIEW: Under GDPR Article 37, a DPO is required if: (a) you are a public authority; (b) your core activities require large-scale systematic monitoring of individuals; or (c) your core activities consist of large-scale processing of special category data. Voice recordings may constitute biometric data (special category) — assess whether the scale of processing triggers the DPO requirement. If a DPO is required, their contact details must be disclosed here. If a DPO is not required, state that and the legal basis for that conclusion.]

**EU Representative (if applicable):**

[PLACEHOLDER — LEGAL REVIEW: Under GDPR Article 27, if you are not established in the EU/EEA but process personal data of EU residents, you must designate an EU Representative. If you are a US-based company without EU offices, you likely need one. Services like VeraSafe and EDPO provide EU Representative services. The representative's contact details must be disclosed here.]

### 12.2 Legal Basis for Processing

| Processing Activity | Legal Basis | GDPR Article |
|---|---|---|
| Core app features — voice transcription, note structuring, task extraction | Performance of contract | Art. 6(1)(b) |
| PixNote / photo processing | Performance of contract | Art. 6(1)(b) |
| Location tagging (optional) | Consent | Art. 6(1)(a) |
| Calendar reading for Daily Brief | Consent | Art. 6(1)(a) |
| Calendar event creation | Consent / Performance of contract | Art. 6(1)(a)/(b) |
| Daily Brief emails | Consent | Art. 6(1)(a) |
| Push notifications and alarms you configure | Performance of contract | Art. 6(1)(b) |
| Analytics (when activated) | Legitimate interests / Consent | Art. 6(1)(a)/(f) |
| Security and fraud prevention | Legitimate interests | Art. 6(1)(f) |
| Legal compliance | Legal obligation | Art. 6(1)(c) |

**Special Category Data (GDPR Article 9):**

Voice recordings may constitute **biometric data** under GDPR Article 4(14) and Article 9 if processed "for the purpose of uniquely identifying a natural person." While our processing is for transcription — not identification — this is a contested and evolving legal question.

[PLACEHOLDER — LEGAL REVIEW: (a) Have counsel assess whether Squirrel Brain's voice processing constitutes biometric data processing under GDPR Article 9, specifically whether OpenAI's processing pipeline involves any speaker identification as an intermediate step. (b) If Article 9 applies, you need an Article 9(2) legal basis — most likely explicit consent under Article 9(2)(a), which requires a separate, specific, and explicit consent request (not bundled with Terms of Service acceptance). (c) If Article 9 applies, assess whether a Data Protection Impact Assessment (DPIA) is mandatory under Article 35. Large-scale processing of biometric or genetic data is explicitly listed in Article 35(3)(b) as requiring a DPIA. (d) Similarly assess whether photos that may include health-related information or facial images constitute special category data requiring Article 9 compliance.]

**Legitimate Interests Assessment (LIA):** Where we rely on legitimate interests as our legal basis, we have assessed that our interests do not override your fundamental rights and freedoms. You may request a copy of our LIA for any specific processing activity by contacting hello@squirrelbrainapp.com.

### 12.3 Your GDPR Rights

You have the following rights under GDPR:

- **Right of access (Article 15)** — obtain confirmation and a copy of personal data we hold about you
- **Right to rectification (Article 16)** — correct inaccurate data
- **Right to erasure (Article 17)** — "right to be forgotten"
- **Right to restrict processing (Article 18)** — pause processing in certain circumstances
- **Right to data portability (Article 20)** — receive your data in a structured, commonly used, machine-readable format
- **Right to object (Article 21)** — object to processing based on legitimate interests
- **Rights related to automated decision-making (Article 22)** — not to be subject to solely automated decisions producing significant effects; request human review if applicable

Contact us at hello@squirrelbrainapp.com to exercise these rights. We respond within **30 days** (extendable by up to 60 days for complex requests, with written notice to you within the first 30 days).

**Right to Lodge a Complaint:** If you believe we have violated your data protection rights, you have the right to lodge a complaint with your local supervisory authority. Find your authority at: https://edpb.europa.eu/about-edpb/about-edpb/members_en

For UK residents, the relevant authority is the Information Commissioner's Office (ICO): https://ico.org.uk

---

## 13. Additional Rights for California Residents (CCPA/CPRA)

### 13.1 Categories of Personal Information Collected in the Last 12 Months

| CPRA Category | Specific Examples | Collected? | Sources | Business Purpose |
|---|---|---|---|---|
| Identifiers | Email address, Apple user ID, device identifier, push token | Yes | User, Apple | Authentication, notifications, emails |
| Audio, electronic, visual, or similar information | Voice recordings, photographs | Yes | User (microphone/camera) | AI transcription, PixNote |
| Geolocation data (precise) | GPS coordinates at note capture | Yes (optional) | Device GPS | Note tagging |
| Internet or other electronic network activity | App feature usage, crash logs | Yes | App automatically | App improvement |
| Inferences drawn from personal information | AI-extracted tasks, dates, priorities | Yes | Derived from above | Note structuring |
| Sensitive Personal Information — Voice/audio recordings | Voice memos | Yes | User (microphone) | Core feature: AI transcription |
| Sensitive Personal Information — Precise geolocation | GPS coordinates | Yes (optional) | Device GPS | Note tagging |
| Sensitive Personal Information — Contents of communications | Note text, email content | Yes | User input | Core feature, email delivery |

### 13.2 Sensitive Personal Information — Disclosure and Limitation

Under CPRA, voice recordings and precise geolocation constitute **Sensitive Personal Information (SPI)**. Our use of SPI is limited to the specific purposes described in this policy (providing the AI transcription feature and note-tagging feature respectively). We do not use SPI for:

- Inferring characteristics about you
- Advertising
- Building consumer profiles beyond what is necessary for the features you use
- Any purpose not disclosed in this policy

You have the right to **limit our use of your Sensitive Personal Information** to the uses necessary to provide the services you request. Because our current use is already limited to service provision, this right is inherently honored. If you wish to confirm this in writing, contact hello@squirrelbrainapp.com.

### 13.3 Your California Rights

- **Right to Know:** Request disclosure of categories and specific pieces of personal information collected, the sources, the business/commercial purposes for collection, and the categories of third parties with whom we share it (Categories and sources listed in Section 13.1 above; third parties listed in Section 5)
- **Right to Delete:** Request deletion of your personal information, subject to exceptions (see Section 10.2)
- **Right to Correct:** Request correction of inaccurate personal information
- **Right to Opt-Out of Sale or Sharing:** We do not sell or share (as defined by CPRA) personal information. This right is automatically honored.
- **Right to Limit Sensitive PI:** Our use is already limited to service provision; see Section 13.2
- **Right to Non-Discrimination:** We will not deny services, charge higher prices, or provide lower quality services because you exercised a privacy right

To exercise California rights, contact hello@squirrelbrainapp.com. Response within **45 days** (extendable by 45 days with notice). We will verify your identity before processing requests.

**Authorized Agent Requests:** California residents may designate an authorized agent to make requests. The agent must provide written authorization signed by you, or a power of attorney. We may verify the request directly with you.

[PLACEHOLDER — LEGAL REVIEW: (a) Confirm whether CCPA/CPRA applicability thresholds apply to your company: annual gross revenues exceeding $25 million; OR annual purchase, receipt, sale, or sharing of personal information of 100,000+ California consumers or households; OR 50%+ of annual revenues from selling California consumers' personal information. A small startup may not meet these thresholds, but voluntary compliance and disclosure of these rights is strongly advisable given the nature of data processed. (b) If thresholds are met, a "Do Not Sell or Share My Personal Information" link or prominent notice is required on the website and possibly in the app. (c) Confirm whether the CPRA-required "Privacy Notice at Collection" is presented to users at or before collection — this is a separate requirement from the full Privacy Policy. (d) If you have 100+ California employees, California-specific employee privacy disclosures are also required.]

---

## 14. Biometric and Health Data — Illinois, Washington State, and Texas Residents

This section contains specific disclosures and legal notices required by state laws that cover biometric and health-related data. These laws are directly relevant because Squirrel Brain processes voice recordings and photographs.

### 14.1 Illinois Residents — Biometric Information Privacy Act (BIPA) (740 ILCS 14/)

**This section constitutes a formal written policy required by BIPA Section 15(a).**

**What constitutes biometric data.** Under BIPA, "biometric identifiers" include voiceprints and retina or iris scans, and "biometric information" includes any information based on a biometric identifier regardless of how it is captured or stored.

**Our processing of voice data.** Squirrel Brain captures voice recordings and transmits them to OpenAI for transcription. While our intent is transcription only (not speaker identification), the audio may constitute a "voiceprint" or be used to generate one under BIPA's broad definition.

**Our processing of photographic data.** Images you submit via PixNote or Share Extension may include faces. While our intent is text and date extraction only (not facial recognition), Google Gemini's vision AI processes facial geometry as part of image analysis. This may implicate BIPA's provisions regarding face geometry.

**Written Consent for Illinois Residents.** By using Squirrel Brain's voice recording feature or PixNote/photo feature as an Illinois resident, you are providing written consent to our collection, use, and transmission to third-party AI processors (OpenAI and Google Gemini) of any biometric identifiers or biometric information in your voice recordings and photographs. If you do not consent, do not use these features.

[PLACEHOLDER — LEGAL REVIEW: BIPA Section 15(b) requires written consent **before** collection — consent buried in a Privacy Policy at the end of onboarding may not satisfy the "written consent" requirement. Best practice is a BIPA-specific in-app consent dialog (separate from Terms of Service) displayed to Illinois users specifically before first use of the microphone and before first use of the camera/photo features. This dialog should: (a) inform the user that biometric data may be collected; (b) state the specific purpose (transcription/vision AI); (c) state the retention period; (d) name the third parties (OpenAI, Google); and (e) obtain an affirmative opt-in tap. Consult BIPA-specialized counsel. BIPA has a private right of action with statutory damages of $1,000 per negligent violation and $5,000 per intentional/reckless violation — this is the primary US class action risk for this app.]

**Retention and Destruction of Biometric Data.**

In accordance with BIPA Section 15(a), our retention and destruction schedule for biometric data is as follows:

- **Voice recordings:** Retained in Supabase until you delete the recording or delete your account. Following account deletion, voice audio files are deleted within **30 days**. We do not retain voice recordings beyond this period except as required by applicable law.
- **Photographic data:** Image files processed by Google Gemini are not stored by us on a permanent basis beyond your active account. Image files are retained until you delete the associated note or delete your account. Following account deletion, image data is deleted within **30 days**.
- **Third-party processing:** OpenAI and Google Gemini process your data under API terms that do not retain API inputs beyond 30 days per their standard API terms. See Sections 5.1 and 5.2.
- **Destruction:** We permanently delete (not merely anonymize) biometric data in our custody upon account deletion within the 30-day window above.

**No sale or profit from biometric data.** In accordance with BIPA Section 15(c), we do not sell, lease, trade, or otherwise profit from users' biometric identifiers or biometric information.

**No disclosure to third parties beyond service providers.** In accordance with BIPA Section 15(d), we do not disclose biometric data to third parties other than OpenAI (voice transcription) and Google Gemini (image vision analysis) as described in this policy and as necessary to complete the service. These disclosures require completion of the service and are not made for independent commercial purposes.

### 14.2 Washington State Residents — My Health MY Data Act (MHMD Act)

The Washington My Health MY Data Act (SB 5351, effective March 31, 2024 for regulated entities; June 30, 2024 for small businesses) broadly defines "consumer health data" to include data that identifies an attempt to obtain a health service, and data that could reasonably be linked to a consumer's health condition.

**Voice data.** Voice recordings may contain inadvertent disclosures of health information (e.g., references to symptoms, medications, or medical appointments). We process voice data only to the extent necessary to provide transcription services.

**Photographic data.** Photos may include health-related information (e.g., prescription bottles, medical forms, health tracking app screenshots). Such data is processed only to extract text and structured information you are affirmatively seeking to capture.

**Your Washington State rights include:**

- Right to confirm whether we collect, share, or sell your consumer health data
- Right to access your consumer health data
- Right to withdraw consent to our collection and sharing of consumer health data
- Right to have your consumer health data deleted
- Right not to be subject to geofencing around healthcare facilities [Note: this app does not implement geofencing]

To exercise these rights, contact hello@squirrelbrainapp.com.

[PLACEHOLDER — LEGAL REVIEW: (a) The MHMD Act's scope is expansive and has been the subject of early enforcement activity. Have Washington-counsel assess whether voice data and photo data as processed by Squirrel Brain fall within MHMD's definition of "consumer health data." (b) The Act requires a separate "consumer health data privacy policy" — assess whether a standalone policy or a clearly designated section like this one satisfies that requirement. (c) The Act requires specific consent for collection and sharing of consumer health data — assess whether existing consent mechanisms are adequate or whether a Washington-specific consent flow is needed. (d) The Act prohibits sale of consumer health data without valid authorization — confirm your no-sale commitment applies to health data specifically.]

### 14.3 Texas Residents — Capture or Use of Biometric Identifier (CUBI) Act (Tex. Bus. & Com. Code §503.001)

The Texas CUBI Act prohibits capturing biometric identifiers of an individual for commercial purposes without first: (a) informing the individual; and (b) receiving their consent.

**Biometric identifiers under CUBI** include retina or iris scans, fingerprints, voiceprints, and records of hand or face geometry.

**Voice recordings.** Squirrel Brain captures voice recordings that may constitute voiceprints under CUBI. By using the voice recording feature as a Texas resident, you consent to our capture and transmission to OpenAI of any voiceprints contained in your recordings for the purpose of transcription.

**Photographic data.** Images submitted via PixNote may contain face geometry. By using the PixNote or Share Extension feature as a Texas resident, you consent to our transmission to Google Gemini of any face geometry data in your images for the purpose of AI vision analysis and text extraction.

**We do not sell biometric identifiers.** In accordance with CUBI, we do not sell, lease, or otherwise profit from biometric identifiers.

[PLACEHOLDER — LEGAL REVIEW: (a) Texas CUBI enforcement and litigation is increasing. Have Texas-licensed counsel assess whether this disclosure is sufficient or whether a separate in-app consent mechanism is required. (b) CUBI's consent requirement is "before" capture — assess whether consent given at policy acceptance before first feature use satisfies the "before" requirement. (c) Assess whether Texas HB 4 (2023 Texas Data Privacy and Security Act) imposes additional obligations for biometric or sensitive data.]

---

## 15. Changes to This Privacy Policy

We may update this Privacy Policy from time to time to reflect changes in our practices, features, or applicable law. When we make changes:

- We will update the **"Last Updated"** date at the top of this policy
- For **material changes**, we will: (a) provide in-app notification; (b) where we have your email, send you email notification; and (c) where required by law, seek fresh consent before resuming the affected processing
- For **non-material changes** (e.g., clarifications, typo corrections), we will update the date without separate notice

Continued use of the app after the effective date of an updated policy constitutes your acknowledgment of the changes. For material changes affecting how we process your data, we will seek fresh consent where legally required.

[PLACEHOLDER — LEGAL REVIEW: Some US state laws (e.g., California) require affirmative consent, not just notice, for retroactive material changes to data practices. Ensure your change notification mechanism is capable of obtaining fresh consent where needed.]

---

## 16. Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices:

**Email:** hello@squirrelbrainapp.com
**Website:** https://squirrelbrainapp.com
**Mailing address:** 116 Agnes Rd, Suite 200, Knoxville, TN 37919, USA

[PLACEHOLDER — EU Representative: if required under GDPR Article 27, insert their contact details here.]
[PLACEHOLDER — UK Representative: if required under UK GDPR Article 27, insert their contact details here.]

We respond to all privacy inquiries within **30 days**.

---

## Appendix A: Third-Party Data Processors Summary

| Service | Purpose | Data Received | DPA Executed? | Privacy Policy |
|---|---|---|---|---|
| OpenAI | AI transcription and note structuring | Voice recordings, typed notes | In progress | openai.com/policies/privacy-policy |
| Google (Gemini) | AI vision / image analysis | Photos, screenshots | In progress | policies.google.com/privacy |
| Supabase | Cloud database / storage | All user data | In progress | supabase.com/privacy |
| Resend | Email delivery | Email address, email content | In progress | resend.com/legal/privacy-policy |
| Apple | Auth, push notifications | Apple user ID, notification payloads | N/A (Apple Developer Agreement) | apple.com/legal/privacy |
| PostHog | Analytics (planned) | Anonymized usage events | Before activation | posthog.com/privacy |

---

## Appendix B: GDPR Records of Processing Activities (Internal Reference)

[PLACEHOLDER — LEGAL REVIEW: GDPR Article 30 requires organizations that regularly process personal data to maintain written Records of Processing Activities (RoPA). This Appendix B is a placeholder for that internal document. The RoPA is not required to be published (it is for supervisory authority inspection), but it must exist. Each processing activity must document: controller identity; purposes; data categories; data subject categories; recipients; international transfers and safeguards; retention periods; security measures. Prepare this document with counsel.]

---
