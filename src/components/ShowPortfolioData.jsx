/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { portfolios } from "@/lib/portfolioData";
import { motion } from "framer-motion";

const ShowPortfolioData = () => {
  return (
    <div className="lg:mx-28 mx-4 overflow-hidden">
      {portfolios.map((item) => (
        <div key={item.id} className="flex flex-col mb-20">
          <div className="block lg:flex ">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <Link href={item.link} target="blank">
                <img
                  className="w-[350px] mb-4 mr-20 rounded-xl h-[220px]"
                  src={item.img}
                  alt="projects images"
                />
              </Link>
            </motion.div>

            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="text-start lg:w-[550px]"
            >
              <h3 className="text-2xl my-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>

              <motion.div
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 100, opacity: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
              >
                {item.language.map((itm, i) => (
                  <span
                    key={i}
                    className="text-[#00abf0] font-bold bg-slate-800 text-[8px] p-1 mr-2"
                  >
                    {itm}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowPortfolioData;
