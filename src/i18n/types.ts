/**
 * Bilingual content schema. Every translatable content field uses `L10n` so a
 * single value carries both locales; the build-time `<L10nText>` component
 * emits both and CSS (keyed on `html[lang]`) hides the inactive one.
 *
 * `en` is the source-of-truth locale and the runtime fallback, so it is always
 * present. Field order is `{ en, es }` to match the JSON file order and the
 * runtime default (`currentLanguage = 'en'`).
 */
export type Language = 'en' | 'es';
export type L10n = { en: string; es: string };
