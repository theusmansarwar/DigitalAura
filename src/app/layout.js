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
        <script
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
