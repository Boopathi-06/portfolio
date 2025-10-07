import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="overlay">
        <h1>
          Hi, I'm <span className="highlight">S. Boopathi 👋</span>
        </h1>
        <h3>B.E Mechanical Engineering | CGPA: 8 (Pursuing)</h3>
        <p>
          ⚙️ Passionate <strong>Mechanical Engineer</strong> specializing in
          <strong> Tool & Die Maker, Product Development, and CAD/CAM</strong>.
          Experienced with <strong>Siemens NX, SolidWorks, and Fusion 360 </strong>
          for 3D modeling and manufacturing optimization.
        </p>

        <p className="stats">
          🛠️ 4+ Industrial Internships | 🧩 Hands-on CNC Experience | 🏅 NSDC Level 5 Certified
        </p>

        <div className="buttons">
          <a href="/boopathi_resume.pdf" download className="btn-primary">
            📄 Download Resume
          </a>
          {/* <a href="/projects" className="btn-secondary">🔧 View Projects</a>
          <a href="/contact" className="btn-primary">📩 Contact Me</a> */}
        </div>

        <div className="socials">
          <a href="https://github.com/Boopathi-06" target="_blank" rel="noreferrer">🌐 GitHub</a>
          <a href="https://www.linkedin.com/in/sboopathi-9819b9236" target="_blank" rel="noreferrer">💼 LinkedIn</a>
        </div>
      </div>
    </section>
  );
}