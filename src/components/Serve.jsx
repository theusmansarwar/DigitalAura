import React from "react";
import "./Serve.css";
import Button2 from "./Buttons/Button2";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: "/service-icon11.svg.png",
    number: "01",
  },
  {
    id: 2,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: "/service-icon11.svg.png",
    number: "02",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: "/service-icon11.svg.png",
    number: "03",
  },
  {
    id: 4,
    title: "Social Media Marketing",
    description:
      "Engage with your audience, build brand loyalty, drive conversions through strategic social media marketing. From content creation and community management.",
    icon: "/service-icon11.svg.png",
    number: "04",
  },
];
const Serve = () => {
  return (
    <div className="serve">
      <Button2 label="What we serve" />
      <div className="services-section">
        <h2 className="serve-title">
          Services Donec efficitur. laoreet sit Nunc nec varius nec
        </h2>
        <div className="back">
          <div className="back1">
            <div className="back2">
              <svg viewBox="0 0 300 300" width="300" height="300">
                <defs>
                  <path
                    id="circlePath"
                    d="M 150,150
               m -120,0
               a 120,120 0 1,1 240,0
               a 120,120 0 1,1 -240,0"
                  />
                </defs>
                <text fill="white" fontSize="18">
                  <textPath href="#circlePath" startOffset="0%">
                    -Digital Aura - Digital Aura - Digital Aura - Digital Aura -
                    Digital Aura - Digital Aura - Digital Aura
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-card-header">
                <div className="icon-circle">
                  <img src={service.icon}></img>
                </div>
                <span className="service-number">{service.number}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <button className="learn-more">
                Learn More <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Serve;
