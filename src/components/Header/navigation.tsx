import Link from "next/link";
import React from "react";

type NavigationDataType = {
  title: string;
  href: string;
  active?: boolean;
}[];
const navigationData: NavigationDataType = [
  {
    title: "Home",
    href: "/",
    active: true,
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact us",
    href: "/cuntact-us",
  },
  {
    title: "Blog",
    href: "/blog",
  },
];

const Navigation = () => {
  return (
    <ul className="flex px-3 gap-7">
      {navigationData.map(item => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`text-sm font-medium hover:text-neutral-900 transition ${item.active ? "text-neutral-900" : "text-neutral-400"}`}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
