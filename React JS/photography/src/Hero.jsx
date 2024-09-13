import React from "react";
// Import Font Awesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  return (
    <data-scroll-section>
      <section className="hero flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center py-5 lg:py-24 px-5 sm:px-10 md:px-15 lg:px-20">
        <div className="content text-white w-full lg:w-3/5 flex flex-col mt-8 lg:mt-0">
          {/* <span className="upper-heading relative text-[1.1rem] md:text-xl lg:text-2xl text-slate-300 font-extrabold tracking-wide">
            Photographer
          </span> */}
          <h1 className="tracking-wider text-[1.4rem] sm:text-2xl md:text-4xl lg:text-[2.50rem] w-full">
            Photography is an art that caputures the eternal beauty of nature.
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

          <button className="self-start my-5 py-2.5 px-10 bg-slate-300 text-black font-[700] rounded-md tracking-wide text-[1.1rem] hover:bg-slate-100 transition-all duration-300">
            View Gallery
          </button>
        </div>
        <div className="imagediv w-full lg:w-1/4 flex justify-center lg:justify-end">
          <img
            src="https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-[250px] md:w-[300px] xl:w-[400px] h-[250px] md:h-[300px] xl:h-[400px] min-w-[250px] md:min-w-[300px] xl:min-w-[400px] min-h-[250px] md:min-h-[300px] xl:min-h[400px] rounded-full object-cover"
          />
        </div>
      </section>
    </data-scroll-section>
  );
};
