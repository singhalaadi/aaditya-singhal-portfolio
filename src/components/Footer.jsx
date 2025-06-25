import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p>&copy; {currentYear} Aaditya Singhal. All Rights Reserved.</p>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/aaditya-singhal26/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/singhalaadi" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.instagram.com/its_aadi_singhal?igsh=MWlhYnhrMGZjd2hkbw==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
