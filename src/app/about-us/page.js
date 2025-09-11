import React from "react";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactUs from "../components/Contact/ContactUs";
import JoinUs from "../components/career/JoinUs";
import AboutProjects from "../components/Aboutus/AboutProjects";
import Digital from "../components/DigitalAutomation/Digital";
import Aura from "../components/DigitalAura/Aura";


export const metadata = {
  title: "Creative Services | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};

const page = () => {
  return (
    <div>
      <AboutProjects/>
     <Digital/>
     <Aura/>
      </div>
  );
};

export default page;
