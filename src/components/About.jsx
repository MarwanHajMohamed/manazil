import React, { CSSProperties } from "react";
import "../css/about.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Man from "../css/assets/man.png";
import House1 from "../css/assets/house1.png";
import House2 from "../css/assets/house2.png";
import House3 from "../css/assets/house3.png";
import House4 from "../css/assets/house4.png";
import House5 from "../css/assets/house5.png";

export default function About() {
  const arrowStyles: CSSProperties = {
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
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            swipeable
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, left: 15 }}
                >
                  &#x0354;
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button
                  type="button"
                  onClick={onClickHandler}
                  title={label}
                  style={{ ...arrowStyles, right: 15 }}
                >
                  &#x0355;
                </button>
              )
            }
          >
            <img src={Man} className="image" />
            <img src={House1} className="image" />
            <img src={House2} className="image" />
            <img src={House3} className="image" />
            <img src={House4} className="image" />
            <img src={House5} className="image" />
          </Carousel>
        </div>
        <div className="description-container">
          <div className="description">
            <span style={{ fontWeight: "700" }}>Manazil</span>, one of the best
            engineering consultants and architectural consultancy company based
            in Ras Al-Khaimah, Emirates of UAE. Since the beginning of its
            inauguration, Manazil has distinguished itself regionally and
            internationally, being recognised for its excellent and
            quality-driven design and engineering services.
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
            Engineers, Technical Staffs and Managers. Our engineer is
            experienced in a wide range of projects in all sales.
          </div>
          <div className="description">
            Furthermore, every employee is chaaracterised by an open mindset and
            cultural sensitivity, often developed by professional and practical
            experiences.
          </div>
        </div>
      </div>
    </div>
  );
}
