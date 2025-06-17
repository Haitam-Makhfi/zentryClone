import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import rotatationTextAnimation from "../Hooks/rotatationTextAnimation";
import Nav from "./Nav";
import HeroBgModel from "./HeroBg";
import VideoPortal from "./VideoPortal";
export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoElRef = useRef<HTMLVideoElement>(null);
  const portalRef = useRef<HTMLVideoElement>(null);
  const [videoIndex, setVideoIndex] = useState<number>(0);
  useEffect(() => {
    titleRef.current !== null && rotatationTextAnimation(titleRef.current);
    // Mouse still logic
    let timer: ReturnType<typeof setTimeout>;

    const handleMouseMove = () => {
      clearTimeout(timer); // clear previous timer
      timer = setTimeout(() => {
        gsap.to(portalRef.current, { scale: 0 });
      }, 500); // 500ms of no movement = still
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  gsap.registerPlugin(CustomEase);
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
      onClick={() => {
        videoIndex < 3 ? setVideoIndex((p) => p + 1) : setVideoIndex(0);
        videoElRef.current?.load();
      }}
      onMouseMove={(e) => {
        //3D tilte
        const { innerWidth, innerHeight } = window;
        /// Normalize cursor position from -1 to 1
        const x = (e.clientX / innerWidth) * 2 - 1;
        const y = (e.clientY / innerHeight) * 2 - 1;
        /// Define max rotation in degrees
        const maxRotation = 40;
        /// Invert y to make movement feel natural
        const rotateX = -y * maxRotation;
        const rotateY = x * maxRotation;
        // setting a new x and y dynamically relative to the portal offsetWidth and offsetHeight
        const bound = portalRef.current!.getBoundingClientRect();
        const newX = (e.clientX - bound.left) / portalRef.current!.offsetWidth;
        const newY = (e.clientY - bound.top) / portalRef.current!.offsetHeight;
        //animation
        const tl = gsap.timeline();
        gsap.set(portalRef.current, {
          transformOrigin: "center center -100px",
          transformPerspective: 600,
        });
        tl.to(portalRef.current, {
          x: newX,
          y: newY,
          rotateX,
          rotateY,
        });
        tl.to(
          portalRef.current,
          {
            duration: 3,
            scale: 1,
            ease: CustomEase.create(
              "custom",
              "M0,0 C0.173,0.204 0.737,0.051 1,1 "
            ),
          },
          "<"
        );
      }}
    >
      <Nav />
      <HeroBgModel videoIndex={videoIndex} videoElRef={videoElRef} />
      <VideoPortal portalRef={portalRef} />
    </section>
  );
}

{
  /* <h1
  className="w-[fit-content] text-center text-4xl font-bold mt-15 mx-auto uppercase  origin-center "
  ref={titleRef}
>
  gaming
</h1> */
}
