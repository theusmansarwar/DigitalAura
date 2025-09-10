import React from "react";
import "./DesginProcess.css";
import Button from "../Buttons/Button";
const DesginProcess = () => {
  return (
    <div className="design-process">
      <h2 className="section-heading">DESIGN PROCESS</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <img
        className="process-img"
        src="/graphic-design.svg"
        alt="Graphic Design"
      />
      <div className="buttons-container">
        <Button variant="filled">Start Ranking Now</Button>
        <Button variant="outline">Contact Now</Button>
      </div>
    </div>
  );
};

export default DesginProcess;
