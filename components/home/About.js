import React from "react";

export default function About() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-30 p-4"
      id="about"
    >
      <p className="text-4xl font-bold">About Us</p>
      <div className="text-gray-500 text-xl w-full md:w-8/12 text-center my-4 p-4">
        <p className="text-justify">
          Welcome to Raed India, a compassionate NGO committed to guiding
          individuals through the intricate process of reclaiming their
          unclaimed investments and dividends. With a focus on transparency,
          efficiency, and empathy, we strive to uncover financial happiness for
          every individual by providing expert assistance in navigating the
          complexities of asset recovery. Join us on a journey where we bridge
          the gap between unclaimed funds and rightful owners, fostering a
          community empowered by financial well-being and prosperity.
        </p>
      </div>
    </div>
  );
}
