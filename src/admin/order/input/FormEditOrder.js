import React, { useState } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";

import { updateOrder } from "../../../../src/app/features/paymentSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
export default function FormEditOrder({
  EditModal,
  id,
  statusO,
  paymentItemsO,
  sumPriceO,
  addressO,
  userIdO,
  createdAtO,
  updatedAtO,
}) {
  const dispatch = useDispatch();
  const [fdata, setFdata] = useState({
    id: id,
    paymentItems: paymentItemsO,
    sumPrice: sumPriceO,
    address: addressO,
    userId: userIdO,
    createdAt: createdAtO,
    updatedAt: updatedAtO,
    status: statusO
  });
  const handleSubmit = async () => {
    await dispatch(updateOrder(fdata, { id } ));
    EditModal();
    window.location.reload();
    // setCheck();
    toast.success("Chỉnh sửa Đặt hàng thành công");
  };

  const options = ["Đã thanh toán","Chưa thanh toán"];
  
  return (  
    <div>
      <div className="inline-block">
        <DialogTitle>
          <span className="font-bold">Edit Order</span>
        </DialogTitle>
      </div>

      <div>
        <div>
          <DialogActions>
            <span>Order's Status:</span>
            <select
              
              onChange={(e) =>
                setFdata({
                  ...fdata,
                  status: e.target.value,
                })
              }
              defaultValue={fdata.status}
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
            >
              {options.map((option)=>(
                <option value={option}>
                  {option}
                </option>
              ))}
            </select>
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
            <span className="pl-1 pr-2">Update Order</span>
          </span>
        </div>
      </div>
    </div>
  );
}
