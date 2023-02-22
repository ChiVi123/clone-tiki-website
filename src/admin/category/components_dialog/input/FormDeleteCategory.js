import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import { deleteCategoryNameById } from "../../../../app/features/productSlice";
import { useDispatch } from "react-redux";
import { getCategories } from "../../../../app/features/productSlice";
export default function FormDeleteCategory({
  id,
  nameC,
  DeleteModal,
  setCheck,
}) {
  const dispatch = useDispatch();

  const getCat = async () => {
    await dispatch(getCategories());
  };
  const handleDelete = async (id) => {
    await dispatch(deleteCategoryNameById({ id }));
    getCat();
    DeleteModal();
    setCheck();
  };
  return (
    <div>
      <div className="flex justify-center inline-block">
        <DialogTitle>
          <span className="font-bold ">Do you want to Delete : {nameC}</span>
        </DialogTitle>
      </div>

      <div>
        <div className="flex justify-center">
          <DialogActions>
            <span className=""> </span>
          </DialogActions>
        </div>
        <div className="flex justify-center my-5">
          <span
            onClick={() => handleDelete(id)}
            className="h-12 w-[15rem] mx-2
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
            active:h-11
            bg-indigo-700
            "
          >
            <span className="pl-1 pr-2 ">Yes</span>
          </span>
          <span
            onClick={() => DeleteModal()}
            className="h-12 w-[15rem] mx-2
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
            active:h-11 bg-red-700
            "
          >
            <span className="pl-1 pr-2">No</span>
          </span>
        </div>
      </div>
    </div>
  );
}
