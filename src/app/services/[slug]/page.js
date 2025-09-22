import Button2 from "@/components/Buttons/Button2";
import Faqs from "@/components/Faqs/Faqs";
import ServiceStats from "@/components/ServicePageTemplate/ServiceStats";
import VideoSection from "@/components/ServicePageTemplate/VideoSection";
import Testimonal from "@/components/testimonials/Testimonal";
import ThirdSection from "@/components/ServicePageTemplate/ThirdSection";
import { fetchServiceBySlug } from "@/DAL/Fetch";
import ServiceHero from "@/components/ServicePageTemplate/ServiceHero";
import HowWeDeliver from "@/components/ServicePageTemplate/HowWeDeliver";
import PortfolioCards from "@/components/ServicePageTemplate/PortfolioCards";

/** ---------------------------------------------------------------
 * Fetch service by slug
 * --------------------------------------------------------------- */
async function getService(slug) {
  try {
    const res = await fetchServiceBySlug(slug);
    if (res?.service) return res.service;
    return null;
  } catch (error) {
    console.error("Error fetching service:", error);
    return null;
  }
}

/** ---------------------------------------------------------------
 * Dynamic <title> and <meta description>
 * --------------------------------------------------------------- */
export async function generateMetadata({ params }) {
  const slug = params.slug;

  const service = await getService(slug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "This service is currently unavailable.",
      icons: { icon: "/favicon.svg" },
    };
  }

  return {
    title: service.title,
    description: service.metaDescription,
    icons: { icon: "/favicon.svg" },
  };
}

/** ---------------------------------------------------------------
 * Page Component
 * --------------------------------------------------------------- */
const Page = async ({ params }) => {
  const service = await getService(params.slug);

  if (!service) {
    return (
      <div style={{ padding: "20px 0" }}>
        <h2>Service not found</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 0" }}>
      <Button2 label={"Services"} />
      {service.description && <ServiceHero service={service} />}

      {service.how_we_delivered?.published && (
        <HowWeDeliver data={service.how_we_delivered} />
      )}
       <ServiceStats data={service} />
      {/* {service.how_we_delivered?.published && <ThirdSection />} */}
      {service.faqs?.published && <Faqs data={service.faqs} />}
      {service.video?.published && <VideoSection data={service.video} />}
      {service.portfolio?.published && (
        <PortfolioCards data={service.portfolio} />
      )}
      <Testimonal />

    </div>
  );
};

export default Page;
