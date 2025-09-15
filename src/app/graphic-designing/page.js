import Faqs from "@/components/Faqs/Faqs";
import DesginProcess from "@/components/GraphicDesgining/DesginProcess";
import GraphicHero from "@/components/GraphicDesgining/GraphicHero";
import Testimonal from "@/components/Testimonal";
import WeBring from "@/components/WeBring/WeBring";

export const metadata = {
  title: "Creative Services | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};
const faqs = {
  title: "Frequently Asked Question about Graphic Designing",
  description:
    "Our graphic design FAQs help you understand how clear and creative visuals create trust, shape identity, and turn viewers into customers. You need professional graphic design services to stand out in a busy market. DigitalAura offers custom graphic design solutions that match your business goals. Every design boosts your presence and supports growth.",
  questions: [
    {
      question:
        "What role does graphic design play in building a brand identity?",
      answer:
        "Graphic design gives your brand a face. Colors, fonts, and layouts create recognition. A strong design sets you apart from others. Digital Aura helps you build an identity that people remember.",
    },
    {
      question:
        "How does Digital Aura design graphics that fit my business style?",
      answer:
        "Digital Aura studies your brand before starting. The team looks at your goals, industry, and audience. Every design matches your tone and vision. You get graphics that reflect your true brand style.",
    },
    {
      question: "Can graphic design really impact sales and conversions?",
      answer:
        "Good design attracts buyers easily. Clear product visuals and strong marketing graphics make people take action. Customers stay longer when they see professional designs. We help you to increase sales with visuals that convert.",
    },
    {
      question: "How do you make sure designs stand out in a crowded market?",
      answer:
        "Original designs grab more attention from people. We avoid generic templates and create fresh visuals. Every graphic highlights your strengths. The unique designs help you to rise above the competitors.",
    },
    {
      question: "What is included in a complete graphic design package?",
      answer:
        "A full package covers the logos, branding kits, social media posts, and print designs. You also get website graphics and business cards. We give you a package that fits your needs and budget.",
    },
    {
      question: "Why should I invest in custom design instead of templates?",
      answer:
        "Templates look common and lack identity. Custom designs give you originality and strength. People remember unique visuals. Digital Aura creates designs that make your brand stand out.",
    },
    {
      question: "How do you ensure designs work across different platforms?",
      answer:
        "Designs must look sharp everywhere. Digital Aura provides files that fit websites, social media, and print. Your visuals maintain quality across all platforms. You get graphics ready for any use.",
    },
    {
      question: "What industries does Digital Aura serve with graphic design?",
      answer:
        "Digital Aura works with retail, real estate, tech, education, and more. The team adjusts designs to your industry tone. Every graphic reflects the style your market demands.",
    },
    {
      question: "Can I hire Digital Aura for long-term graphic design support?",
      answer:
        "Yes. Many brands choose ongoing support for fresh designs. Digital Aura offers monthly plans to keep your content updated. You stay consistent without worrying about design gaps.",
    },
  ],
};

const statsDesc = {
  desc: "Our graphic design solution gives your brand a strong place in the market. Each visual tells your story, increases trust, and attracts the good people. You need the best professional graphic design services to make logos, brand materials, and digital assets for you. The strong visuals keep your brand professional and help you connect with your customers.",
};
const weBringSections = [
  {
    heading: "We Bring Creative Design That Builds Your Brand",
    paragraphs: [
      "Digital Aura creates custom graphic design solutions that match your business goals. Our designers focus on building visuals that look creative and professional. Every design supports your message and helps your brand stand out in a crowded market. Strong graphics improve visibility, bring higher engagement, and give your audience a reason to trust your brand.",
      "You get a complete design approach that covers social media graphics, brand identity, and marketing materials. We ensure your business gains a powerful image that delivers long-term results. Digital Aura makes sure every design works as a tool for growth, recognition, and success.",
    ],
  },
];
const page = () => {
  return (
    <div>
      <GraphicHero />
      <DesginProcess />
      <Faqs data={faqs} />
      <Testimonal />
      <WeBring statsDesc={statsDesc} data={weBringSections} />
    </div>
  );
};

export default page;
