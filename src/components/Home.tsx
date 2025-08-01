import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";
import Hero from "./Hero";
import Nav from "./Nav";
import { useGSAP } from "@gsap/react";
export default function Home() {
  //GSAP PLUGINS
  gsap.registerPlugin(GSDevTools);
  gsap.registerPlugin(useGSAP);
  //   GSDevTools.create();
  return (
    <>
      <Nav />
      <Hero />
    </>
  );
}
