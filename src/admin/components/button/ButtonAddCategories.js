import React, { Fragment, createContext, useReducer, useContext } from "react";
import { CategoryProvider } from "../../category/provider";
export default function ButtonAdd() {
  const [data, dispatch] = useContext(CategoryProvider);

  return (
    <button
      onClick={(e) => dispatch({ type: "addCategoryModal", payload: true })}
      className="h-12 w-[10rem]
        rounded-full
        text-gray
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
        active:w-28
        active:h-11"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <span className="pl-2">Category</span>
    </button>
  );
}
