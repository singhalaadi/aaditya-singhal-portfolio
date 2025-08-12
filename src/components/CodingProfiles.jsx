import React from 'react';
import '../styles/CodingProfiles.css';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "aadisinghal",
      link: "https://leetcode.com/aadisinghal",
      stats: "250+ Problems Solved"
    },
    {
      platform: "GeeksforGeeks",
      username: "singhal26aadi",
      link: "https://www.geeksforgeeks.org/user/singhal26aadi/",
      stats: "150+ Problems Solved"
    },
    {
      platform: "HackerRank",
      username: "aadisinghal",
      link: "https://www.hackerrank.com/profile/aadisinghal",
      badges: "3⭐ in Problem Solving, 3⭐ in Java, 1⭐ in Python"
    },
    {
      platform: "Codolio",
      username: "aadisinghal",
      link: "https://codolio.com/profile/aadisinghal",
      description: "All in one Profile Tracker for Developers"
    }
  ];

  const certificates = [
    {
      name: "Google Analytics Certification",
      issuer: "Google Skillshop",
      date: "April 2025 - April 2026",
      link: "https://skillshop.credential.net/741cb5b6-38b2-45d0-8a8c-ccabab648804"
    },
    {
      name: "6th Technovation Hackathon Participation",
      issuer: "Sharda University",
      date: "Jan 2025",
      link: "https://drive.google.com/file/d/1XPP8fj0lcvAhsNreJ7jbnA2nFRo6OTAO/view?usp=drive_link"
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "Jan 2025",
      link: "https://www.hackerrank.com/certificates/c68771192ae4"
    },
    {
      name: "Java Fundamentals Course Completion",
      issuer: "Orace Academy",
      date: "Mar 2024",
      link: "https://drive.google.com/file/d/1lD_aK9XaPjqK4xafIdnXfOiJBdRzjjC7/view"
    },
    {
      name: "Java (Basic)",
      issuer: "HackerRank",
      date: "Nov 2023",
      link: "https://drive.google.com/file/d/1c36CXC78Xey_d3daKEHKhGkKSOP4BdM1/view"
    },
    {
      name: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "Sept 2023",
      link: "https://www.udemy.com/certificate/UC-59ce3a99-485a-4c0b-8ff9-829b2457488d/"
    }
  ];

  return (
    <section id="certificates" className="coding-profiles">
      <div className="container">
        <h2 className="section-title">Coding Profiles & Certifications</h2>
        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <a 
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-card"
              key={index}
            >
              <h3>{profile.platform}</h3>
              <p className="username">@{profile.username}</p>
              {profile.stats && <p className="stats">{profile.stats}</p>}
              {profile.badges && <p className="badges">{profile.badges}</p>}
              {profile.description && <p className="description">{profile.description}</p>}
            </a>
          ))}
        </div>

        <h3 className="cert-title">Certifications</h3>
        <div className="certs-grid">
          {certificates.map((cert, index) => (
            <div className="cert-card" key={index}>
              <h4>{cert.name}</h4>
              <p>{cert.issuer} • {cert.date}</p>
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;