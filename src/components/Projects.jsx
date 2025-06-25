import React from "react";
import "../styles/Projects.css";
import jobifyImage from "../assets/images/jobify-img.png";
import drumImage from "../assets/images/drum-kit-img.png";
import eventImage from "../assets/images/event-img.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Jobify - Personal Job Application Management System",
      description:
        "A fully functional frontend job application system built with React and Vite. Features dynamic routing, form handling, and state management via Context API. Designed with scalable architecture to support future backend integration.",
      image: jobifyImage,
      technologies: ["React.js", "Vite", "HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/singhalaadi/job-board-react",
    },
    {
      id: 2,
      title: "Drum Kit Simulator",
      description:
        "An interactive browser-based drum kit that plays different drum sounds when corresponding keys are clicked or pressed. Built with HTML, CSS, and JavaScript, it also incorporates CSS transitions to animate the buttons for enhanced interactivity.",
      image: drumImage,
      technologies: ["HTML5", "CSS3", "JavaScript", "DOM Manipulation"],
      githubLink: "https://github.com/singhalaadi/Drum-Kit",
      demoLink: "https://beginner-drum-kit.netlify.app/",
    },
    {
      id: 3,
      title: "Event Management Platform",
      description:
        "A responsive web-based event management application built with React.js. Users can explore event listings, view details, and simulate ticket purchases. Features clean UI and efficient component structuring.",
      image: eventImage,
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
      githubLink: "https://github.com/singhalaadi/Event-Management-Platform",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container projects-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} />
                ) : (
                  <div className="placeholder-image">
                    <span>{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.githubLink}
                    className="btn btn-sm btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="btn btn-sm btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
