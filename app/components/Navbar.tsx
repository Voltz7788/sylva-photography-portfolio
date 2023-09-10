import React from "react";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center text-neutral-100 h-24 relative z-10">
      <a
        href="/"
        className={`absolute font-bold uppercase text-center left-10 top-5 p-2 ${montserrat.className}`}
      >
        <p className="text-xl md:text-2xl lg:text-3xl">Sylva Madu</p>
        <p className="text-sm md:text-md lg:text-lg">Photography</p>
      </a>
      <div
        className={`invisible lg:visible flex lg:gap-16 xl:gap-28 2xl:gap-36 justify-center w-1/2 pb-10 pt-10 text-sm font-semibold ${montserrat.className}`}
      >
        <a href="/about">ABOUT</a>
        <a href="/portfolio">PORTFOLIO</a>
        <a href="/reviews">REVIEWS</a>
        <a href="/contact">CONTACT</a>
      </div>
    </nav>
  );
}
