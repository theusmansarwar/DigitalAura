import ContactInfo from "@/components/Contact/ContactInfo";
import ContactUs from "@/components/Contact/ContactUs";


export const metadata = {
  title: "Creative Services | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};

const page = () => {
  return (
    <div>
      <ContactInfo />
      <ContactUs />{" "}
    </div>
  );
};

export default page;
