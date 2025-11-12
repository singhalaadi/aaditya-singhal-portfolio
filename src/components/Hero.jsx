import React from 'react';
import '../styles/Hero.css';
import heroIllustration from '../assets/images/developer-illustration.svg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h2>Hello, I'm</h2>
          <h1 className="hero-name">Aaditya Singhal</h1>
          <h3 className="hero-title">Full Stack Web Developer (MERN) | AI/ML Enthusiast | Computer Science Student</h3>
          <p className="hero-description">
            A motivated Computer Science final year undergraduate with expertise in building scalable web applications. 
            Combining strong technical skills in React.js, Node.js, and Python with a passion for innovative solutions. 
            Currently maintaining an 8.48 CGPA while actively developing impactful projects.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroIllustration} alt="Web Developer Working Remotely" />
        </div>
      </div>
    </section>
  );
};

export default Hero;