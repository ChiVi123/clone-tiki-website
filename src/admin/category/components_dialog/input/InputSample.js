import React from "react";

export default function InputSample({ data }) {
  return (
    <div>
      <input
        defaultValue={data}
        className="
              form-control
              block
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              transition
              ease-in-out
              m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              items-center
              justify-center
              w-[25rem]
              mx-10
              rounded-md
              py-1
              px-[6px]"
      ></input>
    </div>
  );
}
