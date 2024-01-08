/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const services = [
  { id: 1, ref: "Iepf_claim", name: "IEPF Claim", image: "/service1.png" },
  {
    id: 2,
    ref: "Duplicate_Issue",
    name: "Duplicate Issue Of Shares",
    image: "/service2.png",
  },
  {
    id: 3,
    ref: "Transmission_Issue",
    name: "Transmission Of Shares",
    image: "/service3.png",
  },
];

const Services = () => {
  return (
    <div
      className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0 "
      data-taos-offset="300"
      id="help"
    >
    <div
      className="container mx-auto flex flex-col items-center py-12 sm:py-24 transition-transform transform hover:scale-110"
    >
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
            Where We <span className="text-orange -600">Help</span> <br />
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
            Raed India is your dedicated partner in reclaiming unclaimed funds,
            specializing in the recovery of shares, dividends, and investments.
            Our mission is to empower individuals by simplifying the process of
            retrieving their rightful financial assets.
          </p>
          <div className="grid grid-cols-3 gap-20 p-6 mt-20">
            {services.map((service) => (
              <Link href={`/service_help/${service.ref}`} key={service.id}>
                <a className="flex flex-col items-center transition-transform transform hover:scale-110 hover:text-sky-700">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="cursor-pointer w-24 h-24 object-cover rounded mb-4"
                  />
                  <span className="text-center font-bold">{service.name}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
