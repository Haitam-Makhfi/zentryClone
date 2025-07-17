import { type RefObject, type Dispatch, type SetStateAction } from "react";
// import gsap from "gsap";
import hero2 from "../videos/hero-2.mp4";
interface videoPortalProps {
  refs: [
    heroRef: RefObject<HTMLDivElement | null>,
    portalRef2?: RefObject<HTMLDivElement | null>
  ];
  clearTimerPortal: () => void;
  tls: GSAPTimeline[];
  state: [setPortalOpen: Dispatch<SetStateAction<boolean>>];
}
export default function VideoPortal({
  refs,
  // clearTimerPortal,
  tls,
  state,
}: videoPortalProps) {
  const [heroRef, portalRef2] = refs;
  const [setPortalOpen] = state;

  return (
    <div
      id="video-portal2"
      className="w-full h-full bg-amber-600 absolute top-1/2 left-1/2 -translate-1/2 cursor-pointer z-2"
      ref={portalRef2}
      style={{
        clipPath: `circle(0% at 50% 50%)`,
      }}
      // onMouseMove={(e) => {
      //   e.stopPropagation();
      // }}
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
        muted
      >
        <source src={hero2} type="video/mp4" />
      </video>
    </div>
  );
}
