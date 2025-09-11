import React from "react";
import "./Ranking.css";
import { FiArrowUpRight } from "react-icons/fi";
export default function Ranking() {
  return (
    <section className="ranking-section">
      {/* Left content */}
      <div className="text-content">
        <h2>Amet minim mollit non deserunt ullamco</h2>

        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
          enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco
        </p>

        {/* Buttons */}
        <div className="button-group">
          <a href="#" className="btnn btn-primary">
            Start Ranking Now <span className="arrow1"><FiArrowUpRight/></span>
          </a>
          <a href="#" className="btnn btn-outline">
            Contact Now <span className="arrow2"><FiArrowUpRight/></span>
          </a>
        </div>
      </div>

      {/* Right image */}
      <div className="image-content">
        <img
          src='/business-graphics-presentation-illustration.png'
          alt="Business Growth Illustration"
        />
      </div>
    </section>
  );
}
