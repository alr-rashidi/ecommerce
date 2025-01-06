import { APIProductGetType } from "@/app/api/product/route";
import { useFetch, UseFetchResultType } from "./useFetch";
import { useMemo } from "react";

type FetchProductsPropsType = {
  query?: string;
  sort?: string;
  limit?: number;
  page?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
};

export const useFetchProducts = (
  props?: FetchProductsPropsType
): UseFetchResultType<APIProductGetType> => {
  const {
    query,
    sort,
    limit = "12",
    page = 1,
    category,
    minPrice,
    maxPrice,
  } = props || {};
  const url = useMemo(
    () => new URL(`/api/product`, process.env.NEXT_PUBLIC_API_BASE_URL),
    []
  );

  url.searchParams.set("limit", String(limit));
  if (query) {
    url.searchParams.set("q", query);
  }
  if (sort) {
    url.searchParams.set("sort", sort);
  }
  if (page) {
    url.searchParams.set("page", String(page));
  }
  if (category) {
    url.searchParams.set("category", category);
  }
  if (minPrice) {
    url.searchParams.set("minPrice", String(minPrice));
  }
  if (maxPrice) {
    url.searchParams.set("maxPrice", String(maxPrice));
  }

  const response = useFetch<APIProductGetType>(url.toString());

  const products = response.data as APIProductGetType;
  return {
    data: products,
    isLoading: response.isLoading,
    error: response.error,
    ok: response.ok,
  };
};
