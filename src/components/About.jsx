import React from "react";
// import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
  >
    <div
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <img
        src={icon}
        alt='web-development'
        className='w-16 h-16 object-contain'
      />

      <h3 className='text-white text-[20px] font-bold text-center'>
        {title}
      </h3>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] leading-[30px]'
      >
        As a skilled Frontend Developer with over 5 years of experience in Frontend and Fullstack development, I specialize in building scalable, high-performance applications using the MEAN and MERN stacks. My expertise is further enhanced by a strong foundation in cloud technologies, including AWS, allowing me to design, develop, and deploy robust solutions on modern architectures.
        <br className='sm:block hidden' />
        <br className='sm:block hidden' />
        I have successfully delivered projects across various domains, including MVPs for startups, large-scale enterprise applications, and freelance initiatives. My approach is defined by a solution-oriented mindset, adaptability to diverse challenges, and a commitment to delivering efficient, high-quality outcomes.
        <br className='sm:block hidden' />
        <br className='sm:block hidden' />
        I excel at bridging technical complexities with clear communication, fostering collaboration across cross-functional teams, and driving alignment toward shared goals. With a proactive and leadership-driven approach, I empower teams to navigate challenges effectively, ensuring smooth execution and project success. My portfolio showcases a consistent track record of innovation, technical excellence, and a customer-focused approach to software development.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <div className="w-full lg:w-[47%]" key={`project-${index}`}>
            <ServiceCard key={service.title} index={index} {...service} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
