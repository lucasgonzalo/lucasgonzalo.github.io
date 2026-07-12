import type { L10n } from '../i18n/types';

export interface Skill {
  name: L10n;
  icon: string;
  description: L10n;
}

export const skills: Skill[] = [
  {
    name: { en: 'HTML5', es: 'HTML5' },
    icon: 'fab fa-html5',
    description: {
      en: 'The structure and content foundation of web pages. Think of it as the skeleton of a webpage.',
      es: 'El fundamento de estructura y contenido de las páginas web. Piénsalo como el esqueleto de una página web.'
    }
  },
  {
    name: { en: 'CSS3', es: 'CSS3' },
    icon: 'fab fa-css3-alt',
    description: {
      en: 'The styling and layout system. It controls colors, fonts, spacing, and how elements look on screen.',
      es: 'El sistema de estilos y diseño. Controla colores, tipografías, espaciado y la apariencia de los elementos en pantalla.'
    }
  },
  {
    name: { en: 'JavaScript', es: 'JavaScript' },
    icon: 'fab fa-js-square',
    description: {
      en: 'Adds interactivity and dynamic behavior to websites. Makes pages respond to clicks, scrolls, and user actions.',
      es: 'Añade interactividad y comportamiento dinámico a los sitios web. Hace que las páginas respondan a clics, desplazamientos y acciones del usuario.'
    }
  },
  {
    name: { en: 'Ruby on Rails', es: 'Ruby on Rails' },
    icon: 'fas fa-gem',
    description: {
      en: 'A powerful framework for building web applications. It provides tools and conventions to create websites quickly and securely.',
      es: 'Un framework potente para construir aplicaciones web. Ofrece herramientas y convenciones para crear sitios de forma rápida y segura.'
    }
  },
  {
    name: { en: 'PostgreSQL', es: 'PostgreSQL' },
    icon: 'fas fa-database',
    description: {
      en: "A database system that stores and organizes information. Like a digital filing cabinet for your application's data.",
      es: 'Un sistema de base de datos que almacena y organiza información. Como un archivador digital para los datos de tu aplicación.'
    }
  },
  {
    name: { en: 'Redis', es: 'Redis' },
    icon: 'fas fa-database',
    description: {
      en: 'A fast storage system for temporary data. Helps websites load quickly by keeping frequently used information ready.',
      es: 'Un sistema de almacenamiento rápido para datos temporales. Ayuda a que los sitios web carguen rápido manteniendo lista la información de uso frecuente.'
    }
  },
  {
    name: { en: 'Docker', es: 'Docker' },
    icon: 'fab fa-docker',
    description: {
      en: 'Creates consistent environments for running applications. Ensures your software works the same everywhere.',
      es: 'Crea entornos consistentes para ejecutar aplicaciones. Garantiza que tu software funcione igual en cualquier lugar.'
    }
  },
  {
    name: { en: 'Git - GitHub - GitLab', es: 'Git - GitHub - GitLab' },
    icon: 'fab fa-git',
    description: {
      en: 'Tracks changes to code over time. Allows you to save versions, collaborate, and undo mistakes.',
      es: 'Registra los cambios en el código a lo largo del tiempo. Permite guardar versiones, colaborar y deshacer errores.'
    }
  },
  {
    name: { en: 'Amazon Web Services', es: 'Amazon Web Services' },
    icon: 'fab fa-aws',
    description: {
      en: 'Cloud computing services. Provides servers, databases, and tools to run applications without owning physical computers.',
      es: 'Servicios de computación en la nube. Ofrece servidores, bases de datos y herramientas para ejecutar aplicaciones sin tener computadoras físicas.'
    }
  },
  {
    name: { en: 'Google Cloud', es: 'Google Cloud' },
    icon: 'fab fa-google',
    description: {
      en: 'Similar to AWS, provides cloud services and infrastructure for building and running applications.',
      es: 'Similar a AWS, ofrece servicios e infraestructura en la nube para construir y ejecutar aplicaciones.'
    }
  },
  {
    name: { en: 'Python', es: 'Python' },
    icon: 'fab fa-python',
    description: {
      en: "A programming language that's easy to read and write. Great for building web applications, data analysis, and automation.",
      es: 'Un lenguaje de programación fácil de leer y escribir. Ideal para construir aplicaciones web, análisis de datos y automatización.'
    }
  },
  {
    name: { en: 'Astro', es: 'Astro' },
    icon: 'fas fa-rocket',
    description: {
      en: 'A modern website framework that makes it fast and easy to build websites. Optimizes your site to load quickly and work on all devices.',
      es: 'Un framework moderno que agiliza la creación de sitios web. Optimiza tu sitio para que cargue rápido y funcione en todos los dispositivos.'
    }
  },
  {
    name: { en: 'Genexus', es: 'Genexus' },
    icon: 'fas fa-cubes',
    description: {
      en: 'A visual platform that creates business applications without traditional coding. Automates development tasks and helps companies build and manage software faster.',
      es: 'Una plataforma visual que crea aplicaciones de negocio sin programación tradicional. Automatiza tareas de desarrollo y ayuda a las empresas a construir y gestionar software más rápido.'
    }
  },
  {
    name: { en: 'WordPress', es: 'WordPress' },
    icon: 'fab fa-wordpress',
    description: {
      en: 'A tool for creating and managing websites without writing code. Makes it easy for businesses to set up blogs, online stores, or company websites.',
      es: 'Una herramienta para crear y gestionar sitios web sin escribir código. Facilita a los negocios montar blogs, tiendas online o sitios corporativos.'
    }
  },
  {
    name: { en: 'Jira', es: 'Jira' },
    icon: 'fab fa-jira',
    description: {
      en: 'Project tracking and management software. Helps teams plan work, track bugs, and collaborate on projects in one place.',
      es: 'Software de seguimiento y gestión de proyectos. Ayuda a los equipos a planificar el trabajo, registrar errores y colaborar en proyectos en un solo lugar.'
    }
  },
  {
    name: { en: 'Microsoft Azure', es: 'Microsoft Azure' },
    icon: 'fab fa-microsoft',
    description: {
      en: 'A cloud computing platform that provides services for building, deploying, and managing applications. Like having a virtual data center.',
      es: 'Una plataforma de computación en la nube que ofrece servicios para construir, desplegar y gestionar aplicaciones. Como tener un centro de datos virtual.'
    }
  },
  {
    name: { en: 'Odoo', es: 'Odoo' },
    icon: 'fas fa-odoo',
    description: {
      en: 'A business management platform that combines tools for accounting, inventory, customer management, and more into one system.',
      es: 'Una plataforma de gestión empresarial que combina herramientas de contabilidad, inventario, gestión de clientes y más en un solo sistema.'
    }
  }
];
