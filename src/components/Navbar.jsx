import React from "react";
import "../css/navbar.css";
import LogoImage from "../css/assets/Logo-Image.png";

export default function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="left-side">
          <img src={LogoImage} alt="Manazil" />
          <div className="logo-two">ENGINEERING CONSULTANCY LTD UK</div>
        </div>
        <div className="right-side">
          <ul className="list-container">
            <li className="list-item">Home</li>
            <li className="list-item">Objectives</li>
            <li className="list-item">Services</li>
            <li className="list-item">About</li>
            <li className="list-item">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
