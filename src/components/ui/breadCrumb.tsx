import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type BreadCrumbProps = {
  items: string[];
  onClick: (item: string) => void;
} & Omit<React.ComponentPropsWithoutRef<"div">, "items" | "onClick">;
const BreadCrumb = ({
  items,
  onClick,
  className,
  ...userProps
}: BreadCrumbProps) => {
  return (
    <div
      className={`text-neutral-500 font-semibold my-4 ${className}`}
      {...userProps}
    >
      {items.map((item, i) => (
        <button
          key={i}
          className={`text-sm font-semibold ${i === items.length - 1 ? "text-primary" : "text-neutral-400"}`}
          onClick={() => onClick(item)}
        >
          {item}
          {i < items.length - 1 && <FaChevronRight className="mx-3 inline" />}
        </button>
      ))}
    </div>
  );
};

export default BreadCrumb;
