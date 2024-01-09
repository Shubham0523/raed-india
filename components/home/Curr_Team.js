import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="w-full p-2">
      <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
        <div className="hidden md:block h-15 w-48 bg-gray-300"></div>
        <div className="h-40 w-48 bg-gray-300"></div>
        <div className="px-6 py-4">
          <div className="h-6 bg-gray-300 mb-2"></div>
          <div className="h-4 bg-gray-300 w-2/3"></div>
        </div>
        <div className="px-6 pt-4 pb-2">
          <div className="h-4 bg-gray-300 w-1/4 mb-2"></div>
          <div className="h-4 bg-gray-300 w-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default function CoreTeam() {
  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-14 mb-10 p-4"
      id="team"
    >
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4 p-4">
        <p className="text-justify">
          Collaborative endeavors in the charitable domain serve as a potent
          catalyst, cultivating teamwork that metamorphoses collective
          initiatives into impactful outcomes for the greater good. Stay tuned
          as we unveil our team soon! In the meantime, click the button below to
          join our journey.
        </p>
      </p>
      <div class="grid grid-cols-3 gap-20 p-6 mt-20">
        <LoadingSkeleton />
        <LoadingSkeleton />
        <LoadingSkeleton />
      </div>
      <button
        className="p-6 flex justify-center text-black font-medium border border-black rounded-md py-3 px-7.5 hover:bg-black hover:text-white ease-in duration-200 mx-auto mt-10"
        onClick={() =>
          window.open("https://forms.gle/BNYN5668oVRBqHKb6", "_blank")
        }
      >
        Join The Team Now
      </button>
    </div>
  );
}
