"use client";
import React, { useState } from "react";
import "./Testimonal.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaChevronLeft, FaChevronRight, FaThumbsUp } from "react-icons/fa";
import Button2 from "./Buttons/Button2";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "E-commerce Owner",
    text: "Our business was struggling to get noticed online. After working with this team, we saw better search rankings and more customer inquiries. The process was simple, and the results were clear.",
    image: "/testimonial.png",
  },
  {
    id: 2,
    name: "Michael R.",
    role: "Startup Founder",
    text: "They adjusted fast when our market changed. Strategies were updated without delay. That quick response kept us ahead of competitors.",
    image: "/testimonial.png",
  },
  {
    id: 3,
    name: "Olivia T.",
    role: "Tech Entrepreneur",
    text: "We wanted results on a limited budget. Their plans gave us strong outcomes without wasting money. It felt like a smart long-term investment.",
    image: "/testimonial.png",
  },
  {
    id: 4,
    name: "Olivia T.",
    role: "Tech Entrepreneur",
    text: "We wanted results on a limited budget. Their plans gave us strong outcomes without wasting money. It felt like a smart long-term investment.",
    image: "/testimonial.png",
  },
  {
    id: 5,
    name: "David H.",
    role: "Retail Manager",
    text: "Our brand gained more attention on social media and search engines. Campaigns reached the right audience. Engagement was higher than before.",
    image: "/testimonial.png",
  },
  {
    id: 6,
    name: "Emily K.",
    role: "Fashion Brand Owner",
    text: "They focused on data and gave clear reports. We could see improvement month by month. That gave us trust and confidence.",
    image: "/testimonial.png",
  },
  {
    id: 7,
    name: " James L.",
    role: "Service Provider",
    text: "What impressed me most was their consistency. Results came step by step, but kept improving. Their strategies proved to be effective.",
    image: "/testimonial.png",
  },
  {
    id: 8,
    name: "Daniel S.",
    role: "Business Consultant",
    text: "Digital Aura helped me grow my YouTube channel fast. Their automation handled content planning, editing, and SEO perfectly. My videos now reach the right audience, and my subscriber count has increased steadily.",
    image: "/testimonial.png",
  },
  {
    id: 9,
    name: "Jason M.",
    role: "Content Creator",
    text: "I liked how they explained everything in simple words. We always knew what was happening in our campaigns. Reports were clear, and progress was steady.",
    image: "/testimonial.png",
  },
];
const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    if (index < testimonials.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevTestimonial = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="testimonial">
      <Button2 label="Testimonials"  />
      <div className="testimonial-slider">
        <div
          className="testimonial-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-wrapper">
              {/* Person Info */}
              <div className="person-info">
                <strong>{t.name}</strong>
                <p>{t.role}</p>
              </div>

              {/* Quote */}
              <div className="testimonial-text">
                <span className="quote-left">
                  <RiDoubleQuotesL />
                </span>
                <p>{t.text}</p>
                <span className="quote-right">
                  <RiDoubleQuotesR />
                </span>
              </div>

              {/* Footer with arrows + label */}
              <div className="testimonial-footer">
                <FaChevronLeft
                  onClick={prevTestimonial}
                  className={`arrow ${index === 0 ? "disabled" : ""}`}
                />
                <FaChevronRight
                  onClick={nextTestimonial}
                  className={`arrow ${
                    index === testimonials.length - 1 ? "disabled" : ""
                  }`}
                />
                <div className="footer-label">
                  <div className="thumb-icon">
                    <FaThumbsUp />
                  </div>
                  <p className="label">Testimonial</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
