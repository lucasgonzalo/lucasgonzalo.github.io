export interface WorkHistory {
  company: string;
  role: string;
  period: string;
  description: string[];
  isCurrent?: boolean;
}

export const workHistory: WorkHistory[] = [
  {
    company: 'Nuntiusit',
    role: 'Software Developer',
    period: '2019 - 2024',
    description: [
      'Worked on multiple projects for diverse clients, delivering robust and scalable web solutions',
      'Specialized in Ruby on Rails development, building custom applications from requirements analysis to deployment',
      'Collaborated in cross-functional teams to design and implement database architectures and system solutions'
    ]
  },
  {
    company: 'Solo Developer',
    role: 'Full Stack Developer',
    period: '2025 - Present',
    isCurrent: true,
    description: [
      'End-to-end development: requirements analysis, database design, system architecture, and deployment strategies',
      'Analytics implementation and monitoring for performance optimization',
      'Complete project management including publicity, marketing, and client relations',
      'Building commercial applications with focus on scalability and user experience'
    ]
  }
];
