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
  );
};

export default App;
