import type { PropsWithChildren, RefObject } from "react";
import hero1 from "../videos/hero-1.mp4";
// import hero2 from "../videos/hero-2.mp4";
// import hero3 from "../videos/hero-3.mp4";
// import hero4 from "../videos/hero-4.mp4";
interface heroBgProps {
  videoIndex: number;
  videoElRef: RefObject<HTMLVideoElement | null>;
}
export default function HeroBg({
  // videoIndex,
  videoElRef,
}: PropsWithChildren<heroBgProps>) {
  return (
    <>
      <video
        id="videoBg"
        className="fixed inset-0 h-full w-full z-[-2] object-cover"
        loop
        // autoPlay
        playsInline
        muted
        ref={videoElRef}
      >
        <source src={hero1} type="video/mp4" />
      </video>
    </>
  );
}
