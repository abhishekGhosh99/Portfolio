import React from "react";
import { RiMenuFoldFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <div>
      <div className="nav fixed w-full flex justify-between items-center px-5 md:px-10 py-5 z-50">
        <div className="left w-1/2">
          <h1 className="text-[20px] text-nowrap lg:text-2xl font-semibold cursor-pointer">
            Abhishek <span>Ghosh</span>
          </h1>
        </div>
        <div className="right w-1/2 flex justify-end">
          <RiMenuFoldFill className="flex md:hidden lg:hidden text-[22px]" />
          <ul className="hidden md:flex lg:flex flex-row gap-10">
            <a href="#home">
              <li className="text-lg font-medium cursor-pointer hover:text-blue-400">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="text-lg font-medium cursor-pointer hover:text-blue-400 ">
                About
              </li>
            </a>
            <a href="#portfolio">
              <li className="text-lg font-medium cursor-pointer hover:text-blue-400 ">
                Projects
              </li>
            </a>
            <a href="#contact">
              <li className="text-lg font-medium cursor-pointer hover:text-blue-400 ">
                Contact
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
