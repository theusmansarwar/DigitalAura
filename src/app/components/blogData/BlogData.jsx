import React from "react";
import "./BlogData.css";
import BlogCards from "./blogCards/BlogCard";
 

const BlogData = () => {
  return (
    <> 
    <div className="category-filters">
      <div className="categories">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Category 01</button>
        <button className="filter-btn">Category 02</button>
        <button className="filter-btn">Category 03</button>
      </div>

      <div className="sort-by">
        <label>Sort by:</label>
        <select>
          <option>Newest</option>
          <option>Oldest</option>
        </select>
      </div>
    </div>
    <BlogCards />
    </>
  );
};

export default BlogData;
