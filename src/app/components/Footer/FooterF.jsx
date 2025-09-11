
import React from 'react'
import './FooterF.css'

import { IoLogoFacebook } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";


const FooterF = () => {
  return (
    <div className='footer0'>
          <div class="area1">
        <div class="area1-left">

            <div className='auraImgg'>
            <p className='Dimg'> <img src='/aura.jpg' alt=""/> Digital Aura</p>
            </div>

            <p>By optimizing content, leveraging
                relevant keywords, and adhering to
                best practices, businesses can secure
                prominent position (SEO)
            </p>
            <div class="images-1">
                <ul>
                    <li>
                        <IoLogoFacebook />
                    </li>

                    <li>
                        <FaInstagramSquare />
                    </li>
                    
                    <li>
                        <FaLinkedin />
                    </li>

                    <li>
                      <FaXTwitter />
                    </li>
                </ul>
            </div>
        </div>


        <div class="center-1">
            <p>About Link</p>
            <ul>
                <li>Our Blog</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Marketing</li>
                <li>Testimonials</li>
                <li>Contact Us</li>
            </ul>
        </div>

        <div class="center-2">
            <p className='get'>Get In touch</p>
                <ul>
                    <li>
                        <span> <CiMail /></span>
                        info@gmail.com
                    </li>

                    <li>
                        <span> <IoLocation /></span>
                        8708 Technology Forest
                                Pl Suite 125 -G, The
                                Woodlands, TX 773
                    </li>

                     <li>
                        <span><IoCallOutline /></span>
                        123-456-7890
                    </li>
                </ul>
            </div>


        <div class="right-1">
            <p class="heading">Subscribe our Newsletter</p>
            {/* <p class="email">Your Email</p> */}

            <div class="same-line">
                <input type="text" placeholder="Enter your email"/>
                <div class="button4">Subscribe</div>
            </div>



        </div>
    </div>

    <div class="footer">
        <div className='footer-1'>
        <p>ⓒCopyright 2025 . All rights reserved</p>
        </div>

    <div className='footer-2'>
        <ul>
            <li>
                Terms & Conditions
            </li>

            <li>
                Privacy Policy
            </li>
        </ul>
        </div>
    </div>
    </div>
  )
}

export default FooterF