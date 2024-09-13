import React from "react";

export const Skill = () => {
  return (
    <data-scroll-section>
      <div className="skill py-10 md:py-12 lg:py-14 px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col justify-center items-center gap-8">
        <div className="text-content mx-auto">
          <h1 className="text-white text-center font-[nusar] text-[2rem] md:text-[2.1rem] lg:text-[2.2rem] tracking-wide">
            Skills
          </h1>
        </div>
        <div className="skills flex flex-col md:flex-row gap-5 md:gap-32">
          <div className="left flex flex-col gap-5 md:gap-8">
            <div className="html flex justify-center items-center gap-5">
              <img
                src="src/assets/img/HTML5.png"
                alt=""
                className="w-[15%] md:w-[12%]"
              />
              <div className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-800">
                <div className="bg-slate-300 rounded-full w-[95%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                  95%
                </div>
              </div>
            </div>
            <div className="css flex justify-center items-center gap-5">
              <img
                src="src/assets/img/CSS3.png"
                alt=""
                className="w-[15%] md:w-[12%]"
              />
              <div className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-800">
                <div className="bg-slate-300 rounded-full w-[95%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                  95%
                </div>
              </div>
            </div>
            <div className="js flex justify-center items-center gap-5">
              <img
                src="src/assets/img/JavaScript.png"
                alt=""
                className="w-[15%] md:w-[12%]"
              />
              <div className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-800">
                <div className="bg-slate-300 rounded-full w-[80%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                  80%
                </div>
              </div>
            </div>
          </div>
          <div className="right flex flex-col gap-5 md:gap-8">
            <div className="bootstap flex justify-center items-center gap-5">
              <img
                src="src/assets/img/Bootstrap.png"
                alt=""
                className="w-[15%] md:w-[12%]"
              />
              <div className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-800">
                <div className="bg-slate-300 rounded-full w-[95%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                  95%
                </div>
              </div>
            </div>
            <div className="tailwind flex justify-center items-center gap-5">
              <img
                src="src/assets/img/Tailwind CSS.png"
                alt=""
                className="w-[15%] md:w-[12%]"
              />
              <div className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-800">
                <div className="bg-slate-300 rounded-full w-[90%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                  90%
                </div>
              </div>
            </div>
            <div className="react flex justify-center items-center gap-5">
              <img
                src="src/assets/img/react.png"
                alt=""
                className="w-[15%] md:w-[12%]"
              />
              <div className="w-full bg-gray-200 rounded-full h-4.5 dark:bg-gray-800">
                <div className="bg-slate-300 rounded-full w-[20%] h-4.5 text-[0.9rem] font-bold text-center p-0.5 leading-none">
                  20%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </data-scroll-section>
  );
};
