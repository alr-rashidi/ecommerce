"use client";
import React, { useState } from "react";
import ProductsGrid from "@/components/product/productGrid";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { SortType } from "@/app/api/product/route";
import Loading from "../loading";
import ErrorCard from "@/components/ui/errorCard";

type TabType = {
  value: SortType;
  label: string;
};
const tabs: TabType[] = [
  { value: "newest", label: "New Arrival" },
  { value: "discount", label: "Best Discounts" },
  { value: "price-asc", label: "Price: Low to High" },
];

const Products = () => {
  const [selectedTab, setSelectedTab] = useState<SortType>("newest");

  const { data, isLoading, error, ok } = useFetchProducts({
    sort: selectedTab,
    limit: 8,
  });

  return (
    <div className="flex flex-col gap-4 m-20 max-lg:max-w-[90vw] max-w-5xl px-8 mx-auto">
      <div className="w-max flex items-center gap-3 sm:gap-5 overflow-x-scroll">
        {tabs.map(tab => (
          <button
            key={tab.value}
            className={`font-semibold text-sm md:text-base ${selectedTab == tab.value ? "text-black underline" : "text-neutral-500"}`}
            onClick={() => setSelectedTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {isLoading ? (
        <Loading />
      ) : !ok ? (
        <ErrorCard
          message={error ?? "An error occurred while fetching products"}
        />
      ) : data && data.products.length > 0 ? (
        <ProductsGrid
          products={data.products}
          showMoreLink={`/search?sort=${selectedTab}`}
        />
      ) : (
        <span>No products found</span>
      )}
    </div>
  );
};

export default Products;
