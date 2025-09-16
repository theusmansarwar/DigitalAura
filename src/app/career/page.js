import Button2 from "@/components/Buttons/Button2";
import JoinUs from "@/components/career/JoinUs";

export const metadata = {
  title: "Creative Services | Digital Aura",
  description:
    "Elevate your brand with Digital Aura’s creative expertise. Smart design in logos, ads, and UI/UX ensures trust, style, and powerful business growth.",
};
const desc = [
  "Digital Aura opens the door to real opportunities in the digital world. You join a team that builds strategies and delivers measurable growth. Careers here are more than jobs. You step into a digital marketing agency for business and global brands that want results with confidence.",
  "Every role gives you the chance to shape digital success. You learn how a digital marketing strategist creates campaigns that connect with audiences. It drives more business outcomes. Practical exposure and expert guidance convert skills into experience that makes you stand out in a market.",
  "Our team manages campaigns for startups and enterprises searching for social media marketing solutions. You gain hands-on practice with content, design, and analytics that build real visibility for businesses of every size.",
  "A career at Digital Aura means being part of a social media marketing agency near me that values collaboration and innovation. You can share ideas, solve problems, and learn from experts who want you to succeed.",
  "Ambition drives everything we do. As a team member, you take part in strategies that shape the future of online presence. From paid ads to organic reach, you see how a digital marketing agency for small business creates global influence step by step.",
];
const page = () => {
  return (
    <div style={{ padding: "40px 0" }}>
      <Button2 label={"Career at Digital Aura"} data={desc} />
      <JoinUs />{" "}
    </div>
  );
};

export default page;
