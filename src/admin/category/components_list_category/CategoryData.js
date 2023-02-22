import clsx from "clsx";

function CategoryData({ Categorys }) {
  return (
    <div className="min-w-[8rem] flex items-start">
      <div
        className={clsx(
          "max-w-[16rem]",
          "overflow-hidden",
          "whitespace-nowrap",
          "text-ellipsis"
        )}
      >
        <span>{Categorys.name}</span>
      </div>
    </div>
  );
}

export default CategoryData;
