import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Stats() {
//   const [statistics, setStatistics] = useState(null);
//   useEffect(() => {
//     axios.get("https://teamhnm.org/api").then((res, err) => {
//       setStatistics(res.data.data);
//     });
//   }, [statistics !== null]);
  return (
    <div id="statistics">
      <div className="pb-20">
        {/* <div className="mx-auto bg-gradient-to-l from-gray-400 to-green-900 h-96"> */}
        <div className="mx-auto bg-gradient-to-t from-green-900 to-gray-900 h-96">
          <div className="mx-auto container w-full flex flex-col justify-center items-center">
            <div className="flex justify-center items-center flex-col">
              {/* <div className="mt-20">
                <h2 className="lg:text-7xl md:text-5xl text-4xl font-black leading-10 text-white px-4">
                A Rising Threat
                </h2>
              </div> */}
              <div className="relative inline-block mb-4 mt-20">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-black leading-10 text-white px-4" aria-describedby="underline-desc">A Rising Threat</h1>
        <svg 
          className="absolute -bottom-7 left-0 w-full" 
          height="20" 
          viewBox="0 0 300 20" 
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* First underline */}
          <path 
            d="M0,2 Q75,6 150,2 T300,2"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-gray-300"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,2 Q75,6 150,2 T300,2;
                M0,4 Q75,0 150,4 T300,4;
                M0,2 Q75,6 150,2 T300,2
              "
            />
          </path>
          {/* Diagonal underline */}
          <path 
            d="M0,18 L300,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className="text-gray-300"
          >
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="
                M0,18 L300,10;
                M0,16 L300,12;
                M0,18 L300,10
              "
            />
          </path>
        </svg>
        <span id="underline-desc" className="sr-only">Underlined with a bold double line effect, including a diagonal line</span>
      </div>
              <div className="mt-6 mx-2 md:mx-0 text-center">
                <p className="lg:text-lg md:text-base leading-6 text-sm  text-white">
                A Wake-Up Call for Our Generation
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto container md:-mt-28 -mt-20 flex justify-center items-center">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-x-2 gap-y-2 lg:gap-x-6 md:gap-x-6 md:gap-y-6">
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-red-800">
                {/* {statistics !== null && statistics[0][0]}+ */}
                15.7L +
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Cancer Patients <br/>by 2025
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-red-800">
                {/* {statistics !== null && statistics[1][0]}+ */}9.1L +
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Deaths caused <br/> by Cancer
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-red-800">
                {/* ₹{statistics !== null && statistics[2][0]}+ */}1
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Oncologist per <br/>10L People
              </p>
            </div>
            <div className="flex justify-center flex-col items-center w-36 h-36 md:w-44 md:h-48 lg:w-56 lg:h-56 bg-white shadow rounded-2xl">
              <h2 className="lg:text-5xl md:text-4xl text-2xl font-extrabold leading-10 text-center text-red-800">
                {/* {statistics !== null && statistics[3][0]}+ */}2/3
              </h2>
              <p className="mt-4 text-sm md:text-base lg:text-lg leading-none text-center text-gray-600">
                Patients diagnosed <br/>at late stages
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}