import React from "react";
// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Keyboard, Autoplay, Pagination, Navigation } from "swiper";

export default function Carousal() {
  return (
    <div className="delay-[300ms] duration-[600ms] taos:translate-y-[200px] taos:opacity-0" data-taos-offset="300">
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      keyboard={{
        enabled: true,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation, Keyboard]}
      className="w-full mb-10 sm:mb-20 p-2"
    >
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/01.jpeg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/02.jpeg"
          alt=""
          className="carousal-img"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/03.jpg"
          alt=""
          className="carousal-img"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/04.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/05.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/06.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/07.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/08.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center overflow-visible">
        <img
          src="/carousal/09.jpg"
          alt=""
          className="sm:w-10/12 rounded-lg shadow-md ring ring-zinc-200"
        />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
