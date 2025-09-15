import React from "react";
import "./PartB.css";

const cardsData = [
  {
    id: 1,
    title: "long established",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    date: "May 20th 2020",
    link: "Read more",
    image: "/img1.png",
  },
  {
    id: 2,
    title: "long established",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    date: "May 20th 2020",
    link: "Read more",
    image: "/img2.png",
  },
  {
    id: 3,
    title: "long established",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    date: "May 20th 2020",
    link: "Read more",
    image: "/img3.png",
  },
];

const CardSection = () => {
  return (
    <div className="card-section">
      {cardsData.map((card) => (
        <div key={card.id} className="card">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${card.image})` }}
          ></div>
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <div className="card-footer">
              <span>{card.date}</span>
              <a href="/#">{card.link}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
