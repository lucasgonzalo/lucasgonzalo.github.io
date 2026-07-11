import type { L10n } from '../i18n/types';

export interface WorkHistory {
  company: string;
  role: L10n;
  period: string;
  description: L10n[];
  isCurrent?: boolean;
}

export const workHistory: WorkHistory[] = [
  {
    company: 'Nuntiusit',
    role: {
      en: 'Software Developer',
      es: 'Desarrollador de Software'
    },
    period: '2019 - 2024',
    description: [
      {
        en: 'Worked on multiple projects for diverse clients, delivering robust and scalable web solutions',
        es: 'Trabajé en múltiples proyectos para diversos clientes, entregando soluciones web robustas y escalables'
      },
      {
        en: 'Specialized in Ruby on Rails development, building custom applications from requirements analysis to deployment',
        es: 'Me especialicé en desarrollo con Ruby on Rails, construyendo aplicaciones a medida desde el análisis de requisitos hasta el despliegue'
      },
      {
        en: 'Collaborated in cross-functional teams to design and implement database architectures and system solutions',
        es: 'Colaboré en equipos multifuncionales para diseñar e implementar arquitecturas de bases de datos y soluciones de sistema'
      }
    ]
  },
  {
    company: 'Solo Developer',
    role: {
      en: 'Full Stack Developer',
      es: 'Desarrollador Full Stack'
    },
    period: '2025 - Present',
    isCurrent: true,
    description: [
      {
        en: 'End-to-end development: requirements analysis, database design, system architecture, and deployment strategies',
        es: 'Desarrollo de extremo a extremo: análisis de requisitos, diseño de bases de datos, arquitectura de sistemas y estrategias de despliegue'
      },
      {
        en: 'Analytics implementation and monitoring for performance optimization',
        es: 'Implementación de analítica y monitorización para la optimización del rendimiento'
      },
      {
        en: 'Complete project management including publicity, marketing, and client relations',
        es: 'Gestión completa de proyectos, incluyendo publicidad, marketing y relaciones con clientes'
      },
      {
        en: 'Building commercial applications with focus on scalability and user experience',
        es: 'Construcción de aplicaciones comerciales con foco en escalabilidad y experiencia de usuario'
      }
    ]
  }
];
