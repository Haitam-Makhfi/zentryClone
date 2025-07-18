import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import rotatationTextAnimation from "../Hooks/rotatationTextAnimation";
import Nav from "./Nav";
import VideoPortal from "./VideoPortal";
import VideoPortal2 from "./VideoPortal2";
export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoElRef = useRef<HTMLVideoElement>(null);
  const portalRef1 = useRef<HTMLDivElement>(null);
  const portalRef2 = useRef<HTMLDivElement>(null);
  // const portalRef3 = useRef<HTMLDivElement>(null);
  // const portalRef4 = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [portalOpen, setPortalOpen] = useState<boolean>(false);
  useEffect(() => {
    titleRef.current !== null && rotatationTextAnimation(titleRef.current);
  }, []);
  // const videoArray = [hero1, hero2, hero3, hero4];
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
  const clearTimerPortal = () => {
    clearTimeout(timer);
    !portalOpen
      ? tl3.to(portalRef2.current, {
          "clip-path": `path(" M${innerWidth / 2 - 100} ${
            innerHeight / 2 - 100
          } L${innerWidth / 2 + 100} ${innerHeight / 2 - 100} L${
            innerWidth / 2 + 100
          } ${innerHeight / 2 + 100} L${innerWidth / 2 - 100} ${
            innerHeight / 2 + 100
          } Z")`,
          duration: 1, // Inhale duration
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1, // Infinite loop
        })
      : null;
  };
  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden"
      ref={heroRef}
      onClick={() => {
        // videoIndex < 3 ? setVideoIndex((p) => p + 1) : setVideoIndex(0);
        videoElRef.current?.load();
      }}
      onMouseMove={(e) => {
        if (portalOpen) return null;
        const { innerWidth, innerHeight } = window;
        // //calculating progress
        // // Normal 3D tilte
        // /// Normalize cursor position from -1 to 1
        // const x = progressX * 2 - 1;
        // const y = progressY * 2 - 1;
        // /// Define max rotation in degrees
        // const maxRotation = 40;
        // /// Invert y to make movement feel natural
        // const rotateX = -y * maxRotation;
        // const rotateY = x * maxRotation;
        // // setting a new x and y dynamically relative to the portal offsetWidth and offsetHeight
        // const bound = portalRef.current!.getBoundingClientRect();
        // const newX =
        //   (e.clientX - bound.left) / portalRef.current!.offsetWidth;
        // const newY =
        //   (e.clientY - bound.top) / portalRef.current!.offsetHeight;
        const hero = heroRef.current;
        const width = 150;
        const height = 150;
        if (!hero) return;
        // Mouse position relative to center
        const heroRect = hero.getBoundingClientRect();
        const mouseX = e.clientX - heroRect.left;
        const mouseY = e.clientY - heroRect.top;

        const centerX = heroRect.width / 2;
        const centerY = heroRect.height / 2;

        const dx = (mouseX - centerX) / centerX; // -1 to 1
        const dy = (mouseY - centerY) / centerY; // -1 to 1

        const maxOffset = 50;

        // Corner displacements based on cursor distance from center
        let topLeftX;
        let topLeftY;
        let topRightX;
        let topRightY;
        let bottomRightX;
        let bottomRightY;
        let bottomLeftX;
        let bottomLeftY;
        if (dx > 0.2 && dy < 0.2 && dy > -0.2) {
          //right
          topLeftX = innerWidth / 2 + dx * maxOffset * 2;
          topLeftY = innerHeight / 2 - 75 + dy * maxOffset;

          topRightX = innerWidth / 2 + width + dx * maxOffset;
          topRightY = innerHeight / 2 - 75 + 10 + dy * maxOffset;

          bottomRightX = innerWidth / 2 + width + dx * maxOffset;
          bottomRightY = innerHeight / 2 - 75 + height - 10 + dy * maxOffset;

          bottomLeftX = innerWidth / 2 + dx * maxOffset * 2;
          bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset;
        } else if (dx < -0.2 && dy < 0.2 && dy > -0.2) {
          //left
          topLeftX = innerWidth / 2 - 75 + dx * maxOffset;
          topLeftY = innerHeight / 2 - 75 + 10 + dy * maxOffset;

          topRightX = innerWidth / 2 - 75 + width + dx * maxOffset * 2;
          topRightY = innerHeight / 2 - 75 + dy * maxOffset;

          bottomRightX = innerWidth / 2 - 75 + width + dx * maxOffset * 2;
          bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset;

          bottomLeftX = innerWidth / 2 - 75 + dx * maxOffset;
          bottomLeftY = innerHeight / 2 - 75 + height - 10 + dy * maxOffset;
        }
        if (dy > 0 && dx < 0.2 && dx > -0.2) {
          //bottom
          topLeftX = innerWidth / 2 - 75 + dx * maxOffset;
          topLeftY = innerHeight / 2 - 75 + dy * maxOffset * 2;

          topRightX = innerWidth / 2 - 75 + width + dx * maxOffset;
          topRightY = innerHeight / 2 - 75 + dy * maxOffset * 2;

          bottomRightX = innerWidth / 2 - 75 + width - 5 + dx * maxOffset;
          bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset;

          bottomLeftX = innerWidth / 2 - 75 + 5 + dx * maxOffset;
          bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset;
        } else if (dy < 0 && dx < 0.2 && dx > -0.2) {
          //top
          topLeftX = innerWidth / 2 - 75 + 5 + dx * maxOffset;
          topLeftY = innerHeight / 2 - 75 + dy * maxOffset;

          topRightX = innerWidth / 2 - 75 + width - 5 + dx * maxOffset;
          topRightY = innerHeight / 2 - 75 + dy * maxOffset;

          bottomRightX = innerWidth / 2 - 75 + width + dx * maxOffset;
          bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset * 2;

          bottomLeftX = innerWidth / 2 - 75 + dx * maxOffset;
          bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset * 2;
        }
        if (dy < -0.2 && dx > 0.2) {
          //top right
          topLeftX = innerWidth / 2 - 10 + dx * maxOffset * 2;
          topLeftY = innerHeight / 2 - 75 + 15 + dy * maxOffset * 2;

          topRightX = innerWidth / 2 + width - 5 + dx * maxOffset;
          topRightY = innerHeight / 2 - 75 + dy * maxOffset;

          bottomRightX = innerWidth / 2 + width + 10 + dx * maxOffset;
          bottomRightY = innerHeight / 2 - 75 + height - 15 + dy * maxOffset;

          bottomLeftX = innerWidth / 2 + dx * maxOffset * 2;
          bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset * 2;
        } else if (dy < -0.2 && dx < -0.2) {
          //top left
          topLeftX = innerWidth / 2 - 75 + 5 + dx * maxOffset;
          topLeftY = innerHeight / 2 - 75 + dy * maxOffset;

          topRightX = innerWidth / 2 - 75 + width + 10 + dx * maxOffset * 2;
          topRightY = innerHeight / 2 - 75 + 15 + dy * maxOffset * 2;

          bottomRightX = innerWidth / 2 - 75 + width + dx * maxOffset * 2;
          bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset * 2;

          bottomLeftX = innerWidth / 2 - 75 - 10 + dx * maxOffset;
          bottomLeftY = innerHeight / 2 - 75 + height - 15 + dy * maxOffset;
        } else if (dy > 0.2 && dx > 0.2) {
          //bottom right
          topLeftX = innerWidth / 2 + 5 + dx * maxOffset * 2;
          topLeftY = innerHeight / 2 - 75 + dy * maxOffset * 2;

          topRightX = innerWidth / 2 + width + 10 + dx * maxOffset;
          topRightY = innerHeight / 2 - 75 + 15 + dy * maxOffset;

          bottomRightX = innerWidth / 2 + width + dx * maxOffset;
          bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset;

          bottomLeftX = innerWidth / 2 - 10 + dx * maxOffset * 2;
          bottomLeftY = innerHeight / 2 - 75 + height - 15 + dy * maxOffset * 2;
        } else if (dy > 0.2 && dx < -0.2) {
          //bottom left
          topLeftX = innerWidth / 2 - 75 - 10 + dx * maxOffset;
          topLeftY = innerHeight / 2 - 75 + 15 + dy * maxOffset;

          topRightX = innerWidth / 2 - 75 + width - 5 + dx * maxOffset * 2;
          topRightY = innerHeight / 2 - 75 + dy * maxOffset * 2;

          bottomRightX = innerWidth / 2 - 75 + width + 10 + dx * maxOffset * 2;
          bottomRightY =
            innerHeight / 2 - 75 + height - 15 + dy * maxOffset * 2;

          bottomLeftX = innerWidth / 2 - 75 + dx * maxOffset;
          bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset;
        } else if (dx < 0.2 && dx > -0.2 && dy < 0.2 && dy > -0.2) {
          topLeftX = innerWidth / 2 - 75 + dx * maxOffset;
          topLeftY = innerHeight / 2 - 75 + dy * maxOffset;

          topRightX = innerWidth / 2 - 75 + width + dx * maxOffset;
          topRightY = innerHeight / 2 - 75 + dy * maxOffset;

          bottomRightX = innerWidth / 2 - 75 + width + dx * maxOffset;
          bottomRightY = innerHeight / 2 - 75 + height + dy * maxOffset;

          bottomLeftX = innerWidth / 2 - 75 + dx * maxOffset;
          bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset;
        }
        const newPath = `path("M ${topLeftX} ${topLeftY} L ${topRightX} ${topRightY} L ${bottomRightX} ${bottomRightY} L ${bottomLeftX} ${bottomLeftY} Z")`;
        // console.log(getComputedStyle(boxRef.current!).clipPath);
        //animation
        tl3.revert();
        tl2.pause();
        tl.resume();
        tl.set(portalRef2.current, {
          opacity: 1,
        });
        tl.to(portalRef2.current, {
          "clip-path": newPath,
          duration: 0.4,
          ease: "none",
        });
        /// Mouse still logic
        clearTimeout(timer); // clear previous timer
        const timerVar = setTimeout(() => {
          tl.pause();
          tl2.resume();
          tl2.to(portalRef2.current, {
            "clip-path": `path(" M${innerWidth / 2 - 1} ${
              innerHeight / 2 - 1
            } L${innerWidth / 2 + 1} ${innerHeight / 2 - 1} L${
              innerWidth / 2 + 1
            } ${innerHeight / 2 + 1} L${innerWidth / 2 - 1} ${
              innerHeight / 2 + 1
            } Z")`,
            duration: 0.4,
            ease: "none",
          });
          tl2.set(portalRef2.current, {
            opacity: 0,
          });
        }, 500); // 500ms of no movement = still
        setTimer(timerVar);
      }}
    >
      <Nav />
      <div id="slides" className="absolute inset-0">
        <VideoPortal
          portalRef1={portalRef1}
          clearTimerPortal={clearTimerPortal}
          tls={[tl, tl2, tl3]}
          state={[portalOpen, setPortalOpen]}
        />
        <VideoPortal2
          refs={[heroRef, portalRef2]}
          clearTimerPortal={clearTimerPortal}
          tls={[tl, tl2, tl3]}
          state={[portalOpen, setPortalOpen]}
        />
      </div>
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
