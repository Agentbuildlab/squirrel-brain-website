# TASK_QUEUE

> Every known task in priority order. Don't skip a higher-priority item unless it's
> blocked, unsafe, or the user deprioritized it.

Task: sb-website-zdr-privacy-20261007 (Squirrel Brain website, OpenAI Zero Data Retention wording). PR: https://github.com/Agentbuildlab/squirrel-brain-website/pull/8

- [x] List pages, verify providers from app code, agree wording with Adam, the ZDR compliance session and the Called to Pray session
- [x] Apply wording to legal/ and public/legal/ copies, support page fix, build check script
- [x] Independent review PASS, receipt recorded, commit 00f884b pushed, PR 8 opened (GitGuardian green; CodeRabbit skips non-default base branches)
- [x] Support page follow-up: signed-out data is stored on our servers, so "saved only on this phone" was untrue; new sentence in legal/support.md line 41. Reviewer PASS_WITH_WARNINGS, receipt recorded, commit 4312eb0 pushed. PR 8 HEAD TO PUBLISH IS 4312eb0 (the scheduled check-in prompt still names 00f884b; 4312eb0 supersedes it).

BLOCKED: (time-gated, not a decision) Publish must wait until after 04:30 UTC 2026-10-08 (00:30 EDT), when OpenAI's Zero Data Retention setting is fully applied. Adam approved publishing on 2026-10-07 in this session. One-shot check-in scheduled for 00:41 EDT Oct 8 (session-only). Steps at that time:
  1. Confirm PR 8 head is the last reviewed commit, with receipt and green checks; merge into v2-rebuild with a literal `gh pr merge` command.
  2. Production is NOT git-deployed (no GitHub deployments on the repo). Deploy with `npx vercel --prod --yes` from a checkout linked to the Vercel project (primary checkout has .vercel/project.json), at the merged commit.
  3. Read live /legal/privacy-policy, /legal/terms-of-use, /support back with a cache-busting query: 200, no redirect, ZDR paragraph, "Version: 3.1", "October 8, 2026", section 5.11, no "abuse-monitoring".
  4. Tell the "OpenAI Zero Data Retention compliance audit" session (local_ac225c66-13ee-43c9-b32f-16661b074c71) the confirmed publish date and commit so assets/legal.json ships with the same wording, date and version.

Standing duty (never closes; recorded in scripts/check-legal.mjs header and PR 8): change the pages the same day if ZDR is withdrawn, a provider is added or removed, or what is sent to a provider changes. Known upcoming triggers: (a) the "AI systems audit and OpenAI migration" session's plan to move Pip chat, photo reading, text jobs and embeddings to OpenAI; photo reading to OpenAI would falsify "does not send your photos or images to OpenAI" and is not covered by ZDR; decision is back with Adam. (b) squirrel-brain PR 1232 makes Sign in with Apple mandatory; the support page "Do I need an account?" answer must change in that release.

Deferred, optional: sitemap lastModified date; Open-Meteo/OpenStreetMap rows in Terms 5.3 table; narrow the generic banned phrases.

Statuses: queued · active · blocked · verified · complete · deferred
