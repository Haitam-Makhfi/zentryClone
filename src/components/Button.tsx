import type { HTMLAttributes } from "react";
import { useRef, type PropsWithChildren } from "react";
import gsap from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { useGSAP } from "@gsap/react";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  width?: number;
  textColor?: "white" | "black" | "yellow";
  bgColor?: "primary" | "black" | "yellow" | "transparent" | "white";
}
export default function Button({
  width = 120,
  textColor = "black",
  bgColor = "primary",
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const textRef1 = useRef<HTMLSpanElement>(null);
  const textRef2 = useRef<HTMLSpanElement>(null);
  const textColorObject = {
    black: "text-black",
    white: "text-[#dfdff0]",
    yellow: "text-yellow",
  };
  const bgColorObject = {
    black: "fill-black",
    primary: "fill-[#dfdff0]",
    yellow: "fill-yellow-200",
    transparent: "fill-transparent",
    white: "fill-white",
  };
  let start = width / 3.8;
  let end = width - start;
  // Initial clipPath for the button
  gsap.registerPlugin(MorphSVGPlugin);
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
      morphSVG: `M ${start} 3 L ${end} 4 Q ${end + 8} 6 ,${end + 6} 20 L ${
        end + 6
      } 16 Q ${end + 8} 34,${end} 36 L ${start} 36 Q ${start - 8} 34,${
        start - 6
      } 15 L ${start - 6} 15 Q ${start - 8} 1,${start} 3 Z`,
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
      morphSVG: `M ${start} 3 L ${end} 3 A 5 5 0 0 1 ${end} 33 L ${start} 33 A 5 5 0 0 1 ${start} 3 Z`,
      duration: 0.3,
    });
  });

  return (
    <>
      <div
        ref={buttonRef}
        style={{
          width: `${width}px`,
          height: "36px",
          position: "relative",
          cursor: "pointer",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        <svg
          viewBox={`0 0 ${width} 36`}
          className={`absolute ${bgColorObject[bgColor]}`}
          width="100%"
          height="100%"
        >
          <path
            id="btn-bg"
            d={`M ${start} 3 L ${end} 3 A 5 5 0 0 1 ${end} 33 L ${start} 33 A 5 5 0 0 1 ${start} 3 Z`}
          ></path>
        </svg>
        <div
          id="btn-txt"
          className="font-general font-bold uppercase absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-between w-full h-full"
        >
          <span
            ref={textRef1}
            className={`${textColorObject[textColor]} absolute top-1/2 left-1/2 -translate-1/2`}
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
