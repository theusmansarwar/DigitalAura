"use client";
import React, { useState } from "react";
import "./Header.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaAngleDown, FaArrowRight, FaBars } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div>
      {/* Top Navigation */}
      <div className="nav-area">
        <img
          className="logo"
          src="/DigitalAuraLogo.png"
          alt="Digital Aura"
          onClick={() => {
            router.push("/");
          }}
        />
        <div className="nav-area-right">
          <div className="contact-info">
            <a href="tel:+923001234567">
              <BiSolidPhoneCall /> +92 300 123 4567
            </a>
            <a href="mailto:info@digitalaura.se">
              <MdEmail /> info@digitalaura.se
            </a>
          </div>

          <div className="nav-buttons">
            <button
              className="schedule-btn"
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Schedule Call <FaArrowRight />
            </button>
            <span
              className="quote-link"
              onClick={() => {
                router.push("/contact-us");
              }}
            >
              Get a Quote
            </span>
          </div>
        </div>
      </div>

      <div className="header-area">
        <ul className="nav-links">
          <li
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </li>
          {/* <li>
            Services <FaAngleDown />
          </li> */}
          <li
            onClick={() => {
              router.push("/blogs");
            }}
          >
            Blog
          </li>

          <li
            onClick={() => {
              router.push("/about-us");
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              router.push("/career");
            }}
          >
            Careers
          </li>
        </ul>

        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      {/* ✅ Mobile Header */}
      <div className="mobile-header">
        <img className="logo" src="/DigitalAuraLogo.png" alt="Digital Aura" />
        <button className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <ul>
            <li
              onClick={() => {
                router.push("/");
              }}
            >
              Home
            </li>
            <li onClick={toggleServices}>
              Services <FaAngleDown />
              {isServicesOpen && (
                <ul className="dropdown">
                  <li
                    onClick={() => {
                      router.push("/social-media-marketing");
                    }}
                  >
                    Social Media Marketing
                  </li>
                  <li
                    onClick={() => {
                      router.push("/graphic-designing");
                    }}
                  >
                    Graphic Designing
                  </li>
                  <li
                    onClick={() => {
                      router.push("/youtube-automation");
                    }}
                  >
                    Youtube Automation
                  </li>
                </ul>
              )}
            </li>
            <li
              onClick={() => {
                router.push("/blogs");
              }}
            >
              Blog
            </li>
            <li
              onClick={() => {
                router.push("/career");
              }}
            >
              Careers
            </li>
            <li
              onClick={() => {
                router.push("/about-us");
              }}
            >
              About
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
