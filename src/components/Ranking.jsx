  "use client";

import React from "react";
import "./Ranking.css";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "./Buttons/Button";
import { useRouter } from "next/navigation";
export default function Ranking() {
  const router = useRouter();
  return (
    <section className="ranking-section">
      {/* Left content */}
      <div className="text-content">
        <h2 className="ranking-heading">
          Smart Marketing Strategies Designed for Your Business
        </h2>
        <p>
          Our digital marketing plans include digital marketing, YouTube
          automation, and are built on research, real data, and market insight.
          We look at your industry, study competitors, and understand customer
          behavior. Then, we design campaigns that match your business goals.
          Each step gives results you can measure. Growth comes from clarity and
          focus. That is why we mix creative ideas with methods that deliver
          performance. Our strategies adjust quickly to market changes. You want
          to grow worldwide or build strength in local markets. You connect with
          your audience and achieve real growth through the right mix of
          planning, action, and YouTube channel optimization.
        </p>

        {/* Buttons */}
        <div className="buttons-container">
          <Button
            variant="filled"
            onClick={() => {
              router.push("/");
            }}
          >
            Start Ranking Now
          </Button>

          <Button
            variant="outline"
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
        <img
          src="/business-graphics-presentation-illustration.png"
          alt="Business Growth Illustration"
        />
      </div>
    </section>
  );
}
