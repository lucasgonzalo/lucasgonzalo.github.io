export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  status: 'completed' | 'in-development' | 'live';
  objective?: string;
  businessFeatures?: string[];
  techStack?: string[];
  technicalFeatures?: string[];
  architecture?: string;
}

export const projects: Project[] = [
  {
    title: 'Sistema CRM para Industria Retail',
    description: 'Sistema de gestión de relaciones con clientes (CRM) especializado para la industria de moda y retail, que controla todo el ciclo de vida de pedidos de ventas, inventario, facturación y cobros.',
    objective: 'Sistema de gestión de relaciones con clientes (CRM) especializado para la industria de moda y retail, que controla todo el ciclo de vida de pedidos de ventas, inventario, facturación y cobros.',
    features: [
      'Gestión completa de pedidos de venta y órdenes de compra',
      'Control de inventario con productos únicos con múltiples atributos',
      'Gestión de clientes con validación de información comercial',
      'Sistema de facturación y pagos integrado'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'ActionCable', 'Docker', 'Kubernetes'],
    status: 'live',
    businessFeatures: [
      'Gestión de pedidos de venta (sale_orders) y órdenes de compra (buy_orders)',
      'Control de inventario y stock por productos con múltiples atributos (talla, color, referencia)',
      'Gestión de clientes (personas naturales y jurídicas) con validación de información comercial',
      'Procesos de muestreado, recepciones y transferencias entre ubicaciones',
      'Gestión de bonos, condicionales, recuperas y devoluciones',
      'Facturación y gestión de pagos',
      'Reportes y exportaciones en PDF y Excel'
    ],
    techStack: [
      'Ruby on Rails 6.1.3 + Ruby 3.0.1',
      'PostgreSQL',
      'Bootstrap 5 + jQuery + DataTables',
      'Docker + Kubernetes',
      'Redis, Sidekiq, ActionCable, WebSockets'
    ],
    technicalFeatures: [
      'Redis para WebSockets con ActionCable para comunicación en tiempo real',
      'Sidekiq para procesamiento asíncrono de jobs en background',
      'Optimización de queries con eager loading (includes, joins, preload)',
      'Service Objects Pattern para lógica de negocio compleja',
      'Autorización dinámica basada en roles y eventos',
      'Integración con servicios externos vía WebServices SOAP',
      'Sistema de auditoría de cambios en modelos',
      'API RESTful con JWT para integraciones externas'
    ],
    architecture: 'Arquitectura monolítica Rails moderna con Service Objects para encapsulación de lógica de negocio, Patrón Policy con autorización centralizada, State Machine Pattern para gestión de estados, Horizontal Pod Autoscaler para escalabilidad en Kubernetes'
  },
  {
    title: 'Plataforma de Gestión de Cajas y Facturación',
    description: 'Sistema de gestión de cajas, facturación y cobros empresarial con integraciones fiscales para el mercado local.',
    objective: 'Sistema de gestión de cajas, facturación y cobros empresarial con integraciones fiscales para el mercado local.',
    features: [
      'Facturación, notas de crédito y notas de débito',
      'Gestión de cajas con apertura/cierre y arqueos',
      'Múltiples formas de pago (efectivo, cheques, giros, transferencias)',
      'Integración con sistema de facturación electrónica'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Clockwork', 'Docker'],
    status: 'live',
    businessFeatures: [
      'Facturación: facturas, notas de crédito y notas de débito',
      'Cobros: recibos y múltiples formas de pago',
      'Gestión de Cajas: apertura/cierre de cajas, movimientos, arqueos de caja',
      'Comprobantes: cheques, retiros de efectivo, desembolsos',
      'Integraciones: sistemas externos de facturación electrónica y contabilidad',
      'Gestión de timbrados (autorización fiscal)',
      'Impuestos IVA con múltiples tasas'
    ],
    techStack: [
      'Ruby on Rails 6.1 + Ruby 2.7.2',
      'PostgreSQL',
      'Bootstrap 5 + jQuery',
      'Docker + Docker-compose',
      'Redis, ActionCable, Clockwork'
    ],
    technicalFeatures: [
      'ActionCable con Redis para comunicación en tiempo real',
      'Clockwork para tareas programadas (ejecutadas cada 10 segundos)',
      'Sistema de tareas programadas para integraciones con sistemas externos',
      'API RESTful versionada para integraciones',
      'Sistema de roles granular (Admin, Manager, Financier)',
      'Multi-tenancy para múltiples productos/empresas',
      'Multi-moneda con tipos de cambio y conversiones',
      'Generación de documentos fiscales en PDF/Excel'
    ],
    architecture: 'Arquitectura modular Rails con procesos separados (web server + clockwork worker), sistema de roles con permisos granulares, Session store en base de datos para escalabilidad'
  },
  {
    title: 'CRM Multi-tenant con Tableros Kanban',
    description: 'Sistema de gestión de relaciones con clientes multi-tenant con tableros Kanban para seguimiento de oportunidades de venta y cobro.',
    objective: 'Sistema de gestión de relaciones con clientes multi-tenant con tableros Kanban para seguimiento de oportunidades de venta y cobro.',
    features: [
      'Tableros Kanban con drag & drop para gestión de oportunidades',
      'Gestión de clientes con información detallada',
      'Calendario integrado para actividades',
      'Comunicación con clientes vía SMS y email'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Hotwire', 'Twilio API', 'Docker'],
    status: 'live',
    businessFeatures: [
      'Gestión de clientes: personas físicas y jurídicas con información detallada',
      'Tableros Kanban con stages donde se gestionan Cards con drag & drop',
      'Gestión de actividades: llamadas, reuniones y show rooms con calendario integrado',
      'Multi-tenant: soporte para múltiples empresas con datos aislados',
      'Sistema de roles: supervisor, vendedor, stock, asistente, financiero',
      'Comunicación: envío de SMS y emails a clientes',
      'Marcas y sub-marcas con jerarquía de productos',
      'API REST para integración con sistemas externos'
    ],
    techStack: [
      'Ruby on Rails 6.1.3 + Ruby 3.0.1',
      'PostgreSQL',
      'Bootstrap 5 + Hotwire (Turbo + Stimulus)',
      'Docker',
      'Redis, ActionCable, Twilio'
    ],
    technicalFeatures: [
      'Redis + ActionCable + Hotwire para comunicación en tiempo real',
      'Broadcasting automático en modelos (cards, notificaciones, actividades, mensajes)',
      'Multi-tenant architecture con Partner como entidad raíz',
      'Optimización de queries con eager loading estratégico',
      'Patrón Command con SimpleCommand para lógica de negocio',
      'Polimorfismo para Customer (NaturalPerson o LegalPerson)',
      'API RESTful con JWT para integraciones',
      'Integración con Twilio para envío de SMS',
      'Frontend rico con DataTables, FullCalendar, ApexCharts, Frappe Gantt'
    ],
    architecture: 'Arquitectura multi-tenant escalable con Service Objects para encapsulación de lógica, Patrón Command para operaciones complejas, Callbacks automáticos para creación de actividades'
  },
  {
    title: 'Plataforma E-Learning para Artes Escénicas',
    description: 'Plataforma educativa de e-learning especializada en teatro y artes escénicas con cursos interactivos, aulas virtuales y transmisiones en vivo.',
    objective: 'Plataforma educativa de e-learning especializada en teatro y artes escénicas con cursos interactivos, aulas virtuales y transmisiones en vivo.',
    features: [
      'Marketplace de cursos interactivos de teatro',
      'Aulas virtuales con profesores y estudiantes',
      '8 tipos de recursos educativos interactivos',
      'Transmisiones en vivo y grabaciones'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'AWS S3', 'Vimeo API', 'ActionCable', 'Docker'],
    status: 'completed',
    businessFeatures: [
      'Compañías pueden crear y vender cursos interactivos de teatro',
      'Profesores compran licencias y gestionan aulas virtuales',
      'Estudiantes acceden a contenido educativo multimedia',
      'Soporte para transmisiones en vivo y grabaciones',
      '8 tipos de recursos: videos, audios, textos, PDFs, juegos de memoria, desordenamiento de palabras, opción múltiple, escuchar y elegir',
      'Sistema de progreso del estudiante con tracking de cada actividad',
      'Sistema de licencias con claves únicas',
      'Integración con plataforma de video streaming'
    ],
    techStack: [
      'Ruby on Rails 6.1 + Ruby 3.0.1',
      'PostgreSQL',
      'Bootstrap 4 + Webpacker + jQuery',
      'Docker + Docker-compose',
      'AWS S3, Vimeo API, Delayed Job, ActionCable'
    ],
    technicalFeatures: [
      'AWS S3 para almacenamiento de archivos',
      'Vimeo API para streaming de videos y live streams',
      'ImageMagick + MiniMagick para procesamiento de imágenes',
      'FFmpeg para procesamiento de videos',
      'PayPal SDK para procesamiento de pagos',
      'Sistema de licencias complejas con claves únicas',
      'Aulas virtuales con sistema de invitaciones por email',
      'Sistema de versiones de cursos (levels 1-3)',
      'Estructura jerárquica: Play → Section → Subsection',
      'Geolocalización con Geocoder',
      'Multiple monedas con precios diferenciados por país'
    ],
    architecture: 'Arquitectura de E-learning modular con sistema de versiones de contenido, patrón de diseño de secciones anidadas, aulas virtuales con gestión de profesores y estudiantes'
  },
  {
    title: 'Plataforma de Sorteos en Tiempo Real',
    description: 'Plataforma de venta de cartones de bingo en línea con sorteos en vivo, ruleta interactiva y gestión de pagos.',
    objective: 'Plataforma de venta de cartones de bingo en línea con sorteos en vivo, ruleta interactiva y gestión de pagos.',
    features: [
      'Compra de cartones de bingo en tiempo real',
      'Sorteos de bingo y ruleta en vivo',
      'Gestión de pagos con pasarela de pagos local',
      'Sistema de carritos con temporizadores'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'Clockwork', 'Delayed Job', 'Docker'],
    status: 'live',
    businessFeatures: [
      'Venta de cartones de bingo en tiempo real',
      'Sorteos de bingo y ruleta en vivo',
      'Gestión de pagos a través de pasarela de pagos local',
      'Sistema de ruleta interactiva con sorteos dinámicos',
      'Carritos con temporizadores configurables',
      'Bloqueo temporal de cartones durante checkout',
      'Liberación automática de carritos expirados',
      'Sistema de concurrencia para alta disponibilidad'
    ],
    techStack: [
      'Ruby on Rails 6.1',
      'PostgreSQL',
      'Bootstrap 4 + Webpacker + jQuery',
      'Docker + Docker-compose',
      'Redis, ActionCable, Clockwork, Delayed Job'
    ],
    technicalFeatures: [
      'Action Cable + Redis para WebSockets en tiempo real',
      'Pasarela de pagos local SDK',
      'Clockwork para tareas programadas cada 5 minutos',
      'Delayed Job para procesamiento asíncrono',
      'Sistema de concurrencia con with_lock para bloqueo de cartones',
      'Redis para caché de configuración y control de disponibilidad',
      'Optimización de queries con includes para eager loading',
      'API RESTful para app móvil con autenticación JWT',
      'Sistema de reportes de ventas diarias y ranking de compradores',
      'Exportación de datos en CSV/XLSX'
    ],
    architecture: 'Arquitectura de tiempo real con WebSockets, sistema de concurrencia optimizado, procesamiento en background con múltiples workers'
  },
  {
    title: 'Plataforma de Crowdfunding y Subastas Benéficas',
    description: 'Plataforma de crowdfunding y subastas benéficas con sistema de rankings competitivos y pagos integrados.',
    objective: 'Plataforma de crowdfunding y subastas benéficas con sistema de rankings competitivos y pagos integrados.',
    features: [
      'Tres tipos de campañas: subasta, colecta y campaña',
      'Sistema de rankings con manejo de empates',
      'Integración con pasarela de pagos local',
      'Emisión de certificados para donantes'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'ActionCable', 'Hotwire', 'Docker'],
    status: 'completed',
    businessFeatures: [
      'Tres tipos de campañas: SUBASTA (ranking competitivo), COLECTA (recaudación tradicional), CAMPAÑA (promocional)',
      'Subastas con sistema de rankings donde mayores donadores ganan premios',
      'Sistema de manejo de empates que divide porcentajes equitativamente',
      'Integración con pasarela de pagos local',
      'Emisión de certificados para donantes',
      'Sistema de roles: Admin, Administrativo, Benefactor, Usuario',
      'Sistema de chat en tiempo real',
      'Actualizaciones de rankings en tiempo real cuando se aprueban donaciones'
    ],
    techStack: [
      'Ruby on Rails 7.1.2 + Ruby 3.3.4',
      'PostgreSQL',
      'Bootstrap 5 + esbuild',
      'Docker + Docker-compose',
      'Redis, Sidekiq, Sidekiq-Cron, ActionCable, Hotwire'
    ],
    technicalFeatures: [
      'Sidekiq + Sidekiq-Cron para jobs en background con tareas periódicas automáticas',
      'Action Cable + Hotwire/Turbo + Redis para tiempo real',
      'Algoritmo sofisticado para manejo de empates en rankings',
      'SQL complejo con joins, group by, subconsultas para cálculos de rankings',
      'Tareas periódicas para apertura/cierre automático de subastas',
      'Pasarela de pagos local SDK con webhooks',
      'Sistema de auditoría con Audited',
      'Generación de documentos: Prawn para PDF (certificados), Caxlsx para Excel',
      'Broadcasting automático en modelos para actualizaciones en tiempo real'
    ],
    architecture: 'Arquitectura Rails moderna (7.1) con Patrón Strategy para manejo de empates en rankings, Patrón Observer con callbacks para broadcasting, Patrón Template Method para tareas periódicas, Service Objects para controladores de pago'
  },
  {
    title: 'API Serverless para Reportes Comerciales',
    description: 'API serverless basada en Azure Functions que conecta con base de datos para generar y exponer reportes comerciales y de gestión con exportación a Excel.',
    objective: 'API serverless basada en Azure Functions que conecta con base de datos para generar y exponer reportes comerciales y de gestión con exportación a Excel.',
    features: [
      'Generación de reportes de precios y muestrarios',
      'Exportación de datos en formato Excel',
      'Optimización para manejar grandes volúmenes de datos',
      'Pipeline CI/CD automatizado'
    ],
    technologies: ['Azure Functions', 'Python 3.9', 'PostgreSQL', 'Azure Application Insights', 'Azure DevOps', 'Docker'],
    status: 'live',
    businessFeatures: [
      'Genera y expone reportes comerciales y de gestión',
      'Conexión con base de datos externa',
      'Exportación de datos en formato Excel (.xlsx)',
      'Reportes de lista de precio comercial y gerencia',
      'Informe de muestrario comercial',
      'Reportes de vouchers por fecha'
    ],
    techStack: [
      'Azure Functions + Python 3.9',
      'PostgreSQL externa',
      'Azure Functions (Consumption Plan)',
      'Azure Application Insights, Azure DevOps Pipelines'
    ],
    technicalFeatures: [
      'Azure Functions con plan Consumption (pago por uso)',
      'Azure Application Insights para monitoreo y telemetría',
      'Azure DevOps Pipelines para CI/CD automatizado',
      'openpyxl para generación de archivos Excel',
      'Psycopg2 para conexión a PostgreSQL',
      'Batch Processing con consultas divididas en lotes (BATCH_SIZE = 50)',
      'Write-Only Excel Pattern con Workbook(write_only=True) para archivos grandes',
      'Memory Monitoring con tracking de RAM durante procesamiento',
      'Helper Pattern para centralizar conexión a base de datos',
      'Queries SQL complejas con múltiples JOINs, subconsultas, window functions',
      'Stream Response con Excel generado en memoria y retornado en HTTP',
      'Docker y Docker Compose para desarrollo local'
    ],
    architecture: 'Arquitectura serverless optimizada para performance con patrones de diseño eficientes (batching, write-only, memory monitoring), arquitectura modular con endpoints HTTP independientes'
  },
  {
    title: 'Microservicio de Procesamiento de Datos Financieros',
    description: 'Microservicio API REST basado en FastAPI que procesa archivos Excel con datos financieros de clientes, validando información y actualizando registros en base de datos.',
    objective: 'Microservicio API REST basado en FastAPI que procesa archivos Excel con datos financieros de clientes, validando información y actualizando registros en base de datos.',
    features: [
      'Procesamiento de archivos Excel con datos financieros',
      'Validación de información de clientes',
      'Actualización y creación de registros en base de datos',
      'Reportes detallados de ejecución'
    ],
    technologies: ['FastAPI', 'Python 3.9+', 'PostgreSQL', 'AsyncPG', 'Pandas', 'Openpyxl', 'Docker'],
    status: 'live',
    businessFeatures: [
      'Lee extractos de Excel con información de clientes',
      'Valida la información de clientes',
      'Actualiza registros de clientes existentes en base de datos',
      'Crea nuevos registros de personas y clientes cuando no existen',
      'Genera reportes detallados de ejecución con métricas de rendimiento'
    ],
    techStack: [
      'FastAPI + Python 3.9+',
      'PostgreSQL externa',
      'None (API REST)',
      'Docker + Docker Compose',
      'AsyncPG, Pandas, Openpyxl'
    ],
    technicalFeatures: [
      'FastAPI + Uvicorn para API REST asíncrona',
      'Pydantic v2 para validación de datos',
      'AsyncPG para driver asíncrono PostgreSQL',
      'Psycopg2 para driver síncrono PostgreSQL',
      'Pandas para manipulación de datos',
      'Openpyxl para lectura/escritura de Excel',
      'Arquitectura por capas: routes, services, models, config',
      'Repository Pattern con DatabaseService abstrayendo acceso a datos',
      'Async/Await para operaciones completamente asíncronas',
      'Connection pooling configurable (5-20 conexiones)',
      'Batch processing (default: 1000 filas)',
      'Control de concurrencia con asyncio.Semaphore(10)',
      'Transacciones ACID para crear persona+cliente',
      'Logging rotativo de 3 archivos (api.log, errors.log, debug.log)',
      'API REST con autenticación por API Key'
    ],
    architecture: 'Arquitectura de microservicio modular con patrones de diseño: Repository, Factory, Singleton, Dependency Injection, Chunk Processing para manejo de grandes volúmenes'
  },
  {
    title: 'Middleware Asíncrono de Sincronización de Datos',
    description: 'Middleware ETL asíncrono de alto rendimiento que sincroniza datos de clientes y leads desde base de datos hacia CRM externo mediante JSON-RPC.',
    objective: 'Middleware ETL asíncrono de alto rendimiento que sincroniza datos de clientes y leads desde base de datos hacia CRM externo mediante JSON-RPC.',
    features: [
      'Sincronización de clientes y leads hacia CRM externo',
      'Detección de cambios con hashes MD5',
      'Sistema de reintentos inteligente',
      'Scheduler automatizable para ejecuciones periódicas'
    ],
    technologies: ['FastAPI', 'Python 3.8+', 'PostgreSQL', 'aiohttp', 'APScheduler', 'AsyncPG', 'Docker'],
    status: 'live',
    businessFeatures: [
      'Sincroniza clientes de base de datos financiera hacia CRM externo como partners',
      'Genera leads/oportunidades para clientes con deuda pendiente',
      'Calcula estados de morosidad (8 niveles)',
      'Detecta cambios mediante hashes MD5 para evitar actualizaciones innecesarias',
      'Sistema de reintentos inteligente para manejar fallos de conexión',
      'API REST completa para controlar las sincronizaciones',
      'Scheduler automatizable para ejecuciones periódicas'
    ],
    techStack: [
      'FastAPI + Python 3.8+',
      'PostgreSQL externa (fuente)',
      'CRM Externo (destino vía JSON-RPC)',
      'Docker + Docker Compose',
      'aiohttp, APScheduler, AsyncPG'
    ],
    technicalFeatures: [
      'FastAPI + Uvicorn para API REST asíncrona',
      'Pydantic v2 para validación de datos',
      'aiohttp para cliente HTTP asíncrono con CRM externo',
      'AsyncPG para driver PostgreSQL síncrono',
      'APScheduler para sistema de programación de tareas cron-like',
      'Programación asíncrona con concurrencia controlada (50 requests por defecto)',
      'Batch processing de 1000 registros para gestión de memoria',
      'asyncio.gather() para ejecución paralela de llamadas a la API',
      'Detección de cambios con hash MD5 (compara con hash almacenado en CRM)',
      'Sistema de reintentos (hasta 2 intentos) con clasificación de errores',
      'Detección de fallos masivos (>5000) que detienen reintentos automáticos',
      'Inyección de dependencias con FastAPI',
      'Arquitectura modular con separación clara',
      'Logging persistente hasta 50 ejecuciones históricas',
      '27 endpoints REST (clients, leads, full_sync, scheduler, system)',
      'Consultas SQL complejas con CTEs, LEFT JOIN LATERAL',
      'Autenticación por API Key'
    ],
    architecture: 'Arquitectura de middleware ETL asíncrono con Singleton global para sync_engine y scheduler, Context managers para gestión de sesiones HTTP, Router modular con FastAPI'
  },
  {
    title: 'Sitio Web Corporativo Moderno',
    description: 'Sitio web corporativo moderno y optimizado para performance de una empresa de desarrollo de software y consultoría tecnológica.',
    objective: 'Sitio web corporativo moderno y optimizado para performance de una empresa de desarrollo de software y consultoría tecnológica.',
    features: [
      'Presentación de servicios y portafolio de proyectos',
      'Información del equipo profesional',
      'Formulario de contacto para captación de leads',
      'Optimización de performance para carga rápida'
    ],
    technologies: ['Astro 5.7.12', 'TypeScript', 'Tailwind CSS 4.1.6', 'GitLab Pages', 'Google Tag Manager', 'FormSubmit', 'Google reCAPTCHA'],
    status: 'live',
    businessFeatures: [
      'Presentar servicios de la empresa (Software Factory, Consultoría, Infraestructura)',
      'Mostrar portafolio de proyectos en diversos sectores',
      'Presentar al equipo de profesionales',
      'Captar leads potenciales a través de formularios de contacto',
      'Establecer presencia digital y credibilidad en el mercado'
    ],
    techStack: [
      'Astro 5.7.12 + TypeScript',
      'Tailwind CSS 4.1.6',
      'GitLab Pages',
      'Google Tag Manager, FormSubmit, Google reCAPTCHA'
    ],
    technicalFeatures: [
      'Astro 5 framework moderno optimizado para performance y contenido estático',
      'Tailwind CSS 4 sistema de diseño utility-first',
      'TypeScript con configuración estricta',
      'Arquitectura basada en componentes (.astro)',
      'Data-Driven Content con JSON centralizado para contenido dinámico',
      'Asset Optimization con import.meta.glob() para carga dinámica de imágenes',
      'Componente Image de Astro con optimización automática',
      'WebP como formato principal',
      'Lazy loading y eager loading estratégico',
      'Google Tag Manager para analytics y seguimiento de conversiones',
      'FormSubmit.co para backend-less de formularios',
      'Google reCAPTCHA v2 para protección anti-spam',
      'GitLab Pages para hosting con despliegue automático vía CI/CD',
      'Scoped CSS para estilos encapsulados',
      'CSS Variables System para theming consistente',
      'Responsive móvil-first con sticky navbar y menú hamburguesa',
      'Animaciones fade-in y transiciones CSS suaves'
    ],
    architecture: 'Arquitectura de sitios estáticos optimizados con Componentización Reactiva con Astro, Build process con static generation para máximo rendimiento'
  }
];
