import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type PropsWithChildren, type MouseEvent } from "react";
interface ThreeDCardProps {
  src?: string;
  className?: string;
}
gsap.registerPlugin(useGSAP);
export default function ThreeDCard(props: PropsWithChildren<ThreeDCardProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { src, className } = props;
  const { contextSafe } = useGSAP();
  const handleMouseMove = contextSafe((e: MouseEvent) => {
    const bound = containerRef.current
      ? containerRef.current.getBoundingClientRect()
      : null;
    const maxOffset = 10;
    if (!bound) return null;
    const mouseX = e.clientX - bound.left;
    const mouseY = e.clientY - bound.top;
    const centerX = bound.width / 2;
    const centerY = bound.height / 2;
    const dx = (mouseX - centerX) / centerX;
    const dy = (mouseY - centerY) / centerY;
    gsap.to(containerRef.current, {
      scale: 0.97,
      x: dx,
      y: dy,
      rotateX: dy * maxOffset,
      rotateY: dx * maxOffset,
      ease: "power2.out",
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.to(containerRef.current, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      ease: "power2.out",
    });
  });
  return (
    <div
      className={className && className}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        src={src && src}
        className={`w-full h-full object-cover object-center rounded-lg`}
        autoPlay
        muted
        playsInline
        loop
      ></video>
      {props.children}
    </div>
  );
}
