import React from "react";
import PropTypes from "prop-types";

import arrow from "../../assets/arrow.png";

/// This is a custom card for the service section To render service logo and service name
/// Props Service Name and Service Logo
const ServiceCard = ({ serviceImage, serviceHeading }) => {
  return (
    <div
      className="flex flex-col items-center space-y-5 flex-wrap"
      style={{ width: "calc(50% - 148px)", maxWidth: "120px" }}
    >
      <div
        className="rounded-full  bg-white  flex justify-center items-center  "
        style={{ height: "65px", width: "65px" }}
      >
        <img
          className="self-center"
          src={serviceImage}
          alt=""
          style={{ height: "29px", width: "29px" }}
        />
      </div>
      <h2 className="text-white self-center   text-base text-center">
        {serviceHeading}
      </h2>
      <img src={arrow} alt="" />
    </div>
  );
};

ServiceCard.propTypes = {
  serviceImage: PropTypes.string.isRequired,
  serviceHeading: PropTypes.number.isRequired,
};

export default ServiceCard;
