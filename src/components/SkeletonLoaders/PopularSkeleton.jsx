import React from "react";
import "./PopularSkeleton.css";

export default function PopularSkeleton({ count = 4 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <React.Fragment key={i}>
          <div className="post-item">
            <div className="post-image skeleton"></div>
            <div className="post-content">
              <div className="skeleton skeleton-text short"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </div>
          </div>
          <div className="divider-line"></div>
        </React.Fragment>
      ))}
    </>
  );
}
