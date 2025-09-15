import Button2 from "@/components/Buttons/Button2";
import Faqs from "@/components/Faqs/Faqs";
import SMMHero from "@/components/SocialMediaMarketing/SMMHero";
import SMMStrategy from "@/components/SocialMediaMarketing/SMMStrategy";
import Testimonal from "@/components/Testimonal";
import WeBring from "@/components/WeBring/WeBring";

export const metadata = {
  title: "Socail Media Marketing | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};
const faqs = {
  title: "Frequently Asked Question about Social Media Marketing",
  description:
    "Social media marketing can feel confusing when you are not sure where to start. Our FAQ section clears common doubts and helps you understand how DigitalAura grows your online presence. You will find answers about strategies, platforms, posting schedules, and results so you know exactly how it works for your business..",
  questions: [
    {
      question: "How Does Social Media Marketing Help My Business?",
      answer:
        "A good strategy is to invest your brand effort in front of the right people. You attract followers who match your goals. Campaigns bring engagement and turn interest into sales. DigitalAura builds plans that drive results step by step.",
    },
    {
      question: "How Does DigitalAura Grow My Brand Online?",
      answer:
        "Brand awareness grows when people see your business often. Creative posts and targeted ads increase your reach. DigitalAura makes your brand easy to notice and easy to trust. You stand out in a crowded market.",
    },
    {
      question: "Which Social Media Platforms Work Best for My Business?",
      answer:
        "In most cases, each platform serves a different purpose. Facebook builds communities. Instagram connects through visuals. LinkedIn strengthens business networks. TikTok and YouTube expand reach with video. DigitalAura helps you focus on where your brand gains the most.",
    },
    {
      question: "How Can Content Marketing Get More Leads?",
      answer:
        "In many ways, strong content captures attention. Post reels and videos make people interact. DigitalAura builds messages that spark action. You get more leads and stronger connections with your audience.",
    },
    {
      question: "What Campaigns Give the Best ROI?",
      answer:
        "In fact, the right mix creates the best return. Paid ads deliver quick results. Influencer partnerships add trust. Organic campaigns grow their reach over time. DigitalAura combines them to maximize your ROI.",
    },
    {
      question: "How Often Should I Post on Social Media?",
      answer:
        "Consistent posting builds growth. Your audience remembers your brand when you stay active. DigitalAura sets posting plans that keep engagement steady. Regular activity turns followers into loyal customers.",
    },
    {
      question: "Can I Track My Social Media Results?",
      answer:
        "Clicks, likes, shares, and sales appear in detailed reports. DigitalAura uses analytics to show what works. You make decisions based on clear proof.",
    },
    {
      question: "How Does DigitalAura Build Loyal Followers?",
      answer:
        "Trust grows through active connection. Interactive posts invite responses. Fast replies keep your audience engaged. Over time, followers become loyal supporters of your brand.",
    },
    {
      question: "What Is Organic Reach in Social Media?",
      answer:
        "In basic terms, organic reach gives free visibility. Strong posts spread naturally across platforms. DigitalAura improves your content so more people see it. Paid ads then add extra speed to your growth.",
    },
    {
      question: "How Long Until I See Results?",
      answer:
        "In most cases, results start within weeks. You notice more engagement and steady growth in followers. Sales increase as campaigns continue. DigitalAura sets timelines that match your business goals.",
    },
    {
      question: "Can Small Businesses Use DigitalAura’s Services?",
      answer:
        "Small businesses can grow fast online. Targeted campaigns focus on the right local audience. DigitalAura builds cost-friendly plans that fit your budget. You gain lead awareness and steady digital growth.",
    },
    {
      question: "How Does DigitalAura Keep My Brand Consistent?",
      answer:
        "Consistency makes your brand stronger. Posts, ads, and stories match the same voice. DigitalAura aligns content across every platform. You build recognition and trust in every interaction.",
    },
  ],
};

const statsDesc = {
  desc: " DigitalAura has built a strong reputation in social media marketing. We help businesses grow their digital brand presence. You generate leads and engage your audience with real impact. Every strategy stays focused on your goals. Data guides each decision to maximize ROI. Our methods keep your campaigns clear and effective. Our experience and track record prove our success. Your business gains measurable results and long-term digital influence.",
};
const weBringSections = [
  {
    heading: "How Can DigitalAura Combine Intelligence and Mindset?",
    paragraphs: [
      "DigitalAura uses smart strategy and creative ideas to deliver strong social media marketing results. Each campaign engages your audience and builds trust. You gain leads that can be measured. Our team uses data and fresh ideas to grow your brand on every platform. You get consistent messaging and more visibility. Campaigns turn followers into loyal customers.",
      "DigitalAura helps your business grow for the long term. You build stronger digital influence. You also gain a clear edge over competitors.",
    ],
  },
];

const page = () => {
  return (
    <div>
      <Button2 label={"Services"} />
      <SMMHero />
      <SMMStrategy />
      <Faqs data={faqs} />
      <Testimonal />
      <WeBring statsDesc={statsDesc} data={weBringSections} />
    </div>
  );
};

export default page;
