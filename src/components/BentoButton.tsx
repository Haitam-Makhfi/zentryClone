import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function BentoButton(props: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { contextSafe } = useGSAP();
  useGSAP(() => {
    // Set initial state
    if (buttonRef.current) {
      gsap.set(buttonRef.current, {
        background: "black",
      });
    }
  }, []);

  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    const bound = buttonRef.current?.getBoundingClientRect();
    if (!bound) return null;
    const mouseX = e.clientX - bound.left;
    const mouseY = e.clientY - bound.top;
    gsap.to(buttonRef.current, {
      background: `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(124, 134, 255, 0.8), black 40px)`,
      duration: 0.1,
      ease: "none",
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(buttonRef.current, {
      background: "black",
      duration: 0.1,
      ease: "none",
    });
  });
  return (
    <button
      ref={buttonRef}
      className="absolute bottom-5 left-10 px-5 py-1 font-general text-gray-600 border border-gray-800 rounded-2xl cursor-pointer transition-colors duration-300 bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
    </button>
  );
}
