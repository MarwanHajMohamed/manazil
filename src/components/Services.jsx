import React from "react";
import "../css/services.css";
import ServiceCard from "./common/ServiceCard";
import office from "../css/assets/office.png";
import apartments from "../css/assets/apartments.png";
import factory from "../css/assets/factory.png";
import school from "../css/assets/school.png";
import modelling from "../css/assets/modelling.png";

export default function Services() {
  return (
    <div className="services-container" id="services">
      <div className="title">
        <div className="line"></div>
        <div className="services-title">Services</div>
      </div>
      <hr />
      <div className="services-description">
        We offer specialized consultations for project management and designs
        ensuring the successful completion of projects. Our team of experienced
        professionals provides tailored guidance to navigate every aspect of the
        design process.
      </div>
      <ul>
        <li>
          <ServiceCard image={office} title={"Office Buildings"} />
        </li>
        <li>
          <ServiceCard image={apartments} title={"Residential Apartments"} />
        </li>
        <li>
          <ServiceCard image={modelling} title={"3d Modelling"} />
        </li>
        <li>
          <ServiceCard image={school} title={"Institutional Buildings"} />
        </li>
      </ul>
    </div>
  );
}
