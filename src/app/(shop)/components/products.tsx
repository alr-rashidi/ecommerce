"use client";
import React, { useEffect, useState } from "react";
import ProductsGrid from "@/components/product/productGrid";
import { APIProductGetType, SortType } from "@/app/api/product/route";
import { fetchProducts } from "@/hooks/fetchProducts";

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
  const [data, setData] = useState<APIProductGetType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const data = await fetchProducts({ sort: selectedTab, limit: 8 });
      setData(data);
      setLoading(false);
    };

    getData();
  }, [selectedTab]);

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
      {loading ? (
        <span>Loading...</span>
      ) : data ? (
        <ProductsGrid products={data.products} showMoreLink="#" />
      ) : (
        <span>No products found</span>
      )}
    </div>
  );
};

export default Products;
