import React from "react";
import "./PartA.css";
import { formatDate } from "@/utils/FormatDate";
import { baseUrl } from "@/app/config/Config";
import truncateTextByWords from "@/utils/TruncateByWords";

const PartA = ({ blogs = [] }) => {
  
  return (
    <>
      {blogs.map((blog) => (
        <div className="partA-card" key={blog._id}>
          <div className="partA-content">
            <h2 className="partA-title">{blog.title}</h2>
            <p className="partA-text">{truncateTextByWords(blog.description, 35)}</p>
            <div className="partA-footer">
              <span className="partA-date">{formatDate(blog.createdAt)}</span>
              <span
                onClick={() => {
                  router.push(`/blogs/${blog.slug}`);
                }}
                className="partA-link"
              >
                Read more
              </span>
            </div>
          </div>

          {/* background image div */}
          <div
            className="partA-image"
            style={{
              backgroundImage: `url(${baseUrl + blog.thumbnail})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default PartA;
