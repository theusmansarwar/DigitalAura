import Header from "@/components/Header/Header";
import "./globals.css";
import { Syne } from "next/font/google";
import { Geist } from "next/font/google";
import FooterF from "@/components/Footer/FooterF";
import { ToastContainer } from "react-toastify";
import ViewCounter from "@/components/ViewCounter/ViewCounter";
import Script from "next/script"; //  Added for Google Analytics
import CookieConsent from "@/components/Cookies/CookieConsent";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const title = "Marketing, SEO & Automation Services in Sweden | Digital Aura";
const description =
  "DigitalAura offers SEO, PPC, branding, social media, and YouTube automation to help your business gain visibility, leads, and long-term growth.";

const url = "https://digitalaura.se";
const image = "/favicon.svg";

export const metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
  },
  //  Add Google Search Console verification meta
  other: {
    "google-site-verification": "d3ZpHGSOWYYfirQNoVhab8jghx9xwHZccCBejV0fURQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*  JSON-LD Structured Data */}
        <Script
          id="structured-data-digitalaura-full"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Digital Aura",
                  url: "https://digitalaura.se",
                  alternateName: ["Digital Aura"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://digitalaura.se/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  name: "Digital Aura",
                  url: "https://digitalaura.se",
                  logo: "https://digitalaura.se/favicon.svg",
                  contactPoint: [
                    {
                      "@type": "ContactPoint",
                      telephone: "+46763177364",
                      contactType: "Customer Support",
                      areaServed: "SE",
                      availableLanguage: ["Swedish", "English"],
                    },
                    {
                      "@type": "ContactPoint",
                      email: "info@digitalaura.se",
                      contactType: "General Inquiries",
                      areaServed: "SE",
                      availableLanguage: ["Swedish", "English"],
                    },
                  ],
                  sameAs: [
                    "https://linkedin.com/company/thedigitalaura",
                    "https://youtube.com/@DigitalAura-h2o",
                    "https://facebook.com/share/1CdEhnbb42",
                    "https://instagram.com/digitalaura8",
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  name: "Digital Aura",
                  image: "https://digitalaura.se/logo.svg", 
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Kronetorpsgatan 86A 212 27 Malmö, Sweden",
                    addressLocality: "Malmö",
                    addressCountry: "SE",
                  },
                  telephone: "+46763177364",
                  url: "https://digitalaura.se",
                },
                {
                  "@type": "ItemList",
                  name: "Digital Aura Services",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        "@type": "WebPage",
                        name: "Social Media Marketing",
                        url: "https://digitalaura.se/services/social-media-marketing",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      item: {
                        "@type": "WebPage",
                        name: "SEO, GEO & AEO Optimization",
                        url: "https://digitalaura.se/services/seo",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      item: {
                        "@type": "WebPage",
                        name: "YouTube Automation",
                        url: "https://digitalaura.se/services/youtube-automation",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      item: {
                        "@type": "WebPage",
                        name: "Branding & Web Design",
                        url: "https://digitalaura.se/services/website-designing",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      item: {
                        "@type": "WebPage",
                        name: "Contact Us",
                        url: "https://digitalaura.se/contact",
                      },
                    },
                  ],
                },
                {
                  "@type": "Service",
                  "@id": "https://digitalaura.se/services",
                  serviceType: "Digital Marketing Services",
                  provider: {
                    "@type": "Organization",
                    name: "Digital Aura",
                    url: "https://digitalaura.se",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "Sweden",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Digital Aura Service Catalog",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Social Media Marketing",
                          description:
                            "Digital Aura creates campaigns that blend creativity with precision. We study market trends and understand how audiences behave.",
                          url: "https://digitalaura.se/services/social-media-marketing",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "SEO, GEO & AEO Optimization",
                          description:
                            "We boost visibility and rankings on search engines and AI-driven results. We prepare your brand for Generative and Answer Engine Optimization.",
                          url: "https://digitalaura.se/services/seo",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Graphic & Web Design",
                          description:
                            "DigitalAura transforms ideas into visuals that speak louder than words. We deliver branding, graphic, and web design services.",
                          url: "https://digitalaura.se/services/website-designing",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "YouTube Automation",
                          description:
                            "DigitalAura turns YouTube automation into a simple yet powerful growth system. Strategies for subscribers, video rankings, and audience engagement.",
                          url: "https://digitalaura.se/services/youtube-automation",
                        },
                      },
                    ],
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What digital marketing services does DigitalAura offer?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "DigitalAura gives you a full range of digital marketing services including SEO, social media marketing, PPC, branding, and web design.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long does SEO take to show results?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most businesses see SEO progress in 3 to 6 months depending on competition, industry, and keywords.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can search engine rankings be guaranteed with SEO?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "No, rankings depend on search engines and cannot be guaranteed.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Does DigitalAura provide social media marketing for global clients?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes, campaigns reach the right audience globally, building awareness and engagement.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${syne.variable}`}>
        {/* ✅ Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-72FE2JFDL2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-72FE2JFDL2');
          `}
        </Script>

        {/* ✅ App Components */}
        <ToastContainer
          position="top-right"
          autoClose={2000}
          pauseOnHover={false}
          newestOnTop
        />
        <ViewCounter />
        <Header />
        {children}
        <FooterF />
        <CookieConsent/>
      </body>
    </html>
  );
}
