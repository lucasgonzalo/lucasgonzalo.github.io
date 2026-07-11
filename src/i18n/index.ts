import en from './en.json';
import es from './es.json';
import type { Language } from './types';

// Re-export so existing `import { Language } from '../i18n'` callers resolve
// to the single canonical definition in `./types`.
export type { Language } from './types';
export type { L10n } from './types';
export type Translations = typeof en;

export const translations = { en, es };

let currentLanguage: Language = 'en';

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

declare global {
  interface Window {
    t: (key: string) => string;
    getLanguage: () => Language;
    setLanguage: (lang: Language) => void;
  }
}

/**
 * Resolve the initial language. Saved preference wins, else the browser
 * locale, else English (the source-of-truth fallback). The head bootstrap in
 * `BaseLayout.astro` sets `<html lang>` synchronously before first paint
 * using the same priority; this runs later from the deferred bundled module.
 */
function resolveInitialLanguage(): Language {
  if (!isBrowser) return 'en';
  try {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved === 'en' || saved === 'es') return saved;
    return navigator.language.startsWith('es') ? 'es' : 'en';
  } catch {
    return 'en';
  }
}

/**
 * Translate a dotted key (e.g. `projects.status.completed`) against the
 * active locale's dictionary. Returns the key itself when no translation is
 * found, so missing strings degrade visibly instead of rendering `undefined`.
 */
export function t(key: string): string {
  const segments = key.split('.');
  let value: unknown = translations[currentLanguage];
  for (const segment of segments) {
    value = (value as Record<string, unknown> | undefined)?.[segment];
  }
  return typeof value === 'string' ? value : key;
}

export function getLanguage(): Language {
  return currentLanguage;
}

/**
 * Translate every `[data-i18n]` element in the document. This is the SINGLE
 * global translator owned by the runtime: it runs once on init (fixing the
 * first-paint FOUC for non-English-default users) and again on every language
 * change. Components MUST NOT duplicate this loop; component-specific render
 * logic that does more than plain translation (contact placeholders, modal
 * emoji prefixes) subscribes to the `language-changed` event instead.
 */
export function translateAll(): void {
  if (!isBrowser) return;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) {
      el.textContent = t(key);
    }
  });
}

/**
 * Switch the active language: persist the choice, set `<html lang>`,
 * translate all chrome via `translateAll`, then dispatch `language-changed`
 * on `window` (never `document`) so component-specific subscribers sync.
 */
export function setLanguage(lang: Language): void {
  currentLanguage = lang;
  if (!isBrowser) return;
  try {
    localStorage.setItem('language', lang);
  } catch {
    // Ignore storage errors (incognito, disabled cookies).
  }
  document.documentElement.lang = lang;
  translateAll();
  window.dispatchEvent(
    new CustomEvent('language-changed', { detail: { language: lang } })
  );
}

/**
 * Initialize the runtime from the head bootstrap's chosen language: resolve
 * the active language, set `<html lang>`, translate all chrome NOW, and
 * dispatch `language-changed` once so component-specific subscribers
 * (placeholders, modal emoji) sync on first paint. Called from the deferred
 * bundled entry in `BaseLayout.astro` (runs post-parse at readyState
 * 'interactive', so all parsed nodes/listeners exist).
 */
export function initLanguage(): void {
  if (!isBrowser) {
    currentLanguage = 'en';
    return;
  }
  currentLanguage = resolveInitialLanguage();
  document.documentElement.lang = currentLanguage;
  translateAll();
  window.dispatchEvent(
    new CustomEvent('language-changed', { detail: { language: currentLanguage } })
  );
}

// Hoist the runtime onto `window` so listeners attached by Astro `<script>`
// blocks (which cannot import this module directly) can call them. Available
// after the deferred bundled module executes (post-parse, pre-DOMContentLoaded).
if (isBrowser) {
  window.t = t;
  window.getLanguage = getLanguage;
  window.setLanguage = setLanguage;
}
