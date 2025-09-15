  "use client";

import React from "react";
import "./DesginProcess.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";
const DesginProcess = () => {
  const router = useRouter();
  return (
    <div className="design-process">
      <h2 className="section-heading">DESIGN PROCESS</h2>
      <p>
        Every strong brand starts with a clear design process. At DigitalAura,
        we use proven methods to deliver creative results that connect with your
        audience. Each step is focused on quality, strategy, and your brand
        goals.
      </p>
      <img
        className="process-img"
        src="/design-process.png"
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
              </div>
    </div>
  );
};

export default DesginProcess;
