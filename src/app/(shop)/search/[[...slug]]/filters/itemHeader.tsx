import React from "react";
import { FaAngleDown } from "react-icons/fa6";

type ItemHeaderPropsType = {
  title: string;
};
const ItemHeader = ({ title }: ItemHeaderPropsType) => {
  return (
    <div className="flex items-center justify-between cursor-pointer border-b border-neutral-300 py-3 font-medium">
      <p className="text-xl">{title}</p>
      <FaAngleDown />
    </div>
  );
};

export default ItemHeader;
