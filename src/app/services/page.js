import Faqs from "@/components/Faqs/Faqs";
import ServicesCards from "@/components/ServicesCards/ServicesCards";
import ThirdSection from "@/components/ServicePageTemplate/ThirdSection";

const servicesFaqs = {
  title: "FAQs",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget metus vel lacus ullamcorper dictum. Integer vitae ante sit amet magna vestibulum volutpat.",
  questions: [
    {
      question: "Lorem ipsum dolor sit amet?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed ex nec justo gravida vestibulum. Integer et felis sed lorem bibendum suscipit.",
    },
    {
      question: "Curabitur eget metus vel lacus ullamcorper dictum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus. Nullam vel justo ac urna luctus vulputate.",
    },
    {
      question: "Vestibulum volutpat ante sit amet magna?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra ligula in ante sollicitudin, ac tincidunt mi tincidunt. Duis ac neque ut mauris aliquet tempus.",
    },
    {
      question: "Donec sed ex nec justo gravida vestibulum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti. Cras volutpat leo et eros egestas, nec tincidunt dui ultrices.",
    },
    {
      question: "Integer vitae felis sed lorem bibendum suscipit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet magna tincidunt, dictum lacus ac, egestas orci. Aenean porta lorem ut nunc dictum, in commodo ex faucibus.",
    },
    {
      question: "Pellentesque habitant morbi tristique senectus et netus?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in mauris a erat eleifend condimentum. Morbi non diam in libero varius vehicula vitae ac urna.",
    },
  ],
};

const Third = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget metus vel lacus ullamcorper dictum. Integer vitae ante sit amet magna vestibulum volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget metus vel lacus ullamcorper dictum. Integer vitae ante sit amet magna vestibulum volutpat.",
};
const page = () => {
  return (
    <div style={{ padding: "20px 0" }}>
      <ServicesCards />
      <Faqs data={servicesFaqs} />
      <ThirdSection data={Third} />
    </div>
  );
};

export default page;
