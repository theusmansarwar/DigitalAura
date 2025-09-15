import React from "react";
import "./WeBring.css";
import StatsSection from "../Aboutus/StatsSection";
const WeBring = ({ statsDesc, data }) => {
  return (
    <div className="we-bring">
      <div className="stats-component">
        <StatsSection data={statsDesc.desc} />
      </div>
      {data.map((section, index) => (
        <div className="webring-card" key={index}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WeBring;
