"use client";
import React from "react";
import "./YTAutomationHero.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
const YTAutomationHero = () => {
  const router = useRouter();
  return (
    <div className="yt-auto-hero">
      <h2 className="section-heading">YOUTUBE AUTOMATION</h2>
      <div className="hero-bottom">
        <div className="left">
          <p>
            DigitalAura turns YouTube automation into a simple yet powerful
            growth system. Our strategies help you acquire genuine subscribers,
            enhance video rankings, and connect with the ideal audience. You
            focus on content creation, and we handle the channel growth with
            proven methods.
          </p>
          <p>
            Our team gives you complete support with keyword research, YouTube
            SEO, content planning, and full channel optimization. Each plan aims
            to increase visibility, grow engagement, and unlock monetization.
            Your videos appear in top search results, reach real viewers, and
            build strong authority in your niche.
          </p>
          <p>
            DigitalAura converts your YouTube channel into a source of traffic,
            leads, and income. We use creativity, data, and consistency to make
            your growth clear and measurable.
          </p>
          <div className="buttons-container">
            <Button
              variant="filled"
              onClick={() => {
                router.push("/services");
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
        <div className="right">
          <img
            className="yt-hero-img"
            src="/yt-automation.png"
            alt="Youtube Automation"
          />
        </div>
      </div>
    </div>
  );
};

export default YTAutomationHero;
