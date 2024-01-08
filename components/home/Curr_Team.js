import React from "react";

export default function CoreTeam() {
  return (
    <div
      className="flex flex-col w-full items-center my-10 md:my-14 mb-10"
      id="team"
    >
      <p className="text-4xl font-bold">Core Team</p>
      <p className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4">
        Collaborative endeavors in the charitable domain serve as a potent
        catalyst, cultivating teamwork that metamorphoses collective initiatives
        into impactful outcomes for the greater good. Stay tuned as we unveil
        our team soon! In the meantime, click the button below to join our
        journey.
      </p>
      <div className="w-max-[90vw] w-full md:w-8/12">
        <div class="flex items-center justify-center p-4 ">
          <div class="w-1/3 p-2">
            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          </div>
          <div class="w-1/3 p-2">
            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          </div>
          <div class="w-1/3 p-2">
            <div class="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
              <div class="h-48 bg-gray-300"></div>
              <div class="px-6 py-4">
                <div class="h-6 bg-gray-300 mb-2"></div>
                <div class="h-4 bg-gray-300 w-2/3"></div>
              </div>
              <div class="px-6 pt-4 pb-2">
                <div class="h-4 bg-gray-300 w-1/4 mb-2"></div>
                <div class="h-4 bg-gray-300 w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
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
