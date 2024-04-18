import React from "react";

import Hero from "../components/BannerSection/Hero";
import TrendingGames from "../components/TrendingGames/TrendingGames";
import Quote from "../components/Quote";
import GameDetails from "../components/GameDetails";
import Services from "../components/Services/Services";
import RecentProjects from "../components/RecentProjects";
import ConnectWithUs from "../components/ConnectWithUs";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Footer/Copyright";

const About = () => {
  return (
    <div className="About">
      {/* separate Div to give linear gradient  */}
      <div
        style={{
          background: "linear-gradient(181deg, #000 0.82%, #4A2800 209.1%)",
        }}
      >
        <Hero />
        <TrendingGames />
        <Quote />
        <GameDetails />
        <Services />
      </div>
      <div
        style={{
          background: "linear-gradient(181deg, #000 0.82%, #4A2800 309.1%)",
        }}
      >
        <RecentProjects />
        <ConnectWithUs />
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default About;
