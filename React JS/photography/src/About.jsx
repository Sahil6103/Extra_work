import React from "react";

export const About = () => {
  return (
    <data-scroll-section>
      <div className="about py-5 md:py-12 lg:py-14 px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="img sm:w-full md:w-1/2 lg:pe-10">
          <img
            src="https://images.pexels.com/photos/22185/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div className="text-content sm:w-full md:w-1/2">
          <h1 className="text-slate-300 text-[1.3rem]  font-bold tracking-wider ">
            I'm Sahil Dhandhukiya
          </h1>
          <span className="text-white text-[1.4rem] lg:text-[2.5rem] tracking-wider">
            I'm a Photographer
          </span>
          <p className="text-slate-300 text-[1.2rem]">
            As a mobile photographer, I thrive on the challenge of capturing
            extraordinary moments with the most accessible tool in my pocket —
            my smartphone. To me, mobile photography is about seeing the world
            through a lens of creativity and spontaneity, finding beauty in the
            mundane and turning everyday moments into timeless art. The
            constraints of a mobile device push me to explore unique angles,
            master natural lighting, and embrace minimalism in composition. I
            love the versatility of mobile photography.
          </p>
          <button className="self-start my-5 py-2.5 px-10 bg-slate-300 text-black font-[700] rounded-md tracking-wide text-[1.1rem] hover:bg-slate-100 transition-all duration-300">
            View More
          </button>
        </div>
      </div>
    </data-scroll-section>
  );
};
