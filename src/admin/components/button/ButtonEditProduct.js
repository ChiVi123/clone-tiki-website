import React from 'react'

export default function ButtonEditProduct() {
  return (
    <div>
        <button className='h-12 w-[20rem]
            rounded-lg
            text-white
            text-sm
            font-semibold
            uppercase
            bg-[#060606]
            py-1
            px-3
            flex
            items-center
            justify-center
            hover:opacity-80
            active:w-30
            active:h-11'>
            <span className="pl-1 pr-2">Update Product</span>
        </button>
    </div>
  )
}
