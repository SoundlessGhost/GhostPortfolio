/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import MobileNav from "./MobileNav";
import HeaderItems from "./HeaderItems";

const Header = () => {
  return (
    <>
      <MaxWidthWrapper>
        <div className="border-0 border-b border-[#516370] flex items-center font-bold justify-between py-8 px-12 text-white font">
          <Link className="text-3xl siteLogo relative" href="/">
            Shahed"
          </Link>

          <HeaderItems />

          <MobileNav />
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default Header;
