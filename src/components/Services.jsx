"use client";
/* eslint-disable react/no-unescaped-entities */
import { Box, ChevronsLeftRight, Cog } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="text-center -mt-20 font" id="services">
      <motion.h1
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-bold text-4xl mb-20 relative"
      >
        My <span className="text-[#00abf0]"> Services</span>
      </motion.h1>

      <div className="lg:flex justify-between lg:mx-20 mx-4 block ">
        <motion.div
        whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="px-8 lg:w-[400px] imgHover -mt-3  rounded-xl mb-10"
        >
          <div className="siteLogo relative">
            <ChevronsLeftRight
              size={70}
              className="text-red-500 w-[100%] mb-4 "
            ></ChevronsLeftRight>
          </div>
          <h1 className="text-2xl ImHere relative">Frontend Development</h1>
          <p className="text-gray-400 mt-4  WhoIm relative">
            Professional Front End Web Developer, Free Minded, Clean & 100% Hand
            Written Code. Skilled in creating professionally designed & website
            templates
          </p>
        </motion.div>

        <motion.div
        whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="px-8 lg:w-[400px] imgHover  rounded-xl mb-10"
        >
          <div className="siteLogo relative">
            <Box size={60} className=" text-[#00abf0] w-[100%] mb-4"></Box>
          </div>
          <h1 className="text-2xl ImHere relative">MERN Stack Development</h1>
          <p className="text-gray-400 mt-4 WhoIm relative">
            As a MERN Stack Web Developer, I'm responsible for making and
            maintaining a website. I can develop your website and make your
            website fast
          </p>
        </motion.div>

        <motion.div
        whileInView={{ x: 0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="px-8 lg:w-[400px] imgHover  rounded-xl mb-10"
        >
          <div className="siteLogo relative">
            <Cog size={60} className="text-green-500 w-[100%] mb-4"></Cog>
          </div>
          <h1 className="text-2xl ImHere relative">
            Maintenance & Optimization
          </h1>
          <p className="text-gray-400 mt-4 WhoIm relative">
            Slow loading website it’s the biggest problem for every website. I
            can boost your website’s speed by optimization your website.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
