import logo from "../imgs/logo.png";
import Button from "./Button";
export default function Nav() {
  return (
    <nav className=" font-general text-[10px] text-white uppercase flex w-full justify-between pr-10 mt-2 font-bold fixed z-10 ">
      <div
        id="left-nav"
        className="flex items-center gap-2 text-[10px] text-black"
      >
        <img src={logo} alt="logo" className="w-15" />
        <Button>PRODUCTS</Button>
        <Button>WHITEPAPER</Button>
      </div>
      <div id="right-nav" className="flex">
        <div id="buttons" className="flex gap-13">
          <button>NEXUS</button>
          <button>VAULT</button>
          <button>PROLOGUE</button>
          <button>ABOUT</button>
          <button>CONTACT</button>
        </div>
        <span id="audioIcon"></span>
      </div>
    </nav>
  );
}
