"use client";
import React from "react";
import "./SMMHero.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";

const SMMHero = () => {
  const router = useRouter();
  return (
    <div className="smm-hero">
      <h2 className="section-heading">Social Media Marketing</h2>
      <p>
        Digital Aura creates campaigns that blend creativity with precision. We
        study market trends and understand how audiences behave. Every message
        is shaped to connect instantly with the right people. Posts, stories,
        and videos are made to spark conversations and drive action. We choose
        the platforms that matter most to your brand so every move brings
        measurable results.
      </p>
      <p>
        Data shapes every step we take. We track the engagement, reach, and
        conversions to refine strategies. Insights show the best performers and
        what falls short. Your campaigns adapt to stay ahead of shifts in
        audience demand. This approach helps your social media presence grow
        stronger each month.
      </p>
      <p>
        Strong results come through teamwork. We work closely with your team to
        reflect the right brand voice. Every campaign matches your goals, from
        growing awareness to generating loyal customers. You gain strategies
        that are focused, professional, and built to last.
      </p>
      <div className="buttons-container">
        <img className="arrow-img" src="/left-arrow.svg" alt="Arrow Image" />
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
      </div>
    </div>
  );
};

export default SMMHero;
