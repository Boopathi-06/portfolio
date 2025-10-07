// Education.js
import React from "react";
import "./Education.css";

function Education() {
  const education = [
    {
      degree: "B.E. Mechanical Engineering",
      college: "VISTAS, Chennai",
      year: "Pursuing",
      details: "CGPA: 8"
    },
    {
      degree: "Diploma (Tool & Die)",
      college: "NTTF, Vellore",
      year: "Aug 2022",
      details: "CGPA: 7.44"
    },
    {
      degree: "SSLC",
      college: "N. Krishnaswamy Hr. Sec. School",
      year: "Mar 2019",
      details: "Score: 51%"
    }
  ];

  return (
    <section className="education">
      <div className="education-container">
        <h2>Education</h2>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.college}</h4>
                <span className="timeline-year">{edu.year}</span>
                <p>{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
