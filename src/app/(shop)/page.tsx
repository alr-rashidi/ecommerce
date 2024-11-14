import React from "react";
import BigBanner from "./components/bigBanner";
import MiniBanners from "./components/miniBanners";

const Page = () => {
  return (
    <div className="flex flex-col">
      <BigBanner />
      <MiniBanners />
    </div>
  );
};

export default Page;
