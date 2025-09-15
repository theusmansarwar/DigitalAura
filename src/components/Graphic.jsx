  "use client";

import React from "react";
import "./Graphic.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
export default function Graphic() {
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
            We offer full services like SEO, PPC, branding, and web design..
          </li>
          <li>
            Our campaigns grow the visibility and connect you with the right
            audience.
          </li>
          <li>
            Every plan is backed by data to bring real results and better ROI.
          </li>
          <li>
            Provide complete YouTube content planning, scriptwriting, video
            editing, SEO, and publishing.
          </li>
          <li>
            Our strategies grow your channel, increase watch time, and attract
            loyal subscribers.
          </li>
          <li>
            We create designs that improve user experience and build trust in
            your brand.
          </li>
          <li>
            Our social media marketing grows engagement and builds customer
            loyalty.
          </li>
          <li>
            Reports are clear and simple, so you always know your progress.
          </li>
          <li>
            Flexible plans are made for startups, growing brands, and big
            companies.
          </li>
          <li>
            Our skilled team follows new trends to keep your business
            competitive.
          </li>
          <li>
            The solutions are effective and bring real value to your brand.
          </li>
          <li>We focus on business growth and ensure long-term success.</li>
        </ul>

        {/* Buttons */}
        <div className="buttons-container">
          <button className="black-filled" onClick={()=>{router.push("/")}}>
            Start Ranking Now{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
          <button className="black-outline" onClick={()=>{router.push("/contact-us")}}>
            Contact Now{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
