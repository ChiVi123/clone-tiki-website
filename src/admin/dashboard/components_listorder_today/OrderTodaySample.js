import { OrderImage } from "../../order/components_order/components_list_order";
import { Data } from "../../components";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../../components/common/ErrorComponent";

function OrderTodaySample({ order }) {
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

      <Data>{order.status}</Data>

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
    </tr>
  );
}

export default withErrorBoundary(OrderTodaySample, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
