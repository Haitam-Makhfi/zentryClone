import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import aboutImg from "../imgs/about.webp";
import stonesImg from "../imgs/stones.webp";
import Hero from "./Hero";
import Nav from "./Nav";
import { useRef } from "react";
//GSAP PLUGINS
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
//   GSDevTools.create();
export default function Home() {
  // const clipPathRef = useRef<HTMLDivElement>(null);
  // const leaderRef = useRef<HTMLDivElement | null>(null);
  // const wrapperRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const stonesRef = useRef<HTMLDivElement | null>(null);
  // const { contextSafe } = useGSAP();
  useGSAP(() => {
    ScrollTrigger.create({
      // trigger: "#welcom-imgs",
      // start: "top top",
      // end: `${window.innerHeight * 2} bottom`,
      // scrub: true,
      // pin: true,
      // // pinSpacing: false,
      // markers: true,
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#welcom-imgs",
          start: "top top",
          end: `${window.innerHeight * 2} bottom`,
          scrub: 1,
          pin: true,
          // pinSpacing: false,
          // markers: true,
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

  // const handleMouseMove = contextSafe(
  //   (dx: number, dy: number, maxOffset: number) => {
  //     let topLeftX: number = 0;
  //     let topLeftY: number = 0;
  //     let topRightX: number = 0;
  //     let topRightY: number = 0;
  //     let bottomRightX: number = 0;
  //     let bottomRightY: number = 0;
  //     let bottomLeftX: number = 0;
  //     let bottomLeftY: number = 0;

  //     if (dx > 0.2 && dy < 0.2 && dy > -0.2) {
  //       //right
  //       topLeftX = innerWidth / 2 - innerWidth * 0.1 + dx * maxOffset * 3;
  //       topLeftY = innerHeight * 0.15 + dy * maxOffset;

  //       topRightX = innerWidth / 2 + innerWidth * 0.09 + dx * maxOffset;
  //       topRightY = innerHeight * 0.2 + dy * maxOffset;

  //       bottomRightX = innerWidth / 2 + innerWidth * 0.13 + dx * maxOffset;
  //       bottomRightY = innerHeight - innerHeight * 0.17 + dy * maxOffset;

  //       bottomLeftX = innerWidth / 2 - innerWidth * 0.09 + dx * maxOffset * 3;
  //       bottomLeftY = innerHeight - innerHeight * 0.15 + dy * maxOffset;
  //     } else if (dx < -0.2 && dy < 0.2 && dy > -0.2) {
  //       //left
  //       topLeftX = innerWidth / 2 - innerWidth * 0.13 + dx * maxOffset;
  //       topLeftY = innerHeight / 2 - innerHeight * 0.17 + dy * maxOffset;

  //       topRightX = innerWidth / 2 + innerWidth * 0.1 + dx * maxOffset;
  //       topRightY = innerHeight / 2 - innerHeight * 0.15 + dy * maxOffset;

  //       bottomRightX = innerWidth / 2 + innerWidth * 0.13 + dx * maxOffset;
  //       bottomRightY = innerHeight / 2 + innerHeight * 0.14 + dy * maxOffset;

  //       bottomLeftX = innerWidth / 2 - innerWidth * 0.12 + dx * maxOffset;
  //       bottomLeftY = innerHeight / 2 + innerHeight * 0.17 + dy * maxOffset;
  //     }
  //     if (dy > 0 && dx < 0.2 && dx > -0.2) {
  //       //bottom
  //       // topLeftX = innerWidth / 2 - 75 + dx * maxOffset;
  //       // topLeftY = innerHeight / 2 - 75 + dy * maxOffset * 2;
  //       // topRightX = innerWidth / 2 - 75 + width + dx * maxOffset;
  //       // topRightY = innerHeight / 2 - 75 + dy * maxOffset * 2;
  //       // bottomRightX = innerWidth / 2 - 75 + width - 5 + dx * maxOffset;
  //       // bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset;
  //       // bottomLeftX = innerWidth / 2 - 75 + 5 + dx * maxOffset;
  //       // bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset;
  //     } else if (dy < 0) {
  //       //top
  //       topLeftX = innerWidth / 2 - innerWidth * 0.115 + dx * maxOffset;
  //       topLeftY = innerHeight * 0.15 + dy * maxOffset;

  //       topRightX = innerWidth / 2 + innerWidth * 0.08 + dx * maxOffset;
  //       topRightY = innerHeight * 0.22 + dy * maxOffset;

  //       bottomRightX = innerWidth / 2 + innerWidth * 0.115 + dx * maxOffset;
  //       bottomRightY = innerHeight - innerHeight * 0.17 + dy * maxOffset;

  //       bottomLeftX = innerWidth / 2 - innerWidth * 0.12 + dx * maxOffset;
  //       bottomLeftY = innerHeight - innerHeight * 0.2 + dy * maxOffset;
  //     }
  //     if (dy < -0.2 && dx > 0.2) {
  //       //top right
  //       // topLeftX = innerWidth / 2 - 10 + dx * maxOffset * 2;
  //       // topLeftY = innerHeight / 2 - 75 + 15 + dy * maxOffset * 2;
  //       // topRightX = innerWidth / 2 + width - 5 + dx * maxOffset;
  //       // topRightY = innerHeight / 2 - 75 + dy * maxOffset;
  //       // bottomRightX = innerWidth / 2 + width + 10 + dx * maxOffset;
  //       // bottomRightY = innerHeight / 2 - 75 + height - 15 + dy * maxOffset;
  //       // bottomLeftX = innerWidth / 2 + dx * maxOffset * 2;
  //       // bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset * 2;
  //     } else if (dy < -0.2 && dx < -0.2) {
  //       //top left
  //       // topLeftX = innerWidth / 2 - 75 + 5 + dx * maxOffset;
  //       // topLeftY = innerHeight / 2 - 75 + dy * maxOffset;
  //       // topRightX = innerWidth / 2 - 75 + width + 10 + dx * maxOffset * 2;
  //       // topRightY = innerHeight / 2 - 75 + 15 + dy * maxOffset * 2;
  //       // bottomRightX = innerWidth / 2 - 75 + width + dx * maxOffset * 2;
  //       // bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset * 2;
  //       // bottomLeftX = innerWidth / 2 - 75 - 10 + dx * maxOffset;
  //       // bottomLeftY = innerHeight / 2 - 75 + height - 15 + dy * maxOffset;
  //     } else if (dy > 0.2 && dx > 0.2) {
  //       //bottom right
  //       // topLeftX = innerWidth / 2 + 5 + dx * maxOffset * 2;
  //       // topLeftY = innerHeight / 2 - 75 + dy * maxOffset * 2;
  //       // topRightX = innerWidth / 2 + width + 10 + dx * maxOffset;
  //       // topRightY = innerHeight / 2 - 75 + 15 + dy * maxOffset;
  //       // bottomRightX = innerWidth / 2 + width + dx * maxOffset;
  //       // bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset;
  //       // bottomLeftX = innerWidth / 2 - 10 + dx * maxOffset * 2;
  //       // bottomLeftY = innerHeight / 2 - 75 + height - 15 + dy * maxOffset * 2;
  //     } else if (dy > 0.2 && dx < -0.2) {
  //       //bottom left
  //       // topLeftX = innerWidth / 2 - 75 - 10 + dx * maxOffset;
  //       // topLeftY = innerHeight / 2 - 75 + 15 + dy * maxOffset;
  //       // topRightX = innerWidth / 2 - 75 + width - 5 + dx * maxOffset * 2;
  //       // topRightY = innerHeight / 2 - 75 + dy * maxOffset * 2;
  //       // bottomRightX = innerWidth / 2 - 75 + width + 10 + dx * maxOffset * 2;
  //       // bottomRightY = innerHeight / 2 - 75 + height - 15 + dy * maxOffset * 2;
  //       // bottomLeftX = innerWidth / 2 - 75 + dx * maxOffset;
  //       // bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset;
  //     }
  //     gsap.to("#welcom-portal", {
  //       clipPath: `polygon(${topLeftX}px ${topLeftY}px,${topRightX}px ${topRightY}px,${bottomRightX}px ${bottomRightY}px,${bottomLeftX}px ${bottomLeftY}px)`,
  //       duration: 1,
  //       ease: "none",
  //     });
  //   }
  // );
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <section
          className="relative w-screen mt-30 text-center flex flex-col items-center"
          id="welcom-section"
          ref={containerRef}
          onMouseMove={() => {
            const bound = document
              .getElementById("welcom-section")
              ?.getBoundingClientRect();
            // const maxOffset = 30;
            if (!bound) return null;
            // const mouseX = e.clientX - bound.left;
            // const mouseY = e.clientY - bound.top;
            // const centerX = bound.width / 2;
            // const centerY = bound.height / 2;
            // const dx = (mouseX - centerX) / centerX;
            // const dy = (mouseY - centerY) / centerY;
            // handleMouseMove(dx, dy, maxOffset);
            // getPoint(e, 30, 30);
          }}
        >
          <p className="font-general text-[10px] uppercase bold">
            welcom to zentry
          </p>
          <h3
            className="font-zentry text-8xl mt-10 w-[22ch]"
            // ref={prevEleRef}
          >
            Discover the world's largest shared adventure
          </h3>
          <div
            id="welcom-imgs"
            ref={stonesRef}
            className="w-full relative -top-10"
          >
            {/* <div
              id="container"
              ref={wrapperRef}
              className="relative w-max m-auto"
              onMouseMove={(e) => {}}
            >
              <div
                id="leader"
                ref={leaderRef}
                className="w-80 h-100 bg-black m-auto mt-10 z-19"
              ></div>
              <div
                className={`w-80 h-100 absolute top-0 left-1/2 -translate-x-1/2 bg-red-600 m-auto z-20`}
                ref={clipPathRef}
              ></div> */}
            {/* </div> */}
            <img
              id="welcom-portal"
              className="z-0"
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
            your journy fuels richer data, smarter agents, and
            civilization-scale intiligence, all while rewarding you
          </p>
        </section>
        <section id="bento-grid" className="bg-black w-full h-screen mt-140">
          <div
            id="bento-grid-text"
            className="text-white w-[40ch] font-robert-medium mx-30 py-30"
          >
            <b className="capitalize">intro to the metagame layer</b>
            <p className="normal-case text-gray-400">
              immerse yourself in a rich and ever-expanding universe where a
              vibrant array of products converge into an interconnected overlay
              experience on your world.
            </p>
          </div>
          <div id="bento-grid-elements"></div>
        </section>
      </main>
    </>
  );
}
