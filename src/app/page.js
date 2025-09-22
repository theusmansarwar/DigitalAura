import Faqs from "@/components/Faqs/Faqs";
import Featured from "@/components/Featured/Featured";
import LatestBlogs2 from "@/components/latestBlogs/LatestBlogs2";
import Serve from "@/components/HomeServices/Serve";
import SmartStrategy from "@/components/SmartStrategy/SmartStrategy";
import Testimonal from "@/components/testimonials/Testimonal";
import Welcome from "@/components/Welcome/Welcome";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import MarketingSolutions from "@/components/MarketingSolutions/MarketingSolutions";

export const metadata = {
  title: "Digital Aura",
  description:
    "DigitalAura offers SEO, PPC, branding, social media, and YouTube automation to help your business gain visibility, leads, and long-term growth.",
};
const faqs = {
  title: "Frequently Asked Questions",
  description:
    "You may have questions about how Digital Aura helps your brand grow online. Our FAQ section gives you clear answers so you know exactly what to expect. Each answer is simple, easy to follow, and focused on helping you understand our services better.",
  questions: [
    {
      question: "What digital marketing services does DigitalAura offer?",
      answer:
        "DigitalAura gives you a full range of digital marketing services. You get SEO to improve your rankings, and social media marketing. We create awareness, PPC ads to drive sales, branding to shape your identity, and web design for your online presence",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term process to improve the results. Most businesses see progress in 3 to 6 months. The speed depends on your industry, competition, and keywords.",
    },
    {
      question: "Can search engine rankings be guaranteed with SEO?",
      answer:
        "No one can promise the top spot on search engines. Rankings depend on search engines, not agencies. .",
    },
    {
      question:
        "Does DigitalAura provide social media marketing for global clients?",
      answer:
        "Yes, we support businesses in different regions. Our campaigns reach the right audience, whether they are near or far. We design posts, guide communities, and build trust that leads to growth.",
    },
    {
      question: "How does PPC help in business growth?",
      answer:
        "PPC gives quick results. Your ads show up right away, and people see your business instantly. A smart PPC campaign can bring you leads, increase sales, and give better ROI than many traditional ads. ",
    },
    {
      question: "Why choose DigitalAura for digital marketing?",
      answer:
        "You get more than just services. You get a partner that listens, understands, and acts. We bring creative designs, fresh strategies, and data that guide real decisions. We make sure your brand stands out online and keeps growing.",
    },
    {
      question: "Does DigitalAura provide YouTube channel management?",
      answer:
        "Yes, we offer full YouTube automation, including content planning, scriptwriting, video editing, thumbnail design, SEO, and publishing. Your channel grows efficiently while saving time.",
    },
    {
      question: "How can YouTube automation help my channel grow?",
      answer:
        "You gain more visibility, higher watch time, and loyal subscribers. Each video reaches the right audience, boosting engagement and turning your channel into a reliable growth and income source.",
    },
    {
      question: "How is the success of a campaign measured?",
      answer:
        "We measure success with clear numbers. You see traffic growth, keyword rankings, social media engagement, leads, and ROI. Reports are simple and easy to read. You always know how your campaign is performing.",
    },
    {
      question: "What budget is needed for online marketing?",
      answer:
        "The cost of digital marketing depends on your goals. Small campaigns need less, while bigger goals require more budget. Audience size and competitors also affect costs. PlutoSec offers flexible packages for every business. You stay in control of your budget. We focus on delivering the best results for your investment.",
    },
  ],
};
const page = () => {
  return (
    <div>
      <Featured />
      <Welcome />
      <Serve />
      <SmartStrategy />
      <MarketingSolutions />
      <Testimonal />
      <Faqs data={faqs} />
      <LatestBlogs2 />
      <WhyChoose />
    </div>
  );
};

export default page;
