import React from "react";

import SpiderMan from "../assets/Spiderman.png";
const GameDetails = () => {
  return (
    <div
      className="GameDetails"
      style={{ maxWidth: "1146px", margin: "0px auto" }}
    >
      <div className=" Container flex flex-col px-10 lg:px-0  pt-16 pb-36">
        <h2
          className="text-white  font-semibold  text-wrap text-3xl  pb-8  "
          style={{ lineHeight: "56px" }}
        >
          Lorem Ipsum
        </h2>
        <p
          className="text-white  max-w-lg  text-base  pb-12"
          style={{ fontWeight: "400" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <img
          className="h-auto w-auto"
          src={SpiderMan}
          alt=""
          style={{ maxWidth: "1146px" }}
        />
      </div>
    </div>
  );
};

export default GameDetails;
