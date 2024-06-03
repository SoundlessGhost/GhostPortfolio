/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { portfolios } from "@/lib/portfolioData";

const ShowPortfolioData = () => {
  return (
    <div className="portfolio-Container  block lg:grid  grid-cols-4 gap-8 lg:mx-10 mx-28">
      {portfolios.map((item) => (
        <div key={item.id} className="work relative overflow-hidden">
          <Link href={item.link} target="blank">
            <img
              className="w-[350px] mb-10 rounded-xl h-[300px]"
              src={item.img}
              alt="portfolio images"
            />
            <div className="layer px-2">
              <h3 className="text-2xl my-4">{item.title}</h3>
              <p className="text-[10px] lg:text-[13px]">{item.description}</p>
              <div className="w-[100%] lg:flex justify-center hidden">
                <div className="bg-white h-[40px] w-[40px] rounded-full flex items-center justify-center text-center mt-4">
                  <FaExternalLinkAlt
                    size={20}
                    className="text-[#00abf0]"
                  ></FaExternalLinkAlt>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ShowPortfolioData;
