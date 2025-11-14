import Header from "@/components/Header/Header";
import "./globals.css";
import { Syne } from "next/font/google";
import { Geist } from "next/font/google";
import FooterF from "@/components/Footer/FooterF";
import { ToastContainer } from "react-toastify";
import ViewCounter from "@/components/ViewCounter/ViewCounter";
import Script from "next/script"; // ✅ Added for Google Analytics

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
  // ✅ Add Google Search Console verification meta
  other: {
    "google-site-verification": "d3ZpHGSOWYYfirQNoVhab8jghx9xwHZccCBejV0fURQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data */}
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Digital Aura",
              url: "https://digitalaura.se",
              logo: "https://digitalaura.se/favicon.svg",
              sameAs: [
                "https://linkedin.com/company/thedigitalaura",
                "https://youtube.com/@DigitalAura-h2o",
                "https://facebook.com/share/1CdEhnbb42",
                "https://instagram.com/digitalaura8",
              ],
            }),
          }}
        /> */}
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
                  alternateName: [
                    "Digital Aura",
                  ],
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
                      telephone: "+46-763-177364",
                      contactType: "Customer Support",
                      areaServed: "SE",
                      availableLanguage: ["Swedish", "English"]
                    },
                    {
                      "@type": "ContactPoint",
                      email: "info@digitalaura.se",
                      contactType: "General Inquiries",
                      areaServed: "SE",
                      availableLanguage: ["Swedish", "English"]
                    }
                  ],
                  sameAs: [
                    "https://linkedin.com/company/thedigitalaura",
                    "https://youtube.com/@DigitalAura-h2o",
                    "https://facebook.com/share/1CdEhnbb42",
                    "https://instagram.com/digitalaura8"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  name: "Digital Aura",
                  image: "https://digitalaura.se/favicon.svg",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Kronetorpsgatan 86A 212 27 Malmö, Sweden",
                    addressLocality: "Malmö",
                    addressCountry: "SE"
                  },
                  telephone: "+46-763-177364",
                  url: "https://digitalaura.se",
                },
                {
                  "@type": "ItemList",
                  name: "Digital Aura Services",
                  itemListElement: [
                    {
                      "@type": "SiteNavigationElement",
                      position: 1,
                      name: "Social Media Marketing",
                      url: "https://digitalaura.se/services/social-media-marketing"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 2,
                      name: "SEO, GEO & AEO Optimization",
                      url: "https://digitalaura.se/services/seo"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 3,
                      name: "YouTube Automation",
                      url: "https://digitalaura.se/services/youtube-automation"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 4,
                      name: "Branding & Web Design",
                      url: "https://digitalaura.se/services/website-designing"
                    },
                    {
                      "@type": "SiteNavigationElement",
                      position: 5,
                      name: "Contact Us",
                      url: "https://digitalaura.se/contact",
                    },
                  ]
                }
              ]
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
      </body>
    </html>
  );
}
