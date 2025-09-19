"use client";
import React, { useState } from "react";
import "./Header.css";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaArrowRight, FaBars } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  //  Main nav links
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Blog", path: "/blogs" },
    { label: "About", path: "/about-us" },
    { label: "Careers", path: "/career" },
  ];

  //  Services dropdown
  const serviceLinks = [
    { label: "Social Media Marketing", path: "/social-media-marketing" },
    { label: "Graphic Designing", path: "/graphic-designing" },
    { label: "Youtube Automation", path: "/youtube-automation" },
  ];

  return (
    <div>
      {/* Top Navigation */}
      <div className="nav-area">
        <img
          className="logo"
          src="/logo.svg"
          alt="Digital Aura"
          onClick={() => router.push("/")}
        />
        <div className="nav-area-right">
          <div className="contact-info">
            <a href="tel:+46763177364 ">
              <BiSolidPhoneCall /> +46 763177364
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=info@digitalaura.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdEmail /> info@digitalaura.se
            </a>
          </div>

          <div className="nav-buttons">
            <button
              className="schedule-btn"
              onClick={() => router.push("/contact-us")}
            >
              Schedule Call <FaArrowRight />
            </button>
            <span
              className="quote-link"
              onClick={() => router.push("/contact-us")}
            >
              Get a Quote
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="header-area">
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.path} onClick={() => router.push(link.path)}>
              {link.label}
            </li>
          ))}
          <a
            className="store-link"
            href="https://digitalaura.lemonsqueezy.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Store
          </a>
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
            {navLinks.map((link) => (
              <li
                key={link.path}
                onClick={() => {
                  router.push(link.path);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link.label}
              </li>
            ))}
            <a
              className="store-link"
              href="https://digitalaura.lemonsqueezy.com/"
                 target="_blank"
              rel="noopener noreferrer"
            >
              Store
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
