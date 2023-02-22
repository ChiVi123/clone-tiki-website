import React from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import ButtonCreateProduct from "../../../components/button/ButtonCreateProduct";
import InputSample from "./InputSample";
import SelectSample from "./SelectSample";

export default function FormAddProduct() {
  return (
    <div>
      <div className="inline-block">
        <DialogTitle>
          <span className="font-bold">Add Product</span>
        </DialogTitle>
      </div>

      <div>
        <div>
          <DialogActions>
            <span>Product Name:</span>
            <InputSample />
          </DialogActions>
        </div>
        <div>
          <DialogActions>
            <span>Product Price:</span>
            <InputSample />
          </DialogActions>
        </div>
        <div>
          <DialogActions>
            <span>Product Description:</span>
            <InputSample />
          </DialogActions>
        </div>
        <div>
          <DialogActions>
            <span>Product Image:</span>
            <InputSample />
          </DialogActions>
        </div>
        <div>
          <DialogActions>
            <span>Product Status:</span>
            <SelectSample />
          </DialogActions>
        </div>
        <div>
          <DialogActions>
            <span>Product Category:</span>
            <SelectSample />
          </DialogActions>
        </div>

        <div>
          <DialogActions>
            <span>Product In Stock:</span>
            <InputSample />
          </DialogActions>
        </div>
        <div className="flex justify-center my-5">
          <ButtonCreateProduct />
        </div>
      </div>
    </div>
  );
}
