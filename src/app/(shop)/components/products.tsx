"use client";
import { productSchema } from "@/server/validations/product";
import React, { useEffect, useState } from "react";
import { z } from "zod";
import ProductsGrid from "@/components/product/productGrid";

type TabsType = "new";
type TabType = {
  value: TabsType;
  label: string;
};
const tabs: TabType[] = [{ value: "new", label: "New Arrival" }];

const Products = () => {
  const [selectedTab, setSelectedTab] = useState<TabsType>("new");
  const [products, setProducts] = useState<
    z.infer<typeof productSchema>[] | null
  >(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_BASE_URL +
          `/api/product?limit=8&sort=${selectedTab}`
      );
      const data = await response.json();
      setProducts(data);
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
      ) : products ? (
        <ProductsGrid products={products} showMoreLink="#" />
      ) : (
        <span>No products found</span>
      )}
    </div>
  );
};

export default Products;
