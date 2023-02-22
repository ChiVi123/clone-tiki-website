import React from "react";
import ButtonExit from "../../components/button/ButtonExit";
import { Dialog } from "@material-ui/core";
import { FormDeleteCategory } from "./input";

export default function DialogEditCategory({
  closeDeleteModal,
  Cid,
  createdAt,
  updatedAt,
  name,
  setCheck,
}) {
  const handleClose = () => {
    closeDeleteModal(false);
  };
  const handleCheck = () => {
    setCheck();
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
          onClick={() => closeDeleteModal(false)}
        >
          <ButtonExit />
        </div>
        <FormDeleteCategory
          DeleteModal={handleClose}
          id={Cid}
          nameC={name}
          setCheck={handleCheck}
        />
      </div>
    </Dialog>
  );
}
