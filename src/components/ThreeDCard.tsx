import { useGSAP } from "@gsap/react";
import { type PropsWithChildren } from "react";
interface ThreeDCardProps {
  src?: string;
  className?: string;
}
gsap.registerPlugin(useGSAP);
export default function ThreeDCard(props: PropsWithChildren<ThreeDCardProps>) {
  const { src, className } = props;
  useGSAP(() => {});
  return (
    <div className={className && className}>
      <video
        src={src && src}
        className={`w-full h-full object-cover object-center rounded-lg`}
        autoPlay
        muted
        playsInline
        loop
      ></video>
      {props.children}
    </div>
  );
}
