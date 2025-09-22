import Button2 from "@/components/Buttons/Button2";
import PrivacyPolicy from "@/components/ExtraPages/PrivacyPolicy";
import PopularPostsSidebar from "@/components/popular/Popular";
import styles from "./page.module.css";

export const metadata = {
  title: "Terms and Conditions | Digital Aura",
  description:
    "DigitalAura offers SEO, PPC, branding, social media, and YouTube automation to help your business gain visibility, leads, and long-term growth.",
};

const page = () => {
  return (
    <div className={styles.privacyPage}>
      <Button2 label={"Privacy Policy"}  />
      <div className={styles.privacyLayout}>
        <PrivacyPolicy/>
        <PopularPostsSidebar/>
      </div>
    </div>
  );
};

export default page;
