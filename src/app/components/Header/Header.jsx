import React from 'react';
import './Header.css';
import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";

const Header = () => {
  return (
    <div>
      {/* Top Navigation */}
      <div className="nav-area">
        
          <img className="logo" src="/DigitalAuraLogo.png" alt="Digital Aura" />
          
       

        <div className="contact-info">
          <span><BiSolidPhoneCall /> +92 300 123 4567</span>
          <span><MdEmail />info@digitalaura.se</span>
        </div>

        <div className="nav-buttons">
          <button className="schedule-btn">Schedule Call →</button>
          <a href="#" className="quote-link">Get a Quote</a>
        </div>
      </div>

      <div className="header-area">
        <ul className="nav-links">
          <li>Home</li>
          <li>Services <FaAngleDown /></li>
          <li>Blog</li>
          <li>Pricing</li>
          <li>About</li>
        </ul>

        <div className="search-box">
            <FaSearch/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </div>
  );
};

export default Header;
