import React from "react";
import Photo3 from "./assets/img/photo3.webp";
import Photo4 from "./assets/img/photo4.webp";
import Photo6 from "./assets/img/photo6.webp";
import Photo7 from "./assets/img/photo7.webp";
import Photo9 from "./assets/img/photo9.webp";
import Photo13 from "./assets/img/photo13.webp";
import Photo16 from "./assets/img/photo16.webp";
import Photo20 from "./assets/img/photo20.webp";
import Photo11 from "./assets/img/photo11.webp";

export const Gallery = () => {
  return (
    <data-scroll-section>
      <div className="gallery py-5 md:py-12 lg:py-14 px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col justify-center items-center gap-8">
        <div className="text-content mx-auto">
          <h1 className="text-[2.5rem] text-white font-[900] text-center ">
            Photo Gallery
          </h1>
        </div>
        <div className="main-gallery flex flex-col gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
            <img src={Photo3} alt="" className="w-full h-auto object-contain" />
            <img src={Photo4} alt="" className="w-full h-auto object-contain" />
            <img src={Photo6} alt="" className="w-full h-auto object-contain" />
            <img src={Photo7} alt="" className="w-full h-auto object-contain" />
            <img src={Photo9} alt="" className="w-full h-auto object-contain" />
            <img
              src={Photo13}
              alt=""
              className="w-full h-auto object-contain"
            />
            <img
              src={Photo16}
              alt=""
              className="w-full h-auto object-contain"
            />
            <img
              src={Photo20}
              alt=""
              className="w-full h-auto object-contain"
            />
            <img
              src={Photo11}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
        <button className="my-5 py-2.5 px-10 bg-slate-300 text-black font-[900] rounded-md tracking-wide text-[1.1rem] hover:bg-slate-100 transition-all duration-300">
          Explore More
        </button>
      </div>
    </data-scroll-section>
  );
};
