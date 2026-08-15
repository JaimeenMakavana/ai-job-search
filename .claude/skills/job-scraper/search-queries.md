# Search Queries for Job Scraper

<!-- SETUP: India software / frontend / AI engineering. Do not overfit to exact titles. -->

## Installed portal CLIs (primary for `/scrape`)

`/scrape` discovers every portal skill under `.agents/skills/*/SKILL.md` and runs its CLI first. For this fork:

- **Use:** `linkedin-search`, `freehire-search`
- **Installed but skipped (`enabled: false`):** `jobbank-search`, `jobdanmark-search`, `jobindex-search`, `jobnet-search` (Danish demos — keep on disk, do not query for India)

The `site:` query templates below are the **WebSearch fallback** when a CLI is missing or fails.

**Language scope:** English is the default working language for these queries. Apply `04-job-evaluation.md`'s Language Gate when filtering results.

## Search Sites

Primary:

- **linkedin.com/jobs** — covered by `linkedin-search` (`--location` place strings below)
- **freehire.me** — covered by `freehire-search` (`--country IN`; confirm live facets before using `--city`)
- **naukri.com** — WebSearch fallback only until an India portal skill exists
- **indeed.co.in** — WebSearch fallback only

Secondary: company career pages via `site:` for named target companies once the user lists them.

## Query Categories

Do not require an exact job title match. Prefer role-family keywords (frontend, React, Next.js, full stack, AI/LLM application engineering).

### Priority 1: Frontend / React / Next.js

```
site:linkedin.com/jobs frontend engineer India
site:linkedin.com/jobs React developer Bengaluru OR Pune OR Hyderabad
site:linkedin.com/jobs Next.js developer India
site:naukri.com "frontend engineer" Ahmedabad OR Bengaluru
site:indeed.co.in "react developer" "India"
```

LinkedIn CLI examples (low volume; `--limit` small; `--format json`):

- `-q "Frontend Engineer" -l "Ahmedabad, Gujarat, India"`
- `-q "Frontend Engineer" -l "Bengaluru, Karnataka, India"`
- `-q "React Developer" -l "Hyderabad, Telangana, India"`
- `-q "Next.js" -l "Pune, Maharashtra, India"`
- `-q "Frontend Engineer" -l "Mumbai, Maharashtra, India"`
- `-q "Frontend Engineer" -l "Delhi, India"`
- `-q "Frontend Engineer" -l "Chennai, Tamil Nadu, India"`
- `-q "Frontend Engineer" -l "India" --remote remote`

FreeHire CLI: `-q "frontend"` or `-q "react"` with `--country IN`, optional `--category frontend`, `--limit` modest. Discover city facet values from `/api/v1/jobs/facets` — do not invent them.

### Priority 2: Software / full stack engineering

```
site:linkedin.com/jobs "software engineer" India React
site:linkedin.com/jobs "full stack" engineer Bengaluru OR Hyderabad OR Pune
site:naukri.com "software engineer" frontend India
```

### Priority 3: AI / LLM application engineering

```
site:linkedin.com/jobs "AI engineer" India
site:linkedin.com/jobs "LLM" engineer India
site:linkedin.com/jobs "AI application" engineer India
site:linkedin.com/jobs frontend AI engineer India
```

FreeHire: `-q "AI engineer"` or `--category ml_ai` with `--country IN`.

### Priority 4: Broader technical

```
site:linkedin.com/jobs "software engineer" India
site:naukri.com developer React OR Next.js India
```

## Location Filter

Acceptable for this fork (until the candidate profile narrows commute):

- Ahmedabad
- Bengaluru
- Hyderabad
- Pune
- Mumbai
- Delhi NCR
- Chennai
- Remote India (and remote roles that hire in India)

Skip roles that require relocation outside India unless the user asks.

## Language Filter

Your working languages and levels are in CLAUDE.md's Languages table. When filtering scraped results, apply `04-job-evaluation.md`'s Language Gate: a posting requiring a language you haven't declared at all is excluded; a posting requiring a higher level than you declared in a language you do work in is not excluded, flag it clearly instead.

## Date Filter

Only include jobs posted within the last 14 days, or with an application deadline that has not yet passed. If a posting date cannot be determined, include it but flag as "date unknown".

## Adapting Queries

If the user specifies a focus area, select queries from the matching category and also generate 2-3 custom queries for that focus. For example:
- "/scrape frontend" → Priority 1 + a few extra keyword variants
- "/scrape AI" → Priority 3
