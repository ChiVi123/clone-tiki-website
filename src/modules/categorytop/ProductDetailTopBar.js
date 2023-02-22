import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getProductDetail } from "../../app/features/productSlice";

const ProductDetailTopBar = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const { productDetail } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductDetail(slug));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="text-sm leading-4 bg-bgHome">
      <div className="h-8 mx-44 bg-Descrip">
        <span className="flex overflow-hidden transition-all">
          <div className="flex pl-3">
            <NavLink
              to={"/"}
              className="flex flex-row px-4 pt-1 pb-1 pl-0 pr-0 mt-1 mb-0 ml-0 mr-0 whitespace-nowrap"
            >
              Trang Chủ
            </NavLink>
            <span>
              <svg
                height="20"
                width="28"
                className="mt-1.5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <div className="flex items-center py-1 mt-1">
              {" "}
              {productDetail[0]?.name}
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default ProductDetailTopBar;
