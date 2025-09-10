import React from "react";
import GraphicHero from "../components/GraphicDesgining/GraphicHero";
import DesginProcess from "../components/GraphicDesgining/DesginProcess";
import Faqs from "../components/Faqs/Faqs";

export const metadata = {
  title: "Creative Services | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};
const faqs = {
  title: "Frequently Asked Question about Social Media Marketing",
  description:
    "You can return any item within 30 days of purchase as long as it’s in its original condition with tags still attached. Simply contact our customer service team, and they will guide you through the process. Please note that certain items, such as swimwear and final sale items, are non-returnable.",
  questions: [
    {
      question: "What services do we provide to support your business growth?",
      answer:
        "Zemalt provides all digital marketing solutions in one place. Our services include SEO, PPC ads, social media management, content writing, web design, and branding. Each service is built to improve visibility and bring in more customers.",
    },
    {
      question: "Why is SEO audit important before starting campaigns?",
      answer:
        "An SEO audit shows what holds a website back. Zemalt checks site speed, broken links, mobile use, and keyword gaps. You get a clear plan with fixes that boost performance. Strong audits lead to higher rankings and more traffic.",
    },
    {
      question: "How can Zemalt help e-commerce stores grow sales?",
      answer:
        "We optimize product pages, categories, and content to rank higher. Customers find your store faster and buy with ease. Zemalt improves visibility, increases conversions, and drives steady growth. Online shops achieve long-term success through our strategies.",
    },
    {
      question: "How do we measure digital marketing success?",
      answer:
        "We track every step with data. Reports show rankings, traffic, leads, and sales clearly. You always know what works and where growth comes from. Zemalt uses transparent reporting so you can trust the results.",
    },
    {
      question: "How fast can Zemalt deliver results?",
      answer:
        "Some services, like ads, bring traffic and leads within days. SEO builds long-term success and usually shows results within weeks. Zemalt focuses on both quick wins and steady growth. Businesses see progress faster with our proven methods.",
    },
    {
      question: "Why invest in digital marketing?",
      answer:
        "The competition online grows every day. Waiting gives rivals more space to take customers. Zemalt helps brands secure visibility, build authority, and gain trust today. Early action brings long-term growth and lasting market advantage.",
    },
    {
      question: "Why invest in digital marketing?",
      answer:
        "The competition online grows every day. Waiting gives rivals more space to take customers. Zemalt helps brands secure visibility, build authority, and gain trust today. Early action brings long-term growth and lasting market advantage.",
    },
  ],
};
const page = () => {
  return (
    <div>
      <GraphicHero />
      <DesginProcess />
      <Faqs data={faqs} />
    </div>
  );
};

export default page;
