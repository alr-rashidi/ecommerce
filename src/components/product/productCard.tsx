import { productSchema } from "@/server/validations/product";
import Image from "next/image";
import React from "react";
import { z } from "zod";
import Button from "../ui/button";

type ProductCardProps = {
  product: z.infer<typeof productSchema>;
};
const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      key={product.name}
      className="flex flex-col items-center gap-3 bg-neutral-100 p-5 rounded-lg"
    >
      <Image
        src={product.images[0]}
        alt={product.name}
        width={200}
        height={400}
        className="w-full aspect-square object-cover rounded-lg p-2"
      />
      <p className="font-medium text-sm h-full text-center">{product.name}</p>
      <p className="text-2xl font-semibold text-center">${product.price}</p>
      <Button className="text-sm w-full">Buy now</Button>
    </div>
  );
};

export default ProductCard;
