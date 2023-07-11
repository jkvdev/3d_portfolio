import React, { useEffect, useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
// Desktop only eats a lot of resources
import { BallCanvas } from "./canvas";
// Mobile elements
import TechLogoMarquee from "./TechLogoMarquee";
import TechTextMarquee from "./TechTextMarquee";
// Animations
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  // Same logic for the computer canvas
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      <motion.div variants={textVariant()} className="mb-32">
        <p className={styles.sectionSubText}>What I work with</p>
        <h2 className={styles.sectionHeadText}>Skillset.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 ">
        {isMobile ? (
          // If mobile make a marquee with the skills and technologies
          <>
            <TechLogoMarquee isMobile={isMobile} />
            <TechTextMarquee isMobile={isMobile} direction="right" />
            <TechTextMarquee isMobile={isMobile} />
            <TechLogoMarquee isMobile={isMobile} direction="right" />
          </>
        ) : (
          // If it's on pc it can handle floating balls with logos
          <>
            {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
