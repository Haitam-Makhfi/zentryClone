import {
  type RefObject,
  type Dispatch,
  type SetStateAction,
  useRef,
  useEffect,
  type HTMLAttributes,
} from "react";
import gsap from "gsap";
import hero2 from "../videos/hero-2.mp4";
interface videoPortalProps extends HTMLAttributes<HTMLDivElement> {
  portalRef2: RefObject<HTMLDivElement | null>;
  funcs: [clearTimerPortal: () => void];
  tls: GSAPTimeline[];
  state: [
    portalOpen: boolean,
    refIndex: number,
    setPortalOpen: Dispatch<SetStateAction<boolean>>,
    setRefIndex: Dispatch<SetStateAction<number>>,
    setPortalIndex: Dispatch<SetStateAction<number>>
  ];
}
export default function VideoPortal2({
  portalRef2,
  funcs,
  tls,
  state,
  ...props
}: videoPortalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [portalOpen, refIndex, setPortalOpen, setRefIndex, setPortalIndex] =
    state;
  useEffect(() => {
    if (refIndex === 0) {
      videoRef.current!.pause();
      videoRef.current!.currentTime = 0;
    }
    if (refIndex === 1 && portalRef2) {
      portalRef2.current!.classList.add("pointer-events-none");
      setTimeout(() => {
        portalRef2.current!.classList.remove("pointer-events-none");
      }, 1000);
    }
  }, [refIndex]);
  const [clearTimerPortal] = funcs;
  const { innerWidth, innerHeight } = window;
  return (
    <div
      id="video-portal2"
      className="w-full h-full absolute top-1/2 left-1/2 -translate-1/2"
      ref={portalRef2}
      onMouseEnter={() => {
        clearTimerPortal();
      }}
      onClick={(e) => {
        if (portalOpen) return null;
        e.stopPropagation();
        setPortalOpen(true);
        tls.forEach((tl) => {
          tl.kill();
        });
        gsap.to(portalRef2!.current, {
          "clip-path": `path("M 0 0 L ${innerWidth} 0 L ${innerWidth} ${innerHeight} L 0 ${innerHeight} Z")`,
          duration: 1,
          ease: "power1.out",
        });
        videoRef.current!.play();
        setRefIndex((p) => p + 1);
        setPortalIndex((p) => p + 1);
      }}
      {...props}
    >
      <video
        className="w-full h-full object-cover"
        loop
        playsInline
        muted
        ref={videoRef}
      >
        <source src={hero2} type="video/mp4" />
      </video>
    </div>
  );
}
