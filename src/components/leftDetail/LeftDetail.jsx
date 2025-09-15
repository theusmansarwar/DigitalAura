"use client";
import React from "react";
import "./LeftDetail.css";

const LeftDetail = ({ blog }) => {
  if (!blog) return null;

  return (
    <div className="full-detail">
      <div
        dangerouslySetInnerHTML={{ __html: blog?.detail }}
        className="custom-html-styles px-4 sm:px-8 mt-6 text-white"
      ></div>

      <button className="load-more-btn">
        <img src="/down.png" alt="Arrow down" className="arrow-icon" />
        Load more
      </button>
    </div>
  );
};

export default LeftDetail;
