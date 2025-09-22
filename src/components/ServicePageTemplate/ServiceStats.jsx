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
            router.push("/");
          }}
        >
          Start Ranking Now{" "}
          <span>
            <FaArrowRight />
          </span>
        </button>
        <button
          className="black-outline"
          onClick={() => {
            router.push("/contact-us");
          }}
        >
          Contact Now{" "}
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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div className="each-stat">
          <strong>
            <CountUp end={196} />
          </strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
        <div className="each-stat">
          <strong>
            <CountUp end={229} />
          </strong>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceStats;
