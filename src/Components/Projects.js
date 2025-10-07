import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "CAD & CAE using Siemens NX – Siemens CoE, MIT",
      year: "2024",
      details: "Designed 3D models and performed basic simulations."
    },
    {
      title: "Fusion 360 CAD Design – GAAGS Technologies Pvt. Ltd.",
      year: "2023",
      details: "Developed 3D parts and assemblies using Autodesk Fusion 360."
    },
    {
      title: "Sink Strainer Tool Design – NTTF, Vellore",
      year: "2022",
      details: "Built forming tool using SNX-63; handled design to manufacturing."
    },
    {
      title: "Sisal Composite Vibration Study – VELS University",
      year: "2022",
      details: "Studied damping behavior of natural fiber composites."
    }
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>Projects & Internships</h2>
        <div className="timeline">
          {projects.map((proj, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{proj.title}</h3>
                <span className="timeline-year">{proj.year}</span>
                <p>{proj.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
