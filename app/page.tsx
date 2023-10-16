import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Footer from "./components/Footer";

// Images

import AboutHomePage from "./components/AboutHomePage";
import Hero from "./components/Hero";
import PhilosophySection from "./components/PhilosophySection";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full hero h-screen">
      <Hero />
      <AboutHomePage />
      <PhilosophySection />
      <Footer />
    </main>
  );
}
