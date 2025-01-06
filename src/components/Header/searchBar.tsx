"use client";
import React, { useCallback, useState } from "react";
import SearchBar from "../ui/searchBar";
import { useRouter, useSearchParams } from "next/navigation";

const HeaderSearchBar = () => {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState<string>(initialQuery);
  const router = useRouter();

  const handleSearchBarKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && query !== "") {
        router.push(`/search?q=${query}`);
      }
    },
    [query, router]
  );

  return (
    <SearchBar
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyDown={handleSearchBarKeyPress}
    />
  );
};

export default HeaderSearchBar;
