import React from "react";
import JoyStick from "../../assets/joy_stick2.png";
import unity from "../../assets/unity.png";
import cry from "../../assets/cry.png";
import unreal from "../../assets/unreal 1.png";

const Hero = () => {
  return (
    <div className="Banner">
      <div
        className=" Container flex lg :pl-0 pl-10 "
        style={{ paddingTop: "121px", maxWidth: "1146px", margin: "0px auto" }}
      >
        {/* left side */}
        <div className="LeftSide">
          <h2 className="text-xl  font-bold" style={{ color: "#E87D0E" }}>
            3D Game Dev
          </h2>
          <h1
            className="text-white  font-bold flex max-w-md  text-wrap text-5xl pt-4"
            style={{ lineHeight: "77px" }}
          >
            Work that we produce for our clients
          </h1>
          <p
            className="text-white text-base flex text-wrap  pt-7 pb-12"
            style={{ lineHeight: "32px", maxWidth: "527px" }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>

          <button
            className="rounded-full px-5 py-3 text-white "
            style={{
              background:
                "linear-gradient(92deg, #FA8305 2.08%, #FB9E3C 117.25%",
            }}
          >
            Get More Details
          </button>
        </div>

        {/* right side */}
        {/* IMAGEs  */}

        <div className="RightSide hidden xl:block">
          <img
            className="absolute top-0 right-0 "
            style={{ height: "761px", width: "auto" }}
            src={JoyStick}
            alt="joystick"
          />
          <img
            className="absolute top-96 right-35 "
            style={{ height: "30px", width: "auto", top: 400, right: 700 }}
            src={unity}
            alt="unity"
          />

          <img
            className="absolute"
            style={{ height: "99px", width: "auto", top: 200, right: 500 }}
            src={cry}
            alt="cry"
          />
          <img
            className="absolute"
            style={{ height: "64px", width: "auto", top: 230, right: 250 }}
            src={unreal}
            alt="unreal"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
