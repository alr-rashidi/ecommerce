import React from "react";
import { Inter } from "next/font/google";
import Button from "@/components/ui/button";
import Image from "next/image";

const inter = Inter();
const BigBanner = () => {
  return (
    <div className="w-full max-lg:h-full h-[70vh] max-lg:max-h-max max-h-[30rem] flex max-lg:flex-col items-center justify-center gap-44 max-lg:gap-0 bg-gradient-to-br from-neutral-900 overflow-hidden to-[#211C24]">
      <div className="flex flex-col max-lg:items-center py-20">
        <h3 className={`${inter.className} font-semibold text-neutral-500`}>
          Pro.Beyond.
        </h3>
        <h1
          className={`text-6xl ${inter.className} font-extralight text-white mb-1`}
        >
          IPhone 14&nbsp;
          <span className="font-bold">Pro</span>
        </h1>
        <p className="text-sm font-medium text-neutral-500 mb-5">
          Created to change everything for the better. For everyone
        </p>
        <Button variant="outline" size="sm" className="w-max">
          Shop now
        </Button>
      </div>
      <div className="relative w-[300px] min-h-96 max-lg:min-h-72 h-full">
        <Image
          src="/assets/iphone-pro.png"
          width={300}
          height={0}
          className="absolute top-20 max-lg:top-0 left-0 w-full"
          alt="IPhone image"
        />
      </div>
    </div>
  );
};

export default BigBanner;
