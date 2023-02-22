import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

import { updateCategory } from "../../../../app/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
export default function FormEditProduct({
  EditModal,
  id,
  createdAt,
  updatedAt,
  nameC,
  url_path,
  setCheck,
}) {
  const dispatch = useDispatch();
  const [fdata, setFdata] = useState({
    id: id,
    name: nameC,
    createdAt: createdAt,
    updatedAt: updatedAt,
    url_path: url_path,
  });
  const handleSubmit = async () => {
    await dispatch(updateCategory(fdata, { id }));
    EditModal();
    setCheck();
    toast.success("Chỉnh sửa Danh mục thành công");
  };
  console.log("check đupât", url_path);
  return (
    <div>
      <div className="inline-block">
        <DialogTitle>
          <span className="font-bold">Edit Category</span>
        </DialogTitle>
      </div>

      <div>
        <div>
          <DialogActions>
            <span>Category Name:</span>
            <input
              onChange={(e) =>
                setFdata({
                  ...fdata,
                  name: e.target.value,
                })
              }
              defaultValue={nameC}
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
          </DialogActions>
          <DialogActions>
            <span>Category url_path:</span>
            <input
              onChange={(e) =>
                setFdata({
                  ...fdata,
                  url_path: e.target.value,
                })
              }
              defaultValue={url_path}
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
          </DialogActions>
        </div>
        <div className="flex justify-center my-5">
          <span
            onClick={() => handleSubmit(fdata)}
            className="h-12 w-[20rem]
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
            active:h-11"
          >
            <span className="pl-1 pr-2">Update Product</span>
          </span>
        </div>
      </div>
    </div>
  );
}
