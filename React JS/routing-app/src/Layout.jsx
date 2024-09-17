import React from "react";
import { Link, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <nav className="flex justify-center items-center gap-10 py-8 bg-slate-300 text-[1.2rem] font-semibold shadow-md">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Outlet />

      <footer className="flex flex-col justify-center items-center gap-5">
        <div className="logo font-bold text-[1.5rem]">LOGO</div>
        <div className="links flex flex-col justify-center items-center gap-2">
          <span className="font-semibold text-[1.1rem]">Quick Links</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>
    </>
  );
};
