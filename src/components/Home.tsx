import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Hero from "./Hero";
import Nav from "./Nav";
//GSAP PLUGINS
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  //   GSDevTools.create();
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}
