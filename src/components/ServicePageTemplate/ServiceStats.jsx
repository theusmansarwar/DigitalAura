"use client";
import React from "react";
import "./ServiceStats.css";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CountUp from "../CountUp/CountUp";
const ServiceStats = ({ data }) => {
  const router = useRouter();
  return (
    <div className="service-stats">
      {/* Title */}
      <h2>Your Trusted Partner for Lasting Digital Success</h2>

      {/* Description 1 */}
      {data?.detail && (
        <div
          className="description1"
          dangerouslySetInnerHTML={{ __html: data.detail }}
        />
      )}

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
      <div className="stats-footer">
        <div className="each-stat">
          <strong>
            <CountUp end={183} />
          </strong>
          <p>
            We have delivered more than 183+ successful projects across
            industries. Every project proves our focus on quality, strategy, and
            measurable results. Clients rely on us to achieve real digital
            growth.
          </p>
        </div>
        <div className="each-stat">
          <strong>
            <CountUp end={196} />
          </strong>
          <p>
            Over 196+ active clients trust us with their digital success. We
            provide tailored strategies, consistent communication, and clear
            results. Each partnership shows our commitment to lasting growth and
            client satisfaction.
          </p>
        </div>
        <div className="each-stat">
          <strong>
            <CountUp end={229} />
          </strong>
          <p>
            We have executed more than 229+ marketing campaigns for diverse
            businesses. Each campaign boosts visibility, generates qualified
            leads, and drives conversions. Our team ensures every campaign
            supports brand goals effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;
