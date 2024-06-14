"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { motion } from "framer-motion";

const HomeContent = () => {
  return (
    <div className="font overflow-hidden Home lg:flex items-center justify-between block mb-20">
      <div className="h-[100vh] flex items-center py-0 px-[7%] max-w-[800px] ">
        <section className="Home-Content">
          {/* page text */}

          <div>
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="md:text-6xl text-3xl font-extrabold mb-4 relative"
            >
              Hi, I'm Shahed Abid
            </motion.h1>

            <motion.h3
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-2xl md:text-4xl font-semibold mb-4 relative"
            >
              Full Stack Developer
            </motion.h3>

            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-[14px] md:text-[16px] relative"
            >
              Working with{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                React Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Next Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Redux
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Node Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                Express Js
              </span>
              ,{" "}
              <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
                MongoDB
              </span>
              . I'm will be responsible for building and maintaining MERN Stack
              web applications and will play a key role in the development of
              our projects. MERN Stack Developer.
            </motion.p>
          </div>

          {/* links */}

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="inline-flex items-center mt-10 Home_sci"
          >
            <motion.div>
              <Link
                className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0] inline-flex items-center "
                href="https://www.linkedin.com/in/shahed2247/"
                target="blank"
              >
                <FaLinkedinIn />
              </Link>
            </motion.div>

            <motion.div>
              <Link
                className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0]  inline-flex items-center "
                href="https://www.facebook.com/shahed.abiddarpon"
                target="blank"
              >
                <FaFacebookF />
              </Link>
            </motion.div>

            <motion.div>
              <Link
                className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0]  inline-flex items-center "
                href="https://github.com/SoundlessGhost"
                target="blank"
              >
                <TbBrandGithubFilled />
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HomeContent;
