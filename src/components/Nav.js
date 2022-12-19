import { useState } from "react";

function Nav() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="px-12">
      <nav className="w-full max-w-5xl mx-auto flex justify-between items-center h-24">
        <h1 className="text-3xl font-bold">moxa.</h1>
        <ul
          className={`flex justify-around gap-8 
          desktop:fixed desktop:gap-0 desktop:flex-col 
          desktop:bg-white desktop:w-full desktop:text-center desktop:top-24 ${
            visible ? "right-0" : "right-full"
          }`}
        >
          <li>
            <a
              className="block cursor-pointer no-underline text-black text-base font-semibold hover:underline hover:text-orange-600 desktop:my-4"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="block cursor-pointer no-underline text-black text-base font-semibold hover:underline hover:text-orange-600 desktop:my-4"
              href="/"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="block cursor-pointer no-underline text-black text-base font-semibold hover:underline hover:text-orange-600 desktop:my-4"
              href="/"
            >
              Contact
            </a>
          </li>
        </ul>
        <div
          className="hamburger desktop:block hidden cursor-pointer bg-black ml-auto p-3"
          onClick={() => setVisible(!visible)}
        >
          <span className="block w-6 h-0.5 my-1.5 bg-white"></span>
          <span className="block w-6 h-0.5 my-1.5 bg-white"></span>
          <span className="block w-6 h-0.5 my-1.5 bg-white"></span>
        </div>
        <a
          className="button text-black text-base font-semibold text-center py-3 px-6 border-2 border-black ml-4 mobile:hidden hover:text-white hover:bg-black transition duration-300"
          href="/"
        >
          Let's talk
        </a>
      </nav>
    </div>
  );
}

export default Nav;
