import { FaUserCircle } from "react-icons/fa"
import { IoCartOutline } from "react-icons/io5"
import React from 'react'

const Buttons = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return <button className="bg-neutral-800 hover:bg-neutral-600 text-white py-2 px-4 rounded-md transition">Login</button>
  }

  return (
    <div className='flex gap-4'>
      <IoCartOutline className='cursor-pointer size-6' />
      <FaUserCircle className='cursor-pointer h-full' />
    </div>
  )
}

export default Buttons
