"use client";
import React from "react";
import "./ServiceStats.css";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const ServiceStats = () => {
  const router = useRouter();
  return (
    <div className="service-stats">
      <h2>Lorem ipsum</h2>
      <p className="description1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
        distinctio quidem exercitationem nobis tempore, ad excepturi corrupti
        nulla quae! Excepturi facere architecto placeat explicabo eaque ut
        cumque cupiditate vitae nihil error! Ex nesciunt sint eum nobis ducimus,
        itaque temporibus beatae? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Debitis distinctio quidem exercitationem nobis
        tempore, ad excepturi corrupti nulla quae! Excepturi facere architecto
        placeat explicabo eaque ut cumque cupiditate vitae nihil error! Ex
        nesciunt sint eum nobis ducimus, itaque temporibus beatae?
      </p>
      <p className="description2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
        obcaecati magnam. Alias quis reiciendis culpa officiis quas beatae
        deserunt architecto sequi nulla ducimus cumque, minus odit repellat
        optio sit! Veniam, excepturi. Similique ratione reiciendis saepe vero
        expedita magni, impedit cupiditate? deserunt architecto sequi nulla
        ducimus cumque, minus odit repellat optio sit! Veniam, excepturi.
        Similique ratione reiciendis saepe vero expedita magni, impedit
        cupiditate?
      </p>
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
      </div>
    </div>
  );
};

export default ServiceStats;
