"use client";
import React, { useState } from "react";
import SearchBar from "../ui/searchBar";
import { useRouter, useSearchParams } from "next/navigation";

const HeaderSearchBar = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get("q") || "");
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
