import React from "react";
import "./Ranking.css";
import { FiArrowUpRight } from "react-icons/fi";
import Button from "./Buttons/Button";
export default function Ranking() {
  return (
    <section className="ranking-section">
      {/* Left content */}
      <div className="text-content">
        <h2 className="ranking-heading">
          Amet minim mollit non deserunt ullamco
        </h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam consequat sunt nostrud
          amet. Amet minim mollit non deserunt ullamco
        </p>

        {/* Buttons */}
        <div className="buttons-container">
          <Button variant="filled">Start Ranking Now</Button>
          <Button variant="outline">Contact Now</Button>
        </div>
      </div>

      {/* Right image */}
      <div className="image-content">
        <img
          src="/business-graphics-presentation-illustration.png"
          alt="Business Growth Illustration"
        />
      </div>
    </section>
  );
}
