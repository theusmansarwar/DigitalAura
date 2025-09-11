 import React from "react";
import "./BlogCard.css";

const BlogCards = () => {
 
  const blogData = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    title: "Richard Norton photorealistic rendering as real photos",
    date: "29.Jun.2021",
    image: "/dummy.jpg",
  }));

  return (
    <div className="blog-grid">
      {blogData.map((blog) => (
        <div key={blog.id} className="blog-card">
          <div
            className="blog-image"
            style={{ backgroundImage: `url(${blog.image})` }}
          ></div>
          <p className="blog-date">{blog.date}</p>
          <h3 className="blog-title">{blog.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
