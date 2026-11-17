'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header>
        <div className='container flex items-center justify-between'>
            <div className='logo'>
                <Link href={"/"}>
                <Image src={"/Cart.png"} width={100} height={50} alt='Logo'/>
                </Link>
            </div>


        </div>
    </header>
  )
}

export default Header
