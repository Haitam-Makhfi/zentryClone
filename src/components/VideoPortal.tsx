import {
  useEffect,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import gsap from "gsap";
interface videoPortalProps {
  portalRef: RefObject<HTMLVideoElement | null>;
  clearTimerPortal: () => void;
  tls: GSAPTimeline[];
  setPortalOpen: Dispatch<SetStateAction<boolean>>;
}
export default function VideoPortal({
  portalRef,
  clearTimerPortal,
  tls,
  setPortalOpen,
}: videoPortalProps) {
  useEffect(() => {});
  return (
    <video
      id="video-portal"
      className="w-35 h-35 rounded-md bg-amber-600 fixed top-1/2 left-1/2 -translate-1/2  scale-0 cursor-pointer"
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
        tls.forEach((tl) => {
          tl.kill();
        });
        gsap.set(portalRef.current, {
          width: portalRef.current?.offsetWidth,
          height: portalRef.current?.offsetHeight,
        });
        portalRef.current!.className =
          "bg-amber-600 fixed top-1/2 left-1/2 z-[-1] -translate-1/2 rounded-md";
        gsap.to(portalRef.current, {
          width: "100%",
          height: "100%",
          x: 0,
          y: 0,
          rotateX: 0,
          rotateY: 0,
          borderRadius: 0,
          duration: 2,
          ease: "power4.out",
        });
      }}
    >
      <source />
    </video>
  );
}
