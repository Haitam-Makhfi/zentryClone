import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";
import Hero from "./Hero";
export default function Home() {
  //GSAP PLUGINS
  gsap.registerPlugin(GSDevTools);
  //   GSDevTools.create();
  return (
    <>
      <Hero />
    </>
  );
}
