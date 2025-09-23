"use client";
import React from "react";
import "./Featured.css";
import Button from "../Buttons/Button";
import { useRouter } from "next/navigation";

const Featured = () => {
  const router = useRouter();
  return (
    <>
      <section className="featured">
        {/* Left Content */}
        <div className="vertical-box">
          <div className="section-one-vert">
            <a
              className="featured-social-links"
              href="https://facebook.com/share/1CdEhnbb42"
              target="_blank"
              rel="noopener noreferrer"
            >
              fb
            </a>
            <a
              className="featured-social-links"
              href="https://instagram.com/digitalaura8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Insta
            </a>
            <a
              className="featured-social-links"
              href="https://linkedin.com/company/thedigitalaura"
              target="_blank"
              rel="noopener noreferrer"
            >
              in
            </a>
            <a
              className="featured-social-links"
              href="https://youtube.com/@DigitalAura-h2o"
              target="_blank"
              rel="noopener noreferrer"
            >
              yt
            </a>
          </div>

          <ul className="section-two-vert">
            <li
              onClick={() => {
                router.push("/services/social-media-marketing");
              }}
            >
              Marketing
            </li>
            <li
              onClick={() => {
                router.push("/services/website-designing");
              }}
            >
              Designing
            </li>
            <li
              onClick={() => {
                router.push("/services/youtube-automation");
              }}
            >
              Youtube
            </li>
          </ul>
        </div>
        <div className="featured-left">
          <p className="small-text">
            We help you get noticed with your Digital Aura
          </p>
          <h1 className="title">
            DIGITAL <br /> <span>MARKETING</span>
          </h1>

          <p className="desc">
            Digital Aura is a leading digital marketing agency that drives real
            business growth. We help brands build strong identities, grow on
            YouTube, increase visibility, and connect with their target
            audience. Our team blends ideas and data to create solutions that
            work. We manage search, social media, and paid campaigns to give
            your audience a smooth experience.
          </p>

          {/* Buttons */}
          <div className="buttons-container">
            <Button
              variant="filled"
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Contact Now
            </Button>
          </div>
          <p className="desc2">
            Our strategies help brands grow stronger online and turn
            opportunities into real results. Businesses trust us because we mix
            creativity, data, and smart ideas. We focus on lasting success, not
            quick fixes, so you see growth that stays.
          </p>
          {/* <div className="trusted-by-cont">
            <p className="trusted-by-heading">
              Trusted by <span>Top Global Brands</span>
            </p>
            <img src="/featured-arrow.svg" alt="Arrow Image" />
          </div> */}
        </div>

        {/* Right Image */}
        <div className="featured-right">
          <div className="eclips1">
            <div className="eclips2">
              <div className="eclips3"></div>
            </div>
          </div>
          <img src="/featured-person.png" alt="Person" className="hero-img" />
          <img src="featured0.svg" alt="icon0" className="featured0" />
          <img src="featured1.svg" alt="icon1" className="featured1" />
          <img src="featured2.svg" alt="icon2" className="featured2" />
          <img src="featured3.svg" alt="icon3" className="featured3" />
        </div>
      </section>

      {/* <div className="featured-bottom">
        <div className="featured-heading-section">
          <p>Our Esteemed </p>
          <p>Clients</p>
        </div>
        <div className="featured-logos-section">
          <img src="item1.png" alt="company1" />
          <img src="item2.png" alt="company2" />
          <img src="item3.png" alt="company3" />
          <img src="item4.png" alt="company4" />
        </div>
      </div> */}
    </>
  );
};

export default Featured;
