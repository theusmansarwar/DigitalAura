import React from "react";
import "./PartB.css";
import { baseUrl } from "@/app/config/Config";
import { formatDate } from "@/utils/FormatDate";
import truncateTextByWords from "@/utils/TruncateByWords";

const PartB = ({ blogs = [] }) => {
  return (
    <div className="card-section">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="card"
          onClick={() => {
            router.push(`/blogs/${blog.slug}`);
          }}
        >
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${baseUrl + blog.thumbnail})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <div className="card-content">
            <h3>{truncateTextByWords(blog.title, 10)}</h3>
            <p>{truncateTextByWords(blog.description, 20)}</p>
            <div className="card-footer">
              <span>{formatDate(blog.createdAt)}</span>
              <span>Read more</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartB;
