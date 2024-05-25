import Link from 'next/link';
import React from 'react';

const HeaderItems = () => {
    return (
        <nav className="hidden lg:block siteLogo relative">
            <Link
              className="ml-4 hover:text-[#00abf0]  text-[#00abf0] hover:bg-slate-800 hover:rounded-md p-4"
              href="#"
            >
              Home
            </Link>
            <Link
              className="ml-4 hover:text-[#00abf0]  hover:bg-slate-800 hover:rounded-md p-4 "
              href="#about"
            >
              About
            </Link>
            <Link
              className="ml-4 hover:text-[#00abf0]  hover:bg-slate-800 hover:rounded-md p-4 "
              href="#portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="ml-4 hover:text-[#00abf0]  hover:bg-slate-800 hover:rounded-md p-4 "
              href="#services"
            >
              Services
            </Link>
            <Link
              className="ml-4 hover:text-[#00abf0]  hover:bg-slate-800 hover:rounded-md p-4 "
              href="#contact"
            >
              Contact
            </Link>
          </nav>
    );
};

export default HeaderItems;