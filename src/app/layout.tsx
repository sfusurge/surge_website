import type { Metadata } from "next";
import { CSPostHogProvider } from "./providers";

import "./globals.css";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Nav from "../components/Nav";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SFU Surge",
  description:
    "Engage, Empower, and Innovate. SFU Surge is an all-inclusive organization to promote curiosity and excitement for a future in technology, while guiding students on their paths to career success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`${GeistSans.variable} ${GeistMono.variable}  !scroll-p-24 `}
      lang="en"
    >
      <head>
        <link rel="icon" href="/surge-logo-blue.svg" type="image/x-icon" />
      </head>
      <CSPostHogProvider>
        <body className="font-GeistSans ">
          <div className="content-wrapper mt-[calc(5rem+3.5rem)]">
            <div className="surge-radial-gradient"></div>
            <Nav />
            {children}
          </div>
          <Footer />
        </body>
      </CSPostHogProvider>
    </html>
  );
}
