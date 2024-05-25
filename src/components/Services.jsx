/* eslint-disable react/no-unescaped-entities */
import { Box, ChevronsLeftRight, Cog } from "lucide-react";

const Services = () => {
  return (
    <div className="text-center my-36 font" id="services">
      <h2 className="font-bold text-4xl mb-20 WhoImText relative">
        My <span className="text-[#00abf0]"> Services</span>
      </h2>

      <div className="lg:flex justify-between mx-20 block ">
        <div className="p-8 lg:w-[400px] imgHover border border-red-500 rounded-xl mb-10 hover:bg-gray-900">
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
        </div>

        <div className="p-8 lg:w-[400px] imgHover border border-[#00abf0] rounded-xl mb-10 hover:bg-gray-900">
          <div className="siteLogo relative">
            <Box size={60} className=" text-[#00abf0] w-[100%] mb-4"></Box>
          </div>
          <h1 className="text-2xl ImHere relative">MERN Stack Development</h1>
          <p className="text-gray-400 mt-4 WhoIm relative">
            As a MERN Stack Web Developer, I'm responsible for making and
            maintaining a website. I can develop your website and make your
            website fast
          </p>
        </div>

        <div className="p-8 lg:w-[400px] imgHover border border-green-500 rounded-xl mb-10 hover:bg-gray-900">
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
        </div>
      </div>
    </div>
  );
};

export default Services;
