import Header from "@/components/Header/Header";
import "./globals.css";
import { Syne } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import FooterF from "@/components/Footer/FooterF";
import { ToastContainer } from "react-toastify";
// import localFont from "next/font/local";

// // Self-hosted Century Gothic (put the font file inside /public/fonts/)
// const centuryGothic = localFont({
//   src: "/fonts/CenturyGothic.woff2", // adjust if you have multiple weights
//   variable: "--font-century-gothic",
//   weight: "400",
//   style: "normal",
// });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export const metadata = {
  title: "Digital Aura",
  description:
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae incidunt accusamus, architecto aperiam ullam earum.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
