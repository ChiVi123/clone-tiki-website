import React from 'react'

function ButtonUploadImage() {
    return (
        <button className='h-10 w-[20rem]
            text-white
            text-lg
            rounded-xl
            font-semibold
            bg-[#000000]
            flex
            items-center
            justify-center
            hover:opacity-80
            active:h-9'
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <span>Upload File</span>
        </button>
    )
};
export default ButtonUploadImage;
