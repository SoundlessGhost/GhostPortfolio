import ShowPortfolioData from "./ShowPortfolioData";

const Portfolios = () => {
  return (
    <div className="text-center my-20 font" id="portfolio">
      <h1 className="font-bold text-4xl mb-20 WhoImText relative">
        My <span className="text-[#00abf0]">Portfolios</span>
      </h1>

      <ShowPortfolioData />
    </div>
  );
};

export default Portfolios;
