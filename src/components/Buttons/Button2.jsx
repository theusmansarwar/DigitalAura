import React from "react";
import "./Button2.css";

const Button2 = ({ label, data = [], onClick }) => {
  return (
    <div className="button2-wrapper">
      <button
        className={`blog-btn ${onClick ? "clickable" : ""}`}
        onClick={onClick ? onClick : undefined}
      >
        <img src="/logo.png" alt="icon" className="icon" />
        {label}
      </button>

      {/* Only render p tags if items exist */}
      {data.length > 0 &&
        data.map((item, index) => (
          <p key={index} className="button2-desc">
            {item}
          </p>
        ))}
    </div>
  );
};

export default Button2;
