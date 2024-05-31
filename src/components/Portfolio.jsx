import React from "react";
import {
  visionPro,
  shopper,
  gerichtRestaurant,
  gymExercise,
  movix,
} from "../assets";
import { FaGithub } from "react-icons/fa6";
import { HiMiniArrowTopRightOnSquare } from "react-icons/hi2";

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="portfolio w-full px-[8vw] py-[6vw]">
        <div className="head-text w-full flex flex-col gap-2 py-10">
          <h1 className="text-zinc-200 uppercase font-bold text-[5vw] lg:text-[1.5vw]">
            portfolio
          </h1>
          <p className="text-sky-300 font-bold text-[4vw] lg:text-[2vw]">
            Each Project is a unique piece of development
          </p>
        </div>

        <div className="project-1 w-full px-0 lg:px-10 py-6 mb-[10vw] flex flex-col lg:flex-row gap-10">
          <div className="left w-full lg:w-1/2 rounded-[20px] flex justify-center items-center">
            <img src={movix} className="lg:h-[300px] rounded-[20px]" alt="" />
          </div>
          <div className="right w-full lg:w-1/2 px-0 lg:px-[5vw] py-6">
            <h1 className="text-[20px] md:text-[30px] lg:text-[21px] font-semibold lg:text-center pb-4">
              Movix Movie App
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[16px] text-zinc-300 font-medium lg:text-center">
              Movix is a web app for exploring movies and TV shows. Discover
              trailers, cast details, ratings, and more. Browse by categories
              like Popular, Trending, and Top Rated to find your next
              entertainment fix.
            </p>
            <div className="tech-used flex flex-row pt-10 lg:py-6 w-full justify-center items-center gap-6">
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                React
              </h1>
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                Sass
              </h1>
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                Rest API
              </h1>
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                Redux Toolkit
              </h1>
            </div>
            <div className="demo flex flex-row gap-10 justify-center items-center py-6">
              <a
                href="https://github.com/abhishekGhosh99/movix-movie-app"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Code <FaGithub />
                </span>
              </a>
              <a
                href="https://abhishekghosh99.github.io/movix-movie-app/"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Live Demo <HiMiniArrowTopRightOnSquare />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="project-2 w-full px-0 lg:px-10 py-6 mb-[10vw] flex flex-col-reverse lg:flex-row gap-10">
          <div className="left w-full lg:w-1/2 px-0 lg:px-[5vw] py-6">
            <h1 className="text-[20px] md:text-[30px] lg:text-[21px] font-semibold lg:text-center pb-4">
              Infinity Virtual Gym
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[16px] text-zinc-300 font-medium lg:text-center">
              The Infinity Gym is a web app which provides a vast exercise
              library with GIF demonstrations and detailed instructions. Users
              can search exercises by body part or muscle group.
            </p>
            <div className="tech-used flex flex-row pt-10 lg:py-6 w-full justify-center items-center gap-6">
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                React
              </h1>
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                Material UI
              </h1>
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                Rest API
              </h1>
            </div>
            <div className="demo flex flex-row gap-10 justify-center items-center py-6">
              <a
                href="https://github.com/abhishekGhosh99/GymExercise"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Code <FaGithub />
                </span>
              </a>
              <a
                href="https://abhishekghosh99.github.io/GymExercise"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Live Demo <HiMiniArrowTopRightOnSquare />
                </span>
              </a>
            </div>
          </div>
          <div className="right w-full lg:w-1/2 rounded-[20px] flex justify-center items-center">
            <img
              src={gymExercise}
              className="lg:h-[300px] rounded-[20px]"
              alt=""
            />
          </div>
        </div>

        <div className="project-3 w-full px-0 lg:px-10 py-6 mb-[10vw] flex flex-col lg:flex-row gap-10">
          <div className="left w-full lg:w-1/2 rounded-[20px] flex justify-center items-center">
            <img src={shopper} className="lg:h-[300px] rounded-[20px]" alt="" />
          </div>
          <div className="right w-full lg:w-1/2 px-0 lg:px-[5vw] py-6">
            <h1 className="text-[20px] md:text-[30px] lg:text-[21px] font-semibold lg:text-center pb-4">
              Shopper | E-commerce Web App
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[16px] text-zinc-300 font-medium lg:text-center">
              The React-Tailwind E-commerce Web App is a modern and visually
              appealing online shopping platform designed and developed using
              React.js for the frontend and Tailwind CSS for a sleek and
              responsive user interface.
            </p>
            <div className="tech-used flex flex-row pt-10 lg:py-6 w-full justify-center items-center gap-6">
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                React
              </h1>
              <h1 className="text-[15px] md:text-[20px] lg:text-[15px] font-semibold">
                Tailwind CSS
              </h1>
            </div>
            <div className="demo flex flex-row gap-10 justify-center items-center py-6">
              <a
                href="https://github.com/abhishekGhosh99/Shopper"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Code <FaGithub />
                </span>
              </a>
              <a
                href="https://abhishekghosh99.github.io/Shopper/"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Live Demo <HiMiniArrowTopRightOnSquare />
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="project-4 w-full px-0 lg:px-10 py-6 mb-[10vw] flex flex-col-reverse lg:flex-row gap-10">
          <div className="left w-full lg:w-1/2 px-0 lg:px-[5vw] py-6">
            <h1 className="text-[21px] font-semibold lg:text-center pb-4">
              Gericht Restaurant
            </h1>
            <p className="text-[16px] text-zinc-300 font-medium lg:text-center">
              Gericht Restaurant is restaurant where you find special meals,
              breakfast, lunch, dinner, wines, beers, cocktails as well.
            </p>
            <div className="tech-used flex flex-row pt-10 lg:py-6 w-full justify-center items-center gap-6">
              <h1 className="text-[15px] font-semibold">React</h1>
              <h1 className="text-[15px] font-semibold">Vanilla CSS</h1>
            </div>
            <div className="demo flex flex-row gap-10 justify-center items-center py-6">
              <a
                href="https://github.com/abhishekGhosh99/Gericht-Restaurant"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Code <FaGithub />
                </span>
              </a>
              <a
                href="https://abhishekghosh99.github.io/Gericht-Restaurant/"
                target="_blank"
                className="btn-shadow hover:text-blue-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Live Demo <HiMiniArrowTopRightOnSquare />
                </span>
              </a>
            </div>
          </div>
          <div className="right w-full lg:w-1/2 rounded-[20px] flex justify-center items-center">
            <img
              src={gerichtRestaurant}
              className="lg:h-[300px] rounded-[20px]"
              alt=""
            />
          </div>
        </div>

        <div className="project-5 w-full px-0 lg:px-10 py-6 mb-[10vw] flex flex-col lg:flex-row gap-10">
          <div className="left w-full lg:w-1/2 rounded-[20px] flex justify-center items-center">
            <img
              src={visionPro}
              className="lg:h-[300px] rounded-[20px]"
              alt=""
            />
          </div>
          <div className="right w-full lg:w-1/2 px-0 lg:px-[5vw] py-6">
            <h1 className="text-[21px] font-semibold lg:text-center pb-4">
              Apple Vison Pro Clone
            </h1>
            <p className="text-[16px] text-zinc-300 font-medium lg:text-center">
              Apple Vision Pro is your Gateway to Visual Excellence. It
              seamlessly blends digital content with your physical space.
            </p>
            <div className="tech-used flex flex-row pt-10 lg:py-6 w-full justify-center items-center gap-6">
              <h1 className="text-[14px] font-semibold">HTML</h1>
              <h1 className="text-[14px] font-semibold">CSS</h1>
              <h1 className="text-[14px] font-semibold">Javascript</h1>
              <h1 className="text-[14px] font-semibold">GSAP</h1>
            </div>
            <div className="demo flex flex-row gap-10 justify-center items-center py-6">
              <a
                href="https://github.com/abhishekGhosh99/Apple-Vision-Pro"
                target="_blank"
                className="btn-shadow hover:text-sky-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Code <FaGithub />
                </span>
              </a>
              <a
                href="https://abhishekghosh99.github.io/Apple-Vision-Pro/"
                target="_blank"
                className="btn-shadow hover:text-sky-400"
              >
                <span className="flex flex-row justify-center items-center gap-2 p-3">
                  Live Demo <HiMiniArrowTopRightOnSquare />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
