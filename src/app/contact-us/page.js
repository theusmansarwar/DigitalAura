import Button2 from "@/components/Buttons/Button2";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactUs from "@/components/Contact/ContactUs";

export const metadata = {
  title: "Contact Us | Digital Aura",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt accusamus, architecto aperiam ullam earum.",
};
const desc = [
  "Open communication builds strong partnerships with Digital Aura. You share your goals, and our team listens with precision. You get strategies in YouTube automation services, digital marketing agency, creative design solutions, SEO strategies, social media marketing, premium digital products, and brand authority building that align with your vision.",
  "Your inquiry receives thoughtful and focused attention. You work with specialists across services. Expect clarity when discussing digital marketing services and YouTube channel growth. The response you get will be practical, tailored, and centered on your measurable growth goals.",
  "Each update contains simple insight into project progress and outcomes. You gain confidence when strategy and execution remain transparent. You see nothing confusing, only clarity that keeps you in control.",
  "You receive prompt and useful guidance that advances your project. We balance urgency with quality so your online business growth stays on track. Digital Aura ensures your efforts meet current digital demands.",
  "Digital Aura remains your long-term digital partner. Each solution supports consistent progress. You benefit from evolving marketing strategy development that scales with your brand. You grow stronger, more visible, and more trusted.",
  "Let’s begin this journey together. Tap into expertise in digital marketing, automation, and brand growth that inspires confidence. You take the first step. We deliver results that matter and build the future you envision.",
];
const page = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <Button2 label={"Contact Us"} data={desc} />
      <ContactInfo />
      <ContactUs />{" "}
    </div>
  );
};

export default page;
