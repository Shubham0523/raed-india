import React from "react";

const Raed = () => {
  return (
    <div id="about" className="nest-group">
      <div
        className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0"
        data-taos-offset="300"
      >
        <div className="text-3xl md:text-5xl mb-6 lg:mb-12 text-center">
          <p className="text-gray-400">
            {" "}
            <span className="font-bold text-green-700">
              RAED
            </span>{" "}
            India Stands For
          </p>
        </div>
        {/* <div className="flex items-start transition-transform transform hover:scale-110">
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
        </div> */}

        <div className="flex justify-center items-center bg-gray-100 p-4">
          <div className="text-center w-full ">
            <div className="inline-block text-left mb-12">
              {[
                ["R", "Rights Of Citizens"],
                ["A", "Awareness Of Citizens"],
                ["E", "Education Of Citizens"],
                ["D", "Duties Of Citizens"],
              ].map(([letter, description]) => (
                <div
                  key={letter}
                  className="flex items-start sm:items-center mb-2 sm:mb-3 md:mb-4 transition-transform transform hover:scale-110"
                >
                  <span className="text-2xl md:text-4xl lg:text-5xl font-bold text-green-700  text-right mr-2 sm:mr-3 flex-shrink-0">
                    {letter}
                  </span>
                  <span className="text-2xl md:text-4xl lg:text-4xl text-gray-500 leading-tight md:leading-relaxed lg:leading-loose hover:text-sky-700">
                    - {description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Raed;
