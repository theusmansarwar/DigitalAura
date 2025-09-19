"use client";
import React from "react";
import "./LatestBlogsLoader.css";

const LatestBlogsLoader = () => {
  return (
    <div className="latest-blogs-loader">
      {/* Part A - First Blog */}
      <div className="partA-card">
        <div className="partA-content">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="partA-footer">
            <div className="skeleton skeleton-text-short"></div>
            <div className="skeleton skeleton-text-short"></div>
          </div>
        </div>
        <div className="skeleton partA-image"></div>
      </div>

      {/* Part B - Middle 3 Blogs */}
      <div className="partB-grid">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton partB-card">
            <div className="skeleton partB-image"></div>
            <div className="skeleton skeleton-title-small"></div>
            <div className="skeleton skeleton-text"></div>
            <div className="skeleton skeleton-text"></div>
          </div>
        ))}
      </div>

      {/* Part C - Last Blog */}
      <div className="skeleton partC-card">
        <div className="partC-content">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="partC-footer">
            <div className="skeleton skeleton-text-short"></div>
            <div className="skeleton skeleton-text-short"></div>
          </div>
        </div>
        <div className="skeleton partC-image"></div>
      </div>
    </div>
  );
};

export default LatestBlogsLoader;
