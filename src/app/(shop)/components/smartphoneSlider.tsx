import ProductSlider from "@/components/product/productSlider";
import { fetchProducts } from "@/hooks/fetchProducts";
import React from "react";

const SmartphoneSlider = async () => {
  const data = await fetchProducts({ category: "673caa35936e398308d6f68c" });
  return (
    <div>
      <ProductSlider
        title="Upgrade to the latest smartphones today!"
        products={data.products}
      />
    </div>
  );
};

export default SmartphoneSlider;
