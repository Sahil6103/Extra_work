import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="hero py-8 px-24 flex flex-row justify-between items-center">
        <div className="left w-[40%] text-white flex flex-col justify-center items-start space-y-6">
          <h1 className="text-[3.8rem] leading-[70px] font-[300]">
            Learning a new lenguage is easy
          </h1>
          <span className="text-[22px] font-bold">
            WE HAVE THE BEST APPROACH TO LEARN
          </span>
          <p className="text-[1rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incitvidunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra ma
            facilisis.
          </p>
          <button className="bg-[#5c59ad] font-bold px-5 py-3 rounded-lg">
            Read More ►
          </button>
        </div>
        <div className="right w-[40%]">
          <img src="src/assets/img/Image.png" className="w-[80%]" alt="" />
        </div>
      </div>
    </>
  );
};
