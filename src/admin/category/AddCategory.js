import React, { useContext, useState } from "react";
import { CategoryProvider } from "./provider";
import { createCategory } from "../../app/features/productSlice";
import { getCategories } from "../../app/features/productSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function AddCategory({ setCheck, check }) {
  const [data, dispatch] = useContext(CategoryProvider);
  const handleCheck = () => {
    setCheck(!check);
  };
  const [fData, setFdata] = useState({
    name: "",
    url_path: "",
  });
  const dispatchs = useDispatch();
  const getCat = async () => {
    await dispatchs(getCategories());
  };
  const handleSubmit = async () => {
    await dispatchs(createCategory(fData));
    getCat();
    dispatch({ type: "addCategoryModal", payload: false });
    handleCheck();
    setFdata({
      ...fData,
      name: "",
      url_path: "",
    });
    toast.success("Thêm Danh mục thành công");
  };
  return (
    <div
      className={`${
        data.addCategoryModal ? "" : "hidden"
      } fixed inset-0 flex items-center z-30 justify-center overflow-auto`}
    >
      <div className="relative flex flex-col items-center w-11/12 px-4 py-4 mt-32 space-y-4 bg-white shadow-lg md:mt-0 md:w-3/6 md:px-8">
        <div className="flex items-center justify-between w-full pt-4">
          <span className="text-2xl font-semibold tracking-wider text-left">
            Add Category
          </span>
          <span
            style={{ background: "#303031" }}
            onClick={() =>
              dispatch({ type: "addCategoryModal", payload: false })
            }
            className="px-2 py-2 rounded-full cursor-pointer text-gray"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
        <form className="w-full">
          <div className="flex py-4 space-x-1">
            <div className="flex flex-col w-full space-x-1 space-y-1">
              <label htmlFor="name">Category Name *</label>
              <input
                onChange={(e) =>
                  setFdata({
                    ...fData,
                    name: e.target.value,
                  })
                }
                value={fData.name}
                className="px-4 py-2 border focus:outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="flex py-4 space-x-1">
            <div className="flex flex-col w-full space-x-1 space-y-1">
              <label htmlFor="name">Category Slug *</label>
              <input
                onChange={(e) =>
                  setFdata({
                    ...fData,
                    url_path: e.target.value,
                  })
                }
                value={fData.url_path}
                className="px-4 py-2 border focus:outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col w-full pb-4 mt-4 space-y-1 md:pb-6">
            <span
              onClick={() => handleSubmit()}
              style={{ background: "#303031" }}
              //type="submit"
              className="flex justify-center py-2 text-lg font-medium bg-gray-800 rounded-full text-gray"
            >
              Create Category
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
