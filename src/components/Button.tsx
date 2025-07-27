import { useRef, type PropsWithChildren } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";

interface ButtonProps {
  textColor?: "white" | "black" | "yellow";
  bgColor?: "white" | "black" | "yellow" | "transparent";
}
export default function Button({
  textColor = "black",
  bgColor = "white",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLSpanElement>(null);
  const textRef2 = useRef<HTMLSpanElement>(null);
  const textColorObject = {
    black: "text-black",
    white: "text-white",
    yellow: "text-yellow",
  };

  // Initial clipPath for the button
  gsap.registerPlugin(MorphSVGPlugin);
  //   useGSAP(
  //     () => {
  //       if (!buttonRef.current || !textRef1.current || !textRef2.current)
  //         return null;
  //     },
  //     { scope: buttonRef }
  //   );
  const { contextSafe } = useGSAP({ scope: buttonRef });
  const onMouseEnter = contextSafe(() => {
    if (!buttonRef.current || !textRef1.current || !textRef2.current)
      return null;
    gsap.to(textRef1.current, {
      y: -10,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to(textRef2.current, {
      y: -10,
      opacity: 1,
      duration: 0.2,
    });
    gsap.to("#btn-bg", {
      //120 36
      morphSVG:
        "M 5 0 L 115 4 A 1 1 0 0 1 120 6 L120 34 A 1 1 0 0 1 115 36 L5 36 A 1 1 0 0 1 0 34 L 0 2 A 1 1 0 0 1 5 0 Z",
      duration: 0.3,
    });
  });
  const onMouseLeave = contextSafe(() => {
    if (!buttonRef.current) return null;
    gsap.to(textRef1.current, {
      y: 0,
      opacity: 1,
      duration: 0.2,
    });
    gsap.to(textRef2.current, {
      y: 0,
      opacity: 0,
      duration: 0.2,
    });
    gsap.to("#btn-bg", {
      // Add the reverse morphSVG animation
      morphSVG: "M 30 3 L 90 3 A 5 5 0 0 1 90 33 L 30 33 A 5 5 0 0 1 30 3 Z",
      duration: 0.3,
    });
    // gsap.to(buttonRef.current, {
    //   clipPath: `path('M${x10} ${y25} L${x90} ${y25} A 7 7 0 0 1 ${x90} ${y75} L${x10} ${y75} A 7 7 0 0 1 ${x10} ${y25} Z')`,
    //   duration: 0.3,
    // });
  });

  return (
    <>
      <div
        ref={buttonRef}
        className="w-30 h-9 relative cursor-pointer"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        <svg
          viewBox="0 0 120 36"
          className="absolute"
          width="100%"
          height="100%"
          fill={bgColor}
        >
          <path
            id="btn-bg"
            d={`M 30 3 L 90 3 A 5 5 0 0 1 90 33 L 30 33 A 5 5 0 0 1 30 3 Z`}
          ></path>
        </svg>
        <div
          id="btn-txt"
          className=" absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-between w-full h-full"
        >
          <span
            ref={textRef1}
            className="absolute top-1/2 left-1/2 -translate-1/2"
          >
            {children}
          </span>
          <span
            ref={textRef2}
            className={`${textColorObject[textColor]} absolute bottom-0 left-1/2 -translate-x-1/2 opacity-0`}
          >
            {children}
          </span>
        </div>
      </div>
    </>
  );
}
