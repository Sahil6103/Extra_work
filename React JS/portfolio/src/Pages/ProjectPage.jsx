import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const ProjectPage = () => {
  return (
    <>
      <data-scroll-section>
        <Header />

        <div className="projects py-10 md:py-12 lg:py-14 px-5 sm:px-10 md:px-15 lg:px-20 flex flex-col gap-8">
          <div className="text-content mx-auto">
            <h1 className="text-white text-center font-[nusar] text-[2rem] md:text-[2.1rem] lg:text-[2.2rem] tracking-wide">
              Projects
            </h1>
          </div>
          <div className="projects-list flex flex-col gap-12">
            <div className="list flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-16">
              <div className="project w-[100%] md:w-[70%] lg:w-[40%] xl:w-[30%] h-full relative rounded-[20px]">
                <div className="img-div">
                  <img
                    src="src/assets/img/comiko.png"
                    alt=""
                    className="aspect-square object-cover rounded-[20px]"
                  />
                </div>
                <div className="overlay absolute top-0 left-0 w-full h-full bg-none rounded-[20px]"></div>
                <div className="project-content p-3 lg:px-6 lg:py-5 flex flex-col absolute bottom-0 left-0 opacity-0 translate-y-[5%] transition-all duration-[0.3s]">
                  <h1 className="title text-white text-[2.2rem] font-bold tracking-wide">
                    Comiko
                  </h1>
                  <p className="text-slate-100 text-[1.05rem] leading-[1.40rem]">
                    An online comic book store offers a platform for users to
                    browse, purchase comic books from various genres and
                    publishers, providing a convenient way to access a wide
                    range of titles.
                  </p>
                  <div className="tech text-white flex flex-wrap gap-3 mt-3">
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      HTML
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      CSS
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      JavaScript
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      Bootstrap
                    </span>
                  </div>
                  <div className="preview-btn mt-6">
                    <Link
                      to="https://comiko.netlify.app/"
                      target="_blank"
                      className="bg-slate-300 px-8 py-1.5 w-[60%] md:w-[55%] rounded-lg tracking-wide flex justify-center items-center"
                    >
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        className="mr-2 text-slate-600"
                      />
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project w-[100%] md:w-[70%] lg:w-[40%] xl:w-[30%] h-full relative rounded-[20px]">
                <div className="img-div">
                  <img
                    src="src/assets/img/airline.png"
                    alt=""
                    className="aspect-square object-cover rounded-[20px]"
                  />
                </div>
                <div className="overlay absolute top-0 left-0 w-full h-full bg-none rounded-[20px]"></div>
                <div className="project-content p-3 lg:px-6 lg:py-5 flex flex-col absolute bottom-0 left-0 opacity-0 translate-y-[5%] transition-all duration-[0.3s]">
                  <h1 className="title text-white text-[2.2rem] font-bold tracking-wide">
                    Airline
                  </h1>
                  <p className="text-slate-100 text-[1.05rem] leading-[1.40rem]">
                    Airline is an online airline booking website that allows
                    users to search for flights, select travel dates, and book
                    tickets while providing customer details for a seamless
                    booking experience.
                  </p>
                  <div className="tech text-white flex flex-wrap gap-3 mt-3">
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      HTML
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      CSS
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      JavaScript
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="preview-btn mt-6">
                    <Link
                      to="https://airliine.netlify.app/"
                      target="_blank"
                      className="bg-slate-300 px-8 py-1.5 w-[60%] md:w-[55%] rounded-lg tracking-wide flex justify-center items-center"
                    >
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        className="mr-2 text-slate-600"
                      />
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="list flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-16">
              <div className="project w-[100%] md:w-[70%] lg:w-[40%] xl:w-[30%] h-fit relative rounded-[20px]">
                <div className="img-div">
                  <img
                    src="src/assets/img/interia.png"
                    alt=""
                    className="aspect-square object-cover rounded-[20px]"
                  />
                </div>
                <div className="overlay absolute top-0 left-0 w-full h-full bg-none rounded-[20px]"></div>
                <div className="project-content p-3 lg:px-6 lg:py-5 flex flex-col absolute bottom-0 left-0 opacity-0 translate-y-[5%] transition-all duration-[0.3s]">
                  <h1 className="title text-white text-[2.2rem] font-bold">
                    Interia
                  </h1>
                  <p className="text-slate-100 text-[1.05rem] leading-[1.40rem]">
                    Interia is an interior design portfolio website showcasing
                    creative designs, projects, and inspirations, allowing users
                    to explore various styles and solutions for home and office
                    spaces.
                  </p>
                  <div className="tech text-white flex flex-wrap gap-3 mt-3">
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      HTML
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      CSS
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      JavaScript
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="preview-btn mt-6">
                    <Link
                      to="https://interiia.netlify.app/"
                      target="_blank"
                      className="bg-slate-300 px-8 py-1.5 w-[60%] md:w-[55%] rounded-lg tracking-wide flex justify-center items-center"
                    >
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        className="mr-2 text-slate-600"
                      />
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
              <div className="project w-[100%] md:w-[70%] lg:w-[40%] xl:w-[30%] h-full relative rounded-[20px]">
                <div className="img-div">
                  <img
                    src="src/assets/img/skyhigh.png"
                    alt=""
                    className="aspect-square object-cover rounded-[20px]"
                  />
                </div>
                <div className="overlay absolute top-0 left-0 w-full h-full bg-none rounded-[20px]"></div>
                <div className="project-content p-3 lg:px-6 lg:py-5 flex flex-col absolute bottom-0 left-0 opacity-0 translate-y-[5%] transition-all duration-[0.3s]">
                  <h1 className="title text-white text-[2.2rem] font-bold">
                    SkyHigh
                  </h1>
                  <p className="text-slate-100 text-[1.05rem] leading-[1.40rem]">
                    SkyHigh is a portfolio dedicated to the art of skyscraper
                    design, blending futuristic vision with groundbreaking
                    engineering to create iconic vertical landscapes that
                    redefine city skylines.
                  </p>
                  <div className="tech text-white flex flex-wrap gap-3 mt-5">
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      HTML
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      CSS
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      JavaScript
                    </span>
                    <span className="bg-zinc-500 rounded-full px-3 text-[0.9rem] tracking-wider">
                      Tailwind CSS
                    </span>
                  </div>
                  <div className="preview-btn mt-6">
                    <Link
                      to="https://skyhiigh.netlify.app/"
                      target="_blank"
                      className="bg-slate-300 px-8 py-1.5 w-[60%] md:w-[55%] rounded-lg tracking-wide flex justify-center items-center"
                    >
                      <FontAwesomeIcon
                        icon={faSquareArrowUpRight}
                        className="mr-2 text-slate-600"
                      />
                      Live Preview
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </data-scroll-section>
    </>
  );
};
