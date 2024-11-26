import ProductSlider from "@/components/product/productSlider";
import { productSchema } from "@/server/validations/product";
import React from "react";
import { z } from "zod";

const SmartphoneSlider = async () => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_BASE_URL +
      "/api/product?category=673caa35936e398308d6f68c"
  );
  const products: z.infer<typeof productSchema>[] = await res.json();
  return (
    <div>
      <ProductSlider
        title="Upgrade to the latest smartphones today!"
        products={products}
      />
    </div>
  );
};

export default SmartphoneSlider;
