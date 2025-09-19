import React from "react";
import "./OurMission.css";
import Button2 from "../Buttons/Button2";
const OurMission = () => {
  return (
    <div className="our-mission">
      <Button2 label={"Our Mission/Vision"} />
      <p>
        A strong digital presence shapes success in today’s world. At Digital
        Aura, we aim to create solutions that bring measurable results and
        long-term impact. Our focus is on growth, trust, and creative value that
        set brands apart. Every service reflects our belief in clarity and
        excellence. We look beyond short-term wins and design strategies that
        secure lasting progress. From automation to digital marketing, each step
        builds a solid foundation. Our mission and vision guide every project.
      </p>
      <img
        className="mission-img"
        src="/mission-vision.svg"
        alt="Our Mission"
      />
    </div>
  );
};

export default OurMission;
