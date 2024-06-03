/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const About = () => {
  return (
    <div className="about font" id="about">
      <h1 className="text-4xl font-bold WhoImText relative">
        About <span className="text-[#00abf0]">ME</span>
      </h1>

      <div className="about-img">
        <img
          className="w-[150px] border-4  h-[150px] rounded-full"
          src="/shahed.jpg"
          alt=""
        />
        <div className="circle-spin"></div>
      </div>

      <div>
        <h3 className="text-center text-3xl text-[#00abf0] mb-6 WhoImText relative">
          Full Stack Developer
        </h3>
        <p className="mx-20 WhoImText relative">
          I a'm MERN Stack WEB Developer. I am working with{" "}
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
          , and{" "}
          <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
            MongoDB
          </span>
          . I also have experience in developing static websites using{" "}
          <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
            HTML5
          </span>
          ,{" "}
          <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
            CSS3
          </span>{" "}
          and{" "}
          <span className="text-[#00abf0] text-[16px]  md:text-[18px] font-extrabold">
            JavaScript (ES6)
          </span>
          . I a'm quick learner. I believe in hard work and efficiency. That's
          why I am always ready to accomplish any task by working hard. I always
          focus on learning new technology. My goal is to become A World-Class
          Professional Web Developer.
        </p>
      </div>
    </div>
  );
};

export default About;
