import React, { useEffect, useState } from "react";
import Items, { ItemFilterType as ItemFilterType } from "./items";
import { categorySchema } from "@/server/validations/category";
import { fetchData } from "@/hooks/fetchData";
import { z } from "zod";
import { useRouter } from "next/navigation";
import ItemHeader from "./itemHeader";

const CategoryFilter = () => {
  const [categories, setCategories] = useState<ItemFilterType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        type DataType = z.infer<typeof categorySchema>[];
        const data: DataType | unknown = await fetchData("/api/category");

        const validatedData = z.array(categorySchema).parse(data);
        setCategories(
          validatedData.map(item => {
            return {
              label: item.name,
              value: item._id!,
            };
          })
        );
      } catch {
        console.log("Error fetching categories");
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  const handleCategoryChange = (category: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.toString());
    router.push(`/search/${category}?${searchParams.toString()}`);
  };

  return (
    <ItemHeader title="Category">
      {isLoading && <div>Loading categories...</div>}
      {categories.length > 0 ? (
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
