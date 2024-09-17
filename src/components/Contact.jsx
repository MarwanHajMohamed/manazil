import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="title">
        <div className="line"></div>
        <div className="contact-title">Contact</div>
      </div>
      <hr />
      <div className="contact-top">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2477.6187282364203!2d-0.7083091736276629!3d51.61187425306613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48766176c957dc0b%3A0x5135b7ccebb0d48c!2sHigh%20Wycombe%20HP11%201JU!5e0!3m2!1sen!2suk!4v1702225495296!5m2!1sen!2suk"
            allowfullscreen=""
            loading="lazy"
            className="map-frame"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div
          className="item-container"
          onClick={() =>
            (window.location.href =
              "mailto:contact@manazilconsultancy.co.uk?subject=Manazil Query")
          }
        >
          <i class="fa-regular fa-envelope"></i>
          <div className="item">contact@manazilconsultancy.co.uk</div>
        </div>
      </div>
    </div>
  );
}
