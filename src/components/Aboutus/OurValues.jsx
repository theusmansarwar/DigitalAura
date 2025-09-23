import React from "react";
import "./OurValues.css";
import Button2 from "../Buttons/Button2";
const OurValues = () => {
  return (
    <div className="our-values">
      <Button2 label={"Our Values, Your Growth"} />
      <h2>
        We combine creativity, integrity, and innovation to deliver results that
        build trust and lasting success.
      </h2>
      <img className="values-img" src="/our-values.svg" alt="Our Values" />
    </div>
  );
};

export default OurValues;
