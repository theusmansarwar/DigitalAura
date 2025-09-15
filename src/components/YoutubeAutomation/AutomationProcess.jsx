import React from "react";
import "./AutomationProcess.css";
import Button from "../Buttons/Button";
const AutomationProcess = () => {
  return (
    <div className="automation-process">
      <h2 className="section-heading">How We Deliver</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <img
        className="process-img"
        src="/automation-process.png"
        alt="Youtube Automation"
      />
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

export default AutomationProcess;
