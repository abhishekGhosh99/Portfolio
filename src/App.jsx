import React from "react";
import {
  Navbar,
  LandingPage,
  About,
  Portfolio,
  Contact,
  TechStack,
} from "./index";
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
