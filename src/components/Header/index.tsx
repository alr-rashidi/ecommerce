import React from "react";
import Logo from "./logo";
import SearchBar from "./searchBar";
import Navigation from "./navigation";
import Buttons from "./buttons";
import SubNav from "./subNav";

const Header = () => {
  return (
    <nav>
      <div className="w-full h-16 px-3 gap-5 max-w-5xl mx-auto flex justify-between items-center py-4 max-lg:h-14">
        <Logo />
        <SearchBar />
        <Navigation />
        <Buttons />
      </div>
      <SubNav />
    </nav>
  );
};

export default Header;
