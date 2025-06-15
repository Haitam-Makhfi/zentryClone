import { useEffect, useRef, useState } from "react";
import rotatationTextAnimation from "../Hooks/rotatationTextAnimation";
import Nav from "./Nav";
import HeroBg from "./HeroBg";
export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const videoElRef = useRef<HTMLVideoElement>(null);
  const [videoIndex, setVideoIndex] = useState<number>(0);
  useEffect(() => {
    titleRef.current !== null && rotatationTextAnimation(titleRef.current);
  });
  return (
    <section
      id="hero"
      className="relative w-full h-[100vh] overflow-hidden cursor-pointer"
      onClick={() => {
        videoIndex < 3 ? setVideoIndex((p) => p + 1) : setVideoIndex(0);
        videoElRef.current?.load();
      }}
    >
      <Nav />
      <HeroBg videoIndex={videoIndex} videoElRef={videoElRef} />
    </section>
  );
}

{
  /* <h1
  className="w-[fit-content] text-center text-4xl font-bold mt-15 mx-auto uppercase  origin-center "
  ref={titleRef}
>
  gaming
</h1> */
}
