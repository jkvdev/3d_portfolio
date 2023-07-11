import React from "react";
import { technologies } from "../constants";
import Marquee from "react-fast-marquee";

const TechLogoMarquee = ({ isMobile, direction }) => {
  return (
    <Marquee
      autoFill
      play
      pauseOnHover
      speed={isMobile ? 50 : 70}
      direction={direction || "left"}
      className="h-fit -mt-4"
    >
      {technologies.map((technology) => (
        <div className="w-12 md:w-20 h-auto mx-3 md:mx-4" key={technology.name}>
          <div className="xs:max-w-[100px] w-full">
            <img
              src={technology.icon}
              alt={technology.name}
              className={`w-20 h-20 object-contain ${
                technology.name === "Three JS" && "invert"
              }`}
            />
          </div>
        </div>
      ))}
    </Marquee>
  );
};

export default TechLogoMarquee;
