 import React from "react";
import "./MainHead.css";
import authorImg from  "../../assets/author.png" 
import feature from "../../assets/Feature.png"

const MainHead = () => {
  return (
    <div className="mainhead-wrapper">
       
      <h2 className="mainhead-title">
         Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit
      </h2>
 
      
      <div className="mainhead-meta">
        <div className="author-info">
          <img src={authorImg} alt="Author" className="author-img" />
          <span className="author">By John Doe | </span>
          <span className="date">Published on September 10, 2025 | </span>
        <span className="category">2 min read</span>
        </div>
         
      </div>

       <div
            className="feature-img"
            style={{ backgroundImage: `url(${feature})` }}
          ></div>
    </div>
  );
};

export default MainHead;
