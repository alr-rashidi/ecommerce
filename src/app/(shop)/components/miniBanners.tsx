import Button from "@/components/ui/button";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";

const inter = Inter();
const MiniBanners = () => {
  return (
    <div className="max-lg:flex max-lg:flex-col grid grid-cols-4 grid-rows-5 max-lg:h-full max-lg:w-full h-[80vh] max-w-[90rem] mx-auto max-lg:max-h-max max-h-[40rem] ">
      <div className="row-start-1 col-span-2 row-span-3 flex max-lg:flex-col max-lg:p-8 gap-4 items-center bg-white">
        <Image
          src="/assets/playstation.png"
          width={300}
          height={250}
          className="max-lg:w-fit w-full max-lg:p-0 pr-10 h-full max-lg:max-h-64 object-cover object-right"
          alt="Playstation"
        />
        <div className="flex flex-col max-lg:items-center max-lg:p-0 pr-16">
          <h3
            className={`${inter.className} w-max max-xl:text-4xl text-5xl font-semibold mb-2`}
          >
            PlayStation 5
          </h3>
          <p className="max-xl:text-xs text-sm max-lg:text-center  text-neutral-500">
            Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will
            redefine your PlayStation experience.
          </p>
        </div>
      </div>
      <div className="row-start-4 flex max-lg:flex-col max-lg:p-8 gap-4 items-center row-span-2 bg-neutral-200">
        <Image
          src="/assets/airpods-pro.png"
          width={150}
          height={250}
          className="max-lg:w-max w-[120px] max-lg:p-0 pr-5 h-full max-lg:max-h-64 object-cover object-right"
          alt="Playstation"
        />
        <div className="flex flex-col max-lg:items-center max-lg:p-0 pr-16 pl-4">
          <h3
            className={`${inter.className} w-max max-lg:text-3xl max-xl:text-lg text-2xl font-light mb-3`}
          >
            Apple Airpods&nbsp;
            <br className="max-lg:hidden relative" />
            <span className="font-bold">Max</span>
          </h3>
          <p className="max-xl:text-xs text-sm max-lg:text-center text-neutral-500">
            Computational audio. Listen, it&apos;s powerful
          </p>
        </div>
      </div>
      <div className="col-start-2 row-start-4 row-span-2 flex max-lg:flex-col max-lg:p-8 gap-4 items-center bg-neutral-700">
        <Image
          src="/assets/vision-pro.png"
          width={150}
          height={250}
          className="max-lg:w-full w-[120px] max-lg:h-full h-1/2 max-lg:max-h-64 max-lg:py-6 my-auto object-cover object-right"
          alt="Playstation"
        />
        <div className="flex flex-col max-lg:items-center max-lg:p-0 pr-16 pl-4">
          <h3
            className={`${inter.className} w-max text-white max-lg:text-3xl max-xl:text-lg text-2xl font-light mb-3`}
          >
            Apple Vision&nbsp;
            <br className="max-lg:hidden relative" />
            <span className="font-bold">Pro</span>
          </h3>
          <p className="max-xl:text-xs text-sm max-lg:text-center text-neutral-400">
            An immersive way to experience entertainment
          </p>
        </div>
      </div>
      <div className="col-start-3 col-span-2 row-span-5 flex max-lg:flex-col-reverse max-lg:p-8 gap-4 max-lg:max-h-[40rem] items-center bg-neutral-200">
        <div className="flex flex-col max-lg:items-center max-lg:p-0 pl-16">
          <h2
            className={`${inter.className} w-max max-xl:text-4xl text-5xl font-extralight mb-2`}
          >
            Macbook&nbsp;
            <span className="font-bold">Air</span>
          </h2>
          <p className="max-xl:text-xs text-sm max-lg:text-center mb-4 text-neutral-500">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <Button size="md" variant="outlineAlt" className="w-full">
            Shop now
          </Button>
        </div>
        <Image
          src="/assets/macbook-air.png"
          width={800}
          height={500}
          className="max-lg:w-fit w-full max-lg:p-0 pt-10 pb-4 h-full max-lg:max-h-64 object-cover object-left"
          alt="Macbook Air"
        />
      </div>
    </div>
  );
};

export default MiniBanners;
