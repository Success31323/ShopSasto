'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Search from './Search';
import Nav from './Nav'
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";



const Header = () => {
  return (
    <>
        <div className='headerWrapper'>
            <header className='py-3 border-b border-[rgba(0,0,0,0.2)]'>
                <div className='w-full px-4 sm:px-8 flex items-center justify-between'>
                    <div className='logo'>
                        <Link href={"/"}>
                        <Image src={"/logo.png"} width={234} height={74} alt='Logo'/>
                        </Link>
                    </div>
                    <Search/>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-3'>
                            <Link href={"/login"} className='hover:text-primary'>Login</Link>
                            <span> | </span>
                            <Link href={"/register"} className='hover:text-primary'>Register</Link>
                        </div>

                        <div className='flex items-center gap-3'>
                            <Link href={"/wishlist"} className='relative'>
                            <span className='bg-red-500 w-5 h-5 text-white  rounded-full flex items-center justify-center absolute -top-[10px] -right-[8px] z-50'>3</span>
                            <CiHeart size= {30} className='text-black-800 hover:text-primary'/>
                            </Link>


                            <Link href={"/cart"} className='relative'>
                            <span className='bg-red-500 w-5 h-5 text-white  rounded-full flex items-center justify-center absolute -top-[10px] -right-[8px] z-50'>3</span>
                            <IoCartOutline size= {30} className='text-black-800 hover:text-primary'/>
                            </Link>
                        </div>    

                    </div>
                </div>
            </header>

            <Nav/>
        </div>
    </>
  )
}

export default Header
