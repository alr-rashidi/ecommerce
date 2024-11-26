import React from "react";
import BigBanner from "./components/bigBanner";
import MiniBanners from "./components/miniBanners";
import ByCategory from "./components/byCategory";
import Products from "./components/products";
import MiniBanners2 from "./components/miniBanners2";

const Page = () => {
  return (
    <div className="flex flex-col">
      <BigBanner />
      <MiniBanners />
      <ByCategory />
      <Products />
      <MiniBanners2 />
    </div>
  );
};

export default Page;
