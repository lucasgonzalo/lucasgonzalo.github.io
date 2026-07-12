# internationalization Specification

> Change: unify-i18n-remove-gtranslate. This is a NEW full spec (`openspec/specs/` was empty — greenfield). Glossary terms below are authoritative; scenarios that assert rendered labels use these exact strings.

## Purpose

A single bilingual (ES/EN) i18n system with no third-party translation: one bundled TS runtime + dictionary for UI chrome strings, hand-written `{en,es}` content data, a two-stage load that eliminates first-paint FOUC, a language switcher that delegates to `window.setLanguage`, and build-time dual-render for all dynamic content. Every user-facing string renders correctly in both locales with zero machine translation.

**Authoritative glossary (status enum gotcha: data `'in-development'` → key `projects.status.inDevelopment`):**

| i18n key | EN | ES |
|---|---|---|
| `projects.features` | Key Features | Características Destacadas |
| `projects.technologies` | Technologies | Tecnologías |
| `projects.viewMore` | View More | Ver Más |
| `projects.status.completed` | Completed | Completado |
| `projects.status.live` | Live | En Producción |
| `projects.status.inDevelopment` | In Development | En Desarrollo |
| `projects.modal.objective` | Project Objective | Objetivo del Proyecto |
| `projects.modal.detailedDescription` | Detailed Description | Descripción Detallada |
| `projects.modal.businessFeatures` | Business Features | Funcionalidades de Negocio |
| `projects.modal.techStack` | Tech Stack | Stack Tecnológico |
| `projects.modal.technicalFeatures` | Technical Features | Características Técnicas |
| `projects.modal.architecture` | Architecture | Arquitectura |
| `projects.modal.close` | Close Modal | Cerrar Modal |

## Requirements

### Requirement: Google Translate Fully Removed

The system MUST NOT load, render, or reference any Google Translate (GT) code or keys. The manual ES/EN switcher MUST remain functional after removal.

#### Scenario: GT widget, loader script, and keys absent

- GIVEN the built site and source tree
- WHEN grepping `src/` and the build output for `google_translate_element|translate.google|googleTranslate`
- THEN zero matches are found
- AND the GT dropdown UI, the GT loader `<script>` (BaseLayout), and the `googleTranslate.*` JSON keys are absent

#### Scenario: Manual switcher works after GT removal

- GIVEN a browser with the site loaded (no GT present)
- WHEN the user toggles EN then ES via the manual switcher
- THEN chrome updates in both locales (e.g. nav "Projects" / "Proyectos")

**manual_check:** open the built site; confirm no GT dropdown in the header; toggle EN↔ES; confirm chrome updates. `npm run build` passes.

### Requirement: Unified i18n Runtime (Single Source + Two-Stage Load)

The system MUST load exactly ONE i18n runtime (the bundled TS module under `src/i18n/`), expose `window.t` / `window.getLanguage` / `window.setLanguage`, set `<html lang>` synchronously before first paint, and dispatch `language-changed` on init. Dead sources (`src/scripts/i18n*.js/ts`, the old `public/scripts/i18n.js`) MUST NOT exist. Events MUST dispatch on `window`, never `document`.

#### Scenario: Two-stage load fixes FOUC for ES-default users

- GIVEN a browser with `navigator.language` starting with `es` and no `localStorage.language`
- WHEN the page first paints
- THEN `<html lang="es">` is set synchronously in `<head>` so ES content shows immediately (no English flash)
- AND after the deferred module runs, `window.t/getLanguage/setLanguage` exist and `language-changed` has dispatched once

#### Scenario: EN-default first paint

- GIVEN a browser with `navigator.language` not starting with `es` and no saved preference
- WHEN the page first paints
- THEN `<html lang="en">` is set and chrome renders in EN

#### Scenario: Only one runtime, bugs gone by construction

- GIVEN the source tree
- WHEN checking for i18n implementations and `require(`
- THEN only `src/i18n/index.ts` exists; `require(` appears nowhere in `src/`; events dispatch on `window`

**manual_check:** DevTools console — confirm `window.t`, `window.getLanguage`, `window.setLanguage` are functions; hard-refresh with an ES-locale and an EN-locale browser and inspect `<html lang>` on first paint. `npm run build` passes.

### Requirement: Language Switching via window.setLanguage

The LanguageSwitcher MUST delegate to `window.setLanguage` (removing its duplicated localStorage/event-dispatch logic), persist the choice to `localStorage`, and update both `[data-i18n]` chrome AND all `<L10nText>` content for both locales.

#### Scenario: Toggle persists and updates everything

- GIVEN the site in EN with `localStorage.language = 'en'`
- WHEN the user selects ES, then EN again, via the switcher
- THEN `localStorage.language` flips to `'es'` then back to `'en'`, `<html lang>` follows, every `[data-i18n]` chrome string AND every `<L10nText>` content node updates each time

#### Scenario: Choice survives reload

- GIVEN the user previously selected ES
- WHEN the page is reloaded
- THEN the site renders in ES (persisted preference honored)

**manual_check:** toggle EN↔ES repeatedly; reload; confirm persisted locale holds and every section updates. `npm run build` passes.

### Requirement: Bilingual Skills Content

Every SkillCard MUST render `name` and `description` in the active locale via `<L10nText>`; the `icon` stays neutral.

#### Scenario: All 17 skills render in the active locale

- GIVEN the skills section rendering 17 SkillCards
- WHEN `<html lang>` is `es` then `en`
- THEN each card shows ES name+description and EN name+description respectively, toggled purely by CSS (no JS on switch)

**manual_check:** scroll the skills section; toggle EN↔ES; confirm all 17 cards flip; icons unchanged. `npm run build` passes.

### Requirement: Bilingual Experience Content

Every WorkTimelineCard MUST render `role` and each `description[]` bullet in the active locale via `<L10nText>`; `company` and `period` stay neutral in both locales.

#### Scenario: Both timeline entries localized in EN and ES

- GIVEN the work-history section (2 entries)
- WHEN the locale is EN then ES
- THEN role and every bullet render in the active locale; `company` ("Nuntiusit", "Solo Developer") and `period` are identical in both

**manual_check:** toggle EN↔ES on the experience section; confirm roles + bullets flip, company/period stable. `npm run build` passes.

### Requirement: Bilingual Projects Content (Card + Modal)

ProjectCard and ProjectModal MUST render `title`, `description`, `features[]`, `technologies`, the status label, and all modal sections in the active locale via `<L10nText>`. Technology names and `techStack` version strings stay neutral.

#### Scenario: All 10 projects (card + modal) localized in EN and ES

- GIVEN the projects section rendering 10 cards
- WHEN the locale is EN then ES
- THEN each card's title, description, features list, technologies, status badge, and "View More"/"Ver Más" button render in the active locale
- AND opening any modal renders objective, detailed description, business features, tech stack, technical features, and architecture in the active locale

#### Scenario: Status enum reconciliation (kebab-case → camelCase key)

- GIVEN a project whose data `status = 'in-development'`
- WHEN rendered in EN then ES
- THEN the badge shows "In Development" (en) / "En Desarrollo" (es)
- AND `completed` shows "Completed"/"Completado" and `live` shows "Live"/"En Producción"

**manual_check:** toggle EN↔ES across the projects section; open at least 3 modals; verify status badges match the glossary exactly. `npm run build` passes.

### Requirement: ProjectCard Hardcoded Headers Wired

The hardcoded Spanish headers in `ProjectCard.astro` ("Características Destacadas", "Tecnologías", "Ver más") and the `statusLabels` map (lines 13-17) MUST be replaced with `data-i18n` keys (`projects.features`, `projects.technologies`, `projects.viewMore`, `projects.status.<status>`).

#### Scenario: Card headers come from i18n keys in both locales

- GIVEN any ProjectCard
- WHEN rendered in EN then ES
- THEN the features header shows "Key Features"/"Características Destacadas", the technologies header shows "Technologies"/"Tecnologías", and the button shows "View More"/"Ver Más"
- AND no literal Spanish string remains in `ProjectCard.astro` source

**manual_check:** inspect `src/components/projects/ProjectCard.astro` — no literal Spanish strings and no `statusLabels` literal map; toggle locale to confirm labels flip. `npm run build` passes.

### Requirement: Bilingual Footer and Document Head

The Footer copyright/label and the document `<title>` and meta `description` MUST render in the active locale. The footer year MUST be dynamic.

#### Scenario: Footer + head localized in EN and ES

- GIVEN the site
- WHEN the locale is EN then ES
- THEN `<title>` and meta `description` render in the active locale
- AND the footer localized label + dynamic year (`new Date().getFullYear()`) render in the active locale

**manual_check:** toggle EN↔ES; check the browser tab title, the meta description (View Source), and the footer text; confirm the year is current. `npm run build` passes.

---

## Coverage

- **Locales:** every requirement covers BOTH ES and EN (per `rules.specs`).
- **Happy paths:** covered (toggle, first paint, all sections).
- **Edge cases:** FOUC on ES-default first paint; status enum kebab→camelCase mismatch; reload persistence; post-removal switcher function.
- **Verification:** `strict_tdd: false` → every requirement carries a `manual_check` plus the `npm run build` gate (no automated tests exist).
