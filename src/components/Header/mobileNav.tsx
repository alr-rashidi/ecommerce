"use client";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { navigationItems } from "./navigationItems";
import Link from "next/link";
import HeaderSearchBar from "./searchBar";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        className="flex items-center border-neutral-400 text-neutral-400 transition hover:border-neutral-900 hover:text-neutral-900"
        onClick={handleToggle}
      >
        <FiMenu size={24} />
      </button>
      <div
        className={`
          ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0"} pointer-events-none fixed bottom-0 left-0 right-0
          top-0 z-10 h-full w-full bg-black transition`}
      />
      <div
        className={`
          ${isOpen ? "translate-x-0" : "translate-x-full"} fixed right-0 top-0 z-10 h-full w-[260px]
          overflow-y-auto bg-white p-4 pt-14 transition
          `}
      >
        <button
          className="absolute right-0 top-0 px-3 py-4 text-neutral-400 transition hover:text-neutral-900"
          onClick={handleToggle}
        >
          <FiMenu size={24} />
        </button>
        <HeaderSearchBar />
        <ul className="mt-4 flex flex-col items-center gap-2 px-3">
          {navigationItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${item.isActive ? "text-neutral-900" : "text-neutral-400"} text-lg font-medium transition hover:text-neutral-900`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
