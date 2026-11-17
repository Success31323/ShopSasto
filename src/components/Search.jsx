import { Button } from '@mui/material';
import React from 'react'
import { IoSearchOutline, IoSearchSharp } from "react-icons/io5";

const Search = () => {
  return (
    <div className='search bg-[#f3f1f1] w-[600px] h-[60px] flex items-center px-4 rounded-lg'>
      <input 
        type="text" 
        placeholder="Search prodcuts" 
        className="w-full h-full bg-transparent outline-none border-0 text-gray-700"
      />
      <Button><IoSearchOutline size={30}/></Button>
    </div>
  )
}

export default Search