import React from 'react'
import Logo from "./logo"
import SearchBar from "./searchBar"
import Navigation from "./navigation"
import Buttons from "./buttons"

const Header = () => {
  return (
    <div className='w-full gap-5 max-w-5xl mx-auto flex justify-between items-center py-4'>
      <Logo />
      <SearchBar />
      <Navigation />
      <Buttons />
    </div>
  )
}

export default Header
