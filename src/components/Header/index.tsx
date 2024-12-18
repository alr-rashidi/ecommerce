import React from "react";
import Logo from "./logo";
import HeaderSearchBar from "./searchBar";
import Navigation from "./navigation";
import Buttons from "./buttons";
import SubNav from "./subNav";
import MobileNav from "./mobileNav";

const Header = () => {
  const className =
    "w-full h-16 px-3 gap-5 max-w-5xl mx-auto flex justify-between items-center py-4 max-lg:h-14";

  return (
    <>
      <nav className="hidden lg:block fixed top-0 left-0 right-0 bg-white z-10 ">
        <div className={className}>
          <Logo />
          <HeaderSearchBar />
          <Navigation />
          <Buttons />
          <MobileNav />
        </div>
        <SubNav />
      </nav>
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-white z-10 ">
        <div className={className}>
          <Logo />
          <MobileNav />
        </div>
        <SubNav />
      </nav>
    </>
  );
};

export default Header;
