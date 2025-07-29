import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import logo from "../imgs/logo.png";
import Button from "./Button";
export default function Nav() {
  const navRef = useRef<HTMLDivElement>(null);
  const { contextSafe } = useGSAP({ scope: navRef && navRef });
  const mouseEnter = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    if (!e.currentTarget) return null;
    let childBound = e.currentTarget.getBoundingClientRect();
    const parentBound = e.currentTarget.parentElement!.getBoundingClientRect();
    let left = childBound.left - parentBound.left;
    const x = left; // Center the button
    gsap.to("#right-nav-bg", {
      x,
      opacity: 1,
      duration: 0.5,
    });
    gsap.to(e.target, {
      color: "black",
      duration: 0.5,
    });
  });
  const mouseLeave = contextSafe((e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.target, {
      color: "white",
      duration: 0.5,
    });
    gsap.to("#right-nav-bg", {
      opacity: 0,
      duration: 0.5,
    });
  });
  const mouseLeaveParent = contextSafe(
    (e: React.MouseEvent<HTMLDivElement>) => {
      gsap.to(e.target, {
        color: "white",
        duration: 0.5,
      });
      gsap.to("#right-nav-bg", {
        opacity: 0,
        duration: 0.5,
      });
    }
  );
  return (
    <nav
      className=" font-general text-[10px] text-white uppercase flex w-full justify-between pr-10 mt-2 font-bold fixed z-10 "
      ref={navRef}
    >
      <div id="left-nav" className="flex items-center gap-2 text-black">
        <img src={logo} alt="logo" className="w-15" />
        <Button>PRODUCTS</Button>
        <Button width={130}>WHITEPAPER</Button>
      </div>
      <div id="right-nav" className="flex relative">
        <div
          id="buttons"
          className="flex gap-5"
          onMouseLeave={mouseLeaveParent}
        >
          <button
            className="cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            NEXUS
          </button>
          <button
            className="cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            VAULT
          </button>
          <button
            className="cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            PROLOGUE
          </button>
          <button
            className="cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            ABOUT
          </button>
          <button
            className="cursor-pointer"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            CONTACT
          </button>
          <div
            id="right-nav-bg"
            className="w-18 h-8 bg-white absolute top-1/2 -translate-y-1/2 left-0 z-[-1] rounded-full opacity-0"
          ></div>
        </div>
        <span id="audioIcon"></span>
      </div>
    </nav>
  );
}
