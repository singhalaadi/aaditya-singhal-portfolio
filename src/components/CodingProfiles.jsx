import React from 'react';
import '../styles/CodingProfiles.css';

const CodingProfiles = () => {
  const profiles = [
    {
      platform: "LeetCode",
      username: "aadisinghal",
      link: "https://leetcode.com/aadisinghal",
      stats: "350+ Problems Solved"
    },
    {
      platform: "GeeksforGeeks",
      username: "singhal26aadi",
      link: "https://www.geeksforgeeks.org/user/singhal26aadi/",
      stats: "250+ Problems Solved"
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
      name: "OCI 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "October 2025 - October 2027",
      link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DD6C3D9761B49BFD242D2F4ACB62629591CCA24C885A467D8E334EC6A1191946"
    },
    {
      name: "Google Analytics Certification",
      issuer: "Google Skillshop",
      date: "April 2025 - April 2026",
      link: "https://skillshop.credential.net/741cb5b6-38b2-45d0-8a8c-ccabab648804"
    },
    {
      name: "6th Technovation Hackathon Participation",
      issuer: "Sharda University",
      date: "January 2025",
      link: "https://drive.google.com/file/d/1XPP8fj0lcvAhsNreJ7jbnA2nFRo6OTAO/view?usp=drive_link"
    },
    {
      name: "Python (Basic)",
      issuer: "HackerRank",
      date: "January 2025",
      link: "https://www.hackerrank.com/certificates/c68771192ae4"
    },
    {
      name: "Database Foundation Course Completion",
      issuer: "Oracle Academy",
      date: "October 2024",
      link: "https://drive.google.com/file/d/1UVFjZMSPCtgUCuvCEJnOUXXVjve0d_Ks/view"
    },
    {
      name: "Java Fundamentals Course Completion",
      issuer: "Oracle Academy",
      date: "March 2024",
      link: "https://drive.google.com/file/d/1lD_aK9XaPjqK4xafIdnXfOiJBdRzjjC7/view"
    },
    {
      name: "Java (Basic)",
      issuer: "HackerRank",
      date: "November 2023",
      link: "https://drive.google.com/file/d/1c36CXC78Xey_d3daKEHKhGkKSOP4BdM1/view"
    },
    {
      name: "The Complete 2023 Web Development Bootcamp",
      issuer: "Udemy",
      date: "September 2023",
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