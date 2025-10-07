import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        {/* Left side: profile picture */}
        <div className="about-image">
          <img src="/boopathi.jpg" alt="S. Boopathi" />
        </div>

        {/* Right side: about content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi 👋 I’m <strong>S. Boopathi</strong>, a passionate
            <strong> B.E. Mechanical Engineering student (2023–2026) </strong>
            at <strong>VISTAS, Chennai</strong>.
          </p>

          <p>
            I have gained strong technical experience through various
            <strong> industrial internships</strong> including Siemens CoE, MIT and
            GAAGS Technologies Pvt. Ltd., where I worked on
            <strong> CAD/CAE, Tool & Die Maker,</strong> and <strong>Fusion 360</strong> projects.
          </p>

          <p>
            My passion lies in <strong>Mechanical Design, Product Development, and CNC Machining</strong>.
            I enjoy transforming creative engineering concepts into precise, efficient mechanical systems.
          </p>

          <p>
            Beyond academics, I’m a hands-on learner who enjoys
            <strong> design challenges, prototyping, and teamwork</strong>.
            I take pride in developing reliable and innovative designs with practical value.
          </p>

          <div className="about-highlights">
            <div className="highlight-box">⚙️ Mechanical Engineer</div>
            <div className="highlight-box">🛠️ Tool & Die Designer</div>
            <div className="highlight-box">💻 CAD/CAM Specialist</div>
            <div className="highlight-box">🎯 Product Innovator</div>
          </div>
        </div>
      </div>
    </section>
  );
}
