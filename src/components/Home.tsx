import gsap from "gsap";
import GSDevTools from "gsap/GSDevTools";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import aboutImg from "../imgs/about.webp";
import stonesImg from "../imgs/stones.webp";
import feature1 from "../videos/feature-1.mp4";
import feature2 from "../videos/feature-2.mp4";
import feature3 from "../videos/feature-3.mp4";
import feature4 from "../videos/feature-4.mp4";
import Hero from "./Hero";
import Nav from "./Nav";
import ThreeDCard from "./ThreeDCard";
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
        <section id="bento-grid" className="bg-black w-full mt-140">
          <div
            id="bento-grid-text"
            className="text-white w-[40ch] font-robert-medium mx-35 py-30"
          >
            <b className="capitalize">intro to the metagame layer</b>
            <p className="normal-case text-gray-400">
              immerse yourself in a rich and ever-expanding universe where a
              vibrant array of products converge into an interconnected overlay
              experience on your world.
            </p>
          </div>
          <div
            id="bento-grid-elements"
            className="w-[80%] grid grid-cols-2  grid-rows-[1fr 1fr 1fr 1fr] mx-auto pb-30 gap-3"
          >
            <ThreeDCard
              src={feature1}
              className="col-span-2 text-white relative border border-gray-600 rounded-lg"
            >
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">radiant</h3>
                <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
                  a cross-platform metagame app, turning your activities across
                  web2 and web3 games into a rewarding adventure.
                </p>
              </div>
              <button className="absolute bg-black bottom-5 left-10 px-5 py-1 font-general text-gray-600 border border-gray-800 rounded-2xl">
                coming soon
              </button>
            </ThreeDCard>
            <ThreeDCard
              src={feature2}
              className="h-full row-span-2 text-white relative border border-gray-600 rounded-lg"
            >
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">zigma</h3>
                <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
                  a cross-platform metagame app, turning your activities across
                  web2 and web3 games into a rewarding adventure.
                </p>
              </div>
              <button className="absolute bg-black bottom-5 left-10 px-5 py-1 font-general text-gray-600 border border-gray-800 rounded-2xl">
                coming soon
              </button>
            </ThreeDCard>
            <ThreeDCard
              src={feature3}
              className="h-[380px] overflow-hidden text-white relative border border-gray-600 rounded-lg"
            >
              {" "}
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">nexus</h3>
                <p className="w-[30ch] mt-5 text-md font-robert-regular ">
                  a gamifiedd social hub, adding a new dimention of play to
                  social interaction for web3 communities.
                </p>
              </div>
              <button className="absolute bg-black bottom-5 left-10 px-5 py-1 font-general text-gray-600 border border-gray-800 rounded-2xl">
                coming soon
              </button>
            </ThreeDCard>
            <ThreeDCard
              src={feature4}
              className="h-[380px] overflow-hidden text-white relative border border-gray-600 rounded-lg"
            >
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">azul</h3>
                <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
                  a cross-world ai agent that elevates your gameplay to be more
                  fun and productive.
                </p>
              </div>
              <button className="absolute bg-black bottom-5 left-10 px-5 py-1 font-general text-gray-600 border border-gray-800 rounded-2xl">
                coming soon
              </button>
            </ThreeDCard>
          </div>
        </section>
      </main>
    </>
  );
}
