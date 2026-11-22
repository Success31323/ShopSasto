import Link from 'next/link'
import React from 'react'
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
  return (
    <nav className='py-4 border-b border-gray-100'>
      <div className='container flex flex-wrap items-center justify-between gap-6'>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Home
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Fruits & Vegetables
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Meats & Seafood
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
           Breads & Bakery
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Supplements
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Grocery & Staples
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Breakfast & Dairy
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Beverages
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Snacks
        </Link>
        <Link href='/' className='text-[18px] text-gray-800 font-[600] hover:text-primary'>
          Frozen Foods
        </Link>
        <div className='relative group'>
            <span className='text-[18px] text-gray-800 font-[600] hover:text-primary flex items-center gap-1 cursor-pointer'>More <FaAngleDown size={20}/></span>


            <div className='dropdown-menu hidden group-hover:flex flex-col absolute top-[100%] right-0 bg-white shadow-md rounded-md overflow-hidden'>
                <Link href="/" className='text-[18px] text-gray-800 font-[600] hover:text-primary py-2 px-3'>Meow</Link>

            </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav