// Achievements.js
import React from "react";
import "./Achievements.css";

function Achievements() {
  const achievements = [
    {
      title: "‘O’ Grade in Siemens NX Internship",
      year: "2024 to 2025",
      details: "Completed internship with top grade in Siemens NX CoE, MIT."
    },
    {
      title: "Industrial Safety Certification (Seed For Safety)",
      year: "2023",
      details: "Certified in workplace safety practices and guidelines."
    },
    {
      title: "CAD Design Submissions in Inter-College Events",
      year: "2023",
      details: "Managed submissions of prototype designs and CAD projects."
    },
    {
      title: "Coordinated Prototype Tool Development",
      year: "2022",
      details: "Led a team to design and develop small mechanical tools."
    }
  ];

  return (
    <section className="achievements">
      <div className="achievements-container">
        <h2>Achievements</h2>
        <div className="timeline">
          {achievements.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <span className="timeline-year">{item.year}</span>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
