import React, { Suspense } from "react";
import Banner from "./components/banner";
import MiniBanners from "./components/miniBanners";
import ByCategory from "./components/byCategory";
import Products from "./components/products";
import MiniBanners2 from "./components/miniBanners2";
import SmartphoneSlider from "./components/smartphoneSlider";
import Banner2 from "./components/banner2";
import Loading from "./loading";

const Page = () => {
  return (
    <div className="flex flex-col">
      <Banner />
      <MiniBanners />
      <ByCategory />
      <Products />
      <MiniBanners2 />
      <Suspense fallback={<Loading />}>
        <SmartphoneSlider />
      </Suspense>
      <Banner2 />
    </div>
  );
};

export default Page;
