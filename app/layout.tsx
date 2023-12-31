import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "sylvamadu.com",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${montserrat.className} overflow-x-hidden bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
