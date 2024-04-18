import React from "react";

import project1 from "../assets/Project 1.png";
import project2 from "../assets/Project2.png";
import project3 from "../assets/Project3.png";
import project4 from "../assets/Project4.png";
import project5 from "../assets/Project5.png";
import project6 from "../assets/Project6.png";

const projects = [
  {
    id: 1,
    projectImg: project1,
  },

  {
    id: 2,
    projectImg: project2,
  },

  {
    id: 3,
    projectImg: project3,
  },

  {
    id: 4,
    projectImg: project4,
  },

  {
    id: 5,
    projectImg: project5,
  },

  {
    id: 6,
    projectImg: project6,
  },
];

const RecentProjects = () => {
  return (
    <div className="Recent Projects">
      <div className="Container  pt-36 pb-24 space-y-10  flex flex-col align-middle justify-center ">
        <h2 className="text-white  font-semibold  text-wrap text-3xl   text-center">
          Our Recent Projects
        </h2>
        <h2
          className="text-white self-center flex text-wrap text-sm  text-center "
          style={{ maxWidth: "497px", lineHeight: "26px" }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h2>

        {/* recent projects  */}

        <div
          className="projects flex flex-wrap px-32  justify-center align-middle "
          style={{ gap: "20px" }}
        >
          {projects.map((item) => (
            <img
              style={{ width: "calc(50% - 20px)", maxWidth: "250px" }}
              key={item.id}
              src={item.projectImg}
              alt="projects"
            />
          ))}
        </div>

        <button
          className=" rounded-md p-2.5 text-white  "
          style={{
            width: "fit-content",
            alignSelf: "center",
            background: " rgba(255, 255, 255, 0.11)",
          }}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default RecentProjects;
