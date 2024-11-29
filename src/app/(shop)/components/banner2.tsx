import Button from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Banner2 = () => {
  return (
    <div className="relative w-full max-lg:h-[70vh] h-[50vh] max-lg:max-h-max max-h-[30rem] flex max-lg:flex-col items-center justify-center gap-44 max-lg:gap-0 bg-gradient-to-br  from-neutral-700 to-black overflow-hidden">
      <Image
        src="/assets/banner2.png"
        fill
        alt="Banner2"
        className="max-lg:hidden"
      />
      <Image
        src="/assets/banner2mobile.png"
        fill
        alt="Banner2"
        className="hidden max-lg:block"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-full flex flex-col items-center justify-center text-white text-center p-4">
        <h1 className="text-6xl max-lg:text-4xl font-extralight mb-2 text-neutral-200">
          Big Summer <span className="font-bold">Sale</span>
        </h1>
        <p className="text-sm text-neutral-500 mb-8">
          Check out our Big Summer Sale for amazing discounts!
        </p>
        <Button variant="outline" size="md" className="px-12">
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default Banner2;
