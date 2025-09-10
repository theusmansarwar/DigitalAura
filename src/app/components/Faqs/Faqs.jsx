"use client";
import React, { useState } from "react";
import "./Faqs.css";
import { useRouter } from "next/navigation";

const Faqs = ({ data }) => {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-left">
        <h2 className="faq-heading">{data?.title}</h2>
        <p>{data?.description}</p>
        <div className="faq-buttons">
          <button
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            More Questions
          </button>
          <span
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Contact Us
          </span>
        </div>
        <img src="/faqs.svg" alt="FAQs" />
      </div>
      <div className="faq-right">
        {data?.questions.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Faqs;
