// import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";
export default function Scroller() {
  const contanerRef = useRef<HTMLDivElement | null>(null);
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      if (!scrollerRef.current) return;
      gsap.to(scrollerRef.current, {
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "top top",
          end: "+=2800px",
          pin: scrollerRef.current,
          // markers: true,
        },
      });
    },
    { dependencies: [], scope: contanerRef }
  );
  useGSAP(
    () => {
      if (!contanerRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "top top",
          end: "+=700px",
          // markers: true,
          toggleActions: "restart none none reverse",
        },
      });
      tl.to("#mvmAndToggle1", {
        y: -25,
        ease: "power3.out",
      }).to(
        "#mvmAndToggle1 h3",
        {
          fontSize: "16px",
          fontWeight: "600",
          ease: "none",
          duration: 0.2,
        },
        "<"
      );
      gsap.to("#mvmAndOpacity1", {
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "top top",
          end: "+=700px",
          toggleActions: "restart none none reverse",
        },
        y: -20,
        opacity: 1,
        display: "flex",
        duration: 0.4,
        ease: "none",
      });
      gsap.to("#mvmAndOpacity1 .bar .progress", {
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "top top",
          end: "+=700px",
          scrub: 2,
          toggleActions: "restart none none reverse",
        },
        scaleY: 1,
        duration: 1,
        ease: "none",
      });
    },
    { dependencies: [] }
  );
  useGSAP(
    () => {
      if (!contanerRef.current) return;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "700px top",
          end: "+=700px",
          // markers: true,
          toggleActions: "restart none none reverse",
        },
      });
      tl.to("#mvmAndToggle2", {
        y: -25,
        ease: "power3.out",
      })
        .to(
          "#mvmAndToggle2 h3",
          {
            fontSize: "16px",
            fontWeight: "600",
            ease: "none",
            duration: 0.2,
          },
          "<"
        )
        .to(
          "#mvmAndOpacity2",
          {
            y: -20,
            opacity: 1,
            display: "flex",
            duration: 0.1,
            ease: "none",
          },
          "<"
        );
      gsap.to("#mvmAndOpacity2 .bar .progress", {
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "700px top",
          end: "+=700px",
          pinSpacing: false,
          scrub: 2,
          toggleActions: "restart none none reverse",
        },
        scaleY: 1,
        duration: 1,
        ease: "none",
      });
      const revTl = gsap.timeline({
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "700px top",
          end: "+=700px",
          // markers: true,
          toggleActions: "restart none none reverse",
        },
      });
      revTl
        .to("#mvmAndOpacity1", {
          y: 0,
          opacity: 0,
          display: "none",
          duration: 0.1,
          ease: "none",
        })
        .to("#mvmAndToggle1", {
          y: -20,
          ease: "power3.out",
        })
        .to(
          "#mvmAndToggle1 h3",
          {
            fontSize: "9px",
            fontWeight: "400",
            ease: "none",
            duration: 0.2,
          },
          "<"
        );
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "1400px top",
          end: "+=700px",
          // markers: true,
          toggleActions: "restart none none reverse",
        },
      });
      tl2
        .to("#mvmAndToggle3", {
          y: -25,
          ease: "power3.out",
        })
        .to(
          "#mvmAndToggle3 h3",
          {
            fontSize: "16px",
            fontWeight: "600",
            ease: "none",
            duration: 0.1,
          },
          "<"
        )
        .to(
          "#mvmAndOpacity3",
          {
            y: -20,
            opacity: 1,
            display: "flex",
            duration: 0.1,
            ease: "none",
          },
          "<"
        );
      gsap.to("#mvmAndOpacity3 .bar .progress", {
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "1400px top",
          end: "+=700px",
          pinSpacing: false,
          scrub: 2,
          toggleActions: "restart none none reverse",
        },
        scaleY: 1,
        duration: 1,
        ease: "none",
      });
      const revTl2 = gsap.timeline({
        scrollTrigger: {
          trigger: contanerRef.current,
          start: "1400px top",
          end: "+=700px",
          // markers: true,
          toggleActions: "restart none none reverse",
        },
      });
      revTl2
        .to("#mvmAndOpacity2", {
          y: 0,
          opacity: 0,
          display: "none",
          duration: 0.1,
          ease: "none",
        })
        .to("#mvmAndToggle2", {
          y: -20,
          ease: "power3.out",
        })
        .to(
          "#mvmAndToggle2 h3",
          {
            fontSize: "9px",
            fontWeight: "400",
            ease: "none",
            duration: 0.1,
          },
          "<"
        );
    },
    { dependencies: [] }
  );
  return (
    <section id="container" ref={contanerRef} className="w-screen h-full">
      <div
        id="scroller"
        ref={scrollerRef}
        className="relative w-full h-screen flex flex-col justify-between"
      >
        <div id="scroller-content" className="ml-10">
          <h2 className="text-8xl font-zentry w-[20ch] mt-20">
            The symbiotic world powered by ZENTRY
          </h2>
          <Button
            width={200}
            textColor="white"
            bgColor="black"
            className="text-[10px] font-regular mt-3 absolute -left-10 uppercase"
          >
            enter vault
          </Button>
        </div>
        <div
          id="scrolled-items"
          className="font-general text-[9px] text-gray-600 uppercase ml-10 mb-20"
        >
          <ul>
            <li className="mb-5">
              <div id="mvmAndToggle1" className=" flex items-center mb-1">
                <span className="mr-10">01</span>
                <h3>shaping zentry collectively</h3>
              </div>
              <div
                id="mvmAndOpacity1"
                className=" hidden  opacity-0 w-[50ch] text-black"
              >
                <div className="bar h-15 w-2 rounded-2xl bg-gray-400 ml-1 mr-12 relative">
                  <div className="progress absolute inset-0 w-full h-full rounded-2xl bg-black  scale-y-0 origin-top"></div>
                </div>
                <p>
                  ZENT holders shape governance, set direction, and steer the
                  evolution of the Human-Agentic OS, serving as co-architects of
                  a new civilization
                </p>
              </div>
            </li>
            <li className="mb-5">
              <div id="mvmAndToggle2" className="flex items-center mb-1">
                <span className="mr-10">02</span>
                <h3>Unlocking Economic Opportunity</h3>
              </div>
              <div
                id="mvmAndOpacity2"
                className="hidden  opacity-0 w-[50ch] text-black"
              >
                <div className="bar h-15 w-2 rounded-2xl bg-gray-400 ml-1 mr-12 relative">
                  <div className="progress absolute inset-0 w-full h-full rounded-2xl bg-black  scale-y-0 origin-top"></div>
                </div>
                <p>
                  ZENT is the index for crypto and AI, giving holders access to
                  new markets, agent tokenization, data economies, and protocol
                  rewards, unlocking utility and upside across the industries it
                  powers.
                </p>
              </div>
            </li>
            <li className="mb-5">
              <div id="mvmAndToggle3" className="flex items-center mb-1">
                <span className="mr-10">03</span>
                <h3>Sharing Value Accrued</h3>
              </div>
              <div
                id="mvmAndOpacity3"
                className="hidden  opacity-0 w-[50ch] text-black"
              >
                <div className="bar h-15 w-2 rounded-2xl bg-gray-400 ml-1 mr-12 relative">
                  <div className="progress absolute inset-0 w-full h-full rounded-2xl bg-black  scale-y-0 origin-top"></div>
                </div>
                <p>
                  ZENT holders benefit from Zentry’s ecosystem growth, capturing
                  value from partnerships, treasury strategy, and real-world
                  participation.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
