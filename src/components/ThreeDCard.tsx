import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, type PropsWithChildren, type MouseEvent } from "react";
interface ThreeDCardProps {
  src?: string;
  className?: string;
}
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function ThreeDCard(props: PropsWithChildren<ThreeDCardProps>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { src, className } = props;
  const { contextSafe } = useGSAP();
  useGSAP(() => {
    if (!containerRef.current) return;

    // Set initial perspective on the container
    gsap.set(containerRef.current, {
      perspective: 500,
      transformStyle: "preserve-3d",
    });

    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 100,
        rotateX: -60,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          end: "top center",
        },
      }
    );
  });
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
      rotateX: -dy * maxOffset,
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
