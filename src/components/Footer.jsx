import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="section-one">
        <div className="container">
          <div className="title">Address</div>
          <div className="description">1 Aston Court</div>
          <div className="description">Kingsmead Business Park</div>
          <div className="description">London, United Kingdom</div>
          <div className="description">HP11 1JU</div>
        </div>
        <div className="container">
          <div className="title">Opening hours</div>
          <div className="description">Monday-Friday: 9am-5pm</div>
          <div className="description">Saturday-Sunday: Closed</div>
          <div className="title">Contact</div>
          <div className="description">contact@manazilconsultancy.co.uk</div>
        </div>
      </div>
      <div className="section-two">
        <div className="company">Manazil Engineering Consultancy LTD UK</div>
        <div className="company">June 2022</div>
      </div>
    </div>
  );
}
