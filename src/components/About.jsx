import React from "react";
import "../css/about.css";

import Man from "../css/assets/man.png";

import Logo from "../css/assets/Logo.png";

export default function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-title">About</div>
      <hr />
      <div className="about-description-container">
        <div className="description-container">
          <div className="description">
            <span style={{ fontWeight: "700" }}>Manazil</span>, one of the best
            engineering consultants and architectural consultancy company based
            in UAE. Since its inauguration, Manazil has distinguished itself
            regionally and internationally, being recognised for its excellent
            and quality-driven design and engineering services.
          </div>
          <div className="description">
            We have an excellent industry-wide reputation and are well regarded
            by our clients. Our primary objective is to provide a personal and
            responsive professional service to our client's requirements, based
            on the principles of quality, efficiency, integrity and continuing
            improvements. We are proud of our staff, our work and of our client
            relationships.
          </div>

          <div className="description">
            Our employees are highly qualified with professional and practical
            backgrounds deriving from any different professions: Architects,
            Engineers, Technical Staffs and Managers. Our engineers are
            experienced in a wide range of projects in all sales.
          </div>
          <div className="description">
            Furthermore, every employee is characterised by an open mindset and
            cultural sensitivity, often developed by professional and practical
            experiences.
          </div>
        </div>
      </div>
    </div>
  );
}
