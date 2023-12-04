import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-title">Contact</div>
      <div className="contact-top">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.563012874181!2d-0.240469423629758!3d51.57624400567211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876111fa354c269%3A0x4ccc41fb757b372!2s164%20W%20Hendon%20Broadway%2C%20London%20NW9%207AA!5e0!3m2!1sen!2suk!4v1701638338745!5m2!1sen!2suk"
            allowfullscreen=""
            loading="lazy"
            className="map-frame"
          ></iframe>
        </div>
      </div>
      <div className="contact-bottom">
        <div
          className="item-container"
          onClick={() => {
            window.location.href = "tel:+447376710903";
          }}
        >
          <i class="fa-solid fa-phone"></i>
          <div className="item">+44 7376 710903</div>
        </div>
        <div
          className="item-container"
          onClick={() =>
            (window.location.href =
              "mailto:manazil6616@gmail.com?subject=Manazil Query")
          }
        >
          <i class="fa-regular fa-envelope"></i>
          <div className="item">manazil6616@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
