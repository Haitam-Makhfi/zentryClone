import {
  useEffect,
  useRef,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import gsap from "gsap";
import hero1 from "../videos/hero-1.mp4";
export interface videoPortalProps {
  portalRef: RefObject<HTMLDivElement | null>;
  clearTimerPortal: () => void;
  tls: GSAPTimeline[];
  state: [setPortalOpen: Dispatch<SetStateAction<boolean>>];
}
export default function VideoPortal({
  portalRef,
  clearTimerPortal,
  state,
}: videoPortalProps) {
  const [setPortalOpen] = state;
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {});
  return (
    <div
      id="video-portal"
      className="w-40 h-40 rounded-md bg-transparent absolute top-1/2 left-1/2 -translate-1/2  scale-0 cursor-pointer z-1"
      ref={portalRef}
      onMouseMove={(e) => {
        e.stopPropagation();
      }}
      onMouseEnter={() => {
        clearTimerPortal();
      }}
      onClick={(e) => {
        e.stopPropagation();
        setPortalOpen(true);

        gsap.to(portalRef.current, {
          duration: 2,
          ease: "power4.out",
        });
        videoRef.current?.play();
      }}
    >
      <video
        src={hero1}
        className="w-full h-full object-cover absolute inset-0"
        autoPlay
        ref={videoRef}
      ></video>
    </div>
  );
}
