import en from './en.json';
import es from './es.json';

export type Language = 'en' | 'es';
export type Translations = typeof en;

export const translations = {
  en,
  es
};

let currentLanguage: Language = 'en';

const isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

export function setLanguage(lang: Language) {
  currentLanguage = lang;
  
  if (isBrowser) {
    try {
      localStorage.setItem('language', lang);
    } catch (e) {
      // Ignore localStorage errors (e.g., incognito mode, cookies disabled)
    }
    
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.dispatchEvent(new CustomEvent('language-changed'));
    }
  }
}

export function getLanguage(): Language {
  return currentLanguage;
}

export function getClientLanguage(): Language {
  if (!isBrowser) {
    return 'en';
  }
  return currentLanguage;
}

export function t(key: string): string {
  const keys = key.split('.');
  let value: any = translations[currentLanguage];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

export function initLanguage() {
  if (!isBrowser) {
    // Fallback for SSR - use English as default
    currentLanguage = 'en';
    return;
  }
  
  try {
    const saved = localStorage.getItem('language') as Language;
    const browser = navigator.language.startsWith('es') ? 'es' : 'en';
    currentLanguage = saved || browser;
    
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLanguage;
    }
  } catch (e) {
    // Fallback in case of any error
    currentLanguage = 'en';
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'en';
    }
  }
}
