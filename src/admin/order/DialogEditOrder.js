import React from "react";
import ButtonExit from "../components/button/ButtonExit";
import { Dialog } from "@material-ui/core";
import { FormEditOrder } from "./input";

export default function DialogEditOrder({
  closeEditModal,
  Oid,
  paymentItems,
  sumPrice,
  address,
  userId,
  createdAt,
  updatedAt,
  status
}) {
  const handleClose = () => {
    closeEditModal(false);
  };
  return (
    <Dialog
      open={true}
      className="fixed flex justify-center bg-white shadow-2xl align-center rounded-2xl"
    >
      <div className="flex flex-col">
        <div
          open={false}
          className="flex justify-end"
          onClick={() => closeEditModal(false)}
        >
          <ButtonExit />
        </div>
        <FormEditOrder
          EditModal={handleClose}
          id={Oid}
          paymentItemsO={paymentItems}
          sumPriceO={sumPrice}
          addressO={address}
          userIdO={userId}
          createdAtO={createdAt}
          updatedAtO={updatedAt}
          statusO={status}
        />
      </div>
    </Dialog>
  );
}
