import React from "react";

export const Header = () => {
  return (
    <data-scroll-section>
      <header class="flex justify-between items-center text-white py-5 md:py-7 px-5 sm:px-10 md:px-15 lg:px-20">
        <div class="logo font-extrabold text-3xl md:text-4xl lg:text-5xl font-['aquire']">
          <span class="select-none">SD</span>
        </div>
        <nav class="hidden lg:flex items-center space-x-8">
          <a
            href="#"
            class="font-extrabold tracking-widest text-[0.9rem] hover:text-slate-300 duration-300"
          >
            GALLERY
          </a>
          <a
            href="#"
            class="font-extrabold tracking-widest text-[0.9rem] hover:text-slate-300 duration-300"
          >
            ABOUT ME
          </a>
          <a
            href="#"
            class="font-extrabold tracking-widest text-[0.9rem] hover:text-slate-300 duration-300"
          >
            CONTACT ME
          </a>
        </nav>
        <a
          href="#"
          class="lg:hidden xsm:block font-extrabold tracking-widest text-md hover:text-slate-300 duration-300"
        >
          <i class="fa-solid fa-bars"></i>
        </a>
      </header>
    </data-scroll-section>
  );
};
