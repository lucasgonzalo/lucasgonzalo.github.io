export interface Project {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  status: 'completed' | 'in-development' | 'live';
  link?: string;
}

export const projects: Project[] = [
  {
    title: 'Commercial Import System',
    description: 'Complete management system for clothing and accessories import business',
    features: [
      'Comprehensive account and user management',
      'Full shipping and logistics tracking',
      'Purchase and sales management with inventory control',
      'Refund and return processing system',
      'Storage and warehouse management',
      'Financial reporting and analytics'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Sidekiq', 'Stripe API'],
    status: 'live',
    link: '#'
  },
  {
    title: 'Customer Loyalty Platform',
    description: 'Advanced multitenant loyalty system with point sharing capabilities',
    features: [
      'Points-based rewards system with exchange catalogs',
      'Multitenant architecture for multiple companies',
      'Inter-company point sharing between associated businesses',
      'Customer tier management and VIP programs',
      'Real-time point tracking and redemption',
      'Admin dashboard for program management'
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'ActionCable', 'React'],
    status: 'in-development'
  },
  {
    title: 'Real-Time Donation Platform',
    description: 'Social impact platform for sharing causes and community initiatives',
    features: [
      'Campaign creation and management',
      'Real-time donation tracking and updates',
      'Live contribution counters and social proof',
      'Secure payment processing',
      'Donor dashboard and history',
      'Social media integration and sharing'
    ],
    technologies: ['Ruby on Rails', 'ActionCable', 'PostgreSQL', 'Redis', 'Stripe API'],
    status: 'in-development'
  }
];
