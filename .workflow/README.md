# Runtime-neutral workflow index

This directory describes **what** each job-search workflow does. It does not copy Claude Code tool names.

Canonical specifications (read these; do not duplicate them):

| Task | Canonical spec |
|------|----------------|
| Setup | `.claude/commands/setup.md` |
| Scrape | `.claude/skills/job-scraper/SKILL.md` |
| Rank | `.claude/commands/rank.md` |
| Apply | `.claude/commands/apply.md` |
| Interview | `.claude/commands/interview.md` |
| Outcome | `.claude/commands/outcome.md` |
| Profile / fit / CV / letter | `.claude/skills/job-application-assistant/` |
| Portal CLIs | `.agents/skills/*/SKILL.md` |

Cursor discovers `.agents/skills/` and `.claude/skills/` natively. Antigravity discovers `.agents/skills/`. Do not copy those trees into `.cursor/` or `.agent/`.

Market for this fork: **India**. Enabled search portals: `linkedin-search`, `freehire-search`. Danish portals remain on disk with `enabled: false`.
