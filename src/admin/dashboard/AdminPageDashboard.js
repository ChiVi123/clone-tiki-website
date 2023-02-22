import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ListOrderToday from "./ListOrderToday";
import Statistical from "./components_listorder_today/Statistical";
import { WrapperBody } from "../components";
import { getOrders } from "../../app/features/paymentSlice";

export default function AdminPageDashboard() {
  const [scroll, setScroll] = useState(true);
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  // console.log(order);
  const handleScroll = () => {
    setScroll(!scroll);
  };

  return (
    <WrapperBody>
      {/* <div className='bg-white py-5'>
            <ListSlider />
        </div> */}
      <div className="bg-white py-1 mb-5">
        <Statistical />
      </div>
      <div className="bg-white pb-2">
        {/* <ListOrderToday orders={order} /> */}
        <ListOrderToday />
        {orders && (
          <span className="ml-5">Total {orders.length} orders found</span>
        )}
      </div>
    </WrapperBody>
  );
}
