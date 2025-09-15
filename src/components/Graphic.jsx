import React from "react";
import "./Graphic.css";
import { FiArrowUpRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
export default function Graphic() {
  return (
    <div className="graphic-section">
      {/* Left Side Image */}
      <div className="graphic-image">
        <img 
          src="/graphic-bg.png"
          alt="Illustration"
        />
      </div>

      {/* Right Side Content */}
      <div className="graphic-content">
        <h2>Amet minim mollit non deserunt ullamco</h2>

        <ul>
          <li>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </li>
          <li>
            Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
            non deserunt ullamco est sit aliqua dolor do amet sint.
          </li>
          <li>
            Velit officia consequat duis enim velit mollit. Exercitation veniam
            consequat sunt nostrud amet.
          </li>
          <li>
            Amet minim mollit non deserunt ullamco Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet.
          </li>
        </ul>

        {/* Buttons */}
        <div className="buttons-container">
          <button className="black-filled">
            Start Ranking Now{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
          <button className="black-outline">
            Contact Now{" "}
            <span>
              <FaArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
