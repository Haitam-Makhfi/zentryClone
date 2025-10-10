import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import logo from "../imgs/logo.png";
import Button from "./Button";
export default function Nav() {
  const navRef = useRef<HTMLDivElement>(null);
  const [target, setTarget] = useState<HTMLElement | null>(null);
  let lastScroll = 0;
  // console.log("scroll triger created");
  useGSAP(() => {
    ScrollTrigger.create({
      onUpdate: (self) => {
        if (!navRef.current) return null;
        const current = self.scroll();
        if (Math.abs(current - lastScroll) > 30) {
          if (self.direction === 1) {
            //down
            gsap.to(navRef.current, {
              y: "-150%",
              backgroundColor: "black",
            });
          } else {
            //up
            gsap.to(navRef.current, {
              y: 0,
            });
          }
          lastScroll = current;
        }
      },
    });
    ScrollTrigger.create({
      trigger: "body", // or your top element
      start: "top top", // when the top of body hits the top of viewport
      end: "+=20px",
      onEnterBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          duration: 0.3,
        });
      },
    });
  }, []);

  const { contextSafe } = useGSAP({ scope: navRef });
  const mouseEnter = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget) return null;
    let childBound = e.currentTarget.getBoundingClientRect();
    const parentBound = e.currentTarget.parentElement!.getBoundingClientRect();
    let left = childBound.left - parentBound.left;
    const x = left; // Center the button
    gsap.to("#right-nav-bg", {
      x,
      opacity: 1,
      duration: 0.2,
    });
    gsap.set(e.target, {
      color: "black",
    });
    setTarget(e.currentTarget);
  });
  const mouseLeave = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.set(e.target, {
      color: "white",
    });
  });
  const mouseLeaveParent = contextSafe(() => {
    gsap.set(target, {
      color: "white",
    });
    gsap.to("#right-nav-bg", {
      opacity: 0,
      duration: 0.2,
    });
  });
  return (
    <nav
      className=" font-general text-[10px] text-white uppercase flex w-[95%] justify-between mt-2 font-bold fixed z-10 justify-self-center rounded-lg"
      ref={navRef}
    >
      <div id="left-nav" className="flex items-center gap-2 text-black">
        <img src={logo} alt="logo" className="w-15" />
        <Button>PRODUCTS</Button>
        <Button width={130}>WHITEPAPER</Button>
      </div>
      <div id="right-nav" className="flex relative">
        <div id="buttons" className="flex" onMouseLeave={mouseLeaveParent}>
          <button
            className="w-22 text-center cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            NEXUS
          </button>
          <button
            className="w-22 text-center cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            VAULT
          </button>
          <button
            className="w-22 text-center cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            PRLOGUE
          </button>
          <button
            className="w-22 text-center cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            ABOUT
          </button>
          <button
            className="w-22 text-center cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            CONTACT
          </button>
          <div
            id="right-nav-bg"
            className="w-22 h-8 bg-primary absolute top-1/2 -translate-y-1/2 left-0 z-[-1] rounded-full opacity-0"
          ></div>
        </div>
        <span id="audioIcon"></span>
      </div>
    </nav>
  );
}
