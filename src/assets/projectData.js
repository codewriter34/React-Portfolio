import afayi from './afayi.jpg';
import cbf from './cbf.jpg';
import smarttech from './smartTech.jpg';
import afrovision from './afroVision.jpg';
import smarthealth from './smarthealth.jpg';

const projectData = [
  {
    id: 'smarthealth',
    title: 'SmartHealth',
    description: 'A web app built to streamline patient care.',
    image: smarthealth,
    link: '/projects/smarthealth',
    repo: 'https://github.com/codewriter34/SmartHealth.git',
    live: '',
    about: 'Final year defense project in fullfilmentof my degree. It is a web app built to streamline patient care and improve communication between patients and healthcare providers using php and mysql.',
    overview: 'SmartHealth is a web application designed to enhance patient care and communication between patients and healthcare providers. It features a user-friendly interface for appointment scheduling, medical history tracking, and easy access to healthcare resources.',
    features: [
      'Real-time appointment scheduling',
      'Patient medical history management',
      'Secure AIchat bot for patients',
      'Consultation management',
      'User-friendly interface for patients and providers',
      'Health metrics tracker',
    ],
    conclusion: 'SmartHealth streamlines patient care and improves communication between patients and healthcare providers enhacing patient health and well-being.',
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
    