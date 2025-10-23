import ThreeDCard from "./ThreeDCard";
import BentoButton from "./BentoButton";
import feature1 from "../videos/feature-1.mp4";
import feature2 from "../videos/feature-2.mp4";
import feature3 from "../videos/feature-3.mp4";
import feature4 from "../videos/feature-4.mp4";
export default function BentoGrid() {
  return (
    <section id="bento-grid" className="bg-black w-auto mt-140">
      <div
        id="bento-grid-text"
        className="text-white w-[40ch] font-robert-medium mx-35 py-30"
      >
        <b className="capitalize">intro to the metagame layer</b>
        <p className="normal-case text-gray-400">
          immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>
      <div
        id="bento-grid-elements"
        className="w-[80%] grid grid-cols-2 grid-rows-[1fr 1fr 1fr 1fr] mx-auto pb-30 gap-3"
      >
        <ThreeDCard
          src={feature1}
          className="cursor-pointer col-span-2 text-white relative border border-gray-600 rounded-lg overflow-hidden"
        >
          <div className="content absolute top-5 left-10">
            <h3 className="uppercase text-7xl font-zentry">radiant</h3>
            <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
              a cross-platform metagame app, turning your activities across web2
              and web3 games into a rewarding adventure.
            </p>
          </div>
          <BentoButton>coming soon</BentoButton>
        </ThreeDCard>
        <ThreeDCard
          src={feature2}
          className="cursor-pointer h-full row-span-2 text-white relative border border-gray-600 rounded-lg overflow-hidden"
        >
          <div className="content absolute top-5 left-10">
            <h3 className="uppercase text-7xl font-zentry">zigma</h3>
            <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
              a cross-platform metagame app, turning your activities across web2
              and web3 games into a rewarding adventure.
            </p>
          </div>
          <BentoButton>coming soon</BentoButton>
        </ThreeDCard>
        <ThreeDCard
          src={feature3}
          className="cursor-pointer h-[380px] overflow-hidden text-white relative border border-gray-600 rounded-lg"
        >
          <div className="content absolute top-5 left-10">
            <h3 className="uppercase text-7xl font-zentry">nexus</h3>
            <p className="w-[30ch] mt-5 text-md font-robert-regular ">
              a gamifiedd social hub, adding a new dimention of play to social
              interaction for web3 communities.
            </p>
          </div>
          <BentoButton>coming soon</BentoButton>
        </ThreeDCard>
        <ThreeDCard
          src={feature4}
          className="cursor-pointer h-[380px] overflow-hidden text-white relative border border-gray-600 rounded-lg"
        >
          <div className="content absolute top-5 left-10">
            <h3 className="uppercase text-7xl font-zentry">azul</h3>
            <p className="w-[30ch] mt-5 text-lg font-robert-regular ">
              a cross-world ai agent that elevates your gameplay to be more fun
              and productive.
            </p>
          </div>
          <BentoButton>coming soon</BentoButton>
        </ThreeDCard>
      </div>
    </section>
  );
}
