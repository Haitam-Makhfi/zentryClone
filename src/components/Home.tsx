import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Hero from "./Hero";
import Nav from "./Nav";
import Welcom from "./Welcom";
import BentoGrid from "./BentoGrid";
import Scroller from "./Scroller";
import Cta from "./Cta";
import Footer from "./Footer";
//GSAP PLUGINS
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main className="w-full">
        <Welcom />
        <BentoGrid />
        <Scroller />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
