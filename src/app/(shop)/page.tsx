import React from "react";
import BigBanner from "./components/bigBanner";
import MiniBanners from "./components/miniBanners";
import ByCategory from "./components/byCategory";
import Products from "./components/products";

const Page = () => {
  return (
    <div className="flex flex-col">
      <BigBanner />
      <MiniBanners />
      <ByCategory />
      <Products />
    </div>
  );
};

export default Page;
