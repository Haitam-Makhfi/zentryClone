import gsap from "gsap";
import type { videoPortalProps } from "./VideoPortal";
export default function VideoPortal2({
  portalRef,
  clearTimerPortal,
  tls,
  state,
}: videoPortalProps) {
  const [setPortalOpen, setHeroBgState] = state;
  return (
    <div
      id="video-portal"
      className="w-35 h-35 rounded-md bg-amber-600 absolute top-1/2 left-1/2 -translate-1/2  scale-0 cursor-pointer"
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
          "bg-amber-600 absolute top-1/2 left-1/2 z-[-1] -translate-1/2 rounded-md";
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
        setTimeout(() => {
          setHeroBgState(false);
        }, 2000);
      }}
    ></div>
  );
}
