import React from "react";
import "../css/services.css";
import ServiceCard from "./common/ServiceCard";
import office from "../css/assets/office.png";
import apartments from "../css/assets/apartments.png";
import factory from "../css/assets/factory.png";
import school from "../css/assets/school.png";

export default function Services() {
  return (
    <div className="services-container" id="services">
      <div className="services-title">Services</div>
      <hr />
      <div className="services-description">
        We provide professional construction supervision and project management,
        consultation specifically tailored to safeguard the successful
        completion of projects. Our highly experienced personnel effectively
        control and supervise every aspect of construction work.
      </div>
      <ul>
        <li>
          <ServiceCard image={office} title={"Office Buildings"} />
        </li>
        <li>
          <ServiceCard image={apartments} title={"Residential Apartments"} />
        </li>
        <li>
          <ServiceCard image={factory} title={"Plants and Factories"} />
        </li>
        <li>
          <ServiceCard image={school} title={"Institutional Buildings"} />
        </li>
      </ul>
    </div>
  );
}
