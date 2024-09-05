import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SFU Surge's main website",
  description:
    "Engage, Empower, and Innovate. SFU Surge is an all-inclusive organization to promote curiosity and excitement for a future in technology, while guiding students on their paths to career success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <body className="font-GeistSans content-wrapper">
        <div className="surge-radial-gradient"></div>
        <Nav />
        {children}
        <h1 className="large-title">This is a large title</h1>
        <p className="paragraph"> Or is it a large title?</p>
        <h2 className="title-1">Tbh I'm not too sure</h2>
        <p className="paragraph text-base">
          Tbh Im just tryna make the content scrollable. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Donec porttitor lectus dignissim
          purus blandit, vitae mattis enim varius. Mauris eu porta lacus. Nullam
          eget ultrices mauris. Donec posuere lorem id dui vestibulum, id tempor
          massa efficitur. Nullam sed dui a dolor scelerisque lacinia. Donec
          massa neque, pretium vitae condimentum id, pharetra ut lectus. Aliquam
          scelerisque ipsum nec purus tincidunt, eu posuere leo aliquam. Nunc
          non pretium mi, dapibus tincidunt magna. Phasellus malesuada iaculis
          tortor, sed iaculis est pretium at. Sed id venenatis sapien.
          Suspendisse sodales id libero a luctus. Proin et elementum tellus, at
          gravida metus.
        </p>
        <Footer />
      </body>
    </html>
  );
}
