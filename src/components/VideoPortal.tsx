import {
  useEffect,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
// import gsap from "gsap";
import hero1 from "../videos/hero-1.mp4";
interface videoPortalProps {
  portalRef1?: RefObject<HTMLDivElement | null>;
  clearTimerPortal: () => void;
  tls: GSAPTimeline[];
  state: [setPortalOpen: Dispatch<SetStateAction<boolean>>];
}
export default function VideoPortal({
  portalRef1,
  // clearTimerPortal,
  tls,
  state,
}: videoPortalProps) {
  const [setPortalOpen] = state;
  useEffect(() => {});
  return (
    <div
      id="video-portal"
      className="w-full h-full bg-amber-600 absolute top-1/2 left-1/2 -translate-1/2 z-1"
      ref={portalRef1}
      // onMouseMove={(e) => {
      //   e.stopPropagation();
      // }}
      style={{ clipPath: "path(M0 0 L100% 0 L100% 100% L0 100% Z)" }}
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
        autoPlay
        loop
        playsInline
        muted
      >
        <source src={hero1} type="video/mp4" />
      </video>
    </div>
  );
}
