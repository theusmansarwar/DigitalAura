import React from "react";
import "./PartA.css";

const PartA = () => {
  return (
    <div className="partA-card">
      <div className="partA-content">
        <h2 className="partA-title">long established</h2>
        <p className="partA-text">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that….
        </p>
        <div className="partA-footer">
          <span className="partA-date">May 20th 2020</span>
          <a href="/" className="partA-link">Read more</a>
        </div>
      </div>

      {/* background image div */}
      <div className="partA-image"></div>
    </div>
  );
};

export default PartA;
