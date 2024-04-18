import React from "react";

/// This component is responsible to let users mention their email for updates
const ConnectWithUs = () => {
  return (
    <div className="ConnectWithUs w-full max-w-6xl mx-auto">
      <div className="Container flex flex-col  pb-40">
        <h2 className="text-white  font-semibold  text-wrap text-3xl  pb-8 md:px-0 px-10  ">
          Lorem Ipsum
        </h2>
        <p
          className="text-white  max-w-lg  text-base  pb-12 md:px-0 px-10"
          style={{ fontWeight: "400" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>

        {/* Email Card  begins */}
        <div
          className="EmailCard flex justify-evenly flex-wrap  rounded-md p-8   "
          style={{ background: " #1C140F " }}
        >
          <div style={{ width: "50%" }}>
            <h2
              className="text-white  text-3xl  pb-2.5  "
              style={{ lineHeight: "56px" }}
            >
              Stay in the loop
            </h2>

            <p
              className="text-white  flex text-wrap  pb-12"
              style={{ fontWeight: "400", maxWidth: "636px", fontSize: "17px" }}
            >
              Subscribe to receive the latest news and updates about TDA. We
              promise not to spam you!
            </p>
          </div>
          <div className="flex  pt-14">
            <div
              className="flex flex-wrap bg-white justify-between rounded-md align-middle p-1 "
              style={{
                width: "fit-content",
                height: "48px",
              }}
            >
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="enter your email"
                className="pl-5 md:pl-10 pr-5 md:pr-24 py-2"
                style={{ fontSize: "13px", outlineWidth: 0 }}
              />
              <button
                className="rounded-md  text-white px-4 "
                style={{
                  width: "fit-content",
                  height: "41.343px",
                  background: " #DC7000",
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {/* email card ends  */}
      </div>
    </div>
  );
};

export default ConnectWithUs;
