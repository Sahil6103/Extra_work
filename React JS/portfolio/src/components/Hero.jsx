import React from "react";
// import { ParticleBG } from "./ParticleBG";

export const Hero = () => {
  return (
    <data-scroll-section>
      <section className="hero relative overflow-hidden flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center py-5 lg:py-24 px-5 sm:px-10 md:px-15 lg:px-20">
        {/* <ParticleBG /> */}
        <div className="content relative z-[1] text-white w-full lg:w-3/5 flex flex-col mt-8 lg:mt-0">
          {/* <span className="upper-heading relative text-[1.1rem] md:text-xl lg:text-2xl text-slate-300 font-extrabold tracking-wide">
            Photographer
          </span> */}
          <h1 className="tracking-wider leading-7 md:leading-10 text-[1.4rem] sm:text-2xl md:text-4xl lg:text-[2.50rem] w-full font-[nusar]">
            Crafting digital worlds where design meets functionality—bringing
            innovation to every click.
          </h1>
          {/* <div className="social flex justify-center lg:justify-start space-x-4 mt-8">
            <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-slate-300 hover:border-slate-300 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faFacebook}
                className=" text-white text-lg group-hover:text-black duration-300"
              />
            </span>
            <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-slate-300 hover:border-slate-300 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faInstagram}
                className=" text-white text-lg group-hover:text-black duration-300"
              />
            </span>
            <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-slate-300 hover:border-slate-300 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faTwitter}
                className=" text-white text-lg group-hover:text-black duration-300"
              />
            </span>
            <span className="group w-5 h-5 border-2 flex justify-center items-center p-4 rounded-full hover:bg-slate-300 hover:border-slate-300 duration-500 cursor-pointer">
              <FontAwesomeIcon
                icon={faYoutube}
                className=" text-white text-lg group-hover:text-black duration-300"
              />
            </span>
          </div> */}
        </div>
        <div className="imagediv w-full lg:w-1/4 flex justify-center lg:justify-end">
          <img
            src="src/assets/img/SAVE_20211211_142921.jpg"
            alt=""
            className="w-[250px] md:w-[300px] xl:w-[400px] h-[250px] md:h-[300px] xl:h-[400px] min-w-[250px] md:min-w-[300px] xl:min-w-[400px] min-h-[250px] md:min-h-[300px] xl:min-h[400px] rounded-full object-cover"
          />
        </div>
      </section>
    </data-scroll-section>
  );
};
