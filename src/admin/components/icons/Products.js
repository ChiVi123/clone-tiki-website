import React from 'react'

export default function Products() {
  return (
    <button className='h-40 w-[15rem]
        text-black
        text-lg
        font-semibold
        bg-[#d7d7d7]
        flex
        items-center
        justify-center
        hover:opacity-80'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        color="red"
        viewBox="0 0 20 20"
        fill="currentColor">
        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
        <path
          fillRule="evenodd"
          d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
          clipRule="evenodd" />
      </svg>
      <div className="absolute pt-20">
        <span>Products</span>
      </div>
    </button>
  )
}
