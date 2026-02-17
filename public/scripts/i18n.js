// i18n translations
const translations = {
  en: {
    "nav": {
      "about": "About",
      "skills": "Skills",
      "experience": "Work Experience",
      "projects": "Projects",
      "contact": "Contact"
    },
    "hero": {
      "title": "Lucas Abregú Maradona",
      "subtitle": "Software Developer",
      "getInTouch": "Get In Touch",
      "viewWork": "View Work"
    },
    "about": {
      "title": "About Me",
      "greeting": "Hi, I'm Lucas Gonzalo, a passionate Ruby on Rails developer with 4 years of experience building robust and custom web applications. I specialize in creating scalable solutions that drive business growth.",
      "expertise": "My expertise spans across full-stack development, from business problem analysis walking through building efficient backend systems and designing intuitive user interfaces. I'm committed to writing clean, maintainable code and staying updated with latest technologies."
    },
    "skills": {
      "title": "Technologies"
    },
    "experience": {
      "title": "Work Experience"
    },
    "projects": {
      "title": "Projects",
      "description": "Featured projects showcasing my expertise in full-stack development, from complex enterprise systems to innovative solutions.",
      "viewMore": "View More",
      "status": {
        "completed": "Completed",
        "live": "Live",
        "inDevelopment": "In Development"
      },
      "modal": {
        "objective": "Project Objective",
        "detailedDescription": "Detailed Description",
        "businessFeatures": "Business Features",
        "techStack": "Tech Stack",
        "technicalFeatures": "Technical Features",
        "architecture": "Architecture",
        "close": "Close Modal"
      },
      "features": "Key Features",
      "technologies": "Technologies"
    },
    "contact": {
      "title": "Contact",
      "intro": "Have a project in mind or want to collaborate? Feel free to reach out!",
      "emailLabel": "Your Email",
      "emailPlaceholder": "your@email.com",
      "messageLabel": "Your Message",
      "messagePlaceholder": "Drop some words here...",
      "sendButton": "Send Message",
      "email": "lgabregu@gmail.com",
      "linkedin": "LinkedIn"
    },
    "languageSwitcher": {
      "title": "Language"
    },
    "googleTranslate": {
      "title": "Auto Translate"
    }
  },
  es: {
    "nav": {
      "about": "Sobre Mí",
      "skills": "Habilidades",
      "experience": "Experiencia",
      "projects": "Proyectos",
      "contact": "Contacto"
    },
    "hero": {
      "title": "Lucas Abregú Maradona",
      "subtitle": "Desarrollador de Software",
      "getInTouch": "Contáctame",
      "viewWork": "Ver Trabajos"
    },
    "about": {
      "title": "Sobre Mí",
      "greeting": "Hola, soy Lucas Gonzalo, un apasionado desarrollador Ruby on Rails con 4 años de experiencia construyendo aplicaciones web robustas y personalizadas. Me especializo en crear soluciones escalables que impulsan el crecimiento empresarial.",
      "expertise": "Mi experiencia abarca el desarrollo full-stack, desde el análisis de problemas de negocio hasta la construcción de sistemas backend eficientes y el diseño de interfaces de usuario intuitivas. Me comprometo a escribir código limpio y mantenible, manteniéndome actualizado con las últimas tecnologías."
    },
    "skills": {
      "title": "Tecnologías"
    },
    "experience": {
      "title": "Experiencia Laboral"
    },
    "projects": {
      "title": "Proyectos",
      "description": "Proyectos destacados que muestran mi experiencia en desarrollo full-stack, desde sistemas empresariales complejos hasta soluciones innovadoras.",
      "viewMore": "Ver Más",
      "status": {
        "completed": "Completado",
        "live": "En Producción",
        "inDevelopment": "En Desarrollo"
      },
      "modal": {
        "objective": "Objetivo del Proyecto",
        "detailedDescription": "Descripción Detallada",
        "businessFeatures": "Funcionalidades de Negocio",
        "techStack": "Stack Tecnológico",
        "technicalFeatures": "Características Técnicas",
        "architecture": "Arquitectura",
        "close": "Cerrar Modal"
      },
      "features": "Características Destacadas",
      "technologies": "Tecnologías"
    },
    "contact": {
      "title": "Contacto",
      "intro": "¿Tienes un proyecto en mente o quieres colaborar? ¡No dudes en contactarme!",
      "emailLabel": "Tu Email",
      "emailPlaceholder": "tu@email.com",
      "messageLabel": "Tu Mensaje",
      "messagePlaceholder": "Escribe algo aquí...",
      "sendButton": "Enviar Mensaje",
      "email": "lgabregu@gmail.com",
      "linkedin": "LinkedIn"
    },
    "languageSwitcher": {
      "title": "Idioma"
    },
    "googleTranslate": {
      "title": "Traducción Automática"
    }
  }
};

let currentLanguage = 'en';

// Initialize language
function initLanguage() {
  try {
    const saved = localStorage.getItem('language');
    const browser = navigator.language.startsWith('es') ? 'es' : 'en';
    currentLanguage = saved || browser;
    document.documentElement.lang = currentLanguage;
  } catch (e) {
    // Fallback for server-side rendering
    currentLanguage = 'en';
    document.documentElement.lang = 'en';
  }
}

// Get current language
function getLanguage() {
  return currentLanguage;
}

// Set language
function setLanguage(lang) {
  currentLanguage = lang;
  try {
    localStorage.setItem('language', lang);
  } catch (e) {
    // Ignore localStorage errors
  }
  document.documentElement.lang = lang;
  
  // Dispatch custom event for components to listen
  window.dispatchEvent(new CustomEvent('language-changed', { detail: { language: lang } }));
}

// Translation function
function t(key) {
  const keys = key.split('.');
  let value = translations[currentLanguage];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
}

// Initialize on DOMContentLoaded, not immediately
if (typeof window !== 'undefined' && document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else if (typeof window !== 'undefined') {
  // DOM is already ready
  initLanguage();
}

// Expose functions globally
window.t = t;
window.getLanguage = getLanguage;
window.setLanguage = setLanguage;
