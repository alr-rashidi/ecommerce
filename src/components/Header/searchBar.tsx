"use client";
import React, { useState } from "react";
import SearchBar from "../ui/searchBar";
import { useRouter } from "next/navigation";

const HeaderSearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearchBarKeyPress = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter" && query !== "") {
      router.push(`/search?q=${query}`);
    }
  };

  return (
    <SearchBar
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={handleSearchBarKeyPress}
    />
  );
};

export default HeaderSearchBar;
