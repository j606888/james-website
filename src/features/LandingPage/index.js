import Hero from "./Hero";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Service />
      <Portfolio />
      <Contact />
      <div className="flex items-center justify-center py-4">
        <p className="text-[#D4D4D4] text-sm">Copyright © 2025 James Lees</p>
      </div>
    </>
  );
};

export default LandingPage;