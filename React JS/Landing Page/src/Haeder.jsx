import React from "react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { Language } from "./Language";

export const Haeder = () => {
  return (
    <>
      <header className="py-12 px-24 text-white flex flex-row justify-between">
        <Logo />
        <Nav />
        <Language />
      </header>
    </>
  );
};
