import React from "react";
import "../css/aims.css";

export default function Aims() {
  return (
    <>
      <div className="social-media">
        <div className="icon">
          <i class="fa-regular fa-envelope"></i>
        </div>
        <div className="icon">
          <i class="fa-solid fa-phone"></i>
        </div>
        <div className="icon">
          <i class="fa-solid fa-location-dot"></i>
        </div>
      </div>
      <div className="aims-container">
        <div className="objectives-container">
          <div className="title">Objectives</div>
          <div className="objectives-box">
            <ul>
              <li>
                To focus best construction practices and to achieve excellent
                quality with transparency in each stage of work.
              </li>
              <li>
                Establish lasting relationships with our clients along with
                profitable growth.
              </li>
              <li>Supervise closely on quality of work done.</li>
              <li>Copmlete and commision project on time.</li>
              <li>Client's faith and confidence.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
