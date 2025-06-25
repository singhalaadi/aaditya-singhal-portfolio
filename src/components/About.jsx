import React from "react";
import "../styles/About.css";
import profileImage from "../assets/images/my_img.jpg";
import resumePDF from "../assets/Aaditya_Singhal's_Resume.pdf";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img
              src={profileImage}
              alt="Aaditya Singhal"
              className="profile-image"
            />
          </div>
          <div className="about-text">
            <h3>Hello, I'm Aaditya Singhal</h3>
            <p>
              A motivated and enthusiastic Computer Science undergraduate with a
              strong passion for Full Stack Web Development and AI/ML. Currently
              pursuing B.Tech in Computer Science at Sharda University with a
              CGPA of 8.46.
            </p>
            <p>
              I'm skilled in building scalable, responsive web applications and
              eager to explore innovative technologies. Recently completed a web
              development internship at Generation Entertainment, where I worked
              with the Frontend Development Team on optimizing content loading
              and ensuring responsiveness.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-title">Name:</span>
                <span className="detail-info">Aaditya Singhal</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Education:</span>
                <span className="detail-info">B.Tech in Computer Science</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Email:</span>
                <span className="detail-info">singhal26aaditya@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Location:</span>
                <span className="detail-info">Greater Noida, India</span>
              </div>
              <div className="detail-item">
                <span className="detail-title">Availability:</span>
                <span className="detail-info">
                  Available for Remote Internship
                </span>
              </div>
            </div>
            <a
              href={resumePDF}
              className="btn btn-primary"
              download="Aaditya_Singhal_Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
