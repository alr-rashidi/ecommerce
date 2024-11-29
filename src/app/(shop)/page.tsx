import React from "react";
import Banner from "./components/banner";
import MiniBanners from "./components/miniBanners";
import ByCategory from "./components/byCategory";
import Products from "./components/products";
import MiniBanners2 from "./components/miniBanners2";
import SmartphoneSlider from "./components/smartphoneSlider";
import Banner2 from "./components/banner2";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <MiniBanners />
      <ByCategory />
      <Products />
      <MiniBanners2 />
      <SmartphoneSlider />
      <Banner2 />
    </div>
  );
};

export default Page;
