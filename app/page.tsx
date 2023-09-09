import Navbar from "./components/Navbar";
import { Montserrat } from "next/font/google";

// Images
import AboutHomePage from "./components/AboutHomePage";
import Hero from "./components/Hero";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="w-full hero h-screen ">
      <Hero />
      <AboutHomePage />
    </main>
  );
}
