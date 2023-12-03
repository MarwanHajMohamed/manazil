import React from "react";
import "../css/home.css";
import Logo from "../css/assets/Logo.png";
import bg from "../css/assets/tile_background.png";
import { Link } from "react-scroll";

export default function Home() {
  return (
    <div className="home-container">
      <img src={bg} className="image-container" />
      <div className="title-container">
        <div className="title">MANAZIL</div>
        <div className="subtitle">ENGINEERING CONSULTANCY LTD UK</div>
        <div className="description">
          We aim to create the finest and most cost-effective engineering
          design, construction supervision and architectural services in the
          United Kingdom.
        </div>
      </div>
      <Link
        to="services"
        spy={true}
        smooth={true}
        duration={1000}
        offset={-70}
        className="service-scroll-container"
      >
        <div className="service-scroll">Services</div>
        <i className="fa-solid fa-chevron-down"></i>
        <i className="fa-solid fa-chevron-down two"></i>
      </Link>
    </div>
  );
}
