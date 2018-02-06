import React from "react";
import "./CarCard.css";

const CarCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.model} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Year:</strong> {props.year}
        </li>
        <li>
          <strong>MOPAR Make:</strong> {props.make}
        </li>
        <li>
          <strong>Model:</strong> {props.model}
        </li>
        <li>
          <strong>Color:</strong> {props.color}
        </li>
        <li>
          <strong>Style:</strong> {props.top}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeCar(props.id)} className="remove">
      𝘅
    </span>
  </div>
);

export default CarCard;
