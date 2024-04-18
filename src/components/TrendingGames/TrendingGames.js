import React from "react";

import Game1 from "../../assets/Game1.png";
import Game2 from "../../assets/Game2.png";
import Game3 from "../../assets/Game3.png";
import Game4 from "../../assets/Game4.png";
import GameCard from "./GameCard";

//Dummy data to render Trending games
const Games = [
  {
    id: 1,
    gameImg: Game1,
    followers: 40,
  },
  {
    id: 2,
    gameImg: Game2,
    followers: 40,
  },
  {
    id: 3,
    gameImg: Game3,
    followers: 40,
  },
  {
    id: 4,
    gameImg: Game4,
    followers: 40,
  },
];

/// This section of code renders List of trending games
const TrendingGames = () => {
  return (
    <div className="trending-games pt-44">
      <div
        className="container  xl:pl-0 pl-10  "
        style={{ maxWidth: "1146px", margin: "0px auto" }}
      >
        <div className="flex justify-between  lg:pr-0 pr-10  pb-8 ">
          <h2 className="text-white font-bold  text-xl ">
            Currently Trending Games
          </h2>
          <button
            className="rounded-md p-2.5 text-white "
            style={{
              width: "fit-content",

              alignSelf: "center",
              background: " rgba(255, 255, 255, 0.11)",
            }}
          >
            See All
          </button>
        </div>
        <div className=" flex   ">
          <div className="flex  flex-wrap" style={{ gap: " 10px 45px" }}>
            {Games.map((item) => (
              <GameCard
                key={item.id}
                followers={item.followers}
                image={item.gameImg}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingGames;
