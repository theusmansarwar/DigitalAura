import StatsSection from "@/components/Aboutus/StatsSection";
import Aura from "@/components/Aboutus/Aura";
import Digital from "@/components/Aboutus/Digital";
import React from "react";
import OurMission from "@/components/Aboutus/OurMission";
import OurValues from "@/components/Aboutus/OurValues";
import Button2 from "@/components/Buttons/Button2";

export const metadata = {
  title: "About Us | Digital Aura",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt accusamus, architecto aperiam ullam earum.",
};

const desc = [
  "Digital Aura is a global creative and growth agency. We help creators, brands, and businesses grow with confidence. Our mission is clear. We build strong digital presences that inspire people and create real results. We specialize in YouTube automation, digital marketing, design, and digital product development. Each service is designed to provide you with growth, trust, and visibility.",
  "Our team believes in fresh ideas and smart action. You get creative support that makes your brand stand out. Every project reflects our focus on quality and long-term impact. YouTube automation is one of our top services. We handle channel strategy, scriptwriting, editing, SEO, and publishing.",
  "Digital marketing is another key service. We design campaigns that connect you with people who matter. Paid ads, social media, and SEO increase your reach and drive conversions. Each plan is built on insight and clear results. Design shapes how people see your brand. Strong logos, branding kits, and visual assets build authority and trust. Your business looks professional, and your presence gains more attention.",
  "We also create digital products that add value. eBooks, templates, and toolkits act as both learning resources and income streams. Each product gives you growth tools and new opportunities. At Digital Aura, your vision guides our process. Our goal is simple. We help you grow stronger, reach wider, and achieve lasting success.",
];
const statsDesc = {
  desc: " Our record shows the value we deliver. Every project reflect dedication, smart strategy, and measurable results. Clients trust us because we prioritize long-term growth over short-term gains. Digital Aura continues to create digital solutions that keep brands strong, visible, and successful in a fast-changing market.",
};
const page = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <Button2 label={"About Us"} data={desc} />
      <StatsSection data={statsDesc.desc} />
      <Digital />
      <OurValues />
      <OurMission />
      <Aura />
    </div>
  );
};

export default page;
