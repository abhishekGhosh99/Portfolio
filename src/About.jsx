import React, { useEffect, useState } from "react";
import { aboutImage, aboutSubImage } from "./assets";

const About = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotate((prevRotate) => prevRotate + 0.8);
    }, 10);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="about">
      <div className="about w-full px-[8vw] py-[10vh] lg:py-[6vw] flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20">
        <div className="left relative w-full lg:w-1/2 flex justify-center items-center lg:px-10">
          <img src={aboutImage} className="rounded-xl lg:max-w-[120%]" alt="" />
          <div
            style={{ transform: `rotate(${rotate}deg)` }}
            className="about-avatar hidden absolute bottom-[0%] right-[0%] lg:flex justify-center items-center transition-transform"
          >
            <div className="glowie-div w-[160px] h-[160px] rounded-full bg-blue-200 absolute flex justify-center items-center right-0 z-10"></div>
            <img
              src={aboutSubImage}
              className="about-sub-image w-[130px] relative rounded-full right-[0px] z-20"
              alt=""
            />
          </div>
        </div>
        <div className="right w-full lg:w-1/2 flex flex-col justify-start items-start gap-4">
          <h3 className="text-[5vw] lg:text-xl font-semibold uppercase text-blue-300 pb-6">
            About Me
          </h3>
          <h1 className="text-[5vw] lg:text-[2.5vw] font-semibold">
            Front-end Developer based in Delhi, India 📍
          </h1>
          <p className="text-[18px] lg:text-[15px] text-zinc-300">
            Hey, my name is Abhishek, and I'm a Frontend Developer. My passion
            is to create and develop a clean UI/UX for my users.
          </p>
          <p className="text-[18px] lg:text-[15px] text-zinc-300">
            I am a highly motivated web developer with a strong foundation in
            frontend technologies such as HTML, CSS, JavaScript and React.js. My
            proficiency extends to modern frontend frameworks like React.js, and
            I have hands-on experience in collaborative version control using
            GitHub.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
