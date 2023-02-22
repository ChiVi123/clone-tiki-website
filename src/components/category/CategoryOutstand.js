import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getOutstandCategory } from "../../app/features/productSlice";

const CategoryOutstand = () => {
  const dispatch = useDispatch();
  const { outstands } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getOutstandCategory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log("outstands", outstands);
  return (
    <div className="flex w-full bg-bgHome">
      <div className="flex flex-col w-full p-4 mt-5 overflow-hidden bg-white select-none mx-44">
        <div className="flex mb-4 text-xl text-text1">Danh mục nổi bật</div>
        <div className="grid justify-between w-full grid-cols-10 text-center gap-y-10">
          {outstands &&
            outstands.map((item) => (
              <NavLink
                to={"/#"}
                className="flex flex-col items-center flex-shrink-0"
                key={item.id}
              >
                <img
                  src={item.thumbnail_url}
                  alt=""
                  className="object-contain w-16 h-16"
                />
                <span className="w-20 mt-3 overflow-hidden text-xs font-normal text-ellipsis">
                  {item.name}
                </span>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryOutstand;
