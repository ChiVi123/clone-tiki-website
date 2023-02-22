import React from 'react'

export default function Customers() {
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
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          color="blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <div className="absolute pt-20">
          <span>Customers</span>
        </div>

        <div className="flex absolute text-green-600 pt-[8rem]">
          <p>7<span>%</span></p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </button>
  )
}
