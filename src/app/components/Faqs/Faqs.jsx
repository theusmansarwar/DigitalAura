"use client";
import React, { useState } from "react";
import "./Faqs.css";
import { useRouter } from "next/navigation";
import Button from "../Buttons/Button";

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
