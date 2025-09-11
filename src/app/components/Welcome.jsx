import React from "react";
import "./Welcome.css";
import Button from "./Button";

 const Welcome = () => {
  return (
    <div className="welcome">
        <Button label="Welcome to Digital Aura"/>
        <center> <h2>
          Meet SEOC Your Trusted <br /> Digital Automation Partner
        </h2></center>
    <div className="partner-section">
      {/* Left Side (Images) */}
      <div className="img">
      <div className="images">
        <div className="img-box">
          <img src='/about-img5.png (2).png' alt="Phone" />
          
        </div>
        <div className="img-box2">
             <img src='/Group 72106.png' alt="icon"/>
          
         
        </div>
      </div>
      <div className="images2">
        <div className="img-box3">
          <img src='/Group 72107.png' alt="Phone" />
          
        </div>
        <div className="img-box4">
             <img src='/about-img6.png.png' alt="icon"/>
          
         
        </div>
      </div>
      </div>

      {/* Right Side (Text + Progress + Button) */}
      <div className="content">
       

        <h3>
          Best Experience & Professional Team To grow Your Business
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
              <div
                className="progress-fill"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          <div className="progress-item">
            <div className="label">
              <span>Marketing Strategy</span>
              <span>95%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Button */}
        <a href="#" className="btn">
          Learn More ↗
        </a>
      </div>
    </div>
    </div>
  );
}
export default Welcome;