# Tasks: Unify i18n into a single bilingual source and remove Google Translate

> `strict_tdd: false` — no test runner. Every task verifies via `npm run build` and/or a manual ES↔EN check tied to `specs/internationalization/spec.md` manual_checks. Do NOT mandate failing-test-first.

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Total estimated changed lines | ~2000–2150 (additions + deletions) |
| 400-line budget risk | High |
| Chained PRs recommended | Yes |
| Suggested split | PR1 → PR2 → PR3 → PR4 (feature-branch-chain) |
| Delivery strategy | ask-always |
| Chain strategy | feature-branch-chain (design recommendation; pending guard lock) |

Decision needed before apply: Yes
Chained PRs recommended: Yes
Chain strategy: feature-branch-chain
400-line budget risk: High

### Per-slice line estimates & budget fit

| Slice | Scope | Est. lines | Budget fit |
|---|---|---|---|
| 1 | gt-removal-and-dead-cleanup | ~330 (deletion-dominant) | ✅ under 400 |
| 2 | unify-bundled-i18n-runtime | **~420** (borderline: 191-line file delete + ~170-line index.ts rewrite) | ⚠️ borderline — offer 2a/2b split for strict adherence |
| 3 | bilingual-foundation-small-data | ~220 | ✅ under 400 |
| 4 | bilingual-projects-and-cards | **~1000–1100** (bulk hand-written translation) | ⚠️ needs `size:exception` (user preliminary pref) OR split 4a/4b |

> **Reality check vs design:** the design estimated slice 2 at ~300; source read shows ~420 because deleting `public/scripts/i18n.js` (191 lines) + rewriting `src/i18n/index.ts` (~170 changed) were undercounted. Deletion/rewrite diffs review fast, so cognitive risk is Low-Medium even if line count tips 400. Slice 4 is the genuine `size:exception` (pure data, low logic risk, high line count).

### Suggested Work Units (feature-branch-chain)

| Unit | Goal | PR | Base branch boundary |
|------|------|----|----------------------|
| 1 | Remove GT + dead sources; site stays on old inline runtime | PR1 | feature/tracker |
| 2 | One bundled runtime; two-stage load; switcher delegates | PR2 | PR1 branch |
| 3 | L10n type + L10nText + CSS; small data (skills/exp/footer) | PR3 | PR2 branch |
| 4 | Projects data + cards/modal + head; consistency sweep | PR4 (size:exception) | PR3 branch → main |

Optional strict-budget splits if the guard rejects the over-400 slices:
- **2a** `index.ts` rewrite + JSON keys | **2b** bootstrap/loader/delete i18n.js + listener consolidation + switcher refactor.
- **4a** projects L10n schema + ProjectCard/Modal/Section wiring seeded (3 projects) | **4b** remaining 7 projects' translations.

## Phase 1 — Slice 1: GT Removal & Dead Cleanup (no functional change)

- [x] 1.1 [S1] Remove GT widget from BaseLayout — delete `googleTranslateElementInit` + loader `<script>` (L76-87). Files: `src/layouts/BaseLayout.astro`. Deps: none. Verify: `npm run build`; `rg translate.google src/`→0. [Req: GT Fully Removed]
- [x] 1.2 [S1] Remove dead i18n import + comment from BaseLayout (L10, L12). Files: `src/layouts/BaseLayout.astro`. Deps: 1.1. Verify: build.
- [x] 1.3 [S1] Remove GT UI + CSS + JS from Header — delete GT `<li>` (L18-31), `.btn-translate-*`/`#google_translate_element`/`.translate-*` CSS (L154-231), GT toggle script (L256-283), `data-i18n="googleTranslate.title"` span. KEEP global `[data-i18n]` listener (L37-48) until slice 2. Files: `src/components/header/Header.astro`. Deps: none. Verify: build; no globe dropdown; manual EN↔ES still flips nav. [Scenario: Manual switcher works after GT removal]
- [x] 1.4 [S1] Drop `googleTranslate.*` keys from en.json + es.json (L59-61 each). Files: `src/i18n/{en,es}.json`. Deps: 1.3. Verify: build; `rg googleTranslate src/`→0.  — **Also removed from `public/scripts/i18n.js` (live runtime)** to satisfy the spec scenario requiring zero `googleTranslate` matches in the build output (tasks.md file list had omitted the live runtime).
- [x] 1.5 [S1] Delete dead sources `src/scripts/i18n.js` + `src/scripts/i18n-client.ts`. Files: `src/scripts/*`. Deps: none. Verify: build; `rg "require\(" src/`→0. [Scenario: Only one runtime, bugs gone]

## Phase 2 — Slice 2: Unified Bundled i18n Runtime

- [x] 2.1 [S2] Rewrite `src/i18n/index.ts`: dispatch `language-changed` on `window` (fix L28 `document` bug); add global `translateAll()` over `[data-i18n]`; init-dispatch inside `initLanguage()`; hoist `window.t/getLanguage/setLanguage` (guarded by `isBrowser`). Files: `src/i18n/index.ts`. Deps: 1.5. Verify: build; DevTools `typeof window.t`→"Function". [Req: Unified i18n Runtime; Scenario: Two-stage load / Only one runtime]
- [x] 2.2 [S2] Add `projects.features` + `projects.technologies` keys to en.json + es.json (restore lost drift keys; ES: "Características Destacadas"/"Tecnologías"). Files: `src/i18n/{en,es}.json`. Deps: none. Verify: build.
- [x] 2.3 [S2] Add head bootstrap `<script is:inline>` in BaseLayout `<head>` (sets `<html lang>` from localStorage/navigator pre-paint); replace `<script is:inline src="/scripts/i18n.js">` (L71) with bundled `<script>` calling `initLanguage` from `../i18n`. Files: `src/layouts/BaseLayout.astro`. Deps: 2.1. Verify: build; hard-refresh ES-locale browser→`<html lang="es">` on first paint. [Scenario: FOUC ES-default / EN-default first paint]
- [x] 2.4 [S2] Delete `public/scripts/i18n.js` (superseded by bundled module). Files: `public/scripts/i18n.js`. Deps: 2.3. Verify: build; `rg "scripts/i18n.js"`→0.
- [x] 2.5 [S2] Consolidate listeners — remove Header global `[data-i18n]` listener (L37-48) AND ProjectsSection scoped listener (L64-73); runtime `translateAll` owns all chrome. Files: `src/components/header/Header.astro`, `src/components/projects/ProjectsSection.astro`. Deps: 2.1, 2.3. Verify: build; toggle EN↔ES still translates chrome (init-dispatch covers first paint). [Design Decision 4] — **Also removed the equivalent redundant listeners in Hero, SkillsSection, AboutSection, ExperienceSection (all pure [data-i18n] loops now covered by the global translateAll), and trimmed ContactSection's listener to its placeholder-only logic. Kept ProjectModal's emoji-prefixed listener. See apply-progress deviation note.**
- [x] 2.6 [S2] Refactor LanguageSwitcher click handler to call `window.setLanguage(langCode)` (drop duplicated localStorage+dispatch L119-130); subscribe `updateLanguageUI` to `language-changed`. Files: `src/components/LanguageSwitcher.astro`. Deps: 2.1. Verify: build; toggle persists across reload; every `[data-i18n]` flips. [Req: Language Switching]

## Phase 3 — Slice 3: Bilingual Foundation (small data)

- [x] 3.1 [S3] Create `src/i18n/types.ts` (`Language`, `L10n`); update `index.ts` to import `Language` from `./types`. Create `src/components/L10nText.astro` (dual `<span data-l10n>`). Add to `src/styles/global.css`: `html[lang="en"] [data-l10n="es"]{display:none!important}` + inverse. Files: `src/i18n/types.ts`, `src/i18n/index.ts`, `src/components/L10nText.astro`, `src/styles/global.css`. Deps: 2.1. Verify: build. [Design Decision 2-3]
- [x] 3.2 [S3] Restructure `skills.ts`: `name`+`description`→`L10n` (17 skills); `icon` neutral. Hand-write ES↔EN (NO machine translation). Files: `src/data/skills.ts`. Deps: 3.1. Verify: build. [Req: Bilingual Skills]
- [x] 3.3 [S3] Wire SkillCard: `<L10nText text={name}/>` + `<L10nText text={description}/>`; update Props to `L10n`. Files: `src/components/skills/SkillCard.astro`. Deps: 3.2, 3.1. Verify: build; toggle→17 cards flip, icons unchanged. [Scenario: All 17 skills render]
- [x] 3.4 [S3] Restructure `work-history.ts`: `role`+`description[]`→`L10n` (2 entries); `company`/`period` neutral. Hand-write ES↔EN. Files: `src/data/work-history.ts`. Deps: 3.1. Verify: build. [Req: Bilingual Experience]
- [x] 3.5 [S3] Wire WorkTimelineCard: `<L10nText>` for role + each bullet; update Props. Files: `src/components/experience/WorkTimelineCard.astro`. Deps: 3.4, 3.1. Verify: build; toggle→roles+bullets flip, company/period stable. [Scenario: Both timeline entries localized]
- [x] 3.6 [S3] Footer i18n + dynamic year: add `footer.*` keys to JSON; `<p data-i18n="footer.copyright">` + `new Date().getFullYear()`. Files: `src/components/footer/Footer.astro`, `src/i18n/{en,es}.json`. Deps: 2.1. Verify: build; toggle→footer flips; year=current. [Req: Bilingual Footer/Head — footer half]

## Phase 4 — Slice 4: Bilingual Projects (size:exception candidate)

- [x] 4.1 [S4] Restructure `projects.ts`: `title/description/objective/features[]/businessFeatures[]/technicalFeatures[]/architecture`→`L10n`; `technologies`+`techStack`+`status` neutral. Hand-write EN for all 10 projects (ES=current value). Files: `src/data/projects.ts`. Deps: 3.1. Verify: build. ⚠️ bulk translation (~950 lines). [Req: Bilingual Projects]
- [x] 4.2 [S4] Rewrite ProjectCard: `<L10nText>` for title/description/features; `data-i18n` for status/features/technologies/viewMore; remove `statusLabels` map (L13-17); map `status==='in-development'`→key `inDevelopment`. Files: `src/components/projects/ProjectCard.astro`. Deps: 4.1, 3.1. Verify: build; toggle→labels flip; no literal Spanish remains in source. [Req: ProjectCard Hardcoded Headers; Scenario: Status enum reconciliation]
- [x] 4.3 [S4] Rewrite ProjectModal: `<L10nText>` for title/objective/businessFeatures/technicalFeatures/architecture; KEEP emoji-prefix `[data-i18n]` listener (L111-117); update Props to `L10n`. Files: `src/components/projects/ProjectModal.astro`. Deps: 4.1, 3.1. Verify: build; open 3 modals→sections localize both langs. [Scenario: All 10 projects card+modal localized]
- [x] 4.4 [S4] ProjectsSection: pass bilingual props to Card/Modal. Files: `src/components/projects/ProjectsSection.astro`. Deps: 4.2, 4.3. Verify: build; toggle→all 10 cards+modals localize.
- [x] 4.5 [S4] Bilingual document head: add `meta.title`/`meta.description` keys; update `<title>`+meta on `language-changed` (head cannot use CSS-toggle). Files: `src/layouts/BaseLayout.astro`, `src/i18n/{en,es}.json`. Deps: 2.1. Verify: build; toggle→browser tab + meta flip in both locales. [Req: Bilingual Footer/Head — head half]
- [x] 4.6 [S4] Final consistency pass: `rg "Características|Tecnologías|Ver más|En Producción" src/components/projects/`→0; full manual ES↔EN sweep across nav, hero, about, skills, experience, projects (card+modal), footer, title/meta. Deps: 4.1–4.5. Verify: build + spec manual_checks sweep. [Spec Coverage]
