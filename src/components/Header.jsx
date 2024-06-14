"use client";
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import HeaderItems from "./HeaderItems";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="border-0 border-b overflow-hidden border-[#516370] flex items-center font-bold justify-between py-6 lg:px-10 text-white font">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="ml-10 lg:ml-0"
          >
            <MobileNav />
            <Link className="text-3xl ml-4 lg:ml-0 relative" href="/">
              Shahed"
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <HeaderItems />
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Header;
