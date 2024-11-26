"use client";
import React, { useRef } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { z } from "zod";
import { productSchema } from "@/server/validations/product";

import "swiper/css";
import ProductCard from "./productCard";

type ProductSliderProps = {
  title: string;
  products: z.infer<typeof productSchema>[];
};

const ProductSlider = ({ title, products }: ProductSliderProps) => {
  const swiperRef = useRef<SwiperRef>();

  return (
    <div className={`m-20 max-lg:max-w-[90vw] max-w-5xl px-8 mx-auto`}>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium">{title}</h1>
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
            slidesPerView: 2,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
      >
        {products.map(product => (
          <SwiperSlide key={product._id} className="!h-auto">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
