import afayi from './afayi.jpg';
import cbf from './cbf.jpg';
import smarttech from './smartTech.jpg';
import afrovision from './afroVision.jpg';

const projectData = [
  {
    id: 'afayi',
    title: 'Afayi Analytics',
    description: 'Data-driven web app for businesses.',
    image: afayi,
    link: '/projects/afayi',
    repo: 'https://github.com/yourusername/afayi',
    live: 'https://afayi.live',
    about: 'Afayi is a business intelligence dashboard to help startups understand their metrics and improve operations.',
    overview: 'Afayi Analytics is designed to empower businesses with insights through interactive charts and real-time data. It integrates easily with APIs to track KPIs like revenue, customer engagement, and retention.',
    features: [
      'Real-time KPI dashboard',
      'User and session analytics',
      'Custom chart and report generation',
      'Data export to Excel and PDF',
    ],
    conclusion: 'Afayi enables businesses to make data-backed decisions quickly with clear visualizations and custom reports.',
  },
  {
    id: 'cbf',
    title: 'CBF Payroll',
    description: 'Automated payroll system for HR.',
    image: cbf,
    link: '/projects/cbf',
    repo: 'https://github.com/yourusername/cbf-payroll',
    live: '',
    about: 'A powerful payroll engine with customizable tax rules and real-time reports built for HR departments.',
    overview: 'CBF Payroll automates salary calculations, tax deductions, and employee payments. It simplifies HR workflows and ensures legal compliance for small to medium enterprises.',
    features: [
      'Automated salary calculations',
      'Customizable tax and deduction rules',
      'Monthly payslip generation',
      'Role-based access control',
    ],
    conclusion: 'CBF Payroll saves HR teams hours of manual work and ensures accurate, on-time employee payments.',
  },
  {
    id: 'smarttech',
    title: 'SmartTech Tracker',
    description: 'Project management dashboard.',
    image: smarttech,
    link: '/projects/smarttech',
    repo: 'https://github.com/yourusername/smarttech-tracker',
    live: '',
    about: 'SmartTech Tracker is a lightweight platform to manage team tasks, time tracking, and progress visualization.',
    overview: 'This app gives teams a central space to collaborate on projects, assign tasks, and monitor progress. Built with clean UI and easy drag-and-drop features.',
    features: [
      'Task assignment with deadlines',
      'Kanban-style board for tracking progress',
      'Daily/weekly report generation',
      'Commenting and real-time updates',
    ],
    conclusion: 'A great tool for teams needing a simple but effective way to manage their workflows.',
  },
  {
    id: 'afrovision',
    title: 'Afrovision Site',
    description: 'Elegant company portfolio.',
    image: afrovision,
    link: '/projects/afrovision',
    repo: '',
    live: 'https://afrovision-site.com',
    about: 'A modern portfolio site designed for Afrovision using React and Tailwind for smooth animations and layout.',
    overview: 'Afrovision’s website showcases the company’s services and projects with a modern, elegant look. Fully responsive and SEO optimized.',
    features: [
      'Responsive design',
      'Smooth scroll and animations',
      'Services and testimonials section',
      'Fast loading and SEO friendly',
    ],
    conclusion: 'A beautiful online presence for Afrovision that builds credibility and attracts potential clients.',
  },
  {
    id: 'devbytes',
    title: 'DevBytes Portal',
    description: 'Learning platform for developers.',
    image: afayi, // using afayi image temporarily
    link: '/projects/devbytes',
    repo: 'https://github.com/yourusername/devbytes-portal',
    live: '',
    about: 'DevBytes offers daily code lessons, challenges, and articles for developers of all levels.',
    overview: 'Built to help developers grow, this platform includes a blog, tutorials, and coding challenges with solutions. Includes user login and bookmarking.',
    features: [
      'User authentication',
      'Bookmark and save lessons',
      'Daily coding tips and articles',
      'Gamified challenges with leaderboard',
    ],
    conclusion: 'DevBytes makes learning to code fun and consistent, helping devs level up daily.',
  },
  {
    id: 'fluentbee',
    title: 'Fluent Bee',
    description: 'Language learning app.',
    image: smarttech, // using smarttech image temporarily
    link: '/projects/fluentbee',
    repo: 'https://github.com/yourusername/fluentbee',
    live: 'https://fluentbee.com',
    about: 'Fluent Bee helps users master new languages with interactive video lessons and quizzes.',
    overview: 'Fluent Bee is a language platform offering curated lessons, quizzes, and AI-powered feedback. It supports multiple languages and tracks user progress.',
    features: [
      'Video-based lessons',
      'Interactive quizzes with instant grading',
      'Progress tracker dashboard',
      'Multi-language support with speech recognition',
    ],
    conclusion: 'A smart language tutor in your pocket, Fluent Bee adapts to your pace and helps you grow steadily.',
  },
];

export default projectData;
