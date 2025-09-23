"use client";
import React from "react";
import "./ThirdSection.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";

const ThirdSection = ({ data }) => {
  const router = useRouter();

  if (!data) return null; // safeguard

  return (
    <div
      className="third-section"
      style={{
        backgroundImage: "url(/buildings.png)",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
      }}
    >
      {data.title && <h2 className="section-heading">{data.title}</h2>}

      {/* API description */}
      <div
        className="service-description"
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />

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
  );
};

export default ThirdSection;
