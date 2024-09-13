import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <data-scroll-section>
      <footer className="py-8 md:py-10 px-5 sm:px-10 md:px-15 lg:px-20 text-white">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="logo-part flex flex-col gap-4 w-full md:w-5/12 lg:w-[25%]">
            <div class="logo font-extrabold text-3xl md:text-4xl lg:text-[2.5rem] ">
              <span class="select-none">SD</span>
            </div>
            <div className="text-content">
              <span className="text-slate-300 text-[1.1rem] w-[40%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque voluptates deserunt atque, nobis nam non. Eaque
                cupiditate temporibus dicta neque?
              </span>
            </div>
          </div>
          <div className="link-part">
            <div className="flex flex-col justify-start items-start gap-3 ">
              <span className="text-[1.5rem] font-[900] tracking-wider">
                Quick Links
              </span>
              <div className="links flex flex-col gap-5">
                <span className="text-[1.1rem] font-bold text-slate-300">
                  Gallery
                </span>
                <span className="text-[1.1rem] font-bold text-slate-300">
                  About Me
                </span>
                <span className="text-[1.1rem] font-bold text-slate-300">
                  Contact Me
                </span>
              </div>
            </div>
          </div>
          <div className="contact-part ">
            <div className="mobile flex flex-col">
              <span className="font-[900] text-[1.2rem]">Mobile No. :</span>
              <span className="tracking-wider text-[1.1rem]">+0123456789</span>
            </div>
            <div className="email flex flex-col mt-3">
              <span className="font-[900] text-[1.2rem]">Email Address :</span>
              <span className="tracking-wider text-[1.1rem]">
                example@abc.com
              </span>
            </div>
            <div className="flex gap-2">
              <div className="social flex justify-center lg:justify-start space-x-4 mt-8">
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    </data-scroll-section>
  );
};
