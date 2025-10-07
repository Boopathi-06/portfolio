// Skills.js
import React from "react";
import "./Skills.css";

function Skills() {
  const skills = [
    "AutoCAD",
    "Siemens NX",
    "SolidWorks",
    "Fusion 360",
    "GD&T",
    "Precision Measurement",
    "CNC Operations",
    "Blueprint Reading",
    "Product Development"
  ];

  return (
    <section className="skills">
      <div className="skills-container">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
