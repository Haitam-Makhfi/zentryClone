import logo from "../imgs/logo.png";
export default function Nav() {
  return (
    <nav className=" flex justify-between pr-10 font-bold fixed z-100 w-full">
      <div id="left-nav" className="flex gap-2">
        <img src={logo} alt="logo" className="w-15" />
        <button>products</button>
        <button>whitepaper</button>
      </div>
      <div id="right-nav" className="flex">
        <div id="buttons" className="flex gap-3">
          <button>nexus</button>
          <button>vault</button>
          <button>prologue</button>
          <button>about</button>
          <button>contact</button>
        </div>
        <span id="audioIcon"></span>
      </div>
    </nav>
  );
}
