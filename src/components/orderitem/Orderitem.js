import React from "react";
import { CURRENCY } from "../../components/payment/payment_content/constraint";

export default function OrderItem({ order }) {
  return (
    <div className="flex flex-row py-4 px-0 border-b-[1px] border-solid border-[#ebebf0] justify-between">
      <div className="flex box-border">
        <div
          className="shrink-0 w-[80px] h-[80px] rounded border-[0.5px] border-solid border-[#eeeeee] bg-no-repeat bg-[length:90%] bg-center relative"
          style={{ backgroundImage: `url(${order.thumbnailUrl})` }}
        >
          <span className="text-[12px] leading-4 font-normal text-[#808089] text-center absolute w-[28px] h-[28px] bg-[#ebebf0] flex justify-center items-center right-0 bottom-0 rounded-tl-[10px]">
            {`x${order.quantity}`}
          </span>
        </div>
        <div className="my-0 mx-3 flex flex-col">
          <p className="mb-[6px] mx-0 mt-0">{order.name}</p>
          <div className="mt-1 box-border">
            <img
              className="inline-block w-4 h-4 mt-[1px] float-left my-0 mr-[6px] ml-0"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/account/store.png"
              alt=""
            />
            <span className="text-[#808089] text-[12px] font-normal leading-4">
              {`${order.brandNews}`}
            </span>
          </div>
        </div>
      </div>
      <div className="min-w-[120px] justify-end flex box-border">
        <span className="text-[#38383d] text-[14px] font-normal">{`${order.price.toLocaleString(
          CURRENCY
        )} ₫`}</span>
      </div>
    </div>
  );
}
