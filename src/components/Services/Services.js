import React from "react";

import BGI from "../../assets/BackgroundImage.png";
import desktop from "../../assets/desktop.png";
import pc from "../../assets/pc.png";
import vr from "../../assets/vr.png";
import smartPhone from "../../assets/smartphone.png";
import ps4 from "../../assets/ps4.png";
import group from "../../assets/Group.png";

import ServiceCard from "./ServiceCard";

const services = [
  {
    imgUrl: desktop,
    serviceHeading: "AR/VR Design",
    id: 1,
  },
  {
    imgUrl: pc,
    serviceHeading: "PC Game Development",
    id: 2,
  },
  {
    imgUrl: vr,
    serviceHeading: "VR Game Development",
    id: 3,
  },
  {
    imgUrl: smartPhone,
    serviceHeading: "Mobile Game Development",
    id: 4,
  },
  {
    imgUrl: ps4,
    serviceHeading: "PS4 Game Development",
    id: 5,
  },
  {
    imgUrl: group,
    serviceHeading: "3D Modeling",
    id: 6,
  },
];

const Services = () => {
  return (
    <div
      className="Services bg-cover bg-center w-full"
      style={{
        backgroundImage: `url(${BGI})`,
      }}
    >
      <div
        className="Container flex flex-col space-y-10 justify-center align-middle pb-24  bg-cover bg-center w-full    lg:px-0 px-10  "
        style={{
          maxWidth: "1146px",
          margin: "0px auto",
        }}
      >
        <h2
          className="text-white  font-semibold pt-24 text-wrap text-3xl flex text-center self-center"
          style={{ maxWidth: "826px", lineHeight: "56px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>
        <h2
          className="text-white self-center  text-wrap text-base text-center pb-24"
          style={{ maxWidth: "820px", lineHeight: "30px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h2>

        <div
          className="Services flex flex-wrap justify-center  "
          style={{
            gap: "62px 148px",
          }}
        >
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              serviceImage={item.imgUrl}
              serviceHeading={item.serviceHeading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
