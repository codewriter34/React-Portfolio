# Portfolio Website - Forwamba Elisha

A modern, responsive portfolio website showcasing my work as a Full Stack Developer, Web Developer, and Mobile App Developer. Built with React, Vite, and Tailwind CSS.

🌐 **Live Website:** [https://elishawamba.netlify.app/](https://elishawamba.netlify.app/)

## 🚀 Features

- **Responsive Design** - Fully responsive across all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Project Showcase** - Display of GitHub projects and real-world applications
- **Skills Section** - Comprehensive display of technical skills and technologies
- **Business Inquiry Form** - Professional contact form with validation
- **SEO Optimized** - Meta tags and Open Graph tags for better discoverability
- **Smooth Scrolling** - Enhanced navigation experience
- **Back to Top Button** - Easy navigation for long pages

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Lucide React** - Additional icons

### Backend/Integration
- **Formspree** - Form submission handling

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/codewriter34/React-Portfolio.git
   cd React-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
React-Portfolio/
├── public/                 # Static assets
│   ├── og-image.jpg       # Open Graph image
│   └── vite.svg           # Favicon
├── src/
│   ├── assets/            # Images and project data
│   │   ├── projectData.js      # GitHub projects data
│   │   └── realWorldProjects.js # Real-world projects data
│   ├── Components/        # React components
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Companies.jsx
│   │   ├── ContactSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── context/           # React Context
│   │   └── ContactModalContext.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   └── ProjectDetails.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎨 Sections

1. **Hero** - Introduction and social links
2. **About** - Personal background and expertise
3. **Skills** - Technical skills and technologies
4. **Services** - Services offered and statistics
5. **Companies** - Companies and clients worked with
6. **Projects** - Portfolio of projects (GitHub & Real-world)
7. **Contact** - Business inquiry form
8. **Footer** - Additional links and information

## 🔧 Configuration

### Form Submission
The contact form uses Formspree. Update the form endpoint in `src/Components/ContactSection.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  // ...
});
```

### SEO Meta Tags
Update meta tags in `index.html` with your actual URLs and descriptions.

### Social Media Links
Update social media links in:
- `src/Components/Hero.jsx`
- `src/Components/NavBar.jsx`
- `src/Components/Footer.jsx`

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Configure environment variables if needed

### Vercel
1. Connect your GitHub repository
2. Vercel will auto-detect Vite and configure build settings
3. Deploy automatically on push

### Other Platforms
The `dist` folder contains the production build that can be deployed to any static hosting service.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Projects Featured

- **BloodConnect** - Cameroon's first mobile donation app (React Native)
- **Fresh Farms** - E-commerce platform (React, Express.js, Node.js)
- **SmartHealth** - Healthcare management system
- **SpendWise** - Personal finance tracker
- And more...

## 📧 Contact

- **Email:** elishawamba61@gmail.com
- **Phone:** +237 681 423 158
- **LinkedIn:** [wamba-elisha](https://cm.linkedin.com/in/wamba-elisha)
- **GitHub:** [codewriter34](https://github.com/codewriter34)

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) and [Lucide](https://lucide.dev/)

---

**Last Updated:** 2025
