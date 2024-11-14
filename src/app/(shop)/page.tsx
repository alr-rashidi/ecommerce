import React from "react";
import BigBanner from "./components/bigBanner";
import MiniBanners from "./components/miniBanners";
import ByCategory from "./components/byCategory";

const Page = () => {
  return (
    <div className="flex flex-col">
      <BigBanner />
      <MiniBanners />
      <ByCategory />
    </div>
  );
};

export default Page;
