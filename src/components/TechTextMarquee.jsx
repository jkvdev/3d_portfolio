import React from "react";
import { technologies } from "../constants";
import Marquee from "react-fast-marquee";

const TechTextMarquee = ({ isMobile, direction }) => {
  return (
      <Marquee
        autoFill
        play
        pauseOnHover
        speed={isMobile ? 20 : 40}
        direction={direction || "left"}
        className="h-fit -mt-4"
      >
        {technologies.map((technology, index) => (
          <div className="w-fit h-auto mx-3 md:mx-4" key={`tech-${index}`}>
            <div className="w-full">
              <h3 className="text-white text-[20px] font-bold text-center">
                {technology.name}.
              </h3>
            </div>
          </div>
        ))}
      </Marquee>
  );
};

export default TechTextMarquee;
