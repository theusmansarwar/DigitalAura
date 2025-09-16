"use client";
import React, { useState } from "react";
import "./Faqs.css";
import { useRouter } from "next/navigation";
import Button from "../Buttons/Button";

const Faqs = ({ data }) => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Only show 6 unless "Read More" clicked
  const visibleQuestions = showAll
    ? data?.questions
    : data?.questions.slice(0, 6);

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h2 className="faq-heading">{data?.title}</h2>
        <p>{data?.description}</p>
        <img src="/faqs.svg" alt="FAQs" />
        <div className="buttons-container">
          <Button
            variant="filled"
            onClick={() => {
              router.push("/contact");
            }}
          >
            Start Ranking Now
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              router.push("/");
            }}
          >
            Contact Now
          </Button>
        </div>
      </div>

      <div className="faq-right">
        {visibleQuestions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggle(index)}>
              <span>{item.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}

        {/* Read More button */}
        {data?.questions.length > 5 && (
          <div className="read-more-container">
            <button
              className="read-more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Show Less" : "Read More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faqs;
