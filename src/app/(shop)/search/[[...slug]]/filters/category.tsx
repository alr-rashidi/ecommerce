import React from "react";
import Items from "./items";
import { useRouter } from "next/navigation";
import ItemHeader from "./itemHeader";
import { useFetch } from "@/hooks/useFetch";
import { z } from "zod";
import { categorySchema } from "@/server/validations/category";
import Loading from "@/app/(shop)/loading";
import ErrorCard from "@/components/ui/errorCard";

const CategoryFilter = () => {
  const router = useRouter();

  const { data, isLoading, error, ok } =
    useFetch<z.infer<typeof categorySchema>[]>("/api/category");
  const categories = data?.map(category => ({
    label: category.name,
    value: category._id!,
  }));

  const handleCategoryChange = (category: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.toString());
    router.push(`/search/${category}?${searchParams.toString()}`);
  };

  return (
    <ItemHeader title="Category">
      {isLoading ? (
        <Loading />
      ) : !ok ? (
        <ErrorCard message={error} />
      ) : categories && categories.length > 0 ? (
        <Items
          items={categories}
          itemType="button"
          onChange={handleCategoryChange}
        />
      ) : (
        <span>No categories found</span>
      )}
    </ItemHeader>
  );
};

export default CategoryFilter;
