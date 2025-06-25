import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Java", "Python", "C++", "JavaScript", "HTML", "CSS", "MySQL"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["React.js", "Node.js", "Bootstrap", "Pandas", "NumPy"]
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "VS Code", "Chrome Developer Tools"]
    },
    {
      category: "Soft Skills",
      skills: ["Problem Solving", "Time Management", "Team Collaboration", "Attentive to Details", "Quick Learner"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container skills-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-content">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3>{category.category}</h3>
              <div className="skills-list" role="list">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skill-item" key={skillIndex} role="listitem">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
