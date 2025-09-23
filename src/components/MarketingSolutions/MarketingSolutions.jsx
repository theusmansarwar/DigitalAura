"use client";

import React from "react";
import "./MarketingSolutions.css";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function MarketingSolutions() {
  const router = useRouter();
  return (
    <div className="graphic-section">
      {/* Left Side Image */}
      <div className="graphic-image">
        <img src="/graphic-bg.png" alt="Illustration" />
      </div>

      {/* Right Side Content */}
      <div className="graphic-content">
        <h2>
          What Sets DigitalAura Apart in Delivering Complete Digital Marketing
          Solutions
        </h2>
        <ul>
          <li>
            Complete digital marketing solutions: SEO, GEO & AEO, PPC, branding,
            and web design.
          </li>
          <li>
            Full YouTube services: content planning, scriptwriting, video
            editing, SEO, and publishing.
          </li>
          <li>
            Data-driven campaigns that improve visibility, connect you with the
            right audience, and boost ROI.
          </li>
          <li>
            Strategies that grow channels, increase watch time, and build loyal
            subscribers.
          </li>
          <li>
            Creative designs that enhance user experience and strengthen brand
            trust.
          </li>
          <li>
            Social media marketing that drives engagement and customer loyalty.
          </li>
          <li>Clear, simple reports so you always track your progress.</li>
          <li>
            Customer onboarding process to ensure smooth collaboration from day
            one.
          </li>
          <li>
            Projects managed in ClickUp for organized, transparent, and
            efficient delivery.
          </li>
          <li>
            Flexible plans for startups, growing brands, and established
            companies.
          </li>
          <li>
            Skilled team that follows new trends to keep your business
            competitive.
          </li>
          <li>Focus on sustainable growth and long-term success.</li>
        </ul>

        {/* Buttons */}
        <div className="buttons-container">
          <button
            className="black-filled"
            onClick={() => {
              router.push("/contact-us");
            }}
          >
            Contact Now
            <span>
              <FaArrowRight />
            </span>
          </button>
         
        </div>
      </div>
    </div>
  );
}
