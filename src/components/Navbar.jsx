import React, { useState } from "react";
import { RiMenuFoldFill } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
// import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  // const history = useHistory();

  const handleClick = () => {
    setSidebar(!sidebar);
  };

  // const handleLinkClick = (path) => {
  //   history.push(path);
  //   setSidebar(false);
  // };

  return (
    <div>
      <div className="nav fixed w-full flex justify-between items-center px-5 md:px-10 py-5 z-50">
        <div className="left w-1/2">
          <h1 className="text-[20px] text-nowrap lg:text-2xl font-semibold cursor-pointer">
            Abhishek <span>Ghosh</span>
          </h1>
        </div>
        <div className="right w-1/2 flex justify-end">
          <RiMenuFoldFill
            className="flex md:hidden lg:hidden text-[22px]"
            onClick={handleClick}
          />
          {/*********** for mobile devices **********/}
          <div
            className={`sidebar lg:hidden fixed top-0 right-0 h-full bg-gray-800 w-[60%] z-50 ${
              sidebar ? "block" : "hidden"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-white"
              onClick={handleClick}
            >
              <GrClose className="flex text-[22px]" />
            </button>
            <ul className="py-28 px-10 flex flex-col gap-10">
              <a href="#home">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-blue-400"
                  // onClick={() => handleLinkClick("/")}
                >
                  Home
                </li>
              </a>
              <a href="#about">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-blue-400"
                  // onClick={() => handleLinkClick("/about")}
                >
                  About
                </li>
              </a>
              <a href="#portfolio">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-blue-400"
                  // onClick={() => handleLinkClick("/portfolio")}
                >
                  Projects
                </li>
              </a>
              <a href="#contact">
                <li
                  className="text-lg font-medium cursor-pointer hover:text-blue-400"
                  // onClick={() => handleLinkClick("/contact")}
                >
                  Contact
                </li>
              </a>
            </ul>
          </div>

          {/******** for large screen devices *********/}
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
