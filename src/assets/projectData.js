import afayi from './afayi.jpg';
import track from './track.png';
import fluentbee from './fluentbee.jpg';
import smarthealth from './smarthealth.jpg';
import cancer from './cancer.jpg';
import lumilearn from './lumilearn.jpg';
import ecom from './ecommerce.png';
import { Rocket } from 'lucide-react';

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
    id: 'track',
    title: 'Logistic Tracking Webapp',
    description: 'A web app for tracking logistics thats a shipping agency website with real time map updates.',
    image: track,
    link: '/projects/track',
    repo: 'https://github.com/codewriter34/logisticWebsite.git',
    live: '',
    about: 'A web app for tracking logistics that provides real-time updates on shipments and deliveries.',
    overview: 'This web application is designed for a shipping agency, allowing users to track their shipments in real-time. It features a user-friendly interface and integrates with mapping services to provide accurate location updates. built using PHP and tailwind CSS.',
    features: [
      'Real-time shipment tracking',
      'User-friendly interface',
      'Integration with mapping services',
      'Secure login and user management by admin',
      'Responsive design for mobile and desktop',
      'Notifications for shipment updates',
    ],
    conclusion: 'This system was build using php Js and tailwind CSS. It is a web app for tracking logistics that provides real-time updates on shipments and deliveries.',
  },
  {
    id: 'cancerconnect',
    title: 'CancerConnect',
    description: 'A mobile app for cancer patients and doctors.',
    image: cancer,
    link: '/projects/cancerconnect',
    repo: 'https://github.com/codewriter34/CancerConnect.git',
    live: '',
    about: 'CancerConnect is a mobile app designed to connect cancer patients with healthcare providers improving patient care.',
    overview: 'CancerConnect is a mobile application that connects cancer patients with healthcare providers. It features a user-friendly interface for appointment scheduling, medical history tracking, and easy access to healthcare resources. The app also includes a section for patients to have video calls with doctors for better experiences.',
    features: [
      'Real-time appointment scheduling',
      'Patient medical history management',
      'Secure video and audio call feature',
      'Consultation management',
      'User-friendly interface for patients and providers',
      'Health metrics tracker',
      'AI chatbot for patients',
      'Educational resources using mediastack API',
    ],
    conclusion: 'Built using ReactNative(jS) CancerConnect is a mobile app designed to connect cancer patients with healthcare providers improving patient care.',
  },
  {
    id: 'fluentbee',
    title: 'Fluent Bee',
    description: 'Language learning app.',
    image: fluentbee, 
    link: '/projects/fluentbee',
    repo: 'https://github.com/codewriter34/FluentBee.git',
    live: '',
    about: 'Fluent Bee is a language learning app that helps users master new languages with interactive lessons and quizzes, users can also learn about the cilture of a country.',
    overview: 'Built with React Native and firebase Fluent Bee provides lessons on French German and Spanish users can learn this languages and take quizzes to test their knowledge.',
    features: [
      'User authentication',
      'Interactive lessons and quizzes',
      'Multi-language support',
      'Progress tracking',
      'User-friendly interface',
      'Speech recognition for pronunciation practice',
      'Cultural insights and resources',
      'AI-powered feedback on quizzes',

    ],
    conclusion: 'Fluent Bee is a language learning app that helps users master new languages with interactive lessons and quizzes. It provides a user-friendly interface and supports multiple languages, making it an ideal tool for language learners.',
  },
  {
    id: 'Lumilearn',
    title: 'Lumi Learn',
    description: 'Personalized AI learning platform for lecturers and students.',
    image: lumilearn, 
    link: '/projects/Lumilearn',
    repo: 'https://github.com/codewriter34/LumiLearn.git',
    live: '',
    about: 'Lumi Learn is a personalized AI learning platform for lecturers and students. it give student the ability to learn at their own pace and provides personalized learning experiences.',
    overview: 'Built with React Native and firebase Lumi Learn provides personalized learning experiences for students and lecturers. It features a user-friendly interface, making it an ideal tool for students to increase their grade.',
    features: [
      'User authentication',
      'Interactive lessons and quizzes',
      'Progress tracking',
      'User-friendly interface',
      'AI-powered feedback on quizzes',
      'Role base course recommendation',
      'Admin dashboard for managing courses and users',
      'Leaderboard for students and lecturers to see top performing students',
      'AI chatbot for students to ask questions',

    ],
    conclusion: 'Used OpenAI API and firebase Lumi Learn is a personalized AI learning platform for lecturers and students. It provides personalized learning experiences for students and lecturers, helping students along their learning journey.',
  },
  {
    id: 'EliCommerce',
    title: 'E commerce site',
    description: 'complete frontend e commerce site.',
    image: ecom, 
    link: 'https://elicommerce.netlify.app/',
    repo: 'https://github.com/codewriter34/ecommerce',
    live: 'https://elicommerce.netlify.app/#',
    about: 'EliCommerce is a complete frontend e commerce site built with HTML CSS and JS.',
    overview: 'First complete front end project built with HTML CSS and JS responsive on all devices. It features a user-friendly interface.',
    features: [
      'Landing page with product categories',
      'Product details page',
      'blog page',
      'contact us page',
      'Responsive design for mobile and desktop',
      'User-friendly interface',
      
    ],
    conclusion: 'EliCommerce is a complete frontend e commerce site built with HTML CSS and JS. It features a user-friendly interface and is responsive on all devices, making it an ideal tool for e commerce.',
  },
];

export default projectData;
    