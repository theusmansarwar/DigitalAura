import React from "react";
import "./YTAutomationHero.css";
import Button from "../Buttons/Button";
const YTAutomationHero = () => {
  return (
    <div className="yt-auto-hero">
      <h2 className="section-heading">YOUTUBE AUTOMATION</h2>
      <div className="hero-bottom">
        <div className="left">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ducimus eius ullam, porro minus molestiae iste eos est vitae neque!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            ipsa perspiciatis commodi nostrum adipisci ex porro rem illo? Ex,
            voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ducimus eius ullam, porro minus molestiae iste eos est vitae neque!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            ipsa perspiciatis commodi nostrum adipisci ex porro rem illo? Ex,
            voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ducimus eius ullam, porro minus molestiae iste eos est vitae neque!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            ipsa perspiciatis commodi nostrum adipisci ex porro rem illo? Ex,
            voluptatem.
          </p>
          <div className="buttons-container">
            <Button variant="filled">Start Ranking Now</Button>
            <Button variant="outline">Contact Now</Button>
            <img className="arrow-img" src="/arrow.svg" alt="Arrow Image" />
          </div>
        </div>
        <div className="right">
          <img
            className="hero-img"
            src="/yt-automation.png"
            alt="Youtube Automation"
          />
        </div>
      </div>
    </div>
  );
};

export default YTAutomationHero;
