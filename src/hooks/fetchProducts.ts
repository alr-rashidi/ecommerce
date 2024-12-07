import { productSchema } from "@/server/validations/product";
import { Error } from "mongoose";
import { z } from "zod";

type FetchProductsPropsType = {
  sort?: string;
  limit?: string;
};
export const fetchProducts = async (
  props?: FetchProductsPropsType
): Promise<z.infer<typeof productSchema>[] | Error> => {
  const { sort = "", limit = "8" } = props || {};

  const url = new URL(`/api/product`, process.env.NEXT_PUBLIC_API_BASE_URL);
  url.searchParams.set("limit", limit);
  if (sort) {
    url.searchParams.set("sort", sort);
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
