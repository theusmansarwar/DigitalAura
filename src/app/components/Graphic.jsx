import React from "react";
import "./Graphic.css";
import { FiArrowUpRight } from "react-icons/fi";
export default function Graphic() {
  return (
    <div className="hero-section">
      {/* Left Side Image */}
      <div className="hero-image">
        <img src='/full-shot-woman-reading-with-smartphone (2).png' alt="Illustration" />
      </div>
      <div className="midd">
        <img src='/Bg Overlay.png'></img>
      </div>
      {/* Right Side Content */}
      <div className="hero-content">
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
        <div className="button-group">
          <a href="#" className="btun btn-dark">
            Start Ranking Now <span className="arrow5">< FiArrowUpRight/></span>
          </a>
          <a href="#" className="btun btnn-outline">
            Contact Now <span className="arrow6">< FiArrowUpRight/></span>
          </a>
        </div>
      </div>
    </div>
  );
}
