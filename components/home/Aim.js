import React from "react";

export default function Aim() {
  return (
    <div
      className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 p-4"
      data-taos-offset="300"
      id="aim"
    >
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10 hover:text-sky-700 transform-gpu">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Empowering Hope <br />
            <span className="text-green-700"> Fighting Cancer </span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-11/12 text-gray-500 font-normal text-justify text-sm sm:text-xl">
            At <span className="font-bold text-green-700">RAED</span>, our mission is to raise awareness about the early detection
            of cancer among youth and millennials. We are committed to educating
            and empowering young minds with the knowledge and resources to fight
            this disease. While we are currently focused on spreading awareness,
            our future plans include providing psychological assistance to those
            undergoing treatment and offering comfort to those grieving after
            loss. Through education, support, and community, we aim to make a
            lasting impact on the lives of those affected by cancer, fostering
            resilience and hope in the face of adversity.
          </p>
        </div>
      </div>
    </div>
  );
}
