# RISK_REGISTER

> Known risks, regression zones, and unclear findings for the current work.
> Anything that might break elsewhere, or a bug whose cause is unclear, lands here.

| Risk / finding | Area | Likelihood | Impact | Mitigation / next step |
|----------------|------|------------|--------|------------------------|
|                |      |            |        |                        |
- 2026-07-22 17:48 ET: Vercel prod build ERROR (dpl_FrpRRhRroQpnTZEgJx889GK8h2cD) — my temporary
  supabase/functions/send-pulsemcp-email/index.ts (Deno, untracked, deleted minutes later) was swept
  into a build → tsc "Cannot find name 'Deno'". Superseded by a Ready build at 17:50; prod verified
  correct (200 on new pages). OPEN QUESTION: what triggered those two builds — no local watcher, no
  git hooks, file was never committed; possibly Vercel-side queued/retried builds. If unexplained
  deploys recur, investigate the Vercel dashboard's deployment "source" field.
  LESSON: never park non-Next files inside the website repo tree, even briefly — builds sweep the whole dir.
