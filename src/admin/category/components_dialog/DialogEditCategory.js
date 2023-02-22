import React from "react";
import ButtonExit from "../../components/button/ButtonExit";
import { Dialog } from "@material-ui/core";
import { FormEditCategory } from "./input";

export default function DialogEditCategory({
  closeEditModal,
  Cid,
  createdAt,
  updatedAt,
  name,
  setCheck,
  url_path,
}) {
  const handleClose = () => {
    closeEditModal(false);
  };
  const handleCheck = () => {
    setCheck();
  };
  console.log("Vinh");
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
        <FormEditCategory
          EditModal={handleClose}
          id={Cid}
          createdAt={createdAt}
          updatedAt={updatedAt}
          nameC={name}
          url_path={url_path}
          setCheck={handleCheck}
        />
      </div>
    </Dialog>
  );
}
