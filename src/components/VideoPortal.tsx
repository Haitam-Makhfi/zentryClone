import {
  useEffect,
  useRef,
  type Dispatch,
  type HTMLAttributes,
  type RefObject,
  type SetStateAction,
} from "react";
import gsap from "gsap";
import hero1 from "../videos/hero-1.mp4";
interface videoPortalProps extends HTMLAttributes<HTMLDivElement> {
  portalRef1?: RefObject<HTMLDivElement | null>;
  funcs: [clearTimerPortal: () => void];
  tls: GSAPTimeline[];
  state: [
    portalOpen: boolean,
    setPortalOpen: Dispatch<SetStateAction<boolean>>,
    setRefIndex: Dispatch<SetStateAction<number>>,
    setPortalIndex: Dispatch<SetStateAction<number>>
  ];
}
export default function VideoPortal({
  portalRef1,
  funcs,
  tls,
  state,
  ...props
}: videoPortalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [portalOpen, setPortalOpen, setRefIndex, setPortalIndex] = state;
  const [tl3] = tls;
  const [clearTimerPortal] = funcs;
  const { innerWidth, innerHeight } = window;
  useEffect(() => {});
  return (
    <div
      id="video-portal"
      className="w-full h-full absolute top-1/2 left-1/2 -translate-1/2"
      ref={portalRef1}
      // onMouseMove={(e) => {
      //   e.stopPropagation();
      // }}
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
        gsap.to(portalRef1!.current, {
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
        autoPlay
        loop
        playsInline
        muted
        ref={videoRef}
      >
        <source src={hero1} type="video/mp4" />
      </video>
    </div>
  );
}
