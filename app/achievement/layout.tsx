import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css"
import MyFooter from "@/components/MyFooter";
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
        <MyFooter/>
        </body>
    </html>
  );
}
