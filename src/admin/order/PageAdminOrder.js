import { ListOrder } from "./components_order";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { WrapperBody, WrapperContext } from "../components";
import { getOrders } from "../../app/features/paymentSlice";

function AdminPageOrder() {
  const [scroll, setScroll] = useState(true);

  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleScroll = () => {
    setScroll(!scroll);
  };

  return (
    <WrapperBody>
      <WrapperContext>
        <ListOrder orders={orders} isTop={scroll} />
        {orders && (
          <span className="ml-5">Total {orders.length} orders found</span>
        )}
      </WrapperContext>
    </WrapperBody>
  );
}

export default AdminPageOrder;
