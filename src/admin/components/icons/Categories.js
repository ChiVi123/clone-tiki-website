import React from 'react'

export default function Categories() {
  return (
    <button className='h-40 w-[15rem]
        text-black
        text-lg
        font-semibold
        bg-[#d7d7d7]
        flex
        items-center
        justify-center
        hover:opacity-60'
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        color="green"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 
          002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 
          0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>

      <div className="absolute pt-20">
        <span>Categories</span>
      </div>
    </button>
  )
}
