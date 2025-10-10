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
import BentoButton from "./BentoButton";
import Scroller from "./Scroller";
import Cta from "./Cta";
import { useRef } from "react";
//GSAP PLUGINS
gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
//   GSDevTools.create();
export default function Home() {
  const svg1Ref = useRef<SVGSVGElement>(null);
  const svg2Ref = useRef<SVGSVGElement>(null);
  const svg3Ref = useRef<SVGSVGElement>(null);
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
    <>
      <Nav />
      <Hero />
      <main className="w-full">
        <section
          className="relative w-full mt-30 text-center flex flex-col items-center"
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
            your journy fuels richer data, smarter agents, and
            civilization-scale intiligence, all while rewarding you
          </p>
        </section>
        <section id="bento-grid" className="bg-black w-auto mt-140">
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
            className="w-[80%] grid grid-cols-2 grid-rows-[1fr 1fr 1fr 1fr] mx-auto pb-30 gap-3"
          >
            <ThreeDCard
              src={feature1}
              className="cursor-pointer col-span-2 text-white relative border border-gray-600 rounded-lg"
            >
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">radiant</h3>
                <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
                  a cross-platform metagame app, turning your activities across
                  web2 and web3 games into a rewarding adventure.
                </p>
              </div>
              <BentoButton>coming soon</BentoButton>
            </ThreeDCard>
            <ThreeDCard
              src={feature2}
              className="cursor-pointer h-full row-span-2 text-white relative border border-gray-600 rounded-lg"
            >
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">zigma</h3>
                <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
                  a cross-platform metagame app, turning your activities across
                  web2 and web3 games into a rewarding adventure.
                </p>
              </div>
              <BentoButton>coming soon</BentoButton>
            </ThreeDCard>
            <ThreeDCard
              src={feature3}
              className="cursor-pointer h-[380px] overflow-hidden text-white relative border border-gray-600 rounded-lg"
            >
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">nexus</h3>
                <p className="w-[30ch] mt-5 text-md font-robert-regular ">
                  a gamifiedd social hub, adding a new dimention of play to
                  social interaction for web3 communities.
                </p>
              </div>
              <BentoButton>coming soon</BentoButton>
            </ThreeDCard>
            <ThreeDCard
              src={feature4}
              className="cursor-pointer h-[380px] overflow-hidden text-white relative border border-gray-600 rounded-lg"
            >
              <div className="content absolute top-5 left-10">
                <h3 className="uppercase text-7xl font-zentry">azul</h3>
                <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
                  a cross-world ai agent that elevates your gameplay to be more
                  fun and productive.
                </p>
              </div>
              <BentoButton>coming soon</BentoButton>
            </ThreeDCard>
          </div>
        </section>
        <Scroller />
        <Cta />
      </main>
      <footer className="w-full h-20 px-20 font-general text-black text-xs flex items-center justify-between gap-3">
        <p className="capitalize">@Nova 2024, all rights reserved</p>
        <div className="flex items-center justify-center gap-7">
          <button
            className="cursor-pointer"
            onMouseEnter={() => {
              if (!svg1Ref.current) return null;
              svg1Ref.current.classList.add("shake");
            }}
            onMouseLeave={() => {
              if (!svg1Ref.current) return null;
              svg1Ref.current.classList.remove("shake");
            }}
          >
            <svg
              className="w-7 fill-black"
              ref={svg1Ref}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M524.5 133.8C524.3 133.5 524.1 133.2 523.7 133.1C485.6 115.6 445.3 103.1 404 96C403.6 95.9 403.2 96 402.9 96.1C402.6 96.2 402.3 96.5 402.1 96.9C396.6 106.8 391.6 117.1 387.2 127.5C342.6 120.7 297.3 120.7 252.8 127.5C248.3 117 243.3 106.8 237.7 96.9C237.5 96.6 237.2 96.3 236.9 96.1C236.6 95.9 236.2 95.9 235.8 95.9C194.5 103 154.2 115.5 116.1 133C115.8 133.1 115.5 133.4 115.3 133.7C39.1 247.5 18.2 358.6 28.4 468.2C28.4 468.5 28.5 468.7 28.6 469C28.7 469.3 28.9 469.4 29.1 469.6C73.5 502.5 123.1 527.6 175.9 543.8C176.3 543.9 176.7 543.9 177 543.8C177.3 543.7 177.7 543.4 177.9 543.1C189.2 527.7 199.3 511.3 207.9 494.3C208 494.1 208.1 493.8 208.1 493.5C208.1 493.2 208.1 493 208 492.7C207.9 492.4 207.8 492.2 207.6 492.1C207.4 492 207.2 491.8 206.9 491.7C191.1 485.6 175.7 478.3 161 469.8C160.7 469.6 160.5 469.4 160.3 469.2C160.1 469 160 468.6 160 468.3C160 468 160 467.7 160.2 467.4C160.4 467.1 160.5 466.9 160.8 466.7C163.9 464.4 167 462 169.9 459.6C170.2 459.4 170.5 459.2 170.8 459.2C171.1 459.2 171.5 459.2 171.8 459.3C268 503.2 372.2 503.2 467.3 459.3C467.6 459.2 468 459.1 468.3 459.1C468.6 459.1 469 459.3 469.2 459.5C472.1 461.9 475.2 464.4 478.3 466.7C478.5 466.9 478.7 467.1 478.9 467.4C479.1 467.7 479.1 468 479.1 468.3C479.1 468.6 479 468.9 478.8 469.2C478.6 469.5 478.4 469.7 478.2 469.8C463.5 478.4 448.2 485.7 432.3 491.6C432.1 491.7 431.8 491.8 431.6 492C431.4 492.2 431.3 492.4 431.2 492.7C431.1 493 431.1 493.2 431.1 493.5C431.1 493.8 431.2 494 431.3 494.3C440.1 511.3 450.1 527.6 461.3 543.1C461.5 543.4 461.9 543.7 462.2 543.8C462.5 543.9 463 543.9 463.3 543.8C516.2 527.6 565.9 502.5 610.4 469.6C610.6 469.4 610.8 469.2 610.9 469C611 468.8 611.1 468.5 611.1 468.2C623.4 341.4 590.6 231.3 524.2 133.7zM222.5 401.5C193.5 401.5 169.7 374.9 169.7 342.3C169.7 309.7 193.1 283.1 222.5 283.1C252.2 283.1 275.8 309.9 275.3 342.3C275.3 375 251.9 401.5 222.5 401.5zM417.9 401.5C388.9 401.5 365.1 374.9 365.1 342.3C365.1 309.7 388.5 283.1 417.9 283.1C447.6 283.1 471.2 309.9 470.7 342.3C470.7 375 447.5 401.5 417.9 401.5z" />
            </svg>
          </button>
          <button
            className="cursor-pointer"
            onMouseEnter={() => {
              if (!svg2Ref.current) return null;
              svg2Ref.current.classList.add("shake");
            }}
            onMouseLeave={() => {
              if (!svg2Ref.current) return null;
              svg2Ref.current.classList.remove("shake");
            }}
          >
            <svg
              className="w-7 fill-black"
              ref={svg2Ref}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112zM428.4 485.8L467.5 485.8L215.1 152L173.1 152L428.4 485.8z" />
            </svg>
          </button>
          <button
            className="cursor-pointer"
            onMouseEnter={() => {
              if (!svg3Ref.current) return null;
              svg3Ref.current.classList.add("shake");
            }}
            onMouseLeave={() => {
              if (!svg3Ref.current) return null;
              svg3Ref.current.classList.remove("shake");
            }}
          >
            <svg
              className="w-7 fill-black"
              ref={svg3Ref}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z" />
            </svg>
          </button>
        </div>
      </footer>
    </>
  );
}
