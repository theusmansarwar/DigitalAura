
'use client'
import React from "react";
import "./Testimonal.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import { FaThumbsUp } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { useState } from "react";
import Button from "./Button";
const Testimonal = () => {
    const testimonials = [
  {
    id: 1,
    name: "Joanna Prohaska",
    role: "The Bakery Owner",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    image: '/unsplash_RKqIIjqWRak.png'
  },
  {
    id: 2,
    name: "Michael Carter",
    role: "Restaurant Manager",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
    image: '/unsplash_RKqIIjqWRak.png'
  },
  {
    id: 3,
    name: "Sophia Turner",
    role: "Cafe Owner",
    text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
    image: '/unsplash_RKqIIjqWRak.png'
  },
];

const array=['','','']

  const [index, setIndex] = useState(0);

  // Function to go next
  const nextTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go previous
  const prevTestimonial = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Current testimonial
  const item = testimonials[index];

  return (
    <div className="testimonal">
        <Button label="Testimonial"/>
    <div className="testimonial-wrapper">
        <div className="image-frame">
      {/* Left Side */}
      <div className="testimonial-left">
        <div className="uper">
        <span className="quote">
          <RiDoubleQuotesL />
        </span>
        <p>{item.text}</p>
        <span className="quote2">
          <RiDoubleQuotesL />
        </span></div>

        {/* Footer */}
        <div className="testimonial-footer">
          <button className="arrow" onClick={prevTestimonial}>
            <FaLessThan />
          </button>
          <button className="arrow" onClick={nextTestimonial}>
            <FaGreaterThan />
          </button>
          <p className="icon">
            <FaThumbsUp />
          </p>
          <p className="labell"><b>Testimonial</b></p>
        </div>
      </div>

      {/* Right Side */}
      <div className="testimonial-right">
        <div className="image">
          <img src={item.image} alt={item.name} />
          <div className="caption">
            <h3>{item.name}</h3>
            <p>{item.role}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div className="round">
       {array.map((fruit) => (
          <div className="round2" key={index}>
            </div>
        ))}
    </div>
    </div>
  );
};

export default Testimonal;