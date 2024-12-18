import { APIProductGetType } from "@/app/api/product/route";
import { Error } from "mongoose";

type FetchProductsPropsType = {
  query?: string;
  sort?: string;
  limit?: number;
  page?: number;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
};
export const fetchProducts = async (
  props?: FetchProductsPropsType
): Promise<APIProductGetType> => {
  const {
    query,
    sort,
    limit = "12",
    page = 1,
    category,
    minPrice,
    maxPrice,
  } = props || {};

  const url = new URL(`/api/product`, process.env.NEXT_PUBLIC_API_BASE_URL);
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

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    return products;
  } catch (err) {
    console.error(err);
    throw new Error(`Internal server error`);
  }
};
