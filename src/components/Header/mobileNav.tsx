"use client";
import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { navigationItems } from "./navigationItems";
import Link from "next/link";
import SearchBar from "./searchBar";

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
        className="flex items-center text-neutral-400 border-neutral-400 hover:text-neutral-900 hover:border-neutral-900 transition"
        onClick={handleToggle}
      >
        <FiMenu size={24} />
      </button>
      <div
        className={`
          fixed pointer-events-none top-0 left-0 bottom-0 right-0 w-full h-full bg-black z-10 transition
          ${isOpen ? "opacity-50 pointer-events-auto" : "opacity-0"}`}
      />
      <div
        className={`
          overflow-y-auto fixed pt-14 p-4 top-0 right-0 w-[260px] h-full bg-white z-10 transition
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
      >
        <button
          className="absolute top-0 right-0 px-3 py-4 text-neutral-400 hover:text-neutral-900 transition"
          onClick={handleToggle}
        >
          <FiMenu size={24} />
        </button>
        <SearchBar />
        <ul className="flex flex-col items-center px-3 gap-2 mt-4">
          {navigationItems.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-lg font-medium hover:text-neutral-900 transition ${item.isActive ? "text-neutral-900" : "text-neutral-400"}`}
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
