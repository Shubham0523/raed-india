/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bg-linear-pink-invert bg-zinc-100">
        <div className="mx-auto container pt-20 flex flex-col items-center justify-center">
          <div className="text-black flex flex-col md:items-center f-f-l pt-3 w-full">
            <img
              src="/logo_raed.png"
              alt=""
              className="h-12 lg:h-14 w-8/12 sm:w-auto self-center object-contain"
            />
            <div className="my-6 text-base text-color f-f-l mx-4 opacity-60">
              <div>
                <b>Address:</b> H 1/2
                East Delhi 110051
              </div>
              <div>
                <b>Email:</b> csjitender@yahoo.com
                <br />
                <b>Mobile:</b> +919999595107
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
