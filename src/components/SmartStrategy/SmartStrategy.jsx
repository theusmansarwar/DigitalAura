"use client";

import React from "react";
import "./SmartStrategy.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
export default function SmartStrategy() {
  const router = useRouter();
  return (
    <section className="ranking-section">
      {/* Left content */}
      <div className="text-content">
        <h2 className="ranking-heading">
          Smart Marketing Strategies Designed for Your Business
        </h2>
        <p>
          Our digital marketing plans are built to deliver real results. We
          combine YouTube automation, research, and market insights to create
          strategies that actually work. By studying your industry, keeping an
          eye on competitors, and understanding customer behavior, we design
          campaigns that align with your goals. Every step is measurable, so you
          always see the impact. We balance creative ideas with proven methods,
          and our strategies adapt quickly as markets change. Whether you’re
          aiming to grow globally or strengthen your local presence, we’ll help
          you connect with your audience and achieve lasting growth
        </p>

        {/* Buttons */}
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

      {/* Right image */}
      <div className="image-content">
        <img src="/strategies.png" alt="Business Growth Illustration" />
      </div>
    </section>
  );
}
