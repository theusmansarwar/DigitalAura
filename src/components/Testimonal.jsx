"use client";
import React from "react";
import "./Testimonal.css";
import { RiDoubleQuotesL } from "react-icons/ri";
import {
  FaAngleLeft,
  FaAngleRight,
  FaChevronLeft,
  FaChevronRight,
  FaThumbsUp,
} from "react-icons/fa";
import { useState } from "react";
import Button2 from "./Buttons/Button2";
const Testimonal = () => {
  const testimonials = [
    {
      id: 1,
      name: "Joanna Prohaska",
      role: "The Bakery Owner",
      text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      image: "/testimonial.png",
    },
    {
      id: 2,
      name: "Michael Carter",
      role: "Restaurant Manager",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      image: "/testimonial.png",
    },
    {
      id: 3,
      name: "Sophia Turner",
      role: "Cafe Owner",
      text: "Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.",
      image: "/testimonial.png",
    },
  ];

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
      <Button2 label="Testimonial" />
      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-wrapper">
              {/* Left Side */}
              <div className="testimonial-left">
                <div className="testimonial-content">
                  <span className="quote">
                    <RiDoubleQuotesL />
                  </span>
                  <p>{t.text}</p>
                  <span className="quote2">
                    <RiDoubleQuotesL />
                  </span>
                  <div className="testimonial-footer">
                    <div className="arrow-container">
                      <FaChevronLeft
                        className={`arrow ${
                          index === 0 ? "disabled" : "active"
                        }`}
                        onClick={prevTestimonial}
                      />
                      <FaChevronRight
                        className={`arrow ${
                          index === testimonials.length - 1
                            ? "disabled"
                            : "active"
                        }`}
                        onClick={nextTestimonial}
                      />
                    </div>

                    <div className="thumb-icon">
                      <FaThumbsUp />
                    </div>
                    <p className="labell">Testimonial</p>
                  </div>
                </div>
              </div>

              {/* Right Side */}
              <div className="testimonial-right">
                <img src={t.image} alt={t.name} />
                <div className="person-detail">
                  <strong>{t.name}</strong>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonal;
