import { OrderTodaySample } from "./components_listorder_today";
import { NoFound, Table, TableHead, WrapperList } from "../components";
import { TABLE_HEAD } from "./constraint";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrders } from "../../app/features/paymentSlice";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../components/common/ErrorComponent";

function ListOrderToday() {
  let datetime = new Date().getTime();
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  console.log(orders);

  const now = Intl.DateTimeFormat("vn-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(datetime);
  // console.log("now",now);
  // console.log(orders);
  return (
    <WrapperList>
      <div className="text-center pb-1">
        <span className="text-2xl font-bold">Today's Orders</span>
      </div>
      <div className="absolute justify-end"></div>
      <Table>
        <TableHead head={TABLE_HEAD} />
        <tbody>
          {/* Ternary Operator */}
          {!orders ? (
            <NoFound context={"No order found today"} setColSpan={"10"} />
          ) : (
            orders.map((order, index) => {
              const date = Intl.DateTimeFormat("vn-VN", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }).format(order.createdAt);

              if (date === now)
                return (
                  <OrderTodaySample key={index} order={order} index={index} />
                );
              else return false;
            })
          )}
        </tbody>
      </Table>
    </WrapperList>
  );
}
export default withErrorBoundary(ListOrderToday, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
