import React from "react";
import "./Welcome.css";
import Button2 from "./Buttons/Button2";
import { FaArrowRight } from "react-icons/fa6";

const Welcome = () => {
  return (
    <div className="welcome">
      <Button2 label="Welcome to Digital Aura" />{" "}
      <h2 className="welcome-title">
        <span>Meet SEOC Your Trusted </span>
        <span>Digital Automation Partner</span>
      </h2>
      <div className="partner-section">
        {/* Left Side (Images) */}
        <div className="left">
          <div className="left-images">
            <img className="image1" src="/about-img5.png (2).png" alt="" />
            <img className="image2" src="/Group 72107.png" alt="" />
          </div>
          <div className="right-images">
            <img className="image3" src="/Group 72106.png" alt="" />
            <img className="image4" src="/about-img6.png.png" alt="" />
          </div>
        </div>

        {/* Right Side (Text + Progress + Button) */}
        <div className="right">
          <h3>
            <span>Best Experience &</span>
            <span> Professional Team To grow Your</span> Business
          </h3>

          <p>
            We're not just another agency – we're your digital growth partners.
            With years of industry experience and a passion for innovation, our
            team is dedicated to delivering measurable results propel your
            business forward.
          </p>

          {/* Progress Bars */}
          <div className="progress-group">
            <div className="progress-item">
              <div className="label">
                <span>Automation</span>
                <span>85%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "85%" }}></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="label">
                <span>Marketing Strategy</span>
                <span>95%</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "95%" }}></div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="button-parent">
            <button className="welcome-btn">
              Learn More <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
