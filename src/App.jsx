import React from "react";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import TechStack from "./TechStack";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full text-zinc-100">
      <Navbar />
      <LandingPage />
      <TechStack />
      <About />
      <Portfolio />
      <Contact />
    </div>

    // in nav links : i want the bg black shadow when user hover on the links✅
    // in landing page : i want the typing effect✅
    // in landing page : i want the avatar image with some animation✅
    // in about section : i want a video or a gif is rotating 360deg on a image in infinite loop✅
    // in portfolio : change some projects with good one✅
    // make it responsive
    // deploy the project to github and gh-pages
  );
};

export default App;
