"use client";
import React, { useState } from "react";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="flex justify-center items-center text-neutral-100 h-24 relative z-10">
      <Link
        onClick={handleNav}
        href="/"
        className={`absolute font-bold uppercase text-center left-10 top-5 p-2 z-10 ${montserrat.className}`}
      >
        <p className="text-xl md:text-2xl lg:text-3xl">Sylva Madu</p>
        <p className="text-sm md:text-md lg:text-lg">Photography</p>
      </Link>
      <ul
        className={`invisible md:visible flex ml-20 lg:ml-0 md:gap-8 lg:gap-16 xl:gap-28 2xl:gap-36 justify-center w-1/2 pb-10 pt-10 text-sm font-semibold ${montserrat.className}`}
      >
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/portfolio">PORTFOLIO</Link>
        </li>
        <li>
          <Link href="/reviews">REVIEWS</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>

      {/* Mobile Button */}
      <button onClick={handleNav} className="inline-block md:hidden z-10">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden absolute top-0 right-0 bottom-0 ${
          nav ? "left-0" : "left-[-100%]"
        } flex justify-center items-center w-full h-screen bg-black ease-in-out duration-150 md:hidden`}
      >
        <ul>
          <li onClick={handleNav} className="p-4 text-xl hover:text-grey-500">
            <Link href="/about">ABOUT</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-xl hover:text-grey-500">
            <Link href="/portfolio">PORTFOLIO</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-xl hover:text-grey-500">
            <Link href="/reviews">REVIEWS</Link>
          </li>
          <li onClick={handleNav} className="p-4 text-xl hover:text-grey-500">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
