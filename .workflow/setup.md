# Setup (runtime-neutral)

Canonical: `.claude/commands/setup.md`

Populate the candidate profile from sources the user actually supplies. Do not invent facts.

Paths (same as upstream):

1. Files under `documents/` (CV, LinkedIn export, diplomas, references, past applications).
2. A single CV the user pastes or attaches.
3. A structured interview, section by section.

Write confirmed facts into:

- `CLAUDE.md`
- `.claude/skills/job-application-assistant/01-candidate-profile.md` (and related `02`–`07` files as specified)
- `cv/main_example.tex` when the user has provided CV facts
- `.claude/skills/job-scraper/search-queries.md`

If a field is unknown, leave it blank and ask. Never guess name, employers, dates, metrics, or skills.

This fork already has India search queries in `search-queries.md`. Do not replace them with Denmark defaults.
