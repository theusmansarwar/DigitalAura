import React from "react";
import "./PartB.css";
import { baseUrl } from "@/app/config/Config";
import { formatDate } from "@/utils/FormatDate";

const PartB = ({ blogs = [] }) => {
  return (
    <div className="card-section">
      {blogs.map((blog) => (
        <div key={blog._id} className="card">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${baseUrl + blog.thumbnail})` }}
          ></div>
          <div className="card-content">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <div className="card-footer">
              <span>{formatDate(blog.createdAt)}</span>
              <a href={`/blog/${blog.slug}`}>Read more</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartB;
