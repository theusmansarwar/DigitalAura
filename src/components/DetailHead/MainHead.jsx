import React from "react";
import "./MainHead.css";
import { formatDate } from "@/utils/FormatDate";
import { baseUrl } from "@/app/config/Config";

const MainHead = ({ title, date, author, thumbnail }) => {
  return (
    <div className="mainhead-wrapper">
      <h2 className="mainhead-title">{title}</h2>
      <div className="mainhead-meta">
        <div className="author-info">
          <img src="/placeholder.png" alt="Author" className="author-img" />
          <span className="author">By {author} | </span>
          <span className="date">Published on {formatDate(date)} | </span>
          <span className="category">2 min read</span>
        </div>
      </div>

      <div
        className="feature-img"
        style={{ backgroundImage: `url(${baseUrl + thumbnail})` }}
      ></div>
    </div>
  );
};

export default MainHead;
