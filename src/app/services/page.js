import Faqs from "@/components/Faqs/Faqs";
import ServicesCards from "@/components/ServicesCards/ServicesCards";
import ThirdSection from "@/components/ServicePageTemplate/ThirdSection";

export const metadata = {
  title: "Services | Digital Aura",
  description:
    "Ready to scale? Get YouTube automation, SEO, social media design, and complete digital marketing services that help your business shine across platforms.",
};
const servicesFaqs = {
  title: "FAQs",
  description:
    "DigitalAura gives you a complete set of services to grow your brand online. You get YouTube automation, SEO, social media design, creative design, and digital marketing services that bring real results. Our team also helps with video editing, scriptwriting, eBooks, and brand identity packages. Every service is made to save your time and build a strong online presence.",
  questions: [
    {
      question: "How can DigitalAura YouTube Automation grow my channel?",
      answer:
        "You want your channel to grow fast. DigitalAura makes that possible with full YouTube automation. We handle SEO, script writing, editing, and publishing. You save time and focus on your vision. Your channel gains more viewers, steady subscribers, and higher watch time.",
    },
    {
      question:
        "Why should I choose DigitalAura SEO and optimization services?",
      answer:
        "SEO is the base of every strong online presence. DigitalAura makes your content rank higher in search results. We fix keywords, titles, tags, and site structure. Your business gains visibility and attracts the right audience. You get long-term results, more trust, and conversions that matter. DigitalAura SEO keeps your brand strong in search.",
    },
    {
      question: "What makes DigitalAura creative design better?",
      answer:
        "Design shows who you are. DigitalAura creates logos, graphics, and full brand identity packages that stand out. Your business looks professional and builds trust. Every design clearly speaks to your audience. You gain recognition, authority, and visuals that stay in memory. Our design makes your brand different from others.",
    },
    {
      question:
        "Can DigitalAura give me done-for-you digital marketing solutions?",
      answer:
        "Yes. DigitalAura takes care of everything in digital marketing. Our team runs your ads, social media, and full campaigns. You don’t need to worry about planning or execution. Each strategy is simple, clear, and focused on results. You save time and see growth without stress. DigitalAura becomes your trusted partner in marketing.",
    },
    {
      question:
        "How do DigitalAura digital products and eBooks support growth?",
      answer:
        "Digital products build both trust and income. DigitalAura creates eBooks, templates, and guides that fit your brand. You get assets that add value to your audience and bring revenue. Every product reflects your vision and makes you look like an expert. You grow authority in your niche and secure long-term digital success.",
    },
    {
      question: "What is included in YouTube strategy and growth services?",
      answer:
        "DigitalAura builds a full YouTube strategy for you. We plan channel growth, create scripts, edit videos, and manage publishing. You see higher watch time, more subscribers, and better engagement. Every step is built for long-term growth and clear results.",
    },
    {
      question: "How does scriptwriting improve my YouTube channel?",
      answer:
        "A good script keeps viewers watching. DigitalAura writes scripts that tell clear stories and hold attention. You get videos that sound professional and flow naturally. Better scripts bring better retention and higher audience trust.",
    },
    {
      question: "How does video editing help in YouTube growth?",
      answer:
        "Strong editing makes your videos stand out. DigitalAura cuts mistakes, fixes audio, and adds visuals that grab attention. Clean editing improves watch time and makes your channel look professional. Viewers stay longer and subscribe more.",
    },
    {
      question: "Can DigitalAura design social media content for my business?",
      answer:
        "Yes. DigitalAura creates posts, reels, and visuals for all platforms. You get designs that match your brand and attract people. Your social media looks active, modern, and professional. Strong content keeps your audience engaged and loyal.",
    },
    {
      question: "What makes a brand identity package important?",
      answer:
        "A brand identity package gives your business a clear voice. DigitalAura designs logos, colors, and visuals that show who you are. Your audience sees consistency and trusts you more. A strong identity makes your business memorable in every space.",
    },
    {
      question: "Can I trust DigitalAura for long-term support?",
      answer:
        "Yes. Many clients work with us for years. DigitalAura offers ongoing support in automation, design, and marketing. You stay consistent and never fall behind in the digital world. Long-term growth becomes simple when you have our team with you.",
    },
    {
      question: "How does DigitalAura deliver results for businesses?",
      answer:
        "DigitalAura follows a clear process. We mix creativity with data to design strategies that work. Every project is tracked, tested, and refined. You see real reports, real growth, and results that make sense. Our focus stays on long-term success for your brand.",
    },
  ],
};

const Third = {
  title: "Build Your Digital Growth Story with DigitalAura",
  description:
    "Every brand dreams of growth, and DigitalAura turns that dream into a clear plan. You gain a partner who values your goals. Every solution is made to deliver visible success. Our team blends YouTube automation, SEO, design, and digital products into one powerful strategy. You save time and focus on results. DigitalAura helps you stand out and achieve lasting success in the digital world.",
};
const page = () => {
  return (
    <div style={{ padding: "10px 0" }}>
      <ServicesCards />
      <Faqs data={servicesFaqs} />
      <ThirdSection data={Third} />
    </div>
  );
};

export default page;
