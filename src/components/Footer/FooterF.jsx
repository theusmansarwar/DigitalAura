"use client";
import React from "react";
import "./FooterF.css";
import { FaInstagram } from "react-icons/fa";
import { TbBrandLinkedin } from "react-icons/tb";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdEmail, MdPhone } from "react-icons/md";
import { TiLocation, TiSocialFacebook } from "react-icons/ti";
import { useRouter } from "next/navigation";

const FooterF = () => {
  const router = useRouter();

  const aboutLinks = [
    { label: "Our Services", slug: "/services" },
    { label: "Our Blogs", slug: "/blogs" },
    { label: "About Us", slug: "/about-us" },
    { label: "Contact Us", slug: "/contact-us" },
    { label: "Careers", slug: "/career" },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-col about">
          <div className="logo">
            <img src="/logo.svg" alt="Digital Aura" />
          </div>
          <p>
            Digital Aura is a creative digital solutions company based in Malmö,
            Sweden. We specialize in building strategies that drive growth,
            enhance digital presence, and deliver measurable results for brands
            worldwide.
          </p>
          <div className="social-icons">
            <a
              href="https://facebook.com/share/1CdEhnbb42"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <TiSocialFacebook />
            </a>

            <a
              href="https://instagram.com/digitalaura8"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/company/thedigitalaura"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <TbBrandLinkedin />
            </a>

            <a
              href="https://youtube.com/@DigitalAura-h2o"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-container"
            >
              <AiOutlineYoutube />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          {/* About Links */}
          <div className="footer-col links">
            <h4>About Link</h4>
            <ul>
              {aboutLinks.map((link, i) => (
                <li
                  key={i}
                  onClick={() => {
                    router.push(`${link.slug}`);
                  }}
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="footer-col contact">
            <h4>Get in touch</h4>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@digitalaura.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail /> info@digitalaura.se
            </a>
            <a
              href="https://share.google/DDk8VxJU7znODpsvA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TiLocation /> Kronetorpsgatan 86A 212 27 Malmö, Sweden
            </a>
            <a href="tel:46763177364">
              <MdPhone /> +46 763177364
            </a>
          </div>

          {/* Newsletter */}
          <div className="footer-col newsletter">
            <h4>Subscribe Our Newsletter</h4>
            <div className="newsletter-box">
              <input type="email" placeholder="Enter Your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>©Copyright 2025. All rights reserved</p>
        <div className="footer-links">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterF;
