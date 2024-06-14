"use client";
import { BsFillSendFill } from "react-icons/bs";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { AiFillInstagram } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = (data) => {
    const { name, email, message } = data;
    const ServiceId = "service_skyxlqk";
    const TemplateId = "template_9giszts";
    const publicKey = "R9o5wV2pae4TVpEEj";
    const TemplateParams = {
      from_name: name,
      from_email: email.toLowerCase(),
      to_name: "Shahed Abid",
      message: message,
    };

    emailjs
      .send(ServiceId, TemplateId, TemplateParams, publicKey)
      .then((res) => {
        if (res.text === "OK") {
          toast.success("Email sent successfully");
        } else {
          toast.error("Something went wrong");
        }
      });
    reset();
  };

  return (
    <div
      className="font overflow-hidden WhoImText relative lg:flex items-center justify-evenly my-28 lg:mx-20 mx-4 block"
      id="contact"
    >
      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="mb-10 flex flex-col"
      >
        <div>
          <motion.h1
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="font-bold lg:text-start text-center -mt-10 lg:mb-10 mb-20 text-4xl"
          >
            Contact <span className="text-[#00abf0]">Me</span>
          </motion.h1>
          <div className="flex text-[#00abf0] items-center my-4">
            <BsFillSendFill />
            <p className="ml-2 text-white text-[14px]">
              shahedak47mk47@gmail.com
            </p>
          </div>
          <div className="flex text-[#00abf0] items-center my-4">
            <MdLocalPhone size={20} />
            <p className="ml-2 text-white">+8801794951003</p>
          </div>
        </div>

        <div className="inline-flex items-center mt-4 contactLink">
          <Link
            className=" border-[#58ecd1] rounded-full border-2 mr-4 p-3 text-white "
            href="https://www.linkedin.com/in/shahed2247/"
            target="blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            className="border-[#58ecd1] rounded-full border-2 mr-4 p-3 text-white "
            href="https://www.facebook.com/shahed.abiddarpon"
            target="blank"
          >
            <FaFacebookF />
          </Link>
          <Link
            className="border-[#58ecd1] rounded-full border-2 mr-4 p-3 text-white "
            href="https://github.com/SoundlessGhost"
            target="blank"
          >
            <TbBrandGithubFilled />
          </Link>
          <Link
            className="border-[#58ecd1] rounded-full border-2 mr-4 p-3 text-white "
            href="https://www.instagram.com/_panther_48_/"
            target="blank"
          >
            <AiFillInstagram />
          </Link>
        </div>

        <ResumeDownloadButton />
      </motion.div>

      <motion.div
        whileInView={{ x: 0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <form onSubmit={handleSubmit(sendEmail)}>
          <div className="">
            <input
              {...register("name", { required: true })}
              className="bg-gray-800 border-0 border-b border-t p-4 w-full mb-8"
              type="text"
              placeholder="Your Name"
            />
            <p className="font text-[12px] mt-2 text-red-600">
              {errors.name?.message}
            </p>
          </div>
          <div className="">
            <input
              {...register("email", { required: true })}
              className="bg-gray-800 border-0 border-b border-t p-4 w-full mb-8"
              type="email"
              placeholder="Your Email Address"
            />
            <p className="font text-[12px] mt-2 text-red-600">
              {errors.email?.message}
            </p>
          </div>
          <div className="">
            <textarea
              {...register("message", { required: true })}
              className=" bg-gray-800 border-0 border-b border-t p-4 w-full mb-8"
              placeholder="Leave Your Message ..."
              cols="30"
              rows="5"
            ></textarea>
            <p className="font text-[12px] mt-2 text-red-600">
              {errors.message?.message}
            </p>
          </div>
          <div className="submitBtn">
            <a href="" className="py-[20px]">
              <input
                className="w-full  border-2 border-[#00abf0] text-[#00abf0] hover:text-black  font-bold  cursor-pointer p-4"
                type="submit"
                value="Send Email"
              />
            </a>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
