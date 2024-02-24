import { Sora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Header from "@/components/Header";

import Transition from "@/components/Transition";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Eyader Tsehayu",
  description: "Carrier portfolio of Eyader Tsehayu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
      >
        {" "}
        {/* <Nav /> */}
        <Header />
        {children}
        <Transition />
      </body>
    </html>
  );
}
