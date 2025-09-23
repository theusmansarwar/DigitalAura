"use client";
import React, { useState } from "react";
import "./Faqs.css";
import { useRouter } from "next/navigation";
import Button from "../Buttons/Button";
import Button2 from "../Buttons/Button2";

const Faqs = ({ data }) => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Normalize API data (support "items" or "questions")
  const questions = data?.questions || data?.items || [];

  // Only show 6 unless "Read More" clicked
  const visibleQuestions = showAll ? questions : questions.slice(0, 6);

  if (!data) return null;

  return (
    <>
      <Button2 label="FAQs" />

      <div className="faq-container">
        <div className="faq-left">
          <h2 className="faq-heading">{data?.title}</h2>
          <p>{data?.description}</p>
          <img src="/faqs.svg" alt="FAQs" />
          <div className="buttons-container">
            <Button
              variant="filled"
              onClick={() => {
                router.push("/contact-us");
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
          {questions.length > 5 && (
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
    </>
  );
};

export default Faqs;
