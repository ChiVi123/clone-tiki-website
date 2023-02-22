import { useEffect, useRef } from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "../../../components/common/ErrorComponent";
import { NoFound, Table, TableHead, WrapperList } from "../../components";
import { OrderSample } from "./components_list_order";
import { TABLE_HEAD } from "./constraint";

function ListOrder({ orders, isTop }) {
  const bottomRef = useRef();
  const topRef = useRef();

  useEffect(() => {
    if (isTop) {
      topRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isTop]);

  return (
    <WrapperList>
      <div ref={topRef}></div>
      <Table>
        <TableHead head={TABLE_HEAD} />
        <tbody>
          {/* Ternary Operator */}
          {!orders ? (
            <NoFound context={"No order found"} />
          ) : (
            orders.map((order, index) => (
              <OrderSample key={index} order={order} index={index} />
            ))
          )}
        </tbody>
      </Table>
      <div ref={bottomRef}></div>
    </WrapperList>
  );
}

export default withErrorBoundary(ListOrder, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
