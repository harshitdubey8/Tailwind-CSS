import React from "react";
import PropTypes from "prop-types";

/// This is a custom Card for the Footer , It takes Logo as input and returns them inside a card
const SocialCard = ({ imagePath }) => {
  return (
    <div
      className="rounded-full  bg-white  flex justify-center align-middle   "
      style={{ height: "34px", width: "34px" }}
    >
      <img
        className="self-center"
        src={imagePath}
        alt=""
        style={{ height: "13px", width: "13px" }}
      />
    </div>
  );
};

SocialCard.propTypes = {
  imagePath: PropTypes.string.isRequired,
};

export default SocialCard;
