import React from "react";

import facebook from "../../assets/facebook 1.png";
import twitter from "../../assets/Twitter.png";
import instagram from "../../assets/instagram 1.png";
import linkedin from "../../assets/linkedin 1.png";
import SocialCard from "./SocialCard";

const Footer = () => {
  return (
    <div className="Footer">
      <div
        className="flex  flex-wrap     p-24 gap-x-28"
        style={{ borderBottom: "1px solid white" }}
      >
        {/* company details     */}
        <div className="">
          <h2
            className="text-white  font-extrabold pb-3.5 "
            style={{ fontSize: "24px" }}
          >
            LOGO
          </h2>

          <p
            className="text-white flex text-wrap  text-base   pb-6"
            style={{
              maxWidth: "372px",
              lineHeight: "normal",
              fontWeight: "400",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p
            className="text-white  text-base "
            style={{
              fontWeight: "400",
            }}
          >
            @Logo
          </p>
        </div>

        {/* about us */}
        <div>
          <p
            className="text-white pb-3.5 text-base md:pt-0 pt-5 "
            style={{
              fontWeight: "400",
              fontSize: "17px",
            }}
          >
            About Us
          </p>
          <p
            className="text-white   text-base "
            style={{
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            Zeux
          </p>
          <p
            className="text-white  text-base "
            style={{
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            Portfolio
          </p>
          <p
            className="text-white  text-base "
            style={{
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            Carriers
          </p>
          <p
            className="text-white  text-base "
            style={{
              fontWeight: "400",
              lineHeight: "30px",
            }}
          >
            Contact Us
          </p>
        </div>

        {/* contact us  */}
        <div>
          <p
            className="text-white pb-3.5 text-base md:pt-0 pt-5 "
            style={{
              fontWeight: "400",
              fontSize: "17px",
            }}
          >
            Contact Us
          </p>
          <p
            className="text-white  flex text-wrap text-base pb-3.5 "
            style={{
              fontWeight: "400",
              maxWidth: "282px",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p
            className="text-white  text-base "
            style={{
              fontWeight: "400",
            }}
          >
            +908 89097 890
          </p>
        </div>

        {/* social  */}
        <div className="flex self-end gap-x-3 md:pt-0 pt-5">
          <SocialCard imagePath={facebook} />
          <SocialCard imagePath={instagram} />
          <SocialCard imagePath={twitter} />
          <SocialCard imagePath={linkedin} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
