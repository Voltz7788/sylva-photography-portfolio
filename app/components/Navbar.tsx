import React from "react";
import { Inter, Montserrat } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div className="">
      <nav className="flex justify-center items-center text-neutral-100 h-24">
        <a
          href="/"
          className={`font-bold uppercase text-center mr-auto ml-10 ${montserrat.className}`}
        >
          <p className="text-3xl">Sylva Madu</p>
          <p className="text-lg">Photo+Video</p>
        </a>
        <div
          className={`invisible lg:visible flex lg:gap-16 xl:gap-28 2xl:gap-36 justify-center w-1/2 pb-10 pt-10 text-sm font-semibold mr-auto -ml-64 ${montserrat.className}`}
        >
          <a href="/about">ABOUT</a>
          <a href="/portfolio">PORTFOLIO</a>
          <a href="/reviews">REVIEWS</a>
          <a href="/contact">CONTACT</a>
        </div>
      </nav>
    </div>
  );
}
