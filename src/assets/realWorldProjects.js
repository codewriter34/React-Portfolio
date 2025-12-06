import afayi from './afayi.jpg';
import cbf from './cbf.jpg';
import smarttech from './smartTech.jpg';
import afrovision from './afroVision.jpg';
import bloodconnect from './ss1.jpg';
import freshfarms from './image.png';

const realWorldProjects = [
  {
    id: 'freshfarms',
    title: 'Fresh Farms',
    description: 'E-commerce platform for fresh farm products - direct from farm to market.',
    image: freshfarms,
    link: '/projects/freshfarms',
    repo: '',
    live: 'https://freshfarmcmr.com/',
    about: 'Fresh Farms is a comprehensive e-commerce platform that connects farmers directly with consumers, enabling fresh produce to be delivered from farm to market. As the main developer of this platform, I built the entire system using React for the frontend and Express.js with Node.js for the backend.',
    overview: 'Built with React, Express.js, and Node.js, Fresh Farms provides a seamless shopping experience for customers looking to purchase fresh farm products. The platform features a user-friendly interface, secure authentication, shopping cart functionality, and order management system. It allows farmers to list their products and customers to browse, order, and track their purchases.',
    features: [
      'User authentication and authorization',
      'Product catalog with categories',
      'Shopping cart functionality',
      'Order management system',
      'User dashboard for order tracking',
      'Responsive design for all devices',
      'Secure payment integration',
      'Admin panel for product management',
    ],
    conclusion: 'Fresh Farms is a full-stack e-commerce solution built with React, Express.js, and Node.js. As the main developer, I was responsible for designing and implementing both the frontend and backend systems, creating a robust platform that facilitates direct farm-to-consumer transactions.',
  },
  {
    id: 'bloodconnect',
    title: 'BloodConnect',
    description: "Cameroon's first mobile donation app - connecting blood donors with those in need.",
    image: bloodconnect,
    link: '/projects/bloodconnect',
    repo: '',
    live: 'https://bloodconnectcameroon.com/',
    about: "BloodConnect is Cameroon's first mobile donation app, revolutionizing how blood donations are managed and accessed. As the brain behind the idea and project lead (co-founder), I led the development of this life-saving platform that connects blood donors with recipients in need.",
    overview: 'Built with React Native, BloodConnect is available on both the App Store and Play Store, making it accessible to users across different mobile platforms. The app addresses critical healthcare challenges by creating an efficient system for blood donation management, ensuring that blood is available when and where it\'s needed most.',
    features: [
      'Mobile app available on iOS and Android',
      'Real-time donor matching system',
      'User-friendly interface for donors and recipients',
      'Location-based blood bank and donor search',
      'Donation history tracking',
      'Push notifications for urgent blood requests',
      'Secure user authentication',
    ],
    conclusion: 'BloodConnect represents a significant milestone in healthcare technology for Cameroon. As the project lead and co-founder, I was responsible for the initial concept, architecture, and development of this React Native application. The app has the potential to save countless lives by streamlining the blood donation process and making it easier for people to find and connect with blood donors.',
  },
  {
    id: 'cbf-coop',
    title: 'CBF cooperative',
    description: 'A farmers cooperative.',
    image: cbf,
    link: '/projects/cbf-coop',
    repo: '',
    live: 'https://citizenfarmerscooperative.com/',
    about: 'farmers cooperative for listing their products and services.',
    overview: 'Enables the cooperatuive to list their products and services and gain potential sales and partners.',
    features: [
        'Product listing',
        'Service listing',
        'Contact form',
        'User-friendly interface',
    ],
    conclusion: 'This sytem was built using html css js and php. It is a simple system that enables the cooperative to list their products and services.',
  },
 
  
];

export default realWorldProjects;
