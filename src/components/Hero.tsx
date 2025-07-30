import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import rotatationTextAnimation from "../Hooks/rotatationTextAnimation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import VideoPortal from "./VideoPortal";
import VideoPortal2 from "./VideoPortal2";
import VideoPortal3 from "./VideoPortal3";
import VideoPortal4 from "./VideoPortal4";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const portalRef1 = useRef<HTMLDivElement>(null);
  const portalRef2 = useRef<HTMLDivElement>(null);
  const portalRef3 = useRef<HTMLDivElement>(null);
  const portalRef4 = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();
  const [portalOpen1, setPortalOpen1] = useState<boolean>(true);
  const [portalOpen2, setPortalOpen2] = useState<boolean>(false);
  const [portalOpen3, setPortalOpen3] = useState<boolean>(false);
  const [portalOpen4, setPortalOpen4] = useState<boolean>(false);
  const [refIndex, setRefIndex] = useState<number>(1);
  const [portalIndex, setPortalIndex] = useState<number>(1);
  useEffect(() => {
    if (portalIndex == 4 || refIndex == 4) {
      setPortalOpen1(false);
      setRefIndex(0);
      setPortalIndex(0);
    }
  }, [portalIndex, refIndex]);
  useLayoutEffect(() => {
    titleRef.current && rotatationTextAnimation(titleRef.current);
    const el = document.getElementById("portal-titles")!
      .firstChild as HTMLElement;
    rotatationTextAnimation(el);
    // const el = document.getElementById("portal-titles")!.firstChild;
    // rotatationTextAnimation(el as HTMLElement);
  }, []);
  useLayoutEffect(() => {
    const container = document.getElementById("portal-titles");
    if (!container) return;

    let prev: HTMLElement | null = null;
    if (refIndex === 0) {
      prev = container.lastChild as HTMLElement;
    } else if (refIndex === 2) {
      prev = container.firstChild as HTMLElement;
    } else if (refIndex > 2) {
      prev = document.getElementById(`portal-title-${refIndex - 1}`);
    }
    prev && rotatationTextAnimation(prev as HTMLElement, -90, 90, true);
    //animating the current portal title
    const timer = setTimeout(() => {
      let curr: HTMLElement | null = null;
      if (refIndex === 0) {
        curr = container.lastChild as HTMLElement;
      } else if (refIndex >= 2) {
        curr = document.getElementById(`portal-title-${refIndex}`);
      }
      curr && rotatationTextAnimation(curr);
    }, 1300);
    return () => {
      clearTimeout(timer);
    };
  }, [refIndex]);
  useLayoutEffect(() => {
    //handling on MouseMove event so that the top portal dont close when the mouse is over it
    if (refIndex === 0) {
      const prevEl = refArray[3].current;
      const currEl = refArray[0].current;

      const stopPropagation = (e: MouseEvent) => e.stopPropagation();
      if (prevEl && currEl) {
        prevEl.onmousemove = null;
        currEl.addEventListener("mousemove", stopPropagation);
        const timer = setTimeout(() => {
          // handling iterating z-index and display
          //for the first portal
          prevEl.style.zIndex = "1";
          prevEl.style.display = "block";
          prevEl.style.cursor = "default";
          currEl.style.zIndex = "2";
          currEl.style.display = "block";
          currEl.style.cursor = "pointer";
          refArray.forEach((ref, index) => {
            if (
              ref.current !== currEl &&
              ref.current !== prevEl &&
              ref.current
            ) {
              gsap.set(ref.current, {
                "clip-path": `path(" M${innerWidth / 2 - 1} ${
                  innerHeight / 2 - 1
                } L${innerWidth / 2 + 1} ${innerHeight / 2 - 1} L${
                  innerWidth / 2 + 1
                } ${innerHeight / 2 + 1} L${innerWidth / 2 - 1} ${
                  innerHeight / 2 + 1
                } Z")`,
                opacity: "0",
                display: "none",
                zIndex: "0",
              });
              const dispatch = dispatchArray[index];
              dispatch(false);
            }
          });
        }, 1000);
        // Cleanup function to remove the event listener
        return () => {
          currEl.removeEventListener("mousemove", stopPropagation);
          clearTimeout(timer);
        };
      }
    }
    if (refIndex !== 0 && refIndex <= 3) {
      const prevEl = refArray[refIndex - 1].current;
      const currEl = refArray[refIndex].current;

      const stopPropagation = (e: MouseEvent) => e.stopPropagation();

      if (prevEl && currEl) {
        prevEl.onmousemove = null;
        currEl.addEventListener("mousemove", stopPropagation);

        const timer = setTimeout(() => {
          // handling iterating z-index and display
          //for the rest of the portals
          prevEl.style.zIndex = "1";
          prevEl.style.display = "block";
          prevEl.style.cursor = "default";
          currEl.style.zIndex = "2";
          currEl.style.display = "block";
          currEl.style.cursor = "pointer";
          refArray.forEach((ref, index) => {
            if (
              ref.current !== currEl &&
              ref.current !== prevEl &&
              ref.current
            ) {
              gsap.set(ref.current, {
                "clip-path": `path(" M${innerWidth / 2 - 1} ${
                  innerHeight / 2 - 1
                } L${innerWidth / 2 + 1} ${innerHeight / 2 - 1} L${
                  innerWidth / 2 + 1
                } ${innerHeight / 2 + 1} L${innerWidth / 2 - 1} ${
                  innerHeight / 2 + 1
                } Z")`,
                opacity: "0",
                display: "none",
                zIndex: "0",
              });
              const dispatch = dispatchArray[index];
              dispatch(false);
            }
          });
        }, 1000);
        //handling h2 animation
        // Cleanup function to remove the event listener
        return () => {
          currEl.removeEventListener("mousemove", stopPropagation);
          clearTimeout(timer);
        };
      }
    }
  }, [refIndex]);
  //title animation
  useGSAP(() => {
    gsap.fromTo(
      "#sub-title-content",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      }
    );
  });
  // Arrays
  const refArray = [portalRef1, portalRef2, portalRef3, portalRef4];
  const portalArray = [portalOpen1, portalOpen2, portalOpen3, portalOpen4];
  const dispatchArray = [
    setPortalOpen1,
    setPortalOpen2,
    setPortalOpen3,
    setPortalOpen4,
  ];
  //animation declation
  gsap.defaults({
    force3D: true,
  });
  ///3d tilt animation
  const tl = gsap.timeline({
    defaults: {
      force3D: true,
    },
    paused: true,
  });
  /// shrink animation
  const tl2 = gsap.timeline({
    defaults: {
      force3D: true,
    },
    paused: true,
  });
  /// breathing animation
  const tl3 = gsap.timeline({
    defaults: {
      force3D: true,
    },
  });
  const { innerWidth, innerHeight } = window;
  //functions
  const clearTimerPortal = () => {
    clearTimeout(timer);
    if (!portalArray[portalIndex] && !(refIndex == 4)) {
      // tl2.resume();
      tl3.to(refArray[refIndex].current, {
        "clip-path": `path(" M${innerWidth / 2 - 100} ${
          innerHeight / 2 - 100
        } L${innerWidth / 2 + 100} ${innerHeight / 2 - 100} L${
          innerWidth / 2 + 100
        } ${innerHeight / 2 + 100} L${innerWidth / 2 - 100} ${
          innerHeight / 2 + 100
        } Z")`,
        duration: 1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
      });
    }
  };
  return (
    <div id="hero-wraper" className="w-full h-screen relative">
      <section
        id="hero"
        className="absolute w-full h-full overflow-hidden"
        ref={heroRef}
        onMouseMove={(e) => {
          if (portalArray[portalIndex] || refIndex == 4) return null;
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
          let topLeftX: number = 0;
          let topLeftY: number = 0;
          let topRightX: number = 0;
          let topRightY: number = 0;
          let bottomRightX: number = 0;
          let bottomRightY: number = 0;
          let bottomLeftX: number = 0;
          let bottomLeftY: number = 0;
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
            bottomLeftY =
              innerHeight / 2 - 75 + height - 15 + dy * maxOffset * 2;
          } else if (dy > 0.2 && dx < -0.2) {
            //bottom left
            topLeftX = innerWidth / 2 - 75 - 10 + dx * maxOffset;
            topLeftY = innerHeight / 2 - 75 + 15 + dy * maxOffset;

            topRightX = innerWidth / 2 - 75 + width - 5 + dx * maxOffset * 2;
            topRightY = innerHeight / 2 - 75 + dy * maxOffset * 2;

            bottomRightX =
              innerWidth / 2 - 75 + width + 10 + dx * maxOffset * 2;
            bottomRightY =
              innerHeight / 2 - 75 + height - 15 + dy * maxOffset * 2;

            bottomLeftX = innerWidth / 2 - 75 + dx * maxOffset;
            bottomLeftY = innerHeight / 2 - 75 + height + dy * maxOffset;
          } else if (dx < 0.2 && dx > -0.2 && dy < 0.2 && dy > -0.2) {
            //center
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
          tl.set(refArray[refIndex].current, {
            opacity: 1,
          });
          tl.to(refArray[refIndex].current, {
            "clip-path": newPath,
            duration: 0.4,
            ease: "none",
          });
          /// Mouse still logic
          clearTimeout(timer); // clear previous timer
          const timerVar = setTimeout(() => {
            tl.pause();
            tl2.resume();
            tl2.to(refArray[refIndex].current, {
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
            tl2.set(refArray[refIndex].current, {
              opacity: 0,
            });
          }, 500); // 500ms of no movement = still
          setTimer(timerVar);
        }}
      >
        <div
          id="hero-content"
          className="absolute top-10 left-10 z-3 font-robert-medium text-primary"
        >
          <h1
            className="w-[fit-content] text-primary font-zentry text-center text-[11rem] uppercase  origin-center cursor-default"
            ref={titleRef}
          >
            redefine
          </h1>
          <div id="sub-title-content" className="absolute top-[80%] left-0 ">
            <p>enter the meta game</p>
            <p>unleash the play economy</p>
            <Button
              width={220}
              textColor="black"
              bgColor="yellow"
              className="text-[10px] font-regular mt-3 absolute -left-12"
            >
              <FontAwesomeIcon icon={faCaretRight} className="mr-1" />
              whatch trailer
            </Button>
          </div>
        </div>
        <div id="slides" className="absolute inset-0">
          <VideoPortal
            portalRef1={portalRef1}
            funcs={[clearTimerPortal]}
            tls={[tl, tl2, tl3]}
            state={[
              portalOpen1,
              refIndex,
              setPortalOpen1,
              setRefIndex,
              setPortalIndex,
            ]}
            style={{
              clipPath: `path("M 0 0 L ${innerWidth} 0 L ${innerWidth} ${innerHeight} L 0 ${innerHeight} Z")`,
            }}
          />
          <VideoPortal2
            portalRef2={portalRef2}
            funcs={[clearTimerPortal]}
            tls={[tl, tl2, tl3]}
            state={[
              portalOpen2,
              refIndex,
              setPortalOpen2,
              setRefIndex,
              setPortalIndex,
            ]}
            style={{
              clipPath: `path(" M${innerWidth / 2 - 1} ${
                innerHeight / 2 - 1
              } L${innerWidth / 2 + 1} ${innerHeight / 2 - 1} L${
                innerWidth / 2 + 1
              } ${innerHeight / 2 + 1} L${innerWidth / 2 - 1} ${
                innerHeight / 2 + 1
              } Z")`,
            }}
          />
          <VideoPortal3
            portalRef3={portalRef3}
            funcs={[clearTimerPortal]}
            tls={[tl, tl2, tl3]}
            state={[
              portalOpen3,
              refIndex,
              setPortalOpen3,
              setRefIndex,
              setPortalIndex,
            ]}
            style={{
              clipPath: `path(" M${innerWidth / 2 - 1} ${
                innerHeight / 2 - 1
              } L${innerWidth / 2 + 1} ${innerHeight / 2 - 1} L${
                innerWidth / 2 + 1
              } ${innerHeight / 2 + 1} L${innerWidth / 2 - 1} ${
                innerHeight / 2 + 1
              } Z")`,
            }}
          />
          <VideoPortal4
            portalRef4={portalRef4}
            funcs={[clearTimerPortal]}
            tls={[tl, tl2, tl3]}
            state={[
              portalOpen4,
              refIndex,
              setPortalOpen4,
              setRefIndex,
              setPortalIndex,
            ]}
            style={{
              clipPath: `path(" M${innerWidth / 2 - 1} ${
                innerHeight / 2 - 1
              } L${innerWidth / 2 + 1} ${innerHeight / 2 - 1} L${
                innerWidth / 2 + 1
              } ${innerHeight / 2 + 1} L${innerWidth / 2 - 1} ${
                innerHeight / 2 + 1
              } Z")`,
            }}
          />
        </div>
        <div
          id="portal-titles"
          className=" absolute top-[65%] right-10 z-3 w-[fit-content] text-primary font-zentry text-center text-[10rem] uppercase origin center cursor-default"
        >
          <h2 id="portal-title-1">gaming</h2>
          <h2 id="portal-title-2">identity</h2>
          <h2 id="portal-title-3">reality</h2>
          <h2 id="portal-title-4">agentic</h2>
        </div>
      </section>
    </div>
  );
}
