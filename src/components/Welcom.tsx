import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import aboutImg from "../imgs/about.webp";
import stonesImg from "../imgs/stones.webp";
export default function Welcom() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stonesRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#welcom-imgs",
          start: "top top",
          end: `${window.innerHeight * 2} bottom`,
          scrub: 1,
          pin: true,
        },
      })
      .to("#welcom-portal", {
        clipPath: `polygon(${innerWidth / 2 - innerWidth * 0.2}px 0px,${
          innerWidth / 2 + innerWidth * 0.2
        }px 0px,${innerWidth / 2 + innerWidth * 0.2}px ${
          window.innerHeight
        }px,${innerWidth / 2 - innerWidth * 0.2}px ${window.innerHeight}px)`,
      })
      .to("#welcom-portal", {
        clipPath: `polygon(0px 0px,${innerWidth}px 0px,${innerWidth}px ${window.innerHeight}px,0px ${window.innerHeight}px)`,
      });
  });
  const { innerWidth, innerHeight } = window;
  return (
    <section
      className="relative w-full mt-30 text-center flex flex-col items-center"
      id="welcom-section"
      ref={containerRef}
    >
      <p className="font-general text-[10px] uppercase bold">
        welcom to zentry
      </p>
      <h3 className="font-zentry text-8xl mt-10 w-[22ch]">
        Discover the world's largest shared adventure
      </h3>
      <div id="welcom-imgs" ref={stonesRef} className="w-full relative -top-10">
        <img
          id="welcom-portal"
          className="z-0 w-"
          src={aboutImg}
          alt="welcom picture"
          style={{
            clipPath: `polygon(${innerWidth / 2 - innerWidth * 0.115}px ${
              innerHeight * 0.14
            }px,${innerWidth / 2 + innerWidth * 0.08}px ${
              innerHeight * 0.2
            }px,${innerWidth / 2 + innerWidth * 0.115}px ${
              innerHeight - innerHeight * 0.22
            }px,${innerWidth / 2 - innerWidth * 0.12}px ${
              innerHeight - innerHeight * 0.2
            }px)`,
          }}
        />
        <img
          src={stonesImg}
          id="#stones"
          className="absolute -left-5 top-0 w-full z-1"
          alt="picture of couple of stones"
        />
      </div>
      <p
        id="welcom-text"
        className="absolute bottom-40 w-[50ch] -z-1 font-general text-sm text-gray-600"
      >
        <b className="block text-black ">
          a programmable reality for human-ai co-evolution.
        </b>
        your journy fuels richer data, smarter agents, and civilization-scale
        intiligence, all while rewarding you
      </p>
    </section>
  );
}
