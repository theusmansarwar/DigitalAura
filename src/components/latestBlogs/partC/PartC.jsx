import React from "react";
import "./PartC.css";
import { formatDate } from "@/utils/FormatDate";
import { baseUrl } from "@/app/config/Config";

const PartC = ({ blogs = [] }) => {
  if (!blogs.length) return null; // no blog to show

  const blog = blogs[0]; // take the first (lastBlog is always array of 1)

  return (
    <div className="featured-wrapper">
      <div className="featured-card">
        <div className="featured-text">
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <div className="featured-footer">
            <span>{formatDate(blog.createdAt)}</span>
            <a href={`/blog/${blog.slug}`}>Read more</a>
          </div>
        </div>
        <div
          className="featured-image"
          style={{ backgroundImage: `url(${baseUrl + blog.thumbnail})` }}
        ></div>
      </div>

      <div className="see-more-container">
        <button className="see-more-btn">
          See more
          <span className="arrow-icon">
            <img src="/Vector.png" alt="arrow" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default PartC;
