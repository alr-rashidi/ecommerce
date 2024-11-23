import { productSchema } from "@/server/validations/product";
import React from "react";
import { z } from "zod";
import ProductCard from "./productCard";
import Link from "next/link";

type ProductGridProps = {
  products: z.infer<typeof productSchema>[];
  showMoreLink?: string;
};
const ProductsGrid = ({ products, showMoreLink }: ProductGridProps) => {
  if (products.length === 0) return <div>No products found.</div>;
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map(product => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {showMoreLink && (
        <div className="mx-auto">
          <Link
            href={showMoreLink}
            className="text-neutral-500 hover:text-neutral-700 text-sm transition"
          >
            Show more
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductsGrid;
