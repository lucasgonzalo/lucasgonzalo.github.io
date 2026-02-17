import { initLanguage, t, getLanguage } from '../i18n';

// Initialize i18n
initLanguage();

// Expose translation function globally
(window as any).t = t;
(window as any).getLanguage = getLanguage;
(window as any).setLanguage = (lang: 'en' | 'es') => {
  const { setLanguage: setLang } = require('../i18n');
  setLang(lang);
};
