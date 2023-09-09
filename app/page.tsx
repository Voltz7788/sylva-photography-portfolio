import Image from "next/image";
import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";

// Images
import mountainsImage from "../public/mountains-bg.jpg";
import bandImage from "../public/band-bg.jpg";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Image
        src={bandImage}
        alt="Jazz band playing music"
        className="absolute object-cover -z-10 h-screen top-0"
      />
      <div className="absolute w-full object-cover h-screen -z-10 bg-black opacity-40 top-0"></div>

      <div
        className={`text-neutral-100 text-3xl uppercase font-bold text-center mt-72 md:mt-80 ${montserrat.className}`}
      >
        <h1 className="px-10">Event photographer, youtuber and dickhead.</h1>
        <p className="text-4xl mt-5 ">▲▲▲</p>
      </div>
    </main>
  );
}

//
