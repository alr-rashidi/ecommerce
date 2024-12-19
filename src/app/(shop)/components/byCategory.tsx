"use client";
import React, { useEffect, useRef, useState } from "react";
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { type Swiper as SwiperRef } from "swiper";
import { categorySchema } from "@/server/validations/category";
import { z } from "zod";
import "swiper/css";
import { fetchData } from "@/hooks/fetchData";

const ByCategory = () => {
  const [categories, setCategories] = useState<
    z.infer<typeof categorySchema>[]
  >([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const data: z.infer<typeof categorySchema>[] =
          await fetchData("/api/category");
        setCategories(data);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

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
      {isLoading && (
        <div className="text-center text-neutral-500">Loading...</div>
      )}
      {isError && (
        <div className="text-center text-red-500">Error fetching data</div>
      )}
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
    </div>
  );
};

export default ByCategory;
