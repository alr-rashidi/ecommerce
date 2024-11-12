import Link from "next/link";
import React from "react";
import { IoWatchOutline, IoGameControllerOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { IconType } from "react-icons/lib";
import { TbDeviceMobile } from "react-icons/tb";
import { BsCamera } from "react-icons/bs";
import { HiOutlineComputerDesktop } from "react-icons/hi2";

type ItemsType = {
  title: string;
  category: string;
  icon: IconType;
  isActive?: boolean;
}[];
const items: ItemsType = [
  {
    title: "Phones",
    category: "/phones",
    icon: TbDeviceMobile,
  },
  {
    title: "Computers",
    category: "/computers",
    icon: HiOutlineComputerDesktop,
  },
  {
    title: "Smart Watches",
    category: "/smart-watches",
    icon: IoWatchOutline,
  },
  {
    title: "Cameras",
    category: "/cameras",
    icon: BsCamera,
  },
  {
    title: "Headphones",
    category: "/headphones",
    icon: PiHeadphones,
  },
  {
    title: "Gaming",
    category: "/gaming",
    icon: IoGameControllerOutline,
  },
];

const SubNav = () => {
  return (
    <div className="max-lg:hidden bg-primary  py-4 px-14">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {items.map((item, index) => (
          <React.Fragment key={item.category}>
            <div className="flex items-center text-neutral-400 hover:text-neutral-300 gap-2 transition">
              <item.icon />
              <Link
                href={`#${item.category}`}
                className="font-semibold text-xs"
              >
                {item.title}
              </Link>
            </div>
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
