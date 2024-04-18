import React from "react";
import PropTypes from "prop-types";

import Fire from "../../assets/fire.png";

///This is a Custom game card to render Game images and followers
/// Props ImageUrl and Followers count
const GameCard = ({ image, followers }) => {
  return (
    <div
      className="GameCard flex flex-col   gap-y-7"
      style={{ width: "calc(50% - 45px)", maxWidth: "250px" }}
    >
      <img
        className=" GameImage"
        style={{ width: "100%", height: "100%" }}
        src={image}
        alt=""
      />

      <div className="flex  space-x-1  items-center self-center pb-10 md:pb-0 ">
        <img src={Fire} alt="" />
        <h3 className="text-white">{followers} Followers</h3>
      </div>
    </div>
  );
};

GameCard.propTypes = {
  image: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
};

export default GameCard;
