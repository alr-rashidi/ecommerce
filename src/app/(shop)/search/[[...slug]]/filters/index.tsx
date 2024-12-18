import React from "react";
import PriceFilter from "./price";
import CategoryFilter from "./category";

const Filters = () => {
  return (
    <div className="flex flex-col gap-4">
      <CategoryFilter />
      <PriceFilter />
    </div>
  );
};

export default Filters;
