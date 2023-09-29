import React from "react";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"] });

export default function Logo() {
  return (
    <Link
      href="/"
      className={`absolute font-bold uppercase text-center left-10 top-5 p-2 z-10 ${montserrat.className}`}
    >
      <p className="text-xl md:text-2xl lg:text-3xl">Sylva Madu</p>
      <p className="text-sm md:text-md lg:text-lg">Photography</p>
    </Link>
  );
}
