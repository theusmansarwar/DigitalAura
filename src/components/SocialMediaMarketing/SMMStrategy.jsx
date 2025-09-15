import React from "react";
import "./SMMStrategy.css";
import Button from "../Buttons/Button";
const SMMStrategy = () => {
  return (
    <div className="smm-strategy">
      {/* left */}
      <div className="left">
        <h2 className="section-heading">SMM – Strategy Points</h2>
        <p className="sub-heading">
          From clicks to customers, smarter every step.
        </p>
        <img src="" alt="SMM Strategy" />
      </div>
      {/* right */}
      <div className="right">
        <div className="top-card">
          <h3>OUR STRATEGY</h3>
          <div className="point-parent">
            <p className="point">
              <span className="purple"></span>Lorem ipsum dolor sit
            </p>
            <p className="point">
              <span className="blue"></span>Lorem ipsum dolor sit
            </p>
            <p className="point">
              <span className="light-blue"></span>Lorem ipsum dolor sit
            </p>
            <p className="point">
              <span className="green"></span>Lorem ipsum dolor sit
            </p>
            <p className="point">
              <span className="light-green"></span>Lorem ipsum dolor sit
            </p>
          </div>
          <p>
            Lorem, ipsum dolor sit amet elit adipisicing .Ex consectetur fuga
            quae nesciunt, labore dolore in deserunt architecto tenetur libero
            reprehenderit.
          </p>
          <p>
           Lorem, ipsum dolor sit amet elit adipisicing .Ex consectetur fuga
            quae nesciunt, labore dolore in deserunt architecto tenetur libero
            reprehenderit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet elit adipisicing .Ex consectetur fuga
            quae nesciunt, labore dolore in deserunt architecto tenetur libero
            reprehenderit.
          </p>
        </div>
        <div className="buttons-container">
          <Button variant="filled">Start Ranking Now</Button>
          <Button variant="outline">Contact Now</Button>
        </div>
      </div>
    </div>
  );
};

export default SMMStrategy;
