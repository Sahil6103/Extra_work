import React from "react";

export const Nav = () => {
  return (
    <>
      <nav className="flex justify-center items-center gap-x-12">
        <a
          href="#"
          className="font-[300] tracking-wide hover:text-slate-400 transition-all duration-[0.5s]"
        >
          About
        </a>
        <a
          href="#"
          className="font-[300] tracking-wide hover:text-slate-400 transition-all duration-[0.5s]"
        >
          Team
        </a>
        <a
          href="#"
          className="font-[300] tracking-wide hover:text-slate-400 transition-all duration-[0.5s]"
        >
          Services
        </a>
        <a
          href="#"
          className="font-[300] tracking-wide hover:text-slate-400 transition-all duration-[0.5s]"
        >
          Join Us
        </a>
        <a
          href="#"
          className="font-[300] tracking-wide hover:text-slate-400 transition-all duration-[0.5s]"
        >
          Contact Us
        </a>
      </nav>
    </>
  );
};
