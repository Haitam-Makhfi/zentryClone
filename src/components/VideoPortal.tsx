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
  tls,
  state,
}: videoPortalProps) {
  const [setPortalOpen] = state;
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {});
  return (
    <div
      id="video-portal"
      className="w-full h-full bg-amber-600 absolute top-1/2 left-1/2 -translate-1/2 cursor-pointer"
      ref={portalRef}
      onMouseMove={(e) => {
        e.stopPropagation();
      }}
      // onMouseEnter={() => {
      //   clearTimerPortal();
      // }}
      onClick={(e) => {
        e.stopPropagation();
        setPortalOpen(true);
        tls.forEach((tl) => {
          tl.kill();
        });
        // portalRef.current!.className =
        //   "bg-amber-600 fixed top-1/2 left-1/2 z-[-1] -translate-1/2 rounded-md";
      }}
    >
      <video
        id="video-portal"
        className="w-full h-full object-cover"
        loop
        // autoPlay
        playsInline
      >
        <source src={hero1} type="video/mp4" />
      </video>
    </div>
  );
}
