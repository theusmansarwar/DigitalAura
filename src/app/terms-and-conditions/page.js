import Button2 from "@/components/Buttons/Button2";
import TermsAndConditions from "@/components/ExtraPages/TermsAndConditions";
import PopularPostsSidebar from "@/components/popular/Popular";
import styles from "./page.module.css";
export const metadata = {
  title: "Terms and Conditions | Digital Aura",
  description:
    "DigitalAura offers SEO, PPC, branding, social media, and YouTube automation to help your business gain visibility, leads, and long-term growth.",
};

const page = () => {
  return (
    <div className={styles.termsPage}>
      <Button2 label={"Terms and Conditions"} />
      <div className={styles.termsLayout}>
        <TermsAndConditions />
        <PopularPostsSidebar />
      </div>
    </div>
  );
};

export default page;
