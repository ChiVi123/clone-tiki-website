import React from 'react'

export default function Orders() {
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
          color="orange"
          viewBox="0 0 20 20"
          fill="currentColor">
          <path
            d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
          <path
            fillRule="evenodd"
            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
            clipRule="evenodd" />
        </svg>
        <div className="absolute pt-20">
          <span>Orders</span>
        </div>
        <div className="flex absolute text-green-600 pt-[8rem]">
          <p>10<span>%</span></p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
              clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </button>
  )
}
