import type { L10n } from '../i18n/types';

export interface Project {
  title: L10n;
  description: L10n;
  features: L10n[];
  technologies: string[];
  status: 'completed' | 'in-development' | 'live';
  objective: L10n;
  businessFeatures: L10n[];
  techStack: string[];
  technicalFeatures: L10n[];
  architecture: L10n;
}

export const projects: Project[] = [
  {
    title: {
      en: 'CRM System for the Retail Industry',
      es: 'Sistema CRM para Industria Retail'
    },
    description: {
      en: 'A Customer Relationship Management (CRM) system specialized for the fashion and retail industry, controlling the entire lifecycle of sales orders, inventory, invoicing, and collections.',
      es: 'Sistema de gestión de relaciones con clientes (CRM) especializado para la industria de moda y retail, que controla todo el ciclo de vida de pedidos de ventas, inventario, facturación y cobros.'
    },
    objective: {
      en: 'A Customer Relationship Management (CRM) system specialized for the fashion and retail industry, controlling the entire lifecycle of sales orders, inventory, invoicing, and collections.',
      es: 'Sistema de gestión de relaciones con clientes (CRM) especializado para la industria de moda y retail, que controla todo el ciclo de vida de pedidos de ventas, inventario, facturación y cobros.'
    },
    features: [
      {
        en: 'Complete sales order and purchase order management',
        es: 'Gestión completa de pedidos de venta y órdenes de compra'
      },
      {
        en: 'Inventory control for unique products with multiple attributes',
        es: 'Control de inventario con productos únicos con múltiples atributos'
      },
      {
        en: 'Customer management with business information validation',
        es: 'Gestión de clientes con validación de información comercial'
      },
      {
        en: 'Integrated invoicing and payment system',
        es: 'Sistema de facturación y pagos integrado'
      }
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'ActionCable', 'Docker', 'Kubernetes'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Sales order (sale_orders) and purchase order (buy_orders) management',
        es: 'Gestión de pedidos de venta (sale_orders) y órdenes de compra (buy_orders)'
      },
      {
        en: 'Inventory and stock control for products with multiple attributes (size, color, reference)',
        es: 'Control de inventario y stock por productos con múltiples atributos (talla, color, referencia)'
      },
      {
        en: 'Customer management (individuals and legal entities) with business information validation',
        es: 'Gestión de clientes (personas naturales y jurídicas) con validación de información comercial'
      },
      {
        en: 'Sampling, receiving, and transfer processes between locations',
        es: 'Procesos de muestreado, recepciones y transferencias entre ubicaciones'
      },
      {
        en: 'Management of vouchers, conditionals, recoveries, and returns',
        es: 'Gestión de bonos, condicionales, recuperas y devoluciones'
      },
      {
        en: 'Invoicing and payment management',
        es: 'Facturación y gestión de pagos'
      },
      {
        en: 'Reports and exports in PDF and Excel',
        es: 'Reportes y exportaciones en PDF y Excel'
      }
    ],
    techStack: [
      'Ruby on Rails 6.1.3 + Ruby 3.0.1',
      'PostgreSQL',
      'Bootstrap 5 + jQuery + DataTables',
      'Docker + Kubernetes',
      'Redis, Sidekiq, ActionCable, WebSockets'
    ],
    technicalFeatures: [
      {
        en: 'Redis for WebSockets with ActionCable for real-time communication',
        es: 'Redis para WebSockets con ActionCable para comunicación en tiempo real'
      },
      {
        en: 'Sidekiq for asynchronous background job processing',
        es: 'Sidekiq para procesamiento asíncrono de jobs en background'
      },
      {
        en: 'Query optimization with eager loading (includes, joins, preload)',
        es: 'Optimización de queries con eager loading (includes, joins, preload)'
      },
      {
        en: 'Service Objects pattern for complex business logic',
        es: 'Service Objects Pattern para lógica de negocio compleja'
      },
      {
        en: 'Dynamic role-based authorization driven by events',
        es: 'Autorización dinámica basada en roles y eventos'
      },
      {
        en: 'Integration with external services via SOAP WebServices',
        es: 'Integración con servicios externos vía WebServices SOAP'
      },
      {
        en: 'Model change audit system',
        es: 'Sistema de auditoría de cambios en modelos'
      },
      {
        en: 'RESTful API with JWT for external integrations',
        es: 'API RESTful con JWT para integraciones externas'
      }
    ],
    architecture: {
      en: 'Modern Rails monolithic architecture with Service Objects for business logic encapsulation, Policy Pattern with centralized authorization, State Machine Pattern for state management, and Horizontal Pod Autoscaler for Kubernetes scalability.',
      es: 'Arquitectura monolítica Rails moderna con Service Objects para encapsulación de lógica de negocio, Patrón Policy con autorización centralizada, State Machine Pattern para gestión de estados, Horizontal Pod Autoscaler para escalabilidad en Kubernetes'
    }
  },
  {
    title: {
      en: 'Cash Management and Invoicing Platform',
      es: 'Plataforma de Gestión de Cajas y Facturación'
    },
    description: {
      en: 'Enterprise cash management, invoicing, and collections system with fiscal integrations for the local market.',
      es: 'Sistema de gestión de cajas, facturación y cobros empresarial con integraciones fiscales para el mercado local.'
    },
    objective: {
      en: 'Enterprise cash management, invoicing, and collections system with fiscal integrations for the local market.',
      es: 'Sistema de gestión de cajas, facturación y cobros empresarial con integraciones fiscales para el mercado local.'
    },
    features: [
      {
        en: 'Invoicing, credit notes, and debit notes',
        es: 'Facturación, notas de crédito y notas de débito'
      },
      {
        en: 'Cash management with opening/closing and reconciliations',
        es: 'Gestión de cajas con apertura/cierre y arqueos'
      },
      {
        en: 'Multiple payment methods (cash, checks, money orders, transfers)',
        es: 'Múltiples formas de pago (efectivo, cheques, giros, transferencias)'
      },
      {
        en: 'Integration with the electronic invoicing system',
        es: 'Integración con sistema de facturación electrónica'
      }
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Clockwork', 'Docker'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Invoicing: invoices, credit notes, and debit notes',
        es: 'Facturación: facturas, notas de crédito y notas de débito'
      },
      {
        en: 'Payments: receipts and multiple payment methods',
        es: 'Cobros: recibos y múltiples formas de pago'
      },
      {
        en: 'Cash Management: cash opening/closing, movements, cash reconciliations',
        es: 'Gestión de Cajas: apertura/cierre de cajas, movimientos, arqueos de caja'
      },
      {
        en: 'Vouchers: checks, cash withdrawals, disbursements',
        es: 'Comprobantes: cheques, retiros de efectivo, desembolsos'
      },
      {
        en: 'Integrations: external electronic invoicing and accounting systems',
        es: 'Integraciones: sistemas externos de facturación electrónica y contabilidad'
      },
      {
        en: 'Stamping management (fiscal authorization)',
        es: 'Gestión de timbrados (autorización fiscal)'
      },
      {
        en: 'VAT taxes with multiple rates',
        es: 'Impuestos IVA con múltiples tasas'
      }
    ],
    techStack: [
      'Ruby on Rails 6.1 + Ruby 2.7.2',
      'PostgreSQL',
      'Bootstrap 5 + jQuery',
      'Docker + Docker-compose',
      'Redis, ActionCable, Clockwork'
    ],
    technicalFeatures: [
      {
        en: 'ActionCable with Redis for real-time communication',
        es: 'ActionCable con Redis para comunicación en tiempo real'
      },
      {
        en: 'Clockwork for scheduled tasks (executed every 10 seconds)',
        es: 'Clockwork para tareas programadas (ejecutadas cada 10 segundos)'
      },
      {
        en: 'Scheduled task system for integrations with external systems',
        es: 'Sistema de tareas programadas para integraciones con sistemas externos'
      },
      {
        en: 'Versioned RESTful API for integrations',
        es: 'API RESTful versionada para integraciones'
      },
      {
        en: 'Granular role system (Admin, Manager, Financier)',
        es: 'Sistema de roles granular (Admin, Manager, Financier)'
      },
      {
        en: 'Multi-tenancy for multiple products/companies',
        es: 'Multi-tenancy para múltiples productos/empresas'
      },
      {
        en: 'Multi-currency with exchange rates and conversions',
        es: 'Multi-moneda con tipos de cambio y conversiones'
      },
      {
        en: 'Fiscal document generation in PDF/Excel',
        es: 'Generación de documentos fiscales en PDF/Excel'
      }
    ],
    architecture: {
      en: 'Modular Rails architecture with separate processes (web server + clockwork worker), a role system with granular permissions, and a database session store for scalability.',
      es: 'Arquitectura modular Rails con procesos separados (web server + clockwork worker), sistema de roles con permisos granulares, Session store en base de datos para escalabilidad'
    }
  },
  {
    title: {
      en: 'Multi-tenant CRM with Kanban Boards',
      es: 'CRM Multi-tenant con Tableros Kanban'
    },
    description: {
      en: 'Multi-tenant customer relationship management system with Kanban boards for tracking sales and collection opportunities.',
      es: 'Sistema de gestión de relaciones con clientes multi-tenant con tableros Kanban para seguimiento de oportunidades de venta y cobro.'
    },
    objective: {
      en: 'Multi-tenant customer relationship management system with Kanban boards for tracking sales and collection opportunities.',
      es: 'Sistema de gestión de relaciones con clientes multi-tenant con tableros Kanban para seguimiento de oportunidades de venta y cobro.'
    },
    features: [
      {
        en: 'Drag & drop Kanban boards for opportunity management',
        es: 'Tableros Kanban con drag & drop para gestión de oportunidades'
      },
      {
        en: 'Customer management with detailed information',
        es: 'Gestión de clientes con información detallada'
      },
      {
        en: 'Integrated calendar for activities',
        es: 'Calendario integrado para actividades'
      },
      {
        en: 'Customer communication via SMS and email',
        es: 'Comunicación con clientes vía SMS y email'
      }
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Hotwire', 'Twilio API', 'Docker'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Customer management: individuals and legal entities with detailed information',
        es: 'Gestión de clientes: personas físicas y jurídicas con información detallada'
      },
      {
        en: 'Kanban boards with stages where Cards are managed via drag & drop',
        es: 'Tableros Kanban con stages donde se gestionan Cards con drag & drop'
      },
      {
        en: 'Activity management: calls, meetings, and showrooms with an integrated calendar',
        es: 'Gestión de actividades: llamadas, reuniones y show rooms con calendario integrado'
      },
      {
        en: 'Multi-tenant: support for multiple companies with isolated data',
        es: 'Multi-tenant: soporte para múltiples empresas con datos aislados'
      },
      {
        en: 'Role system: supervisor, salesperson, stock, assistant, finance',
        es: 'Sistema de roles: supervisor, vendedor, stock, asistente, financiero'
      },
      {
        en: 'Communication: SMS and email sending to customers',
        es: 'Comunicación: envío de SMS y emails a clientes'
      },
      {
        en: 'Brands and sub-brands with product hierarchy',
        es: 'Marcas y sub-marcas con jerarquía de productos'
      },
      {
        en: 'REST API for integration with external systems',
        es: 'API REST para integración con sistemas externos'
      }
    ],
    techStack: [
      'Ruby on Rails 6.1.3 + Ruby 3.0.1',
      'PostgreSQL',
      'Bootstrap 5 + Hotwire (Turbo + Stimulus)',
      'Docker',
      'Redis, ActionCable, Twilio'
    ],
    technicalFeatures: [
      {
        en: 'Redis + ActionCable + Hotwire for real-time communication',
        es: 'Redis + ActionCable + Hotwire para comunicación en tiempo real'
      },
      {
        en: 'Automatic broadcasting on models (cards, notifications, activities, messages)',
        es: 'Broadcasting automático en modelos (cards, notificaciones, actividades, mensajes)'
      },
      {
        en: 'Multi-tenant architecture with Partner as the root entity',
        es: 'Multi-tenant architecture con Partner como entidad raíz'
      },
      {
        en: 'Query optimization with strategic eager loading',
        es: 'Optimización de queries con eager loading estratégico'
      },
      {
        en: 'Command pattern with SimpleCommand for business logic',
        es: 'Patrón Command con SimpleCommand para lógica de negocio'
      },
      {
        en: 'Polymorphism for Customer (NaturalPerson or LegalPerson)',
        es: 'Polimorfismo para Customer (NaturalPerson o LegalPerson)'
      },
      {
        en: 'RESTful API with JWT for integrations',
        es: 'API RESTful con JWT para integraciones'
      },
      {
        en: 'Twilio integration for SMS sending',
        es: 'Integración con Twilio para envío de SMS'
      },
      {
        en: 'Rich frontend with DataTables, FullCalendar, ApexCharts, Frappe Gantt',
        es: 'Frontend rico con DataTables, FullCalendar, ApexCharts, Frappe Gantt'
      }
    ],
    architecture: {
      en: 'Scalable multi-tenant architecture with Service Objects for logic encapsulation, Command Pattern for complex operations, and automatic callbacks for activity creation.',
      es: 'Arquitectura multi-tenant escalable con Service Objects para encapsulación de lógica, Patrón Command para operaciones complejas, Callbacks automáticos para creación de actividades'
    }
  },
  {
    title: {
      en: 'E-Learning Platform for Performing Arts',
      es: 'Plataforma E-Learning para Artes Escénicas'
    },
    description: {
      en: 'Educational e-learning platform specialized in theater and performing arts, featuring interactive courses, virtual classrooms, and live streaming.',
      es: 'Plataforma educativa de e-learning especializada en teatro y artes escénicas con cursos interactivos, aulas virtuales y transmisiones en vivo.'
    },
    objective: {
      en: 'Educational e-learning platform specialized in theater and performing arts, featuring interactive courses, virtual classrooms, and live streaming.',
      es: 'Plataforma educativa de e-learning especializada en teatro y artes escénicas con cursos interactivos, aulas virtuales y transmisiones en vivo.'
    },
    features: [
      {
        en: 'Marketplace of interactive theater courses',
        es: 'Marketplace de cursos interactivos de teatro'
      },
      {
        en: 'Virtual classrooms with teachers and students',
        es: 'Aulas virtuales con profesores y estudiantes'
      },
      {
        en: '8 types of interactive educational resources',
        es: '8 tipos de recursos educativos interactivos'
      },
      {
        en: 'Live streaming and recordings',
        es: 'Transmisiones en vivo y grabaciones'
      }
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'AWS S3', 'Vimeo API', 'ActionCable', 'Docker'],
    status: 'completed',
    businessFeatures: [
      {
        en: 'Companies can create and sell interactive theater courses',
        es: 'Compañías pueden crear y vender cursos interactivos de teatro'
      },
      {
        en: 'Teachers purchase licenses and manage virtual classrooms',
        es: 'Profesores compran licencias y gestionan aulas virtuales'
      },
      {
        en: 'Students access multimedia educational content',
        es: 'Estudiantes acceden a contenido educativo multimedia'
      },
      {
        en: 'Support for live streaming and recordings',
        es: 'Soporte para transmisiones en vivo y grabaciones'
      },
      {
        en: '8 resource types: videos, audios, texts, PDFs, memory games, word scrambling, multiple choice, listen and choose',
        es: '8 tipos de recursos: videos, audios, textos, PDFs, juegos de memoria, desordenamiento de palabras, opción múltiple, escuchar y elegir'
      },
      {
        en: 'Student progress system with per-activity tracking',
        es: 'Sistema de progreso del estudiante con tracking de cada actividad'
      },
      {
        en: 'License system with unique keys',
        es: 'Sistema de licencias con claves únicas'
      },
      {
        en: 'Integration with a video streaming platform',
        es: 'Integración con plataforma de video streaming'
      }
    ],
    techStack: [
      'Ruby on Rails 6.1 + Ruby 3.0.1',
      'PostgreSQL',
      'Bootstrap 4 + Webpacker + jQuery',
      'Docker + Docker-compose',
      'AWS S3, Vimeo API, Delayed Job, ActionCable'
    ],
    technicalFeatures: [
      {
        en: 'AWS S3 for file storage',
        es: 'AWS S3 para almacenamiento de archivos'
      },
      {
        en: 'Vimeo API for video streaming and live streams',
        es: 'Vimeo API para streaming de videos y live streams'
      },
      {
        en: 'ImageMagick + MiniMagick for image processing',
        es: 'ImageMagick + MiniMagick para procesamiento de imágenes'
      },
      {
        en: 'FFmpeg for video processing',
        es: 'FFmpeg para procesamiento de videos'
      },
      {
        en: 'PayPal SDK for payment processing',
        es: 'PayPal SDK para procesamiento de pagos'
      },
      {
        en: 'Complex license system with unique keys',
        es: 'Sistema de licencias complejas con claves únicas'
      },
      {
        en: 'Virtual classrooms with email invitation system',
        es: 'Aulas virtuales con sistema de invitaciones por email'
      },
      {
        en: 'Course versioning system (levels 1-3)',
        es: 'Sistema de versiones de cursos (levels 1-3)'
      },
      {
        en: 'Hierarchical structure: Play → Section → Subsection',
        es: 'Estructura jerárquica: Play → Section → Subsection'
      },
      {
        en: 'Geolocation with Geocoder',
        es: 'Geolocalización con Geocoder'
      },
      {
        en: 'Multiple currencies with differentiated pricing by country',
        es: 'Multiple monedas con precios diferenciados por país'
      }
    ],
    architecture: {
      en: 'Modular e-learning architecture with a content versioning system, a nested-section design pattern, and virtual classrooms with teacher and student management.',
      es: 'Arquitectura de E-learning modular con sistema de versiones de contenido, patrón de diseño de secciones anidadas, aulas virtuales con gestión de profesores y estudiantes'
    }
  },
  {
    title: {
      en: 'Real-Time Sweepstakes Platform',
      es: 'Plataforma de Sorteos en Tiempo Real'
    },
    description: {
      en: 'Online bingo card sales platform with live draws, an interactive roulette, and payment management.',
      es: 'Plataforma de venta de cartones de bingo en línea con sorteos en vivo, ruleta interactiva y gestión de pagos.'
    },
    objective: {
      en: 'Online bingo card sales platform with live draws, an interactive roulette, and payment management.',
      es: 'Plataforma de venta de cartones de bingo en línea con sorteos en vivo, ruleta interactiva y gestión de pagos.'
    },
    features: [
      {
        en: 'Real-time bingo card purchases',
        es: 'Compra de cartones de bingo en tiempo real'
      },
      {
        en: 'Live bingo draws and roulette',
        es: 'Sorteos de bingo y ruleta en vivo'
      },
      {
        en: 'Payment management with a local payment gateway',
        es: 'Gestión de pagos con pasarela de pagos local'
      },
      {
        en: 'Cart system with timers',
        es: 'Sistema de carritos con temporizadores'
      }
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Clockwork', 'Delayed Job', 'Docker'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Real-time bingo card sales',
        es: 'Venta de cartones de bingo en tiempo real'
      },
      {
        en: 'Live bingo draws and roulette',
        es: 'Sorteos de bingo y ruleta en vivo'
      },
      {
        en: 'Payment management through a local payment gateway',
        es: 'Gestión de pagos a través de pasarela de pagos local'
      },
      {
        en: 'Interactive roulette system with dynamic draws',
        es: 'Sistema de ruleta interactiva con sorteos dinámicos'
      },
      {
        en: 'Carts with configurable timers',
        es: 'Carritos con temporizadores configurables'
      },
      {
        en: 'Temporary card locking during checkout',
        es: 'Bloqueo temporal de cartones durante checkout'
      },
      {
        en: 'Automatic release of expired carts',
        es: 'Liberación automática de carritos expirados'
      },
      {
        en: 'Concurrency system for high availability',
        es: 'Sistema de concurrencia para alta disponibilidad'
      }
    ],
    techStack: [
      'Ruby on Rails 6.1',
      'PostgreSQL',
      'Bootstrap 4 + Webpacker + jQuery',
      'Docker + Docker-compose',
      'Redis, ActionCable, Clockwork, Delayed Job'
    ],
    technicalFeatures: [
      {
        en: 'Action Cable + Redis for real-time WebSockets',
        es: 'Action Cable + Redis para WebSockets en tiempo real'
      },
      {
        en: 'Local payment gateway SDK',
        es: 'Pasarela de pagos local SDK'
      },
      {
        en: 'Clockwork for scheduled tasks every 5 minutes',
        es: 'Clockwork para tareas programadas cada 5 minutos'
      },
      {
        en: 'Delayed Job for asynchronous processing',
        es: 'Delayed Job para procesamiento asíncrono'
      },
      {
        en: 'Concurrency system with with_lock for card locking',
        es: 'Sistema de concurrencia con with_lock para bloqueo de cartones'
      },
      {
        en: 'Redis for configuration cache and availability control',
        es: 'Redis para caché de configuración y control de disponibilidad'
      },
      {
        en: 'Query optimization with includes for eager loading',
        es: 'Optimización de queries con includes para eager loading'
      },
      {
        en: 'RESTful API for mobile app with JWT authentication',
        es: 'API RESTful para app móvil con autenticación JWT'
      },
      {
        en: 'Daily sales reports and buyer ranking system',
        es: 'Sistema de reportes de ventas diarias y ranking de compradores'
      },
      {
        en: 'Data export in CSV/XLSX',
        es: 'Exportación de datos en CSV/XLSX'
      }
    ],
    architecture: {
      en: 'Real-time architecture with WebSockets, an optimized concurrency system, and background processing with multiple workers.',
      es: 'Arquitectura de tiempo real con WebSockets, sistema de concurrencia optimizado, procesamiento en background con múltiples workers'
    }
  },
  {
    title: {
      en: 'Crowdfunding and Charity Auction Platform',
      es: 'Plataforma de Crowdfunding y Subastas Benéficas'
    },
    description: {
      en: 'Crowdfunding and charity auction platform with a competitive ranking system and integrated payments.',
      es: 'Plataforma de crowdfunding y subastas benéficas con sistema de rankings competitivos y pagos integrados.'
    },
    objective: {
      en: 'Crowdfunding and charity auction platform with a competitive ranking system and integrated payments.',
      es: 'Plataforma de crowdfunding y subastas benéficas con sistema de rankings competitivos y pagos integrados.'
    },
    features: [
      {
        en: 'Three campaign types: auction, collection, and promotional campaign',
        es: 'Tres tipos de campañas: subasta, colecta y campaña'
      },
      {
        en: 'Ranking system with tie handling',
        es: 'Sistema de rankings con manejo de empates'
      },
      {
        en: 'Integration with a local payment gateway',
        es: 'Integración con pasarela de pagos local'
      },
      {
        en: 'Certificate issuance for donors',
        es: 'Emisión de certificados para donantes'
      }
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'ActionCable', 'Hotwire', 'Docker'],
    status: 'completed',
    businessFeatures: [
      {
        en: 'Three campaign types: AUCTION (competitive ranking), COLLECTION (traditional fundraising), CAMPAIGN (promotional)',
        es: 'Tres tipos de campañas: SUBASTA (ranking competitivo), COLECTA (recaudación tradicional), CAMPAÑA (promocional)'
      },
      {
        en: 'Auctions with a ranking system where top donors win prizes',
        es: 'Subastas con sistema de rankings donde mayores donadores ganan premios'
      },
      {
        en: 'Tie-handling system that splits percentages equitably',
        es: 'Sistema de manejo de empates que divide porcentajes equitativamente'
      },
      {
        en: 'Integration with a local payment gateway',
        es: 'Integración con pasarela de pagos local'
      },
      {
        en: 'Certificate issuance for donors',
        es: 'Emisión de certificados para donantes'
      },
      {
        en: 'Role system: Admin, Administrative, Benefactor, User',
        es: 'Sistema de roles: Admin, Administrativo, Benefactor, Usuario'
      },
      {
        en: 'Real-time chat system',
        es: 'Sistema de chat en tiempo real'
      },
      {
        en: 'Real-time ranking updates when donations are approved',
        es: 'Actualizaciones de rankings en tiempo real cuando se aprueban donaciones'
      }
    ],
    techStack: [
      'Ruby on Rails 7.1.2 + Ruby 3.3.4',
      'PostgreSQL',
      'Bootstrap 5 + esbuild',
      'Docker + Docker-compose',
      'Redis, Sidekiq, Sidekiq-Cron, ActionCable, Hotwire'
    ],
    technicalFeatures: [
      {
        en: 'Sidekiq + Sidekiq-Cron for background jobs with automatic periodic tasks',
        es: 'Sidekiq + Sidekiq-Cron para jobs en background con tareas periódicas automáticas'
      },
      {
        en: 'Action Cable + Hotwire/Turbo + Redis for real-time updates',
        es: 'Action Cable + Hotwire/Turbo + Redis para tiempo real'
      },
      {
        en: 'Sophisticated algorithm for tie handling in rankings',
        es: 'Algoritmo sofisticado para manejo de empates en rankings'
      },
      {
        en: 'Complex SQL with joins, group by, and subqueries for ranking calculations',
        es: 'SQL complejo con joins, group by, subconsultas para cálculos de rankings'
      },
      {
        en: 'Periodic tasks for automatic auction opening/closing',
        es: 'Tareas periódicas para apertura/cierre automático de subastas'
      },
      {
        en: 'Local payment gateway SDK with webhooks',
        es: 'Pasarela de pagos local SDK con webhooks'
      },
      {
        en: 'Audit system with Audited',
        es: 'Sistema de auditoría con Audited'
      },
      {
        en: 'Document generation: Prawn for PDF (certificates), Caxlsx for Excel',
        es: 'Generación de documentos: Prawn para PDF (certificados), Caxlsx para Excel'
      },
      {
        en: 'Automatic model broadcasting for real-time updates',
        es: 'Broadcasting automático en modelos para actualizaciones en tiempo real'
      }
    ],
    architecture: {
      en: 'Modern Rails (7.1) architecture with Strategy Pattern for ranking tie handling, Observer Pattern with callbacks for broadcasting, Template Method Pattern for periodic tasks, and Service Objects for payment controllers.',
      es: 'Arquitectura Rails moderna (7.1) con Patrón Strategy para manejo de empates en rankings, Patrón Observer con callbacks para broadcasting, Patrón Template Method para tareas periódicas, Service Objects para controladores de pago'
    }
  },
  {
    title: {
      en: 'Serverless API for Business Reports',
      es: 'API Serverless para Reportes Comerciales'
    },
    description: {
      en: 'Serverless API based on Azure Functions that connects to a database to generate and expose business and management reports with Excel export.',
      es: 'API serverless basada en Azure Functions que conecta con base de datos para generar y exponer reportes comerciales y de gestión con exportación a Excel.'
    },
    objective: {
      en: 'Serverless API based on Azure Functions that connects to a database to generate and expose business and management reports with Excel export.',
      es: 'API serverless basada en Azure Functions que conecta con base de datos para generar y exponer reportes comerciales y de gestión con exportación a Excel.'
    },
    features: [
      {
        en: 'Price and sample report generation',
        es: 'Generación de reportes de precios y muestrarios'
      },
      {
        en: 'Data export in Excel format',
        es: 'Exportación de datos en formato Excel'
      },
      {
        en: 'Optimized for handling large data volumes',
        es: 'Optimización para manejar grandes volúmenes de datos'
      },
      {
        en: 'Automated CI/CD pipeline',
        es: 'Pipeline CI/CD automatizado'
      }
    ],
    technologies: ['Azure Functions', 'Python 3.9', 'PostgreSQL', 'Azure Application Insights', 'Azure DevOps', 'Docker'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Generates and exposes business and management reports',
        es: 'Genera y expone reportes comerciales y de gestión'
      },
      {
        en: 'External database connection',
        es: 'Conexión con base de datos externa'
      },
      {
        en: 'Data export in Excel format (.xlsx)',
        es: 'Exportación de datos en formato Excel (.xlsx)'
      },
      {
        en: 'Commercial and management price list reports',
        es: 'Reportes de lista de precio comercial y gerencia'
      },
      {
        en: 'Commercial sample report',
        es: 'Informe de muestrario comercial'
      },
      {
        en: 'Voucher reports by date',
        es: 'Reportes de vouchers por fecha'
      }
    ],
    techStack: [
      'Azure Functions + Python 3.9',
      'PostgreSQL externa',
      'Azure Functions (Consumption Plan)',
      'Azure Application Insights, Azure DevOps Pipelines'
    ],
    technicalFeatures: [
      {
        en: 'Azure Functions on a Consumption plan (pay-per-use)',
        es: 'Azure Functions con plan Consumption (pago por uso)'
      },
      {
        en: 'Azure Application Insights for monitoring and telemetry',
        es: 'Azure Application Insights para monitoreo y telemetría'
      },
      {
        en: 'Azure DevOps Pipelines for automated CI/CD',
        es: 'Azure DevOps Pipelines para CI/CD automatizado'
      },
      {
        en: 'openpyxl for Excel file generation',
        es: 'openpyxl para generación de archivos Excel'
      },
      {
        en: 'Psycopg2 for the PostgreSQL connection',
        es: 'Psycopg2 para conexión a PostgreSQL'
      },
      {
        en: 'Batch Processing with queries split into batches (BATCH_SIZE = 50)',
        es: 'Batch Processing con consultas divididas en lotes (BATCH_SIZE = 50)'
      },
      {
        en: 'Write-Only Excel Pattern with Workbook(write_only=True) for large files',
        es: 'Write-Only Excel Pattern con Workbook(write_only=True) para archivos grandes'
      },
      {
        en: 'Memory Monitoring with RAM tracking during processing',
        es: 'Memory Monitoring con tracking de RAM durante procesamiento'
      },
      {
        en: 'Helper Pattern to centralize the database connection',
        es: 'Helper Pattern para centralizar conexión a base de datos'
      },
      {
        en: 'Complex SQL queries with multiple JOINs, subqueries, and window functions',
        es: 'Queries SQL complejas con múltiples JOINs, subconsultas, window functions'
      },
      {
        en: 'Stream Response with the Excel generated in memory and returned over HTTP',
        es: 'Stream Response con Excel generado en memoria y retornado en HTTP'
      },
      {
        en: 'Docker and Docker Compose for local development',
        es: 'Docker y Docker Compose para desarrollo local'
      }
    ],
    architecture: {
      en: 'Serverless architecture optimized for performance with efficient design patterns (batching, write-only, memory monitoring) and a modular architecture with independent HTTP endpoints.',
      es: 'Arquitectura serverless optimizada para performance con patrones de diseño eficientes (batching, write-only, memory monitoring), arquitectura modular con endpoints HTTP independientes'
    }
  },
  {
    title: {
      en: 'Financial Data Processing Microservice',
      es: 'Microservicio de Procesamiento de Datos Financieros'
    },
    description: {
      en: 'FastAPI-based REST API microservice that processes Excel files containing client financial data, validating information and updating database records.',
      es: 'Microservicio API REST basado en FastAPI que procesa archivos Excel con datos financieros de clientes, validando información y actualizando registros en base de datos.'
    },
    objective: {
      en: 'FastAPI-based REST API microservice that processes Excel files containing client financial data, validating information and updating database records.',
      es: 'Microservicio API REST basado en FastAPI que procesa archivos Excel con datos financieros de clientes, validando información y actualizando registros en base de datos.'
    },
    features: [
      {
        en: 'Excel file processing with financial data',
        es: 'Procesamiento de archivos Excel con datos financieros'
      },
      {
        en: 'Client information validation',
        es: 'Validación de información de clientes'
      },
      {
        en: 'Database record updating and creation',
        es: 'Actualización y creación de registros en base de datos'
      },
      {
        en: 'Detailed execution reports',
        es: 'Reportes detallados de ejecución'
      }
    ],
    technologies: ['FastAPI', 'Python 3.9+', 'PostgreSQL', 'AsyncPG', 'Pandas', 'Openpyxl', 'Docker'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Reads Excel statements containing client information',
        es: 'Lee extractos de Excel con información de clientes'
      },
      {
        en: 'Validates client information',
        es: 'Valida la información de clientes'
      },
      {
        en: 'Updates existing client records in the database',
        es: 'Actualiza registros de clientes existentes en base de datos'
      },
      {
        en: 'Creates new person and client records when they do not exist',
        es: 'Crea nuevos registros de personas y clientes cuando no existen'
      },
      {
        en: 'Generates detailed execution reports with performance metrics',
        es: 'Genera reportes detallados de ejecución con métricas de rendimiento'
      }
    ],
    techStack: [
      'FastAPI + Python 3.9+',
      'PostgreSQL externa',
      'None (API REST)',
      'Docker + Docker Compose',
      'AsyncPG, Pandas, Openpyxl'
    ],
    technicalFeatures: [
      {
        en: 'FastAPI + Uvicorn for an asynchronous REST API',
        es: 'FastAPI + Uvicorn para API REST asíncrona'
      },
      {
        en: 'Pydantic v2 for data validation',
        es: 'Pydantic v2 para validación de datos'
      },
      {
        en: 'AsyncPG for the asynchronous PostgreSQL driver',
        es: 'AsyncPG para driver asíncrono PostgreSQL'
      },
      {
        en: 'Psycopg2 for the synchronous PostgreSQL driver',
        es: 'Psycopg2 para driver síncrono PostgreSQL'
      },
      {
        en: 'Pandas for data manipulation',
        es: 'Pandas para manipulación de datos'
      },
      {
        en: 'Openpyxl for Excel reading/writing',
        es: 'Openpyxl para lectura/escritura de Excel'
      },
      {
        en: 'Layered architecture: routes, services, models, config',
        es: 'Arquitectura por capas: routes, services, models, config'
      },
      {
        en: 'Repository Pattern with DatabaseService abstracting data access',
        es: 'Repository Pattern con DatabaseService abstrayendo acceso a datos'
      },
      {
        en: 'Async/Await for fully asynchronous operations',
        es: 'Async/Await para operaciones completamente asíncronas'
      },
      {
        en: 'Configurable connection pooling (5-20 connections)',
        es: 'Connection pooling configurable (5-20 conexiones)'
      },
      {
        en: 'Batch processing (default: 1000 rows)',
        es: 'Batch processing (default: 1000 filas)'
      },
      {
        en: 'Concurrency control with asyncio.Semaphore(10)',
        es: 'Control de concurrencia con asyncio.Semaphore(10)'
      },
      {
        en: 'ACID transactions for creating person + client',
        es: 'Transacciones ACID para crear persona+cliente'
      },
      {
        en: 'Rotating logging across 3 files (api.log, errors.log, debug.log)',
        es: 'Logging rotativo de 3 archivos (api.log, errors.log, debug.log)'
      },
      {
        en: 'REST API with API Key authentication',
        es: 'API REST con autenticación por API Key'
      }
    ],
    architecture: {
      en: 'Modular microservice architecture with design patterns: Repository, Factory, Singleton, Dependency Injection, and Chunk Processing for handling large volumes.',
      es: 'Arquitectura de microservicio modular con patrones de diseño: Repository, Factory, Singleton, Dependency Injection, Chunk Processing para manejo de grandes volúmenes'
    }
  },
  {
    title: {
      en: 'Asynchronous Data Synchronization Middleware',
      es: 'Middleware Asíncrono de Sincronización de Datos'
    },
    description: {
      en: 'High-performance asynchronous ETL middleware that synchronizes client and lead data from a database to an external CRM via JSON-RPC.',
      es: 'Middleware ETL asíncrono de alto rendimiento que sincroniza datos de clientes y leads desde base de datos hacia CRM externo mediante JSON-RPC.'
    },
    objective: {
      en: 'High-performance asynchronous ETL middleware that synchronizes client and lead data from a database to an external CRM via JSON-RPC.',
      es: 'Middleware ETL asíncrono de alto rendimiento que sincroniza datos de clientes y leads desde base de datos hacia CRM externo mediante JSON-RPC.'
    },
    features: [
      {
        en: 'Client and lead synchronization to an external CRM',
        es: 'Sincronización de clientes y leads hacia CRM externo'
      },
      {
        en: 'Change detection with MD5 hashes',
        es: 'Detección de cambios con hashes MD5'
      },
      {
        en: 'Intelligent retry system',
        es: 'Sistema de reintentos inteligente'
      },
      {
        en: 'Automatable scheduler for periodic executions',
        es: 'Scheduler automatizable para ejecuciones periódicas'
      }
    ],
    technologies: ['FastAPI', 'Python 3.8+', 'PostgreSQL', 'aiohttp', 'APScheduler', 'AsyncPG', 'Docker'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Synchronizes clients from the financial database to the external CRM as partners',
        es: 'Sincroniza clientes de base de datos financiera hacia CRM externo como partners'
      },
      {
        en: 'Generates leads/opportunities for clients with outstanding debt',
        es: 'Genera leads/oportunidades para clientes con deuda pendiente'
      },
      {
        en: 'Calculates delinquency states (8 levels)',
        es: 'Calcula estados de morosidad (8 niveles)'
      },
      {
        en: 'Detects changes via MD5 hashes to avoid unnecessary updates',
        es: 'Detecta cambios mediante hashes MD5 para evitar actualizaciones innecesarias'
      },
      {
        en: 'Intelligent retry system for handling connection failures',
        es: 'Sistema de reintentos inteligente para manejar fallos de conexión'
      },
      {
        en: 'Complete REST API to control synchronizations',
        es: 'API REST completa para controlar las sincronizaciones'
      },
      {
        en: 'Automatable scheduler for periodic executions',
        es: 'Scheduler automatizable para ejecuciones periódicas'
      }
    ],
    techStack: [
      'FastAPI + Python 3.8+',
      'PostgreSQL externa (fuente)',
      'CRM Externo (destino vía JSON-RPC)',
      'Docker + Docker Compose',
      'aiohttp, APScheduler, AsyncPG'
    ],
    technicalFeatures: [
      {
        en: 'FastAPI + Uvicorn for an asynchronous REST API',
        es: 'FastAPI + Uvicorn para API REST asíncrona'
      },
      {
        en: 'Pydantic v2 for data validation',
        es: 'Pydantic v2 para validación de datos'
      },
      {
        en: 'aiohttp for the asynchronous HTTP client with the external CRM',
        es: 'aiohttp para cliente HTTP asíncrono con CRM externo'
      },
      {
        en: 'AsyncPG for the asynchronous PostgreSQL driver',
        es: 'AsyncPG para driver asíncrono PostgreSQL'
      },
      {
        en: 'APScheduler for a cron-like task scheduling system',
        es: 'APScheduler para sistema de programación de tareas cron-like'
      },
      {
        en: 'Asynchronous programming with controlled concurrency (50 requests by default)',
        es: 'Programación asíncrona con concurrencia controlada (50 requests por defecto)'
      },
      {
        en: 'Batch processing of 1000 records for memory management',
        es: 'Batch processing de 1000 registros para gestión de memoria'
      },
      {
        en: 'asyncio.gather() for parallel execution of API calls',
        es: 'asyncio.gather() para ejecución paralela de llamadas a la API'
      },
      {
        en: 'Change detection with MD5 hash (compares against hash stored in CRM)',
        es: 'Detección de cambios con hash MD5 (compara con hash almacenado en CRM)'
      },
      {
        en: 'Retry system (up to 2 attempts) with error classification',
        es: 'Sistema de reintentos (hasta 2 intentos) con clasificación de errores'
      },
      {
        en: 'Mass failure detection (>5000) that halts automatic retries',
        es: 'Detección de fallos masivos (>5000) que detienen reintentos automáticos'
      },
      {
        en: 'Dependency injection with FastAPI',
        es: 'Inyección de dependencias con FastAPI'
      },
      {
        en: 'Modular architecture with clear separation',
        es: 'Arquitectura modular con separación clara'
      },
      {
        en: 'Persistent logging of up to 50 historical executions',
        es: 'Logging persistente hasta 50 ejecuciones históricas'
      },
      {
        en: '27 REST endpoints (clients, leads, full_sync, scheduler, system)',
        es: '27 endpoints REST (clients, leads, full_sync, scheduler, system)'
      },
      {
        en: 'Complex SQL queries with CTEs and LEFT JOIN LATERAL',
        es: 'Consultas SQL complejas con CTEs, LEFT JOIN LATERAL'
      },
      {
        en: 'API Key authentication',
        es: 'Autenticación por API Key'
      }
    ],
    architecture: {
      en: 'Asynchronous ETL middleware architecture with a global Singleton for sync_engine and scheduler, context managers for HTTP session management, and a modular Router with FastAPI.',
      es: 'Arquitectura de middleware ETL asíncrono con Singleton global para sync_engine y scheduler, Context managers para gestión de sesiones HTTP, Router modular con FastAPI'
    }
  },
  {
    title: {
      en: 'Modern Corporate Website',
      es: 'Sitio Web Corporativo Moderno'
    },
    description: {
      en: 'A modern, performance-optimized corporate website for a software development and technology consulting company.',
      es: 'Sitio web corporativo moderno y optimizado para performance de una empresa de desarrollo de software y consultoría tecnológica.'
    },
    objective: {
      en: 'A modern, performance-optimized corporate website for a software development and technology consulting company.',
      es: 'Sitio web corporativo moderno y optimizado para performance de una empresa de desarrollo de software y consultoría tecnológica.'
    },
    features: [
      {
        en: 'Services and project portfolio presentation',
        es: 'Presentación de servicios y portafolio de proyectos'
      },
      {
        en: 'Professional team information',
        es: 'Información del equipo profesional'
      },
      {
        en: 'Contact form for lead capture',
        es: 'Formulario de contacto para captación de leads'
      },
      {
        en: 'Performance optimization for fast loading',
        es: 'Optimización de performance para carga rápida'
      }
    ],
    technologies: ['Astro 5.7.12', 'TypeScript', 'Tailwind CSS 4.1.6', 'GitLab Pages', 'Google Tag Manager', 'FormSubmit', 'Google reCAPTCHA'],
    status: 'live',
    businessFeatures: [
      {
        en: 'Present company services (Software Factory, Consulting, Infrastructure)',
        es: 'Presentar servicios de la empresa (Software Factory, Consultoría, Infraestructura)'
      },
      {
        en: 'Showcase a project portfolio across various sectors',
        es: 'Mostrar portafolio de proyectos en diversos sectores'
      },
      {
        en: 'Introduce the professional team',
        es: 'Presentar al equipo de profesionales'
      },
      {
        en: 'Capture potential leads through contact forms',
        es: 'Captar leads potenciales a través de formularios de contacto'
      },
      {
        en: 'Establish digital presence and credibility in the market',
        es: 'Establecer presencia digital y credibilidad en el mercado'
      }
    ],
    techStack: [
      'Astro 5.7.12 + TypeScript',
      'Tailwind CSS 4.1.6',
      'GitLab Pages',
      'Google Tag Manager, FormSubmit, Google reCAPTCHA'
    ],
    technicalFeatures: [
      {
        en: 'Astro 5 modern framework optimized for performance and static content',
        es: 'Astro 5 framework moderno optimizado para performance y contenido estático'
      },
      {
        en: 'Tailwind CSS 4 utility-first design system',
        es: 'Tailwind CSS 4 sistema de diseño utility-first'
      },
      {
        en: 'TypeScript with strict configuration',
        es: 'TypeScript con configuración estricta'
      },
      {
        en: 'Component-based architecture (.astro)',
        es: 'Arquitectura basada en componentes (.astro)'
      },
      {
        en: 'Data-Driven Content with centralized JSON for dynamic content',
        es: 'Data-Driven Content con JSON centralizado para contenido dinámico'
      },
      {
        en: 'Asset Optimization with import.meta.glob() for dynamic image loading',
        es: 'Asset Optimization con import.meta.glob() para carga dinámica de imágenes'
      },
      {
        en: 'Astro Image component with automatic optimization',
        es: 'Componente Image de Astro con optimización automática'
      },
      {
        en: 'WebP as the primary format',
        es: 'WebP como formato principal'
      },
      {
        en: 'Strategic lazy loading and eager loading',
        es: 'Lazy loading y eager loading estratégico'
      },
      {
        en: 'Google Tag Manager for analytics and conversion tracking',
        es: 'Google Tag Manager para analytics y seguimiento de conversiones'
      },
      {
        en: 'FormSubmit.co for serverless form handling',
        es: 'FormSubmit.co para backend-less de formularios'
      },
      {
        en: 'Google reCAPTCHA v2 for anti-spam protection',
        es: 'Google reCAPTCHA v2 para protección anti-spam'
      },
      {
        en: 'GitLab Pages for hosting with automated CI/CD deployment',
        es: 'GitLab Pages para hosting con despliegue automático vía CI/CD'
      },
      {
        en: 'Scoped CSS for encapsulated styling',
        es: 'Scoped CSS para estilos encapsulados'
      },
      {
        en: 'CSS Variables System for consistent theming',
        es: 'CSS Variables System para theming consistente'
      },
      {
        en: 'Mobile-first responsive design with sticky navbar and hamburger menu',
        es: 'Responsive móvil-first con sticky navbar y menú hamburguesa'
      },
      {
        en: 'Fade-in animations and smooth CSS transitions',
        es: 'Animaciones fade-in y transiciones CSS suaves'
      }
    ],
    architecture: {
      en: 'Optimized static site architecture with reactive componentization using Astro and a static-generation build process for maximum performance.',
      es: 'Arquitectura de sitios estáticos optimizados con Componentización Reactiva con Astro, Build process con static generation para máximo rendimiento'
    }
  }
];
