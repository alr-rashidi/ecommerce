import React from 'react'
import { CiSearch } from 'react-icons/ci'

const SearchBar = () => {
  return (
    <div className='relative flex-1'>
      <input
        type="text"
        className='pl-10 text-sm bg-neutral-100 rounded-md w-full h-full py-2 px-4 text-neutral-700 placeholder-neutral-400 focus:outline-none'
        placeholder='Search'
      />
      <CiSearch className='absolute top-1/2 left-3 -translate-y-1/2 text-xl text-neutral-500' />
    </div>
  )
}

export default SearchBar
