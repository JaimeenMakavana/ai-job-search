# Rank (runtime-neutral)

Canonical: `.claude/commands/rank.md` and `.claude/skills/job-application-assistant/04-job-evaluation.md`

Preserve upstream gates and honesty rules:

- Eligibility / work-rights gate (hard stop when the posting requires citizenship/PR the candidate does not have).
- Language gate (undeclared language = fail; declared-but-below-bar = flag).
- Location is a veto, not a score in the upstream file. A FAIL still excludes the job.
- Never score from title alone. Fetch posting text. Dead postings become `expired`.
- A high score does **not** mean apply automatically.
- Triage scores are not a substitute for `/apply` evaluation.

## India software-engineering overlay

Keep upstream dimension **definitions** (what “technical match” means). For this fork’s triage totals, map to 100 points as follows:

| Factor | Points |
|--------|--------|
| Skill match | 25 |
| Experience match | 20 |
| Seniority match | 10 |
| Location / work-mode match | 10 |
| Career alignment | 10 |
| ATS / keyword compatibility | 10 |
| Company attractiveness | 5 |
| Salary / compensation | 5 |
| Growth / learning potential | 5 |
| **Total** | **100** |

Return for each job: `score`, `verdict`, `strengths`, `gaps`, `reasons`, `recommended_action`.

Recommended actions: `APPLY` | `CONSIDER` | `SKIP`.

Suggested mapping (still overridden by gates and deal-breakers):

- 75+: Strong Fit → `APPLY` only if no hard gaps; otherwise `CONSIDER`
- 60–74: Good Fit → `CONSIDER`
- 45–59: Moderate Fit → `CONSIDER` or `SKIP`
- <45: `SKIP`

If the runtime supports subagents, score in parallel batches as upstream describes. Otherwise score sequentially with the same rubric. Persist additive fields on `seen_jobs.json`; do not restructure the file.
