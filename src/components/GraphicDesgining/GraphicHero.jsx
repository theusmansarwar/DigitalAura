import React from "react";
import "./GraphicHero.css";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Buttons/Button";
const GraphicHero = () => {
  return (
    <div className="graphic-hero">
      <h2 className="section-heading">GRAPHIC DESIGN</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        ducimus eius ullam, porro minus molestiae iste eos est vitae neque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, ipsa
        perspiciatis commodi nostrum adipisci ex porro rem illo? Ex, voluptatem.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
        ducimus eius ullam, porro minus molestiae iste eos est vitae neque!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima, ipsa
        perspiciatis commodi nostrum adipisci ex porro rem illo? Ex, voluptatem.
      </p>
      <img
        className="hero-img"
        src="/graphic-design.svg"
        alt="Graphic Design"
      />
      <div className="buttons-container">
        <Button variant="filled">Start Ranking Now</Button>
        <Button variant="outline">Contact Now</Button>
        <img className="arrow-img" src="/arrow.svg" alt="Arrow Image" />
      </div>
    </div>
  );
};

export default GraphicHero;
