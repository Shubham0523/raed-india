import React from "react";

const Raed = () => {
  return (
    <div className="nest-group">
      <div
      className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
      data-taos-offset="300"
      >
        <div className="intro-header transition-transform transform hover:scale-110">
          <p className="text-gray-400 hover:text-sky-700">
            {" "}
            <span className="font-bold text-green-700 hover:text-sky-700">RAED</span> Stands For
          </p>
        </div>
        <div className="flex items-start transition-transform transform hover:scale-110">
          <div className="text-gray-400 font-normal custom-text hover:text-sky-700">
            <span className="text-green-700">R </span> - Rights Of Citizens
          </div>
        </div>
        <div className="flex items-start transition-transform transform hover:scale-110">
          <div className="custom-text text-gray-400 font-normal hover:text-sky-700">
            <span className="text-green-700">A </span> - Awareness Of Citizens
          </div>
        </div>
        <div className="flex items-start transition-transform transform hover:scale-110">
          <div className="custom-text text-gray-400 font-normal hover:text-sky-700">
            <span className="text-green-700">E</span> - Education Of Citizens
          </div>
        </div>
        <div className="flex items-start transition-transform transform hover:scale-110">
          <div className="custom-text text-gray-400 font-normal hover:text-sky-700">
            <span className="text-green-700">D</span> - Duties Of Citizens
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raed;
