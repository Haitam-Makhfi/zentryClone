import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import aboutImg from "../imgs/about.webp";
import stonesImg from "../imgs/stones.webp";
import Hero from "./Hero";
import Nav from "./Nav";
//GSAP PLUGINS
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  //   GSDevTools.create();
  const { innerWidth, innerHeight } = window;
  const { contextSafe } = useGSAP();
  const handleMouseMove = contextSafe(
    (dx: number, dy: number, maxOffset: number) => {
      const topLeftX = innerWidth / 2 - innerWidth * 0.1 + dx * maxOffset * 3;
      const topLeftY = innerHeight * 0.15 + dy * maxOffset;

      const topRightX = innerWidth / 2 + innerWidth * 0.09 + dx * maxOffset;
      const topRightY = innerHeight * 0.2 + dy * maxOffset;

      const bottomRightX = innerWidth / 2 + innerWidth * 0.13 + dx * maxOffset;
      const bottomRightY = innerHeight - innerHeight * 0.17 + dy * maxOffset;

      const bottomLeftX =
        innerWidth / 2 - innerWidth * 0.09 + dx * maxOffset * 3;
      const bottomLeftY = innerHeight - innerHeight * 0.15 + dy * maxOffset;

      gsap.to("#welcom-portal", {
        clipPath: `polygon(${topLeftX}px ${topLeftY}px,${topRightX}px ${topRightY}px,${bottomRightX}px ${bottomRightY}px,${bottomLeftX}px ${bottomLeftY}px)`,
      });
      //   gsap.to("#welcom-portal", {
      // });
    }
  );
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <section
          className="relative w-screen mt-30 text-center flex flex-col items-center"
          id="welcom-section"
          onMouseMove={(e) => {
            const bound = document
              .getElementById("welcom-section")
              ?.getBoundingClientRect();
            const maxOffset = 40;
            if (!bound) return null;
            const mouseX = e.clientX - bound.left;
            const mouseY = e.clientY - bound.top;
            const centerX = bound.width / 2;
            const centerY = bound.height / 2;
            const dx = (mouseX - centerX) / centerX;
            const dy = (mouseY - centerY) / centerY;
            handleMouseMove(dx, dy, maxOffset);
          }}
        >
          <p className="font-general text-[10px] uppercase bold">
            welcom to zentry
          </p>
          <h3 className="font-zentry text-8xl mt-10 w-[22ch]">
            Discover the world's largest shared adventure
          </h3>
          <div className="welcom-imgs">
            <img
              id="welcom-portal"
              className="absolute -z-1"
              src={aboutImg}
              alt="welcom picture"
              style={{
                clipPath: `polygon(${innerWidth / 2 - innerWidth * 0.1}px ${
                  innerHeight * 0.15
                }px,${innerWidth / 2 + innerWidth * 0.09}px ${
                  innerHeight * 0.2
                }px,${innerWidth / 2 + innerWidth * 0.13}px ${
                  innerHeight - innerHeight * 0.17
                }px,${innerWidth / 2 - innerWidth * 0.09}px ${
                  innerHeight - innerHeight * 0.15
                }px )`,
              }}
            />
            <img
              src={stonesImg}
              id="#stones"
              alt="picture of couple of stones"
            />
          </div>
        </section>
      </main>
    </>
  );
}
