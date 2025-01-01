import BreadCrumb from "@/components/ui/breadCrumb";
import { useRouter } from "next/navigation";
import React, { useMemo } from "react";

type BreadCrumbProps = {
  category: string | undefined;
  query: string | undefined;
};
const SearchBreadCrumb = ({ category, query }: BreadCrumbProps) => {
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

  const handleBreadcrumbClick = (item: string) => {
    router.push("/search/" + (item === "Search" ? "" : item));
  };

  return <BreadCrumb items={breadcrumbItems} onClick={handleBreadcrumbClick} />;
};

export default SearchBreadCrumb;
