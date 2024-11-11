import Link from 'next/link'
import React from 'react'
import { FaShopify } from "react-icons/fa"

const Logo = () => {
  return (
    <Link href="/" className='flex gap-2 items-center text-2xl font-bold'>
      <FaShopify size={30} />
      Ecom
    </Link>
  )
}

export default Logo
