  "use client";
import React from "react";
import "./Digital.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
const Digital = () => {
  const router = useRouter();
  return (
    <div className="trusted-partner">
      <div className="trusted-card">
        <h2 className="trusted-heading">
          Meet Digital Aura – Your Trusted Digital Automation Partner
        </h2>
        <p className="para">
          Digital Aura helps you build a strong digital presence. We create
          strategies that save your time and bring real growth. Our focus stays
          on automation, smart tools, and results that you can measure. We
          design systems that make digital work simple. From YouTube automation
          to streamlined campaigns, every process runs smoothly. You focus on
          your vision, and we handle the tasks that slow you down.
        </p>

        <p className="para">
          Our services cover more than automation. We provide SEO, PPC, social
          media, and complete branding support. Each service connects with the
          other to give you one strong digital solution.
        </p>

        <p className="para">
          We believe in work that mixes creativity with data. Every project aims
          to reach the right audience and show progress you can track. You see
          clear reports that build trust at every step.
        </p>

        <p className="para">
          Our goal is long-term success for your business. We bring solutions
          that are simple, powerful, and made to perform in a fast digital
          world. Digital Aura stands as your partner for growth, trust, and
          results.
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
    </div>
  );
};

export default Digital;
