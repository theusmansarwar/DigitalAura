import React from "react";
import "./BCard.css";

const BCard = () => {
  return (
    <div className="blog-grid">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
        <div className="skeleton-blog" key={i}>
          <div className="skeleton-image"></div>
          <div className="skeleton-meta"></div>
          <div className="skeleton-title short"></div>
          <div className="skeleton-title"></div>
        </div>
      ))}
    </div>
  );
};

export default BCard;
