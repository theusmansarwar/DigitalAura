import React from "react";
import "./OurMission.css";
import Button2 from "../Buttons/Button2";
const OurMission = () => {
  return (
    <div className="our-mission">
      <Button2 label={"Our Mission/Vision"} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <img
        className="mission-img"
        src="/design-process.png"
        alt="Graphic Design"
      />
    </div>
  );
};

export default OurMission;
