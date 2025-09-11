import React from "react";
import "./SMMHero.css";
import Button from "../Buttons/Button";

const SMMHero = () => {
  return (
    <div
      className="smm-hero"
    
    >
      <h2 className="section-heading">Lorem ipsum dolor sit</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <div className="buttons-container">
        <img className="arrow-img" src="/left-arrow.svg" alt="Arrow Image" />
        <Button variant="filled">Start Ranking Now</Button>
        <Button variant="outline">Contact Now</Button>
      </div>
    </div>
  );
};

export default SMMHero;
