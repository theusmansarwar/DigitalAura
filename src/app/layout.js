import Header from "@/components/Header/Header";
import "./globals.css";
import { Syne } from "next/font/google";
import { Geist } from "next/font/google";
import FooterF from "@/components/Footer/FooterF";
import { ToastContainer } from "react-toastify";
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const title = "Digital Aura";
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <ToastContainer
          position="top-right"
          autoClose={2000}
          pauseOnHover={false}
          newestOnTop
        />
        <Header />
        {children}
        <FooterF />
      </body>
    </html>
  );
}
