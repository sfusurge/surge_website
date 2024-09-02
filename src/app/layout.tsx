import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "SFU Surge's main website",
  description: "Engage, Empower, and Innovate. SFU Surge is an all-inclusive organization to promote curiosity and excitement for a future in technology, while guiding students on their paths to career success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`}  lang="en">
      <body className="font-GeistSans">
      <div className="w-full h-[200vh] bg-[radial-gradient(circle,_rgba(54,79,184,0.3)_0%,_rgba(24,35,82,0)_70%)] fixed top-[-100%] z-100 pointer-events-none "></div>
        {children}</body>
    </html>
  );
}
