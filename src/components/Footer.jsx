import React from "react";
import "../css/footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="section-one">
        <div className="address-container">
          <div className="address-title">Address</div>
          <div className="address-line">1 Aston Court</div>
          <div className="address-line">Kingsmead Business Park</div>
          <div className="address-line">London, United Kingdom</div>
          <div className="address-line">HP11 1JU</div>
        </div>
        <div className="contact-footer-container">
          <div className="contact-title">Contact</div>
          <div className="contact">+44 7376 710903</div>
          <div className="contact">manazil6616@gmail.com</div>
        </div>
      </div>
      <div className="section-two">
        <div className="company">Manazil Engineering Consultancy LTD UK</div>
        <div className="company">June 2023</div>
      </div>
    </div>
  );
}
