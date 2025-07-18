import {
  type RefObject,
  type Dispatch,
  type SetStateAction,
  useRef,
} from "react";
import gsap from "gsap";
import hero2 from "../videos/hero-2.mp4";
interface videoPortalProps {
  refs: [
    heroRef: RefObject<HTMLDivElement | null>,
    portalRef2?: RefObject<HTMLDivElement | null>
  ];
  clearTimerPortal: () => void;
  tls: GSAPTimeline[];
  state: [
    portalOpen: boolean,
    setPortalOpen: Dispatch<SetStateAction<boolean>>
  ];
}
export default function VideoPortal({
  refs,
  clearTimerPortal,
  tls,
  state,
}: videoPortalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [heroRef, portalRef2] = refs;
  const [tl3] = tls;
  const [portalOpen, setPortalOpen] = state;
  const { innerWidth, innerHeight } = window;
  return (
    <div
      id="video-portal2"
      className="w-full h-full bg-amber-600 absolute top-1/2 left-1/2 -translate-1/2 cursor-pointer z-2"
      ref={portalRef2}
      style={{
        clipPath: `path(" M${innerWidth / 2 - 1} ${innerHeight / 2 - 1} L${
          innerWidth / 2 + 1
        } ${innerHeight / 2 - 1} L${innerWidth / 2 + 1} ${
          innerHeight / 2 + 1
        } L${innerWidth / 2 - 1} ${innerHeight / 2 + 1} Z")`,
        opacity: 0,
      }}
      onMouseMove={(e) => {
        e.stopPropagation();
      }}
      onMouseEnter={() => {
        clearTimerPortal();
      }}
      onClick={(e) => {
        if (portalOpen) return null;
        e.stopPropagation();
        setPortalOpen(true);
        tls.forEach((tl) => {
          tl3.revert();
          tl.kill();
        });
        gsap.to(portalRef2!.current, {
          "clip-path": `path("M 0 0 L ${innerWidth} 0 L ${innerWidth} ${innerHeight} L 0 ${innerHeight} Z")`,
          duration: 1,
          ease: "power1.inOut",
        });
        videoRef.current!.play();
      }}
    >
      <video
        id="video-portal"
        className="w-full h-full object-cover"
        loop
        // autoPlay
        playsInline
        muted
        ref={videoRef}
      >
        <source src={hero2} type="video/mp4" />
      </video>
    </div>
  );
}
