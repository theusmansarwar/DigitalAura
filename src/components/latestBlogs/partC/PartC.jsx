import React from "react";
import "./PartC.css";

const featuredData = {
  title: "What is Lorem Ipsum?",
  description:
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...",
  date: "May 20",
  link: "Read more",
  image: "/img4.png",
};

const FeaturedCard = () => {
  return (
    <div className="featured-wrapper">
      <div className="featured-card">
        <div className="featured-text">
          <h2>{featuredData.title}</h2>
          <p>{featuredData.description}</p>
          <div className="featured-footer">
            <span>{featuredData.date}</span>
            <a href="/#">{featuredData.link}</a>
          </div>
        </div>
        <div
          className="featured-image"
          style={{ backgroundImage: `url(${featuredData.image})` }}
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

export default FeaturedCard;
