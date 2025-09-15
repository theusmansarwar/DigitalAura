"use client";
import React from "react";
import "./SMMStrategy.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
const SMMStrategy = () => {
  const router = useRouter();
  return (
    <div className="smm-strategy">
      {/* left */}
      <div className="left">
        <h2 className="section-heading">
          SMM – Strategies That Drive Real Customer Growth
        </h2>
        <p className="sub-heading">
          From clicks to customers, smarter every step.
        </p>
        <img src="" alt="SMM Strategy" />
      </div>
      {/* right */}
      <div className="right">
        <div className="top-card">
          <h3>Our Strategies</h3>
          <div className="point-parent">
            <p className="point">
              <span className="purple"></span>2025 – Targeted Campaigns
            </p>
            <p className="point">
              <span className="blue"></span>2024 – Content Resonates Across
              Platforms
            </p>
            <p className="point">
              <span className="light-blue"></span>2023 – Community Engagement
              and Brand Growth
            </p>
            <p className="point">
              <span className="green"></span>2022 – Analytics-Driven Decisions
              and Optimization
            </p>
            <p className="point">
              <span className="light-green"></span>2021 – Consistency and
              Long-Term Impact
            </p>
          </div>
          <p>
            You reach the right audience through social media campaigns that
            bring clear results. Each click, like, and comment builds
            engagement. Paid ads increase reach and visibility. Influencer
            partnerships add trust to your brand. Platform-focused strategies
            improve brand awareness and attract quality leads. A solid social
            media marketing strategy makes sure every effort converts into
            growth.
          </p>
          <p>
            You get the content tailored for Facebook, Instagram, LinkedIn, and
            YouTube. Videos, reels, and carousel posts keep people more
            interested. Stories create quick reactions and boost interaction. A
            clear content strategy gives your brand a strong voice.
          </p>
          <p>
            You build loyal communities through active social media management.
            The steady messaging creates trust and makes your brand reliable.
            Analytics track clicks, engagement, and conversions. Data guides the
            decisions to improve the ROI and grow followers.
          </p>
        </div>
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
    </div>
  );
};

export default SMMStrategy;
