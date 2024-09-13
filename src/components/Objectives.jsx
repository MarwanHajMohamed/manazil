import React from "react";
import "../css/objectives.css";

export default function Aims() {
  return (
    <>
      <div className="aims-container" id="objectives">
        <div className="objectives-container">
          <div className="title">Objectives</div>
          <hr />
          <div className="objectives-description">
            We aim to deliver the finest and most cost-effective engineering
            design, construction supervision and architectural services that
            lead to the magnificent marvels.
          </div>
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
        <div className="social-media">
          <div
            className="icon"
            onClick={() =>
              (window.location.href =
                "mailto:manazil6616@gmail.com?subject=Manazil Query")
            }
          >
            <i class="fa-regular fa-envelope"></i>
          </div>

          <div
            className="icon"
            onClick={() => {
              window.location.href = window.open(
                "https://maps.app.goo.gl/G9WuJUxzAi4U8bX86"
              );
            }}
          >
            <i class="fa-solid fa-location-dot"></i>
          </div>
        </div>
      </div>
    </>
  );
}
