"use client";

import Button from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type ItemType = {
  title: string;
  image: string;
  desc: string;
  link: string;
};
const items: ItemType[] = [
  {
    title: "Popular Products",
    image: "/assets/miniBanner2-1.png",
    desc: "selection of trending items across tech, fashion, and home goods",
    link: "#",
  },
  {
    title: "MyPad Pro Max",
    image: "/assets/miniBanner2-2.png",
    desc: "A sleek, versatile tablet for work and play with a vast app ecosystem",
    link: "#",
  },
  {
    title: "Galexy Phone 8",
    image: "/assets/miniBanner2-3.png",
    desc: "premium smartphone with stunning displays and advanced camera features",
    link: "#",
  },
  {
    title: "Gaming Laptop Pro",
    image: "/assets/miniBanner2-4.png",
    desc: "high-performance laptop known for its elegant design",
    link: "#",
  },
];

const MiniBanners2 = () => {
  const swiperRef = useRef<SwiperRef>();

  return (
    <div className="w-full lg:max-w-[90rem] mx-auto">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className="w-full h-full flex flex-col justify-between gap-5"
            >
              <Image
                src={item.image}
                width={150}
                height={250}
                className="w-full"
                alt="Popular products"
              />
              <div className="flex flex-col gap-4 p-4 px-10 lg:px-4">
                <h3 className="text-5xl lg:text-3xl font-light text-center lg:text-start">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-500 text-center">
                  {item.desc}
                </p>
                <Link href={item.link} className="w-max mx-auto lg:mx-0">
                  <Button size="lg" variant="outlineAlt" className="px-14">
                    Shop now
                  </Button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MiniBanners2;
