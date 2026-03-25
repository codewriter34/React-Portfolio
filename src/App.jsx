// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ContactModalProvider } from './context/ContactModalContext';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <ContactModalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route
            path="/about"
            element={<Navigate to={{ pathname: '/', hash: '#about' }} replace />}
          />
          <Route
            path="/projects"
            element={<Navigate to={{ pathname: '/', hash: '#projects' }} replace />}
          />
          <Route
            path="/contact"
            element={<Navigate to={{ pathname: '/', hash: '#contact' }} replace />}
          />
        </Routes>
      </Router>
    </ContactModalProvider>
  );
}

export default App;
