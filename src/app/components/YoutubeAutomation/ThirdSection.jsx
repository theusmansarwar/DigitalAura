import React from "react";
import "./ThirdSection.css";
import Button from "../Buttons/Button";

const ThirdSection = () => {
  return (
    <div
      className="third-section"
      style={{
        backgroundImage: "url(/buildings.png)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="section-heading">Lorem ipsum dolor sit</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <div className="buttons-container">
        <Button variant="filled">Start Ranking Now</Button>
        <Button variant="outline">Contact Now</Button>
      </div>
    </div>
  );
};

export default ThirdSection;
