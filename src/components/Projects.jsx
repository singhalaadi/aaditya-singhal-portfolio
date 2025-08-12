import React from "react";
import "../styles/Projects.css";
import taskzyImage from "../assets/images/taskzy-home-page.png";
import jobifyImage from "../assets/images/jobify-img.png";
import eventImage from "../assets/images/event-img.png";
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Taskzy - Personal Task Management Application",
      description:
        "A modern, full-stack task management application built with React, Node.js, Express, and MongoDB. Features user authentication, CRUD operations, sorting/filtering, priority levels, due date tracking, and real-time updates. Includes a responsive design with Chakra UI components.",
      image: taskzyImage,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chakra UI", "JWT", "Mongoose"],
      githubLink: "https://github.com/singhalaadi/taskzy-capstone-project",
      demoLink: "https://taskzy-app.netlify.app/",
    },
    {
      id: 2,
      title: "Jobify - Job Board Application Tracker",
      description:
        "A comprehensive MERN stack job board application for tracking job applications. Features secure authentication with JWT, job CRUD operations, dashboard with statistics, user profiles, file uploads via Cloudinary, and modern UI with styled components.",
      image: jobifyImage,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary", "Styled Components"],
      githubLink: "https://github.com/singhalaadi/job-board-mern",
    },
    {
      id: 3,
      title: "Event Management Platform",
      description:
        "A responsive web-based event management application built with React.js. Users can explore event listings, view details, simulate ticket purchases, and interact with seat selection. Features clean UI design, event navigation, and ticket counter functionality.",
      image: eventImage,
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "React DOM"],
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
