# Proposal: Unify i18n into a single bilingual source and remove Google Translate

## Intent

The site ships three divergent i18n implementations — only ONE of which actually runs. Two are dead code with latent bugs (`require()` in `src/scripts/i18n-client.ts`, `document` vs `window` event mismatch in `src/i18n/index.ts`). A fourth translation path, Google Translate, mutates the whole `<body>` independently of the manual switcher and creates double-translation risk. Meanwhile the actual content — projects (ES only), skills (EN only), work history (EN only) — is monolingual and never reaches the i18n system. The `projects.features`/`projects.technologies` keys exist but are unwired.

**Decision (locked by user):** Option A — controlled, hand-written ES+EN translations only. Remove Google Translate entirely. No third-party translation.

## Scope

### In Scope
1. **Remove Google Translate** completely (see Affected Areas for exact files/lines).
2. **Collapse to ONE source of truth** for the i18n runtime + UI-string dictionary; delete the three dead copies.
3. **Fix the two latent bugs** (`require()`; `document`/`window` mismatch) by construction — the unified module is the only implementation.
4. **Make all segment content bilingual** with hand-written ES+EN: `src/data/projects.ts`, `skills.ts`, `work-history.ts`.
5. **Wire the unwired keys** (`projects.features`, `projects.technologies`, `projects.status.*`, `projects.viewMore`) into `ProjectCard.astro`.
6. **i18n the remaining hardcoded UI**: `Footer.astro`, `ProjectModal.astro` `aria-label`, `BaseLayout.astro` `<title>`/meta description.

### Out of Scope
- Adding languages beyond ES+EN.
- Migrating to Astro's built-in i18n integration / locale routing (single-page site stays).
- Auto-translation of any kind (machine, API, or widget).
- Restructuring the Bootstrap-from-CDN double-sourcing (separate concern).
- Backfilling the `cv.md` / `alignment_cv.md` docs.

## Capabilities

> `openspec/specs/` is empty (greenfield). No existing capability specs to delta.

### New Capabilities
- `internationalization`: Single-source ES/EN i18n — one bundled runtime+dictionary for UI chrome strings, hand-written bilingual content data, language-switcher contract (default = `localStorage` → `navigator.language` `es?` → `en`), and the invariant that **every user-facing string renders correctly in both ES and EN with no third-party translation**. All GT behavior is removed under this capability.

### Modified Capabilities
- None (no pre-existing specs).

## Approach

**Single source of truth — chosen architecture:** ONE Astro-bundled TypeScript module under `src/i18n/` becomes the runtime + UI-string dictionary. It imports restructured `en.json`/`es.json` (the missing `projects.features`/`projects.technologies` keys are added), exposes `t()`/`setLanguage()`/`getLanguage()` on `window` via a single hoisted `<script>` in `BaseLayout.astro`, and replaces the `is:inline` static-asset loader.

**Justification vs the "only public/ ships today" constraint:** `public/scripts/i18n.js` works *only because* it is hand-duplicated and served as a static asset — it is un-typed, un-bundled, and drifts (the JSON copies already lost keys). A bundled TS module is the correct foundation: type-safe (`typeof translations`), single, eliminates hand-maintenance, and resolves both latent bugs by having exactly one `setLanguage`/event-dispatch implementation. The `window.t` global contract stays, so the `data-i18n` attribute pattern in components is untouched.

**Content data redesign (no component breakage):** Each data entry gains an `{ en, es }` wrapper on every translatable field while the *array shape* stays identical so `.map()` in sections is unchanged:

```ts
// src/data/projects.ts
type L10n = { en: string; es: string };
interface Project {
  title: L10n; description: L10n; objective: L10n;
  features: L10n[]; technologies: string[];         // tech names stay language-neutral
  status: 'completed' | 'in-development' | 'live';
  businessFeatures: L10n[]; techStack: string[];
  technicalFeatures: L10n[]; architecture: L10n;
}
```

A small helper (`localize(field)` → reads `window.getLanguage()`) plus dual-render in components (both strings emitted, visibility toggled by the existing `language-changed` listener) keeps the static-output model. `skills.ts` and `work-history.ts` get the same `L10n` treatment on `name`/`description` and `role`/`description[]` respectively (`company`/`period` stay neutral).

**ProjectCard wiring:** replace hardcoded `statusLabels` (lines 13-17) and the Spanish strings on lines 35/44/52 with `data-i18n="projects.features|technologies|viewMore"` and `data-i18n="projects.status.<status>"`; bilingual card body via the dual-render helper. `ProjectModal.astro` aria-label (line 27) + body props follow the same pattern.

**Translation provenance:** all ES↔EN content hand-written by the owner; tasks.md flags every translation task explicitly (rule: `Flag tasks that need hand-written translations`).

## Affected Areas

| Area | Impact | What changes |
|------|--------|--------------|
| `src/layouts/BaseLayout.astro` | Modified | Remove GT script block **L76-87**; replace `is:inline` i18n loader (L71) with bundled module `<script>`; make `<title>` (L32) + meta `description` (L7,L34) bilingual; drop dead `import { initLanguage, t, getLanguage }` (L10) → use live import. |
| `src/components/header/Header.astro` | Modified | Remove GT UI **L18-31**, GT toggle JS **L256-282**, GT CSS **L154-231**; scope the unscoped `document.querySelectorAll('[data-i18n]')` (L41) to the header. |
| `public/scripts/i18n.js` | Removed | Was the live source; superseded by the bundled module. |
| `src/scripts/i18n.js` | Removed | Dead (never imported). |
| `src/scripts/i18n-client.ts` | Removed | Dead + `require()` bug (L10). |
| `src/i18n/index.ts` | Modified | Becomes the single runtime; fixes `document`→`window` dispatch (L28). |
| `src/i18n/en.json`, `es.json` | Modified | Add missing `projects.features`/`projects.technologies`; become the dictionary source. |
| `src/data/projects.ts` | Modified | 10 projects → bilingual `L10n` schema (largest change). |
| `src/data/skills.ts` | Modified | 17 skills → bilingual `name`/`description`. |
| `src/data/work-history.ts` | Modified | 2 entries → bilingual `role`/`description[]`. |
| `src/components/projects/ProjectCard.astro` | Modified | Wire `statusLabels`/headers/`Ver más` to i18n keys + bilingual body. |
| `src/components/projects/ProjectModal.astro` | Modified | Bilingual props + `aria-label` (L27) i18n. |
| `src/components/projects/ProjectsSection.astro` | Modified | Pass bilingual props. |
| `src/components/skills/SkillCard.astro` | Modified | Render bilingual `name`/`description`. |
| `src/components/experience/WorkTimelineCard.astro` | Modified | Render bilingual `role`/`description`. |
| `src/components/footer/Footer.astro` | Modified | i18n the hardcoded copyright (L6). |
| `src/components/LanguageSwitcher.astro` | Modified | Delegate to `window.setLanguage` instead of duplicating logic (L119-127). |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Hand-written translations are the bulk of the diff and take real time; risk of inconsistency across 10 projects. | High | Define a translation glossary in design; owner writes ES↔EN directly; no machine translation. |
| Changing delivery from `is:inline` static asset to a bundled `<script>` alters init timing — `window.t` may not be ready when component listeners attach. | Medium | Design specifies load-order contract; verify phase manually checks `language-changed` on first paint. |
| Dual-render increases DOM size (projects section ×2 text nodes). | Low | Acceptable for a static portfolio; verify in design. |
| No test runner — regressions only caught by manual switch + build. | High | `verify.manual_checks_required: true` (already set in config); build gate via `npm run build`. |
| Removing GT loses the 8 non-ES/EN languages instantly. | Low | Accepted — locked decision (ES+EN only). |

## Rollback Plan

Git revert on `main` + GitHub Actions redeploy. Because deploy is Pages-on-push to `main`, rollback is a single `git revert` + push. No data migrations, no external state. Each chained PR slice (see size forecast) is independently revertible.

## Dependencies

- None external. All work is inside the existing Astro 5.16.15 / TS strict stack. No new npm packages.

## Success Criteria

- [ ] Zero references to Google Translate remain (`rg -i "google.translate|translate.google|google_translate_element|googleTranslate"` returns nothing in `src/`).
- [ ] Only ONE i18n implementation exists; `src/scripts/i18n*.js/ts` and the old `public/scripts/i18n.js` are gone.
- [ ] `require(` appears nowhere in `src/`; language-changed events dispatch and are heard on the same target.
- [ ] Toggling ES↔EN updates **every** visible string: nav, hero, about, all section titles, all 10 projects (card + modal), all 17 skills, both timeline entries, footer, `<title>`/meta.
- [ ] `npm run build` passes; no console errors on language switch (manual check).
- [ ] No machine translation anywhere in the output.

## Size Forecast (review-budget guard)

**This change WILL exceed the 400-line review budget — by a wide margin.** First-pass estimate **~1,500–2,500 changed lines** (additions + deletions):

- Remove GT + delete 3 dead sources + bug fixes: ~300–400 lines (mostly deletions).
- Unify to single bundled module + JSON restructure: ~250 lines.
- Bilingual `projects.ts` (10 projects × ~40–50 translatable strings × 2 langs): ~800–1,000 lines alone.
- Bilingual `skills.ts` + `work-history.ts`: ~150 lines.
- Component wiring (ProjectCard/Modal/Section, SkillCard, WorkTimelineCard, Footer, Header, BaseLayout): ~250–400 lines.

> **Decision needed before apply: Yes. Chained PRs recommended: Yes. 400-line budget risk: High.**
> Suggested 4-slice chain: (1) GT removal + dead-source deletion + bug fixes; (2) unify to bundled i18n module; (3) bilingual projects data + ProjectCard/Modal wiring; (4) bilingual skills/work-history + remaining UI i18n. Each slice has clear start/finish, verification, and independent rollback.
