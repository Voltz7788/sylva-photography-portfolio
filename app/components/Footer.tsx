"use client";
import React, { useState } from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import IconLink from "./IconLink";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Footer() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex flex-col items-center mt-10 lg:-mt-20">
      <Link
        onClick={handleNav}
        href="/"
        className={`font-bold uppercase text-center p-2 z-10 ${montserrat.className}`}
      >
        <p className="text-xl md:text-2xl lg:text-3xl">Sylva Madu</p>
        <p className="text-sm md:text-md lg:text-lg">Photography</p>
      </Link>
      <div className="flex gap-5 my-2">
        <IconLink
          icon="mdi:instagram"
          href="https://www.instagram.com/sylva.madu_photography_/"
        />
        <IconLink
          icon="mdi:linkedin"
          href="https://www.linkedin.com/in/sylva-madu-9b8531263/"
        />
      </div>
      <div className="h-[2px] 2-full bg-black"></div>
      <div>
        <ul
          className={`flex flex-col sm:flex-row gap-1 text-center sm:gap-8 lg:gap-16 xl:gap-28 2xl:gap-18 justify-center pb-20 pt-4 md:pt-8 text-sm underline-offset-1 underline text-stone-600 ${montserrat.className}`}
        >
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/reviews">Reviews</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
