import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sora } from 'next/font/google';
import ResponsiveNav from "@/components/home/Navbar/ResponsiveNav";
import Footer from "@/components/home/Footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";

const font = Sora({
  weight: ['100','200','300','400','500','600','700','800'],
  subsets: ['latin']
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "this is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="custom_scrollbar">
      <body className={`${font.className} ${geistMono.variable} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}