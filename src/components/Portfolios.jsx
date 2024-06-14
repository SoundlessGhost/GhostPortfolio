"use client";
import ShowPortfolioData from "./ShowPortfolioData";
import { motion } from "framer-motion";

const Portfolios = () => {
  return (
    <div className="text-center my-20 font overflow-hidden" id="project">
      <motion.h1
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="font-bold text-4xl mb-20 relative"
      >
        My <span className="text-[#00abf0]">Projects</span>
      </motion.h1>

      <ShowPortfolioData />
    </div>
  );
};

export default Portfolios;
