import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../app/features/productSlice";
import ProductList from "../product/ProductList";

const data = [
  {
    id: 1,
    name: "Dành cho bạn",
    url: "https://salt.tikicdn.com/cache/w100/ts/personalish/f9/27/b5/3a8e2286a1c8fb91b67acc5ee35f82f0.png.webp",
    to: "/",
  },
  {
    id: 2,
    name: "Đi chợ Siêu Sale",
    url: "https://salt.tikicdn.com/cache/w100/ts/personalish/b7/aa/f3/bcff08097ead36826d2c9daf7c2debd5.png.webp",
    to: "/",
  },
  {
    id: 3,
    name: "Deal siêu hot",
    url: "https://salt.tikicdn.com/cache/w100/ts/personalish/41/99/9a/8898607d7fca4b79775a708c57a8152f.png.webp",
    to: "/",
  },
  {
    id: 4,
    name: "Rẻ vô đối",
    url: "https://salt.tikicdn.com/cache/w100/ts/personalish/0f/59/9d/215fa18ef72e430eefcbfe5355cab8e2.png.webp",
    to: "/",
  },
  {
    id: 5,
    name: "Hàng mới",
    url: "https://salt.tikicdn.com/cache/w100/ts/personalish/7d/8a/6e/d8b76e2c43cbd06b7e1aa3ab8c54df64.png.webp",
    to: "/",
  },
  {
    id: 6,
    name: "Xu hướng thời trang",
    url: "https://salt.tikicdn.com/cache/w100/ts/personalish/dc/f1/b1/6ba9e529785de3ad1a81b9c569d05aa0.png.webp",
    to: "/",
  },
  {
    id: 7,
    name: "Trending",
    url: "https://salt.tikicdn.com/cache/w100/ts/personalish/b9/e1/a9/65ad8ac4e167c5009ae3f7c80395a5a4.png.webp",
    to: "/",
  },
];

const CategoryProduct = () => {
  const [isActive, setIsActive] = useState(1);
  const navLinkClass =
    "flex flex-col items-center px-2 py-1 bg-white  rounded outline-none";
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="sticky top-0 z-50 flex w-full cursor-pointer bg-bgHome">
        <div className="flex flex-col w-full mx-44 gap-y-3">
          <div className="flex w-full p-4 mt-6 mb-1 text-xl bg-white text-text1 rouded">
            Gợi ý hôm nay
          </div>
          <div className="grid grid-cols-8 gap-1 mb-1">
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <span key={item.id} onClick={() => setIsActive(item.id)}>
                  <div
                    className={`${navLinkClass} ${
                      isActive === item.id ? " border border-blue-500" : ""
                    }`}
                  >
                    <img srcSet={`${item.url} 2x`} alt="" />
                    <span className="mx-2 text-xs text-text3">{item.name}</span>
                  </div>
                </span>
              ))}
          </div>
        </div>
      </div>
      <ProductList products={products}></ProductList>
    </>
  );
};

export default CategoryProduct;
