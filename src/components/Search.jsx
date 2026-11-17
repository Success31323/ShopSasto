import React from 'react'

const Search = () => {
  return (
    <div className='search bg-[#E6E6E6] w-[600px] h-[60px] flex items-center px-4 rounded-lg'>
      <input 
        type="text" 
        placeholder="Search anything..." 
        className="w-full bg-transparent outline-none text-gray-700"
      />
    </div>
  )
}

export default Search