# Design: Unify i18n into a single bilingual source and remove Google Translate

## Technical Approach

Collapse the three divergent i18n implementations + Google Translate into ONE Astro-bundled TypeScript runtime (`src/i18n/`) backed by `en.json`/`es.json`, and make all segment content data (`projects.ts`, `skills.ts`, `work-history.ts`) bilingual via an `{ en, es }` (`L10n`) schema. Two rendering mechanisms coexist by necessity:

- **Chrome strings** (static dictionary keys → `nav.about`, `projects.title`, …): keep the existing `data-i18n="key"` attribute pattern, but consolidate the duplicated/global `querySelectorAll` listeners into ONE translator owned by the runtime module that fires on init **and** on toggle.
- **Content strings** (dynamic per-item data): build-time **dual-render** — emit both `<span data-l10n="en">` and `<span data-l10n="es">`, toggle visibility purely via CSS keyed on `document.documentElement.lang`. No `window.t` calls during render (Astro is SSG — `window` does not exist at build time).

This maps 1:1 to the proposal's approach and resolves both latent bugs (`require()`, `document`→`window` dispatch) by construction — there is exactly one `setLanguage`/event-dispatch implementation.

---

## Architecture Decisions

### Decision 1 — Load-order contract (HIGHEST RISK)

**Choice:** A two-stage load — (a) a tiny synchronous **head bootstrap** sets `<html lang>` before the body paints; (b) the **bundled TS module** (normal Astro `<script>`, `type=module`, deferred) owns `t()`/`setLanguage()`/`getLanguage()`, exposes them on `window`, and dispatches `language-changed` once on init.

**Head bootstrap** (in `<head>`, `is:inline`, ~6 lines, in `BaseLayout.astro`):
```html
<script is:inline>
  (function(){try{var l=localStorage.getItem('language');
  if(!l){l=(navigator.language||'').startsWith('es')?'es':'en';}
  document.documentElement.lang=l;}catch(e){document.documentElement.lang='en';}})();
</script>
```

**Runtime module contract** (`src/i18n/index.ts` → consumed by a bundled client entry):
```ts
export function setLanguage(l: Language) {            // fixes document→window bug
  current = l; try { localStorage.setItem('language', l); } catch {}
  document.documentElement.lang = l;
  window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: l } }));
}
export function initLanguage() {                       // fixes first-paint FOUC
  current = saved() || browser();
  document.documentElement.lang = current;
  translateAll();                                      // translate chrome NOW
  window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: current } }));
}
// window.t / window.getLanguage / window.setLanguage hoisted; ONE global [data-i18n] translator.
```

**Contract / when globals exist:**
- `document.documentElement.lang` is set synchronously in `<head>` → dual-render CSS applies on first paint → **content FOUC = none**.
- `window.t`/`window.getLanguage`/`window.setLanguage` exist after the deferred module executes (post-parse). Components **MUST NOT** call `window.t` during build-time render.
- The init-dispatched `language-changed` guarantees chrome is translated for **all** users (fixes today's latent bug where `es`-default users see English chrome until they click the switcher).
- Chrome FOUC = minimal: hardcoded English fallback shows until the deferred module fires init (~tens of ms). Acceptable and strictly better than today.

**Alternatives rejected:**
| Option | Tradeoff | Verdict |
|---|---|---|
| Keep `is:inline src=` static asset | Untyped, drifts (JSON already lost keys); defeats unification | Rejected |
| Single bundled module, no head bootstrap | Deferred → `<html lang>` unset at first paint → **both** languages flash (content FOUC) | Rejected |
| Make entire runtime `is:inline` importing `src/` | Inline scripts aren't bundled; can't import `src/` | Rejected |
| **Head bootstrap + bundled module** | Tiny extra inline snippet; content FOUC eliminated, chrome minimal | **Chosen** |

### Decision 2 — Dual-render mechanism for content data

**Choice:** Build-time dual-render via a single `<L10nText text={field} />` component + two CSS rules. Components never read `window` during render; they consume `L10n`-typed props and emit both locales.

`src/components/L10nText.astro`:
```astro
---
import type { L10n } from '../i18n/types';
interface Props { text: L10n; tag?: string; }
const { text, tag = 'span' } = Astro.props;
const Tag = tag;
---
<Tag data-l10n="en">{text.en}</Tag><Tag data-l10n="es">{text.es}</Tag>
```

`src/styles/global.css` (add):
```css
html[lang="en"] [data-l10n="es"] { display: none !important; }
html[lang="es"] [data-l10n="en"] { display: none !important; }
```

**ProjectCard wiring sketch** (the component with unwired hardcoded Spanish headers):
```astro
---
import L10nText from '../L10nText.astro';
import type { L10n } from '../../i18n/types';
interface Props { title: L10n; description: L10n; features: L10n[];
  technologies: string[]; status: 'completed' | 'in-development' | 'live'; projectIndex: number; }
const { title, description, features, technologies, status, projectIndex } = Astro.props;
// GOTCHA: data enum 'in-development' (kebab) → i18n key 'inDevelopment' (camelCase)
const statusKey = status === 'in-development' ? 'inDevelopment' : status;
---
<div class="project-card glass fade-in-up">
  <div class="project-header">
    <h3><L10nText text={title} /></h3>
    <span class="project-status" style="background: var(--status-{status})" data-i18n={`projects.status.${statusKey}`}>…</span>
  </div>
  <p class="project-description"><L10nText text={description} /></p>
  <div class="project-features">
    <h4 data-i18n="projects.features">Key Features</h4>
    <ul>{features.map((f) => <li><L10nText text={f} /></li>)}</ul>
  </div>
  <div class="project-technologies">
    <h4 data-i18n="projects.technologies">Technologies</h4>
    <div class="tech-tags">{technologies.map((t) => <span class="tech-tag">{t}</span>)}</div>
  </div>
  <button class="btn-view-more" data-project-index={projectIndex} data-i18n="projects.viewMore">View More</button>
</div>
```

**Alternatives rejected:**
| Option | Tradeoff | Verdict |
|---|---|---|
| Components call `window.getLanguage()`/`window.t` at render | Crashes SSG build (`window` undefined) | Rejected |
| Separate locale files (`projects.en.ts`/`projects.es.ts`) | Splits one concept across two files; drift risk; harder to keep in sync | Rejected |
| Flat key approach (`projects.0.title.en` in JSON) | Explodes dictionary; content buried in JSON, not co-located with data | Rejected |
| **Inline `{en,es}` object on each field + `<L10nText>` dual-render** | Co-located, type-safe, SSG-safe, zero-JS toggle | **Chosen** |

### Decision 3 — Bilingual data schema (`L10n`)

**Choice:** `type L10n = { en: string; es: string }` on every translatable field. Array shape unchanged so `.map()` in sections is untouched. Neutral fields (tech names, company, period, icons) stay plain strings.

`src/i18n/types.ts`:
```ts
export type Language = 'en' | 'es';
export type L10n = { en: string; es: string };
```

```ts
// src/data/projects.ts
import type { L10n } from '../i18n/types';
export interface Project {
  title: L10n; description: L10n; objective: L10n;
  features: L10n[]; technologies: string[];            // tech names stay neutral
  status: 'completed' | 'in-development' | 'live';
  businessFeatures: L10n[]; techStack: string[];       // techStack neutral (versions)
  technicalFeatures: L10n[]; architecture: L10n;
}
```
`skills.ts`: `name` + `description` → `L10n` (icon neutral). `work-history.ts`: `role` + `description[]` → `L10n` (`company`/`period` neutral).

**Rationale:** `{en,es}` (not `{es,en}`) matches the existing runtime default (`currentLanguage = 'en'`) and the JSON file order, so EN is always the source-of-truth fallback. Tech-stack strings (`"Ruby on Rails 6.1.3 + Ruby 3.0.1"`) stay neutral — they are language-agnostic.

### Decision 4 — Single global `data-i18n` translator (Header scope fix + consolidation)

**Choice:** The runtime module owns ONE `translateAll()` that updates every `[data-i18n]` element on init and on every `language-changed`. Remove the Header global listener (`Header.astro:37-48`) and the ProjectsSection scoped listener (`ProjectsSection.astro:64-73`). ProjectModal **keeps** its own listener only for the two emoji-prefixed keys (`projects.modal.objective`, `projects.modal.detailedDescription`, L111-117).

**Rationale:** Fixes three problems at once — Header's unscoped `document.querySelectorAll('[data-i18n]')` over-reach (rewrites the whole document), the duplicated ProjectsSection listener, and the missing init-time translation. Net code reduction.

---

## Data Flow

```
 BUILD TIME (SSG)                          RUNTIME (browser)
 ┌───────────────────────┐                 ┌─────────────────────────────┐
 │ src/i18n/{en,es}.json │ ──import──▶     │ <head> inline bootstrap     │
 │ src/data/*.ts (L10n)  │                 │   → sets <html lang> NOW    │
 │   ProjectCard renders │                 │ global.css [lang] rules     │
 │   both <span l10n>    │ ───────────────▶│   hide inactive locale      │ ◀ zero FOUC
 └───────────────────────┘                 │                             │
                                           │ deferred <script> module    │
                                           │   window.t/getLang/setLang  │
                                           │   initLanguage()            │
                                           │     translateAll([data-i18n])│ ◀ chrome
                                           │     dispatch lang-changed   │
                                           └────────────┬────────────────┘
                                          LanguageSwitcher click ──▶ window.setLanguage(es)
                                                                   ──▶ dispatch → translateAll()
```

---

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/layouts/BaseLayout.astro` | Modify | Remove GT widget (L76-87); remove dead import (L10); add head bootstrap; replace `is:inline src="/scripts/i18n.js"` (L71) with bundled `<script>`; bilingual `<title>`(L32)+meta(L7,L34) |
| `src/i18n/index.ts` | Modify (→ single runtime) | Dispatch on `window`; hoist globals; init-dispatch; own global `translateAll` |
| `src/i18n/en.json`, `es.json` | Modify | Add `projects.features`, `projects.technologies`; drop dead `googleTranslate.*` keys |
| `src/i18n/types.ts` | Create | `Language`, `L10n` types |
| `src/components/L10nText.astro` | Create | Dual-render `<span data-l10n>` component |
| `src/styles/global.css` | Modify | Add `html[lang] [data-l10n]` visibility rules |
| `src/data/projects.ts` | Modify | 10 projects → `L10n` schema (largest change) |
| `src/data/skills.ts` | Modify | 17 skills → bilingual `name`/`description` |
| `src/data/work-history.ts` | Modify | 2 entries → bilingual `role`/`description[]` |
| `src/components/projects/ProjectCard.astro` | Modify | Wire status/features/technologies/viewMore keys + dual-render body |
| `src/components/projects/ProjectModal.astro` | Modify | Dual-render props; keep emoji-prefix listener |
| `src/components/projects/ProjectsSection.astro` | Modify | Remove scoped listener; pass bilingual props |
| `src/components/skills/SkillCard.astro` | Modify | Dual-render `name`/`description` |
| `src/components/experience/WorkTimelineCard.astro` | Modify | Dual-render `role`/`description` |
| `src/components/LanguageSwitcher.astro` | Modify | Delegate to `window.setLanguage` (drop L119-127 duplication) |
| `src/components/header/Header.astro` | Modify | Remove GT UI/JS/CSS; remove global listener (consolidated) |
| `src/components/footer/Footer.astro` | Modify | i18n copyright (L6) + dynamic year |
| `public/scripts/i18n.js` | Delete | Was live source; superseded by bundled module |
| `src/scripts/i18n.js` | Delete | Dead (never imported) |
| `src/scripts/i18n-client.ts` | Delete | Dead + `require()` bug (L10) |

---

## Interfaces / Contracts

- **`L10n`**: `{ en: string; es: string }` — every translatable field.
- **`<L10nText text={L10n} />`**: emits both locales; CSS toggles. The ONLY content-render primitive.
- **`window.t`/`window.getLanguage`/`window.setLanguage`**: available after deferred module init. Components consume via `data-i18n` attributes + `language-changed` listener (owned by the module), never via direct calls at render.
- **`setLanguage` dispatches on `window`** (never `document`). `initLanguage` dispatches once on load.

---

## Translation Glossary (authoritative term list)

> EN is the source-of-truth locale. Status enum gotcha: data `'in-development'` → key `projects.status.inDevelopment`.

| i18n key | EN | ES | Used in |
|---|---|---|---|
| `projects.features` | Key Features | Características Destacadas | ProjectCard header |
| `projects.technologies` | Technologies | Tecnologías | ProjectCard header |
| `projects.viewMore` | View More | Ver Más | ProjectCard button |
| `projects.status.completed` | Completed | Completado | ProjectCard badge |
| `projects.status.live` | Live | En Producción | ProjectCard badge |
| `projects.status.inDevelopment` | In Development | En Desarrollo | ProjectCard badge |
| `projects.modal.objective` | Project Objective | Objetivo del Proyecto | ProjectModal (📋 emoji) |
| `projects.modal.detailedDescription` | Detailed Description | Descripción Detallada | ProjectModal (📖 emoji) |
| `projects.modal.businessFeatures` | Business Features | Funcionalidades de Negocio | ProjectModal |
| `projects.modal.techStack` | Tech Stack | Stack Tecnológico | ProjectModal |
| `projects.modal.technicalFeatures` | Technical Features | Características Técnicas | ProjectModal |
| `projects.modal.architecture` | Architecture | Arquitectura | ProjectModal |
| `projects.modal.close` | Close Modal | Cerrar Modal | ProjectModal close btn |
| `nav.*` / `hero.*` / `about.*` / `skills.title` / `experience.title` / `contact.*` | (existing) | (existing) | chrome (already wired) |

All 10 projects' prose content (titles, descriptions, objectives, features arrays, business/technical features, architecture) is hand-written ES↔EN by the owner per the `L10n` schema — **no machine translation**.

---

## Google Translate Sequencing

**GT removal goes FIRST (slice 1).** Justification: GT is fully independent of the bilingual-content work; removing it first eliminates the double-translation / body-mutation risk immediately and stops polluting manual verification of every later slice (you're not fighting GT's DOM rewriting while wiring the new i18n). The manual `LanguageSwitcher` keeps ES/EN functional after removal, so the site is never broken. Lowest-risk, highest-clarity slice — ideal first PR. Doing it last would mean testing every intermediate slice against GT's interference. Rejected.

---

## Chained-PR Slicing Plan (concrete)

> Budget = 400 changed lines (additions + deletions) per PR. Feature-branch chain: each slice targets the previous slice's branch; final PR targets `main`. Each slice is independently mergeable, verifiable (`npm run build` + manual ES/EN toggle), and revertible.

| # | Slice | Scope | Depends on | Est. lines | Budget flag |
|---|---|---|---|---|---|
| 1 | **gt-removal-and-dead-cleanup** | Remove GT widget + Header GT UI/JS/CSS; delete `src/scripts/i18n.js` + `src/scripts/i18n-client.ts`; remove dead import (BaseLayout L10); remove dead `googleTranslate.*` JSON keys | — | ~330 (mostly deletions) | ✅ under 400 |
| 2 | **unify-bundled-i18n-runtime** | Rewrite `src/i18n/index.ts` (window dispatch + init-dispatch + global `translateAll`); add `projects.features`/`technologies` JSON keys; head bootstrap in BaseLayout; replace `is:inline` loader; delete `public/scripts/i18n.js`; consolidate Header + ProjectsSection listeners; LanguageSwitcher → `window.setLanguage` | slice 1 | ~300 | ✅ under 400 |
| 3 | **bilingual-foundation-small-data** | Create `L10n` type + `<L10nText>` + `global.css` rules; restructure `skills.ts` (17) + `work-history.ts` (2); wire SkillCard + WorkTimelineCard + Footer (i18n + dynamic year) | slice 2 | ~300 | ✅ under 400 — proves dual-render on small data first |
| 4 | **bilingual-projects-and-cards** | Restructure `projects.ts` (10 projects, ~800-1000 hand-written lines); wire ProjectCard + ProjectModal + ProjectsSection; bilingual `<title>`/meta; final consistency pass | slice 3 | **~900-1100** | ⚠️ **SIZE:EXCEPTION** — pure translation content, low logic risk, high line count |

**Open question for user (chain_strategy, unresolved):** Slice 4 will exceed the 400-line budget because 10 projects × ~40-50 translatable strings × 2 languages is inherently bulk data (not logic). Two options for the user to confirm after `sdd-tasks`:
- **(A) Accept `size:exception` on slice 4** — ship it as one PR (fewer PRs, but a large review). Recommended for low-risk data-only diffs.
- **(B) Split slice 4** into 4a (L10n schema for projects + ProjectCard/Modal/Section wiring seeded with 3 projects) and 4b (remaining 7 projects' translations) — strict budget adherence, +1 PR, splits schema-wiring from bulk translation.

`delivery_strategy: ask-always` → the orchestrator presents this choice to the user after `sdd-tasks`.

---

## Risk Assessment (updated)

| Risk | L | Mitigation |
|------|---|------------|
| Deferred bundled module changes `window.t` timing vs today's synchronous `is:inline` | M | Head bootstrap sets `<html lang>` pre-paint (content zero-FOUC); init-dispatch fixes chrome first-paint for `es`-default users. Verify phase manually checks first paint in ES + EN. |
| Translation inconsistency across 10 projects | H | Glossary table above is authoritative; owner writes ES↔EN directly; `sdd-tasks` flags every translation task; no machine translation. |
| status enum `in-development` vs key `inDevelopment` mismatch | M | Documented (Decision 2 sketch); ProjectCard maps kebab→camelCase. |
| No test runner — regressions only caught manually | H | `verify.manual_checks_required: true` (config); `npm run build` gate; manual ES↔EN toggle across all sections. |
| Dual-render doubles DOM text nodes (projects ×2) | L | Acceptable for static portfolio; mitigate by neutral tech-stack strings. |
| Slice 4 size:exception | M | User confirms A or B above before apply. |

---

## Testing Strategy

| Layer | What | Approach |
|-------|------|----------|
| Unit | — | N/A (no test runner; `strict_tdd: false`) |
| Integration | — | N/A |
| Build | `npm run build` passes, no console errors | CI gate on every slice |
| Manual (verify phase) | ES↔EN toggles every visible string: nav, hero, about, section titles, all 10 projects (card + modal), all 17 skills, both timeline entries, footer, `<title>`/meta; first-paint in both locales with no FOUC | `manual_checks_required: true` |

---

## Migration / Rollout

No data migration, no feature flags. Deploy = GitHub Pages on push to `main`. Rollback = `git revert` + push per slice. Each chained PR slice is independently revertible.

## Open Questions

- [ ] **User decision (after sdd-tasks):** slice 4 as `size:exception` (option A) vs split into 4a/4b (option B).
- [ ] Footer year: hardcode current year or dynamic `new Date().getFullYear()`? (design recommends dynamic to avoid drift.)
