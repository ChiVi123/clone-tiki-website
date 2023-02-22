import clsx from "clsx";

function OrderProductsData({ data }) {
  return (
    <div className="min-w-[8rem] flex items-start">
      <div
        className={clsx(
          "max-w-[16rem]",
          "overflow-hidden",
          "text-ellipsis",
          "line-clamp-5"
        )}
      >
        <span>{data}</span>
      </div>
    </div>
  );
}
export default OrderProductsData;
