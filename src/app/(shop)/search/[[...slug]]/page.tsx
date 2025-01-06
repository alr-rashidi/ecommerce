"use client";
import React, { useState } from "react";
import CategoryFilter from "./filters/category";
import PriceFilter from "./filters/price";
import Dropdown from "@/components/ui/dropdown";
import ProductsGrid from "@/components/product/productGrid";
import { SortType } from "@/app/api/product/route";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Pegination from "@/components/ui/pegination";
import Loading from "@/app/(shop)/loading";
import SearchBreadCrumb from "./components/breadCrumb";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import ErrorCard from "@/components/ui/errorCard";

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

type PriceRangeType = { min: number; max: number };

const Page = () => {
  const [page, setPage] = useState(1);
  const [priceRange, setPriceRange] = useState<PriceRangeType>({
    min: 0,
    max: 0,
  });
  const { slug } = useParams();
  const category = slug?.[0];
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const sort = (searchParams.get("sort") as SortType) || "newest";
  const router = useRouter();

  const { data, isLoading, error, ok } = useFetchProducts({
    query,
    sort,
    page,
    category,
    minPrice: priceRange.min,
    maxPrice: priceRange.max,
  });

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
      <SearchBreadCrumb category={category} query={query} />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          {category == undefined && <CategoryFilter />}
          <PriceFilter setPriceRange={setPriceRange} priceRange={priceRange} />
        </div>
        <div className="flex flex-col col-span-9">
          <>
            <div className="flex items-center justify-between py-8">
              <div className="text-neutral-500 text-sm font-semibold">
                Selected Products:
                <span className="ml-2 text-primary text-lg">{data?.total}</span>
              </div>
              <Dropdown
                variant="outlineAlt"
                className="px-5"
                options={sortOptions}
                disabled={!data || data.total === 0}
                onChange={handleSortOptionChange}
              />
            </div>
            {isLoading ? (
              <Loading />
            ) : !ok ? (
              <ErrorCard message={error} />
            ) : data && data.total > 0 ? (
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
          {data && data.total > 0 && (
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
