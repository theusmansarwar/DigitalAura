import React from "react";
import "./OurValues.css";
import Button2 from "../Buttons/Button2";
const OurValues = () => {
  return (
    <div className="our-values">
      <Button2 label={"Our Values"} />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tenetur
        ipsa? Eveniet voluptates quibusdam ex sapiente atque voluptate non ullam
        eaque architecto quaerat inventore neque voluptatum, sunt rerum
        dignissimos quae?
      </p>
      <img
        className="values-img"
        src="/design-process.png"
        alt="Graphic Design"
      />
    </div>
  );
};

export default OurValues;
