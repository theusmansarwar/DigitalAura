"use client";
import React from "react";
import "./GraphicHero.css";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
const GraphicHero = () => {
  const router = useRouter();
  return (
    <div className="graphic-hero">
      <h2 className="section-heading">GRAPHIC DESIGN</h2>
      <p>
        DigitalAura transforms ideas into visuals that speak louder than words.
        Our graphic design services help your brand identity design, trust and
        remember. We create the brand logos, marketing designs, social media
        posts, and custom visuals for your needs.
      </p>
      <p>
        Our professional graphic design team makes your design creative and
        focused on your audience. Every design shows your brand voice and makes
        people remember you. You gain visuals that capture attention, foster
        trust, and provide your business with long-term value.
      </p>
      <img
        className="graphic-hero-img"
        src="/graphic-design.svg"
        alt="Graphic Design"
      />
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
        <img className="arrow-img" src="/arrow.svg" alt="Arrow Image" />
      </div>
    </div>
  );
};

export default GraphicHero;
