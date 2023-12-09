import React from "react";
import "../../css/serviceCard.css";

export default function ServiceCard({ title, image }) {
  return (
    <div className="serviceCard-container">
      <img src={image} alt="" />
      <div className="title">{title}</div>
    </div>
  );
}
