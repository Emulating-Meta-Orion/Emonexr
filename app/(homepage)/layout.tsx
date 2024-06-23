import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import  Team  from "@/components/Team";
import MyFooter from "@/components/MyFooter";
import Services from "@/components/Services";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Emo developers",
  description: "",
  icons:"/public/assets/EMO_LOGO.png"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className="bg-black">
        <Navbar/>
        {children}
        <About/>
        <Services/>
        <Team/>

        <MyFooter/>
        </body>
    </html>
  );
}
