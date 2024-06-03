import About from "@/components/About";
import Contact from "@/components/Contact";
import HomeContent from "@/components/HomeContent";
import Portfolios from "@/components/Portfolios";
import Services from "@/components/Services";

export default function HomePage() {
  return (
    <>
      <HomeContent />
      <About />
      <Portfolios />
      <Services />
      <Contact/>
    </>
  );
}
