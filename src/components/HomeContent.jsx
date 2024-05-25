/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";

const HomeContent = () => {
  return (
    <div className="font Home lg:flex items-center justify-between block mb-20">
      <div className="h-[100vh] flex items-center py-0 px-[7%] max-w-[800px] ">
        <section className="Home-Content">
          <div>
            <h1 className="md:text-6xl text-3xl font-extrabold mb-4 relative ImHere">
              Hi, I'm Shahed Abid
            </h1>
            <h3 className="text-2xl md:text-4xl font-semibold mb-4 WhoIm relative">
              Full Stack Developer
            </h3>
            <p className="text-[14px] md:text-[16px] WhoImText relative">
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
              . I'm will be responsible for building and maintaining MERN STACK
              web applications and will play a key role in the development of
              our projects. MERN Stack Developer.
            </p>
          </div>

          <div className="inline-flex items-center mt-10 Home_sci">
            <Link
              className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0]"
              href="https://www.linkedin.com/in/shahed2247/"
              target="blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0]"
              href="https://www.facebook.com/shahed.abiddarpon"
              target="blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              className="border-[#00abf0] rounded-full border-2 mr-4 p-3 text-[#00abf0]"
              href="https://github.com/SoundlessGhost"
              target="blank"
            >
              <TbBrandGithubFilled />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeContent;
