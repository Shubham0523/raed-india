import React from "react";

export default function CoreTeam() {
  const cc = [
    {
      avatar: "/team/",
      name: "Jitender Arora",
      position: "Founder",
    },
    {
      avatar: "/team/shubham.jpg",
      name: "Shubham",
      position: "Intern",
    },
    {
      avatar: "/team/shubham.jpg",
      name: "Shubham",
      position: "Intern",
    },
    {
      avatar: "/team/shubham.jpg",
      name: "Shubham",
      position: "Intern",
    },
    {
      avatar: "/team/shubham.jpg",
      name: "Shubham",
      position: "Intern",
    },
  ];
  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-14 transition-transform transform hover:scale-105"
      id="team"
    >
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        United efforts within the realm of charitable initiatives act as a
        powerful catalyst, fostering collaboration that transforms collective
        endeavors into impactful outcomes for the greater good.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12 overflow-x-auto">
        <div className="flex flex-row w-max flex-wrap">
          {/* Card */}
          {cc.map((cc, index) => (
            <div
              key={index}
              className="flex flex-col items-center m-2 p-4 py-10 brightness-90 rounded-md w-56 transition-transform transform hover:scale-110"
            >
              <img
                src={cc.avatar}
                alt=""
                className="rounded-full w-20 h-20 md:w-28 md:h-28 object-cover ring ring-zinc-200"
              />
              <p className="font-medium mt-2 text-lg opacity-75">{cc.name}</p>
              <p className="text-zinc-500">{cc.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
