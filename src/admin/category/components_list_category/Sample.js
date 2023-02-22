import { React, useState } from "react";
import Swal from "sweetalert2";
import { ButtonOrderEdit, ButtonOrderDelete } from "../../order/button_order";
import DialogEditCategory from "../components_dialog/DialogEditCategory";
import { deleteCategoryNameById } from "../../../app/features/productSlice";
import { getCategories } from "../../../app/features/productSlice";
import { useDispatch } from "react-redux";
//----------
import { Data } from "../../components";

function Sample({ category, setCheck }) {
  const dispatch = useDispatch();

  //----------------
  const [openEditModal, setOpenEditModal] = useState(false);
  const handleCheck = () => {
    setCheck();
  };
  const getCat = async () => {
    await dispatch(getCategories());
  };
  const deleteCat = async (id) => {
    await dispatch(deleteCategoryNameById({ id }));
    await handleCheck();
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Xóa sản phẩm",
      text: `Bạn có muốn xóa ${category.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xác nhận!",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        //dispatch(deleteCategoryNameById({ id }));
        deleteCat(id);
        console.log("Duy ne", result.isConfirmed);
        Swal.fire("Đã xóa thành công", "", "success");
      }
    });
  };
  return (
    <tr index-data={category.index}>
      <Data>
        <div className="min-w-[5rem]">
          <span className="text-black">{category.id}</span>
        </div>
      </Data>
      <Data>
        <div className="min-w-[5rem]">
          <span className="text-black">{category.name}</span>
        </div>
      </Data>
      <Data>
        <div className="min-w-[5rem]">
          <span className="text-black">{category.url_path}</span>
        </div>
      </Data>

      <Data>
        <div className="min-w-[5rem]">
          <span className="text-black">{category.createdAt}</span>
        </div>
      </Data>
      <Data>
        <div className="min-w-[5rem]">
          <span className="text-black">{category.updatedAt}</span>
        </div>
      </Data>

      <Data>
        <div className="min-w-[4rem]">
          <div
            onClick={() => {
              setOpenEditModal(true);
            }}
          >
            <ButtonOrderEdit />
          </div>
          <div>
            {openEditModal && (
              <DialogEditCategory
                Cid={category.id}
                createdAt={category.createdAt}
                updatedAt={category.updatedAt}
                name={category.name}
                url_path={category.url_path}
                closeEditModal={setOpenEditModal}
                setCheck={handleCheck}
              />
            )}
          </div>

          <div
            onClick={() => {
              handleDelete(category.id);
            }}
          >
            <ButtonOrderDelete />
          </div>
        </div>
      </Data>
    </tr>
  );
}

export default Sample;
