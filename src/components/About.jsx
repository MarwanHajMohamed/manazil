import React from "react";
import "../css/about.css";
import "react-alice-carousel/lib/alice-carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Man from "../css/assets/man.png";

export default function About() {
  const arrowStyles = {
    position: "absolute",
    zIndex: 2,
    top: "calc(50% - 50px)",
    width: 30,
    height: 30,
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "0",
    fontSize: "60px",
    color: "rgb(26, 26, 97)",
  };
  return (
    <div className="about-container" id="about">
      <div className="about-title">About</div>
      <div className="about-description-container">
        <div className="image-container">
          <img src={Man} className="image" />
        </div>
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
