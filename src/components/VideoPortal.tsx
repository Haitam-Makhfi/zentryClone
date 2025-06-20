import { useEffect, type RefObject } from "react";
interface videoPortalProps {
  portalRef: RefObject<HTMLVideoElement | null>;
  clearTimerPortal: () => void;
}
export default function VideoPortal({
  portalRef,
  clearTimerPortal,
}: videoPortalProps) {
  useEffect(() => {});
  return (
    <video
      id="video-portal"
      className="w-35 h-35 border-1 border-white rounded-md bg-amber-600 absolute top-1/2 left-1/2 -translate-1/2  scale-0 cursor-pointer"
      ref={portalRef}
      onMouseMove={(e) => {
        e.stopPropagation();
      }}
      onMouseEnter={() => {
        clearTimerPortal();
      }}
    >
      <source />
    </video>
  );
}
