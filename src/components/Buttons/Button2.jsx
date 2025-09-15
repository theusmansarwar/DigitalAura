import React from "react";
import "./Button2.css";

const Button2 = ({ label }) => {
  return (
    <>
      <button className="blog-btn">
        <img src="/logo.png" alt="icon" className="icon" />
        {label}
      </button>
    </>
  );
};

export default Button2;
