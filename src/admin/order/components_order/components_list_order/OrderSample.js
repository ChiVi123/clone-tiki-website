import { React, useState } from "react";
import ButtonOrderEdit from "../../button_order/ButtonOrderEdit";
import { Data } from "../../../components";
import { OrderImage } from "../components_list_order";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../../../components/common/ErrorComponent";
import { DialogEditOrder } from "../../input";

function OrderSample({ order }) { 
  console.log(order.status);
  console.log(order.id);
  const [openEditModal, setOpenEditModal] = useState(false);
  // const handleCheck = () => {
  //   setCheck();
  // };
  return (
    <tr index-data={order.id}>
      <Data>
        {order.paymentItems &&
          order.paymentItems.map((item) => (
            <OrderImage img={item.thumbnailUrl} />
          ))}
      </Data>

      <Data>
        {order.paymentItems &&
          order.paymentItems.map((item) => (
            <div className="mt-3">
              {item.name} <br />
            </div>
          ))}
      </Data>

      <Data>
        <div className="min-w-[7rem]">
          {order.paymentItems &&
            order.paymentItems.map((item) => (
              <div className="py-16">
                Số lượng: {item.quantity} <br />
              </div>
            ))}
        </div>
      </Data>

      <Data>
        {order.sumPrice.toLocaleString(`vi-VN`, {
          style: "currency",
          currency: "VND",
        })}
      </Data>

      <Data>
        <div className="min-w-[10rem]">
          {order.address.name} <br />
          {order.address.phoneNumber} <br />
          {order.address.address}
          <span>, </span>
          {order.address.selectedWard}
          <span>, </span>
          {order.address.selectedDistrict}
          <span>, </span>
          {order.address.selectedCity}
        </div>
      </Data>

      <Data>
        <div className="min-w-[10rem]">
          {Intl.DateTimeFormat("vn-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          }).format(order.createdAt)}
        </div>
      </Data>
      <Data>
        {/* <div className="min-w-[4rem] flex items-center justify-between">
          <IconEdit />
        </div> */}
        <div
            onClick={() => {
              setOpenEditModal(true);
            }}
          >
            <ButtonOrderEdit />
          </div>
          <div>
            {openEditModal && (
              <DialogEditOrder
                Oid={order.id}
                paymentItems={order.paymentItems}
                sumPrice={order.sumPrice}
                address={order.address}
                userId={order.userId}
                createdAt={order.createdAt}
                updatedAt ={order.updatedAt}
                status={order.status}
                closeEditModal={setOpenEditModal}
              />
            )}
          </div>
      </Data>
    </tr>
  );
}

export default withErrorBoundary(OrderSample, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
