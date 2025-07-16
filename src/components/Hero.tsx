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
  const portalRef = useRef<HTMLDivElement>(null);
  const [videoIndex, setVideoIndex] = useState<number>(0);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [portalOpen, setPortalOpen] = useState<boolean>(false);
  useEffect(() => {
    titleRef.current !== null && rotatationTextAnimation(titleRef.current);
  }, []);
  //animation declation
  const tl = gsap.timeline({
    defaults: {
      force3D: true,
    },
    paused: true,
  });
  const tl2 = gsap.timeline({
    defaults: {
      force3D: true,
    },
    paused: true,
  });
  const tl3 = gsap.timeline({
    defaults: {
      force3D: true,
    },
  });
  gsap.set(portalRef.current, {
    transformOrigin: "center center -100px",
    transformPerspective: 600,
  });
  const clearTimerPortal = () => {
    clearTimeout(timer);
    tl3.to(portalRef.current, {
      scale: 1.2, // Slightly grow (inhale)
      duration: 1, // Inhale duration
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1, // Infinite loop
    });

    // tl2.revert();
  };
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
        if (!portalOpen) {
          const { innerWidth, innerHeight } = window;
          //calculating progress
          const progressX = e.clientX / innerWidth;
          const progressY = e.clientY / innerHeight;
          const average = (progressX + progressY) / 2;
          //3D tilte
          /// Normalize cursor position from -1 to 1
          const x = progressX * 2 - 1;
          const y = progressY * 2 - 1;
          /// Define max rotation in degrees
          const maxRotation = 40;
          /// Invert y to make movement feel natural
          const rotateX = -y * maxRotation;
          const rotateY = x * maxRotation;
          // setting a new x and y dynamically relative to the portal offsetWidth and offsetHeight
          const bound = portalRef.current!.getBoundingClientRect();
          const newX =
            (e.clientX - bound.left) / portalRef.current!.offsetWidth;
          const newY =
            (e.clientY - bound.top) / portalRef.current!.offsetHeight;
          //animation
          tl3.revert();
          tl2.pause();
          tl.resume();
          tl.to(portalRef.current, {
            x: newX,
            y: newY,
            rotateX,
            rotateY,
            duration: 2,
            ease: "circ.in",
          });
          tl.to(
            portalRef.current,
            {
              duration: 2,
              scale: 1,
              ease: "power2.in",
            },
            "<"
          );
          tl.progress(average);
          /// Mouse still logic
          const handleMouseMove = () => {
            clearTimeout(timer); // clear previous timer
            const timerVar = setTimeout(() => {
              tl.pause();
              tl2.resume();
              tl2.to(portalRef.current, {
                duration: 2,
                scale: 0,
                ease: "power2.out",
              });
            }, 500); // 500ms of no movement = still
            setTimer(timerVar);
          };
          handleMouseMove();
        }
      }}
    >
      <Nav />
      <HeroBgModel videoIndex={videoIndex} videoElRef={videoElRef} />
      <VideoPortal
        portalRef={portalRef}
        clearTimerPortal={clearTimerPortal}
        tls={[tl, tl2, tl3]}
        state={[setPortalOpen]}
      />
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
