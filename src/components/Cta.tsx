import Button from "./Button";
import contact1 from "../imgs/contact-1.webp";
import contact2 from "../imgs/contact-2.webp";
import swordsman from "../imgs/swordman.webp";
import swordsmanPartial from "../imgs/swordman-partial.webp";
export default function Cta() {
  //   const { innerWidth, innerHeight } = window;
  return (
    <section
      id="callToAction"
      className="container w-[90%] rounded-3xl mb-20 py-20 bg-black text-white mt flex flex-col items-center justify-center gap-5 mx-auto relative"
    >
      <img
        src={contact1}
        alt="an img of a fire"
        className="w-80 absolute -top-0 left-40 object-cover"
        style={{
          clipPath: `polygon(20% 0%,70% 0%,70% 70%,25% 80%)`,
        }}
      />
      <img
        src={contact2}
        alt="an img of a potion"
        className="w-100 absolute -bottom-17 left-20 object-cover"
        style={{
          clipPath: `polygon(35% 5%,80% 30%,70% 73%,30% 73%,15% 60%)`,
        }}
      />
      <img
        src={swordsman}
        alt="an img of a swordsman"
        className="w-90 absolute -right-10 top-10 z-1"
        style={{
          clipPath: `polygon(10% 0,85% 13%,70% 100%,0 90%)`,
        }}
      />
      <img
        src={swordsmanPartial}
        className="w-90 absolute -right-10 top-10 z-2"
      />
      <p className="uppercase font-general text-center text-[9px]">
        join zentry
      </p>
      <h2 className="font-zentry text-8xl w-[13ch] text-center capitalize z-2">
        let's build the new era of gaming together
      </h2>
      <Button
        width={200}
        textColor="black"
        bgColor="white"
        className="text-[10px] font-regular mt-3 absolute  uppercase"
      >
        enter vault
      </Button>
    </section>
  );
}
