import type { RefObject } from "react";
import hero1 from "../videos/hero-1.mp4";
import hero2 from "../videos/hero-2.mp4";
import hero3 from "../videos/hero-3.mp4";
import hero4 from "../videos/hero-4.mp4";
interface heroBgProps {
  videoIndex: number;
  videoElRef: RefObject<HTMLVideoElement | null>;
}
export default function HeroBg({ videoIndex, videoElRef }: heroBgProps) {
  const bgVideoArray = [hero1, hero2, hero3, hero4];
  return (
    <video
      id="videoBg"
      className="absolute inset-0 block z-[-1] "
      loop
      autoPlay
      playsInline
      muted
      ref={videoElRef}
    >
      <source src={bgVideoArray[videoIndex]} type="video/mp4" />
    </video>
  );
}
