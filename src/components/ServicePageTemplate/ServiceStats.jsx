"use client";
import React from "react";
import "./ServiceStats.css";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const ServiceStats = () => {
  const router = useRouter();
  return (
    <div className="service-stats">
      {/* Title */}
      <h2 dangerouslySetInnerHTML={{ __html: data?.title || "" }} />

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
      {/* <div className="stats-footer">
        <div className="each-stat">
          <strong>183+</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            culpa soluta nihil vitae quis cumque officia cum corrupti
            blanditiis, quisquam, enim dolor a laboriosam consequuntur. Ullam
            inventore cumque voluptatem natus.
          </p>
        </div>
        <div className="each-stat">
          <strong>196+</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            culpa soluta nihil vitae quis cumque officia cum corrupti
            blanditiis, quisquam, enim dolor a laboriosam consequuntur. Ullam
            inventore cumque voluptatem natus.
          </p>
        </div>
        <div className="each-stat">
          <strong>229+</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            culpa soluta nihil vitae quis cumque officia cum corrupti
            blanditiis, quisquam, enim dolor a laboriosam consequuntur. Ullam
            inventore cumque voluptatem natus.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default ServiceStats;
