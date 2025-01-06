"use client";
import React, { useRef } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { categorySchema } from "@/server/validations/category";
import { z } from "zod";
import "swiper/css";
import Loading from "../loading";
import { useFetch } from "@/hooks/useFetch";

const ByCategory = () => {
  const swiperRef = useRef<SwiperRef>();

  const {
    isLoading,
    error,
    data: categories,
    ok,
  } = useFetch<z.infer<typeof categorySchema>[]>("/api/category");

  const renderError = (message: string) => (
    <div className="text-center text-red-500">{message}</div>
  );

  return (
    <div className="m-20 max-lg:max-w-[90vw] max-w-5xl px-8 mx-auto">
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
      {isLoading ? (
        <Loading />
      ) : !ok ? (
        renderError(`Faied to fetch categories. ${error}`)
      ) : categories && categories.length > 0 ? (
        <Swiper
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 20 },
            640: { slidesPerView: 4, spaceBetween: 30 },
            1024: { slidesPerView: 5, spaceBetween: 50 },
          }}
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          {categories.map(category => (
            <SwiperSlide key={category._id}>
              <Link
                href={`/search/${category._id}`}
                className="w-full h-32 flex flex-col gap-2 items-center justify-center rounded-2xl p-4 bg-neutral-200 hover:bg-neutral-200/80 text-neutral-900 hover:text-black transition"
              >
                <div
                  className="size-8"
                  dangerouslySetInnerHTML={{ __html: category.icon }}
                />
                <span className="text-sm text-center font-medium">
                  {category.name}
                </span>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        renderError("No categories found.")
      )}
    </div>
  );
};

export default ByCategory;
