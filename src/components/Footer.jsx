import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
const Footer = () => {
  return (
    <MaxWidthWrapper>
      <div className="border-0 border-t border-[#516370] py-10 text-center font ImHere relative">
        <p>
          Thanks for viewing my portfolio Designed By{" "}
          <span className="text-[#00abf0] font-bold">SHAHED ABID DARPON</span>
        </p>

        <div className="inline-flex items-center mt-10 footerLink">
          <Link
            className="border-gray-400 rounded-full border-2 mr-4 p-3 text-gray-400"
            href="https://www.linkedin.com/in/shahed2247/"
            target="blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className="border-gray-400 rounded-full border-2 mr-4 p-3 text-gray-400"
            href="https://www.facebook.com/shahed.abiddarpon"
            target="blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            className="border-gray-400 rounded-full border-2 mr-4 p-3 text-gray-400"
            href="https://github.com/SoundlessGhost"
            target="blank"
          >
            <TbBrandGithubFilled />
          </Link>
        </div>

        <p>Copyright © 2024, All Rights Reserved</p>
      </div>
    </MaxWidthWrapper>
  );
};

export default Footer;
