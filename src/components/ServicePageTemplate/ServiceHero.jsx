"use client";
import React from "react";
import "./ServiceHero.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";

const ServiceHero = ({ service }) => {
  const router = useRouter();

  return (
    <div className="smm-hero">
      <h2 className="section-heading">{service?.title}</h2>
      <div
        className="service-description"
        dangerouslySetInnerHTML={{ __html: service?.description || "" }}
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
        <img className="arrow-img" src="/arrow.svg" alt="Arrow Image" />
      </div>
    </div>
  );
};

export default ServiceHero;
