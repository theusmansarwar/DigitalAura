"use client";
import React from "react";
import "./Serve.css";
import Button2 from "./Buttons/Button2";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const services = [
  {
    id: 1,
    title: "Social Media Marketing",
    description:
      "We help your brand reach the audience on famous platforms. The attention is on building engagement, loyalty, and sales. Digital Aura makes sure your social media grows with real impact from creative posts to community support.",
    icon: "/service-icon11.svg.png",
    number: "01",
    slug: "social-media-marketing",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Our SEO services improve visibility and bring higher search rankings. We work on your website, content, and backlinks using trusted methods. The goal is steady organic traffic that brings long-term growth.",
    icon: "/service-icon11.svg.png",
    number: "02",
    slug: "testing-service",
  },
  {
    id: 3,
    title: "YouTube Automation",
    description:
      "Grow your YouTube channel without stress. You get content planning, scriptwriting, video editing, thumbnail design, SEO, and publishing done professionally. Each video reaches the right audience and increases watch time.",
    icon: "/service-icon11.svg.png",
    number: "03",
    slug: "youtube-automation",
  },
  {
    id: 4,
    title: "Branding & Web Design",
    description:
      "Your brand identity shapes how people see your business online. We create modern designs and websites that inspire trust. The design stays simple and easy to use. It supports your business growth and makes your brand professional. ",
    icon: "/service-icon11.svg.png",
    number: "04",
    slug: "graphic-designing",
  },
];
const Serve = () => {
  const router = useRouter();
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
              <svg
                viewBox="0 0 300 300"
                width="300"
                height="300"
                className="rotating-text"
              >
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
                    - Digital Aura - Digital Aura - Digital Aura - Digital Aura
                    - Digital Aura - Digital Aura - Digital Aura -
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
                <div className="service-icon-circle">
                  <img src={service.icon}></img>
                </div>
                <span className="service-number">{service.number}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>

              <button
                className="learn-more"
                onClick={() => {
                  router.push(`/services/${service.slug}`);
                }}
              >
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
