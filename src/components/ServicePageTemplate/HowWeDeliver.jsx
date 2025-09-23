"use client";
import React from "react";
import "./HowWeDeliver.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
import { baseUrl } from "@/app/config/Config";

const HowWeDeliver = ({ data }) => {
  const router = useRouter();

  if (!data) return null; // safeguard if no data passed

  return (
    <div className="automation-process">
      <h2 className="section-heading">How We Deliver</h2>

      {/* API description */}
      <div
        className="service-description"
        dangerouslySetInnerHTML={{ __html: data?.description || "" }}
      />

      {/* API image */}
      {data.image && (
        <img
          className="process-img"
          src={`${baseUrl}${data.image}`}
          alt={data?.title || "How We Deliver"}
        />
      )}
      <div
        className="service-description"
        dangerouslySetInnerHTML={{ __html: data?.lower_description || "" }}
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

export default HowWeDeliver;
