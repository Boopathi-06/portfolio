import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          I'd love to connect! Whether you want to discuss engineering ideas,
          project collaborations, or career opportunities — feel free to reach out.
        </p>

        <div className="contact-content">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <h3>📞 Get in Touch</h3>
            <ul>
              <li><strong>Name:</strong> S. Boopathi</li>
              <li><strong>Email:</strong> <a href="mailto:Jayasivaboopathi@gmail.com">Jayasivaboopathi@gmail.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+919791326377">+91 9791326377</a></li>
              <li><strong>Location:</strong> Vellore, Tamil Nadu, India</li>
            </ul>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/sboopathi-9819b9236" target="_blank" rel="noreferrer">💼 LinkedIn</a>
              <a href="https://github.com/Boopathi-06" target="_blank" rel="noreferrer">🌐 GitHub</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}