import React from "react";
import ButtonExit from "../../components/button/ButtonExit";
import { Dialog } from "@material-ui/core";
import { FormAddCategory } from "./input";

export default function DialogAddCategory({ closeModal }) {
  return (
    <Dialog
      open={true}
      className="fixed flex justify-center bg-white shadow-2xl align-center rounded-2xl"
    >
      <div className="flex flex-col">
        <div
          open={false}
          className="flex justify-end"
          onClick={() => closeModal(false)}
        >
          <ButtonExit />
        </div>
        <FormAddCategory />
      </div>
    </Dialog>
  );
}
