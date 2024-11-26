"use client";
import Link from "next/link";
import React from "react";
import { navigationItems } from "./navigationItems";

const Navigation = () => {
  return (
    <>
      <ul className="px-3 gap-7 hidden lg:flex">
        {navigationItems.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`text-sm font-medium hover:text-neutral-900 transition ${item.isActive ? "text-neutral-900" : "text-neutral-400"}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigation;
