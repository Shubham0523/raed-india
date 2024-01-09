import React from "react";

export default function Aim() {
  return (
    <div
      className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 p-4"
      data-taos-offset="300"
      id="aim"
    >
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10 transition-transform lg:hover:scale-110 hover:text-sky-700 transform-gpu">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Reclaim Funds <br />
            <span className="text-green-700"> Renew Wealth </span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            <p className="text-justify">
              Team Raed India is passionately committed to aiding individuals in
              recovering their unclaimed shares, dividends, and investments. Our
              mission is to empower people by reconnecting them with their
              rightful financial assets, cultivating a sense of financial
              security and overall well-being. Join us in this noble endeavor to
              instill transparency and fairness in the financial landscape,
              ensuring that individuals can readily access and recover what
              rightfully belongs to them. Together, we aspire to create a
              significant impact in the lives of those seeking to reclaim their
              unclaimed investments, shares, and dividends, fostering financial
              empowerment and prosperity.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
