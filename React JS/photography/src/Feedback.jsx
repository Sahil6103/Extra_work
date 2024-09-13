import React from "react";

export const Feedback = () => {
  return (
    <data-scroll-section>
      <div className="feedback py-5 md:py-12 lg:py-14 px-5 sm:px-10 md:px-15 lg:px-20 flex justify-center items-center">
        <form className="w-full md:w-[50%] lg:w-[40%] flex flex-col gap-3 bg-slate-300 px-4 md:px-6 py-8 rounded-lg">
          <div className="input-control">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full text-[1.10rem] px-4 py-3 rounded-lg bg-slate-200 text-black placeholder-black"
            />
          </div>
          <div className="input-control">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full text-[1.10rem] px-4 py-3 rounded-lg bg-slate-200 text-black placeholder-black"
            />
          </div>
          <div className="input-control">
            <textarea
              rows={5}
              placeholder="Your Feedback"
              className="w-full text-[1.10rem] px-4 py-3 rounded-lg bg-slate-200 text-black placeholder-black"
            ></textarea>
          </div>
          <div className="input-control">
            <button className="bg-zinc-950  text-white rounded-lg w-full py-3 text-[1.1rem] font-[900] tracking-wider">
              Send
            </button>
          </div>
        </form>
      </div>
    </data-scroll-section>
  );
};
