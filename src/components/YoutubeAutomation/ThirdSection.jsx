"use client";
import React from "react";
import "./ThirdSection.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";

const ThirdSection = () => {
  const router = useRouter();
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
      <h2 className="section-heading">
        See the Power of YouTube Automation in Action
      </h2>
      <p>
        DigitalAura shows how YouTube channel growth works through automation.
        Your channel gains subscribers every day without extra work. Every video
        improves its video ranking, appears in suggested lists, and reaches your
        target audience. Our demo proves our
      </p>
      <p>
        YouTube SEO services bring results. Channels we manage saw doubled watch
        time, boosted engagement, and unlocked monetization. Your content steps
        into the spotlight. DigitalAura makes your growth process clear, strong,
        and built to last.
      </p>
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
      </div>
    </div>
  );
};

export default ThirdSection;
