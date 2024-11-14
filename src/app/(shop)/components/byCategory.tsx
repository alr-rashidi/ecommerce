"use client";
import React, { useRef } from "react";
import { IconType } from "react-icons/lib";
import {
  IoWatchOutline,
  IoGameControllerOutline,
  IoTabletPortraitSharp,
  IoTvOutline,
} from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { TbDeviceMobile } from "react-icons/tb";
import { BsCamera, BsSpeaker, BsLaptop, BsKeyboard } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";

import "swiper/css";

type CategoriesType = {
  name: string;
  icon: IconType;
  id: string;
}[];
const categories: CategoriesType = [
  { name: "Phones", icon: TbDeviceMobile, id: "phone" },
  { name: "Smart Watches", icon: IoWatchOutline, id: "smartwatch" },
  { name: "Cameras", icon: BsCamera, id: "camera" },
  { name: "Headphones", icon: PiHeadphones, id: "headphones" },
  { name: "Computers", icon: HiOutlineComputerDesktop, id: "computer" },
  { name: "Gaming", icon: IoGameControllerOutline, id: "gaming" },
  { name: "Tablets", icon: IoTabletPortraitSharp, id: "tablet" },
  { name: "TVs", icon: IoTvOutline, id: "tv" },
  { name: "Speakers", icon: BsSpeaker, id: "speaker" },
  { name: "Laptops", icon: BsLaptop, id: "laptop" },
  { name: "Accessories", icon: BsKeyboard, id: "accessories" },
];

const ByCategory = () => {
  const swiperRef = useRef<SwiperRef>();
  return (
    <div className={`m-20 max-lg:max-w-[90vw] max-w-5xl px-8 mx-auto`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium">Browse by Category</h1>
        <div className="flex gap-3 text-4xl">
          <PiCaretLeft
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <PiCaretRight
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {categories.map(category => (
          <SwiperSlide key={category.id}>
            <Link
              href="#"
              className="w-full h-32 flex flex-col gap-2 items-center justify-center rounded-2xl p-4 bg-neutral-200 hover:bg-neutral-200/80 text-neutral-900 hover:text-black transition"
            >
              <category.icon size={48} />
              <span className="text-sm text-center font-medium">
                {category.name}
              </span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ByCategory;
