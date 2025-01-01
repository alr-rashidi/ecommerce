"use client";
import React, { useEffect, useMemo, useState } from "react";
import CategoryFilter from "./filters/category";
import PriceFilter from "./filters/price";
import Dropdown from "@/components/ui/dropdown";
import ProductsGrid from "@/components/product/productGrid";
import { fetchProducts } from "@/hooks/fetchProducts";
import { Error } from "mongoose";
import { APIProductGetType, SortType } from "@/app/api/product/route";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";
import Pegination from "@/components/ui/pegination";

type sortOptionsType = {
  value: SortType;
  label: string;
}[];
const sortOptions: sortOptionsType = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "discount", label: "Discount" },
];

const Page = () => {
  const [data, setData] = useState<APIProductGetType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState(1);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 0,
  });
  const { slug } = useParams();
  const category = slug?.[0];
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const router = useRouter();

  const breadcrumbItems = useMemo(() => {
    const items = ["Search"];
    if (category) {
      items.push(category);
    }
    if (query) {
      items.push(query);
    }
    return items;
  }, [category, query]);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const sortOption = searchParams.get("sort") || "newest";

        const fetchedData = await fetchProducts({
          query,
          sort: sortOption,
          page: page,
          category,
          minPrice: priceRange.min,
          maxPrice: priceRange.max,
        });

        if (fetchedData instanceof Error) {
          throw fetchedData;
        } else {
          setData(fetchedData);
          setIsError(false);
        }
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetch();
  }, [query, page, slug, category, priceRange, searchParams]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= data!.totalPages) setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSortOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const url = new URL(window.location.href);
    const sortOption = e.target.value as SortType;
    url.searchParams.set("sort", sortOption);
    router.push(url.pathname + url.search);
  };

  return (
    <div className="flex flex-col max-w-5xl mx-auto mb-5">
      <div className="text-neutral-500 font-semibold my-4">
        {breadcrumbItems.map((item, i) => (
          <button
            key={i}
            className={`text-sm font-semibold ${i === breadcrumbItems.length - 1 ? "text-primary" : "text-neutral-400"}`}
            onClick={() => {
              router.push("/search/" + (item === "Search" ? "" : item));
            }}
          >
            {item}
            {i < breadcrumbItems.length - 1 && (
              <FaChevronRight className="mx-3 inline" />
            )}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          {category == undefined && <CategoryFilter />}
          <PriceFilter setPriceRange={setPriceRange} priceRange={priceRange} />
        </div>
        <div className="flex flex-col col-span-9">
          {isLoading && (
            <div className="text-center text-neutral-500">Loading...</div>
          )}
          {isError ? (
            <div className="text-center text-red-500">
              An error occurred while fetching products
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between py-8">
                <div className="text-neutral-500 text-sm font-semibold">
                  Selected Products:
                  <span className="ml-2 text-primary text-lg">
                    {data?.total}
                  </span>
                </div>
                <Dropdown
                  variant="outlineAlt"
                  className="px-5"
                  options={sortOptions}
                  disabled={!data || data.total === 0}
                  onChange={handleSortOptionChange}
                />
              </div>
              {data ? (
                <ProductsGrid
                  products={data.products}
                  className="lg:grid-cols-3"
                />
              ) : (
                <div className="text-center text-neutral-500">
                  No products found
                </div>
              )}
            </>
          )}
          {data && (
            <Pegination
              page={page}
              handlePageChange={handlePageChange}
              totalPages={data.totalPages}
              className="mt-8"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
