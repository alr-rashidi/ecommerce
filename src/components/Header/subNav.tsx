import Link from "next/link";
import React from "react";
import { IoWatchOutline, IoGameControllerOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { IconType } from "react-icons/lib";
import { TbDeviceMobile } from "react-icons/tb";
import { BsCamera } from "react-icons/bs";
import { FaLaptop } from "react-icons/fa6";

type ItemsType = {
  title: string;
  categoryId: string;
  icon: IconType;
  isActive?: boolean;
}[];
const items: ItemsType = [
  {
    title: "SmartPhone",
    categoryId: "673cb21f936e398308d6f692",
    icon: TbDeviceMobile,
  },
  {
    title: "Laptop",
    categoryId: "673ca8e1936e398308d6f67c",
    icon: FaLaptop,
  },
  {
    title: "Smartwatch",
    categoryId: "673ca9b5936e398308d6f684",
    icon: IoWatchOutline,
  },
  {
    title: "Camera",
    categoryId: "673caa3f936e398308d6f68e",
    icon: BsCamera,
  },
  {
    title: "Headphone",
    categoryId: "673ca9a9936e398308d6f682",
    icon: PiHeadphones,
  },
  {
    title: "Game Console",
    categoryId: "673caa5c936e398308d6f690",
    icon: IoGameControllerOutline,
  },
];

const SubNav = () => {
  return (
    <div className="max-lg:hidden bg-primary  py-2 px-14">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {items.map((item, index) => (
          <React.Fragment key={item.categoryId}>
            <Link
              href={`search/${item.categoryId}`}
              className="flex items-center font-semibold text-xs py-2 px-4 text-neutral-400 hover:text-neutral-300 gap-2 transition"
            >
              <item.icon />
              {item.title}
            </Link>
            {index < items.length - 1 && (
              <div className="w-px h-4 bg-gray-400"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SubNav;
