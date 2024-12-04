import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return <>
    <motion.div variants={textVariant()}>
      <h2 className={`${styles.sectionHeadText}`}>Skills</h2>
    </motion.div>
    <div className='flex flex-row flex-wrap gap-10'>
      {technologies.map((technology, i) => (
        <div className='w-28 h-28 text-center' key={i}>
          <BallCanvas icon={technology.icon} />
          {technology.name}
        </div>
      ))}
    </div>
  </>
};

export default SectionWrapper(Tech, "skills");
