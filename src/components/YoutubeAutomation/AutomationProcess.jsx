"use client";
import React from "react";

import "./AutomationProcess.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
const AutomationProcess = () => {
  const router = useRouter();
  return (
    <div className="automation-process">
      <h2 className="section-heading">How We Deliver</h2>
      <p>
        DigitalAura follows a proven complete process to grow and automate your
        YouTube channel. Our methods merge the powerful YouTube SEO strategies
        and monetization support. Each stage makes sure that your videos rank
        higher, reach the right viewers, and convert into good subscribers.
      </p>
      <img
        className="process-img"
        src="/automation-process.png"
        alt="Youtube Automation"
      />
      <p>
        DigitalAura delivers YouTube automation through a process built on
        clarity and results. Each stage focuses on growth, from research and
        optimization to community engagement and analytics. You increase the
        strategies to keep your channel visible, trusted, and profitable. Our
        approach ensures you reach good audiences, grow consistent traffic, and
        achieve long-term success.
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

export default AutomationProcess;
