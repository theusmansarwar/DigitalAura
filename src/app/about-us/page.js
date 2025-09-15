import StatsSection from "@/components/Aboutus/StatsSection";
import Aura from "@/components/Aboutus/Aura";
import Digital from "@/components/Aboutus/Digital";
import React from "react";
import OurMission from "@/components/Aboutus/OurMission";
import OurValues from "@/components/Aboutus/OurValues";

export const metadata = {
  title: "Creative Services | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};

const page = () => {
  return (
    <div>
      <StatsSection />
      <Digital />
      <OurValues />
      <OurMission />
      <Aura />
    </div>
  );
};

export default page;
