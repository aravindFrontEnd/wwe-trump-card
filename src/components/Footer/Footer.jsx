// src/components/Footer/Footer.jsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import Font Awesome icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4 px-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-2xl mb-2 md:mb-0">
          © {new Date().getFullYear()}  Preevind. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/aravind-g-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={60} />
          </a>

          <a
            href="https://github.com/aravindFrontEnd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={60} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
