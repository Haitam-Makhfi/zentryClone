import type { PropsWithChildren } from "react";
interface ThreeDCardProps {
  src?: string;
  className?: string;
}
export default function ThreeDCard(props: PropsWithChildren<ThreeDCardProps>) {
  const { src, className } = props;
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
      <div className="content absolute top-5 left-10">
        <h3 className="uppercase text-7xl font-zentry">radiant</h3>
        <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
          a cross-platform metagame app, turning your activities across web2 and
          web3 games into a rewarding adventure
        </p>
      </div>
      <button className="absolute bg-black bottom-5 left-10 px-5 py-1 font-general text-gray-600 border border-gray-800 rounded-2xl">
        coming soon
      </button>
    </div>
  );
}
