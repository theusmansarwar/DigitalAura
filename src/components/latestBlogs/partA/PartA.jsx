import React from "react";
import "./PartA.css";
import { formatDate } from "@/utils/FormatDate";

const PartA = ({ blogs = [] }) => {
  return (
    <>
      {blogs.map((blog) => (
        <div className="partA-card" key={blog._id}>
          <div className="partA-content">
            <h2 className="partA-title">{blog.title}</h2>
            <p className="partA-text">{blog.description}</p>
            <div className="partA-footer">
              <span className="partA-date">{formatDate(blog.createdAt)}</span>
              <a href={`/blog/${blog.slug}`} className="partA-link">
                Read more
              </a>
            </div>
          </div>

          {/* background image div */}
          <div
            className="partA-image"
            style={{ backgroundImage: `url(${blog.thumbnail})` }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default PartA;
