import Input from "@/components/ui/input";
import React, { useCallback, useEffect, useState } from "react";
import ItemHeader from "./itemHeader";

type PriceRangeType = {
  min: number;
  max: number;
};
type PriceFilterPropsType = {
  priceRange: PriceRangeType;
  setPriceRange: (priceRange: PriceRangeType) => void;
};
const PriceFilter = ({ priceRange, setPriceRange }: PriceFilterPropsType) => {
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);

  const handlePriceRange = useCallback(
    (min: number, max: number) => {
      if (priceRange.min !== min || priceRange.max !== max) {
        setPriceRange({ min, max });
      }
    },
    [priceRange, setPriceRange]
  );

  useEffect(() => {
    const priceChangeTimeout = setTimeout(() => {
      handlePriceRange(minPrice, maxPrice);
    }, 1000);
    return () => clearTimeout(priceChangeTimeout);
  }, [handlePriceRange, maxPrice, minPrice]);

  return (
    <div>
      <ItemHeader title="Price" />
      <div>
        <div className="flex items-center justify-between py-4">
          {/* flex reverse is used to use peer element at the beginning */}
          <div className="flex flex-col-reverse items-start gap-2">
            <Input
              type="number"
              name="min"
              min={0}
              size="sm"
              placeholder="0"
              className="w-24 peer px-2"
              value={minPrice}
              onChange={e => setMinPrice(parseInt(e.target.value || "0"))}
              onBlur={e => handlePriceRange(parseInt(e.target.value), maxPrice)}
            />
            <p className="peer text-neutral-500 peer-focus:text-black">From</p>
          </div>
          <div className="flex flex-col-reverse items-end gap-2">
            <Input
              type="number"
              name="max"
              min={0}
              size="sm"
              placeholder="0"
              className="w-24 peer px-2"
              value={maxPrice}
              onChange={e => setMaxPrice(parseInt(e.target.value || "0"))}
              onBlur={e => handlePriceRange(minPrice, parseInt(e.target.value))}
            />
            <p className="peer text-neutral-500 peer-focus:text-black">To</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
