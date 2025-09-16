import Button2 from "@/components/Buttons/Button2";
import Faqs from "@/components/Faqs/Faqs";
import Testimonal from "@/components/Testimonal";
import WeBring from "@/components/WeBring/WeBring";
import AutomationProcess from "@/components/YoutubeAutomation/AutomationProcess";
import ThirdSection from "@/components/YoutubeAutomation/ThirdSection";
import YTAutomationHero from "@/components/YoutubeAutomation/YTAutomationHero";

export const metadata = {
  title: "Youtube Automation | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};
const faqs = {
  title: "Frequently Asked Question about Youtube Automation",
  description:
    "You may have questions before using YouTube automation. These answers explain how it works and why it helps your channel. The good system saves time, improves SEO, and increases real subscribers. You can learn how to get more viewers, rank higher, and earn more from your content.",
  questions: [
    {
      question: "How can YouTube automation help my channel?",
      answer:
        "Automation saves time and makes growth easier. It helps your videos reach the right people. You get more views, subscribers, and longer watch time. The system works without extra manual effort.",
    },
    {
      question: "Why should I use YouTube SEO?",
      answer:
        "SEO helps people find your videos. It makes your content appear in searches and suggested videos. Optimized titles, descriptions, and tags bring more viewers. Good SEO also builds trust and authority for your channel.",
    },
    {
      question: "How can I get more subscribers quickly?",
      answer:
        "You can get subscribers with smart SEO and good promotion. Clear titles and interesting videos make viewers come back. A simple plan builds trust and encourages people to subscribe. Regular effort grows your channel steadily.",
    },
    {
      question: "Why is growing my YouTube channel important for my business?",
      answer:
        "Growing your channel builds your brand and audience trust. It shows your business to more potential customers. More visibility supports sales and online presence. A bigger channel becomes a steady source of leads and influence.",
    },
    {
      question: "Can YouTube automation improve video ranking on YouTube?",
      answer:
        "Yes, automation improves video ranking with structured SEO and promotion. Your content appears higher in search results and suggested lists. More visibility leads to stronger engagement and longer watch times. ",
    },
    {
      question: "How does YouTube's monetization strategy work?",
      answer:
        "A monetization plan focuses on building watch hours and subscribers. You can earn from ads, brand deals, and sponsorships. A structured system ensures your revenue growth. It converts your channel into a reliable business asset.",
    },
    {
      question: "What makes DigitalAura different in YouTube automation services?",
      answer:
        "DigitalAura provides complete automation services tailored for measurable growth. You get full support in SEO, keyword research, and channel management. Each strategy is created to increase views, subscribers, and revenue. ",
    },
    {
      question: "How long does it take to see YouTube channel growth with DigitalAura?",
      answer:
        "You notice early results within weeks, but steady growth takes consistent effort. We build strategies that deliver long-term progress. Regular uploads, SEO, and smart promotion create lasting momentum. Your channel grows step by step with proven methods.",
    },
    {
      question: "Which tools does DigitalAura use for YouTube SEO and automation?",
      answer:
        "DigitalAura uses advanced keyword research tools, analytics, and competitor insights. These tools highlight the best keywords and show what content performs well. The data makes promotion sharper and more effective. Your channel gets stronger SEO and faster results.",
    },
    {
      question: "Can YouTube automation help small creators grow faster with DigitalAura?",
      answer:
        "Yes, DigitalAura helps small creators compete with larger channels. Automation pushes content to new viewers and builds a steady subscriber base. Small creators benefit from the same level of advanced tools and strategies. Growth becomes faster, safer, and more reliable.",
    },
    {
      question: "How does DigitalAura improve YouTube channel engagement?",
      answer:
        "DigitalAura makes sure your videos reach the right audience. Better visibility increases likes, comments, and shares. More engagement boosts ranking and builds a stronger community. Every step focuses on deeper audience connection and steady influence.",
    },
    {
      question: "Is YouTube automation safe for my channel?",
      answer:
        "Yes, when managed the right way, it is safe. Professional automation follows YouTube’s rules and avoids harmful shortcuts. Your channel stays secure and penalty-free. Safe methods ensure growth without putting your account at risk.",
    },
  ],
};
const statsDesc = {
  desc: "Our numbers show the strength of our work in digital marketing services. Each completed project proves our ability to deliver results across industries. Ongoing projects reflect the trust clients place in us for steady online business growth. We have earned the support of hundreds of happy clients and built a talented team that knows how to solve real challenges.",
};
const weBringSections = [
  {
    heading: "We bring intelligence and mindset together",
    paragraphs: [
      "DigitalAura combines sharp data analysis with creative thinking to design strategies that truly work. You see campaigns built on clear goals and tested methods. Each idea is shaped to connect with your audience and create measurable impact.",
      "We focus on long-term growth for every client. Our work strengthens brand presence, enhances trust, and generates steady revenue. You can get a digital partner that builds innovation with proven expertise. It keeps your business ahead in a competitive market.",
    ],
  },
];
const page = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <Button2 label={"Services"} />
      <YTAutomationHero />
      <AutomationProcess />
      <ThirdSection />
      <Faqs data={faqs} />
      <Testimonal />
      <WeBring statsDesc={statsDesc} data={weBringSections} />
    </div>
  );
};

export default page;
