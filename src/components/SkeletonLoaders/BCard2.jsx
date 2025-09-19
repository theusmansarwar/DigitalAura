import React from "react";
import "./BCard2.css"; // reuse same CSS

const BCard2 = () => {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div className="latestblogs2-card" key={i}>
          {/* Skeleton Image */}
          <div className="skeleton latestblogs2-card-image"></div>

          {/* Skeleton Content */}
          <div className="latestblogs2-card-content">
            <div className="skeleton skeleton-title"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>

          {/* Skeleton Footer */}
          <div className="latestblogs2-card-footer">
            <div className="skeleton skeleton-text-short"></div>
            <div className="skeleton skeleton-text-short"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BCard2;
