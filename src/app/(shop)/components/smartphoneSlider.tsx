import { APIProductGetType } from "@/app/api/product/route";
import ProductSlider from "@/components/product/productSlider";
import { fetchData } from "@/lib/api";
import React from "react";

const SmartphoneSlider = async () => {
  const { data, error, ok } = await fetchData<APIProductGetType>(
    "/api/product?category=673cb21f936e398308d6f692"
  );

  if (!ok || !data) {
    return error ?? "Error fetching products!";
  }

  return (
    <ProductSlider
      title="Upgrade to the latest smartphones today!"
      products={data.products}
    />
  );
};

export default SmartphoneSlider;
