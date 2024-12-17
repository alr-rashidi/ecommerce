import { APIProductGetType } from "@/app/api/product/route";
import { Error } from "mongoose";

type FetchProductsPropsType = {
  sort?: string;
  limit?: string;
  page?: number;
};
export const fetchProducts = async (
  props?: FetchProductsPropsType
): Promise<APIProductGetType> => {
  const { sort = "", limit = "12", page = 1 } = props || {};

  const url = new URL(`/api/product`, process.env.NEXT_PUBLIC_API_BASE_URL);
  url.searchParams.set("limit", limit);
  if (sort) {
    url.searchParams.set("sort", sort);
  }
  if (page) {
    url.searchParams.set("page", String(page));
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
