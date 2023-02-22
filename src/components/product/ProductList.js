import React, { useState } from "react";
import ProductCard from "./ProductCard";

const productPerRow = 20;
const ProductList = ({ products }) => {
  const [next, setNext] = useState(productPerRow);
  const handleLoadMoreProduct = () => {
    setNext(next + productPerRow);
  };
  return (
    <div className="flex w-full bg-bgHome">
      <div className="flex flex-col w-full mb-4 mx-44">
        <div className="grid w-full gap-1 mt-3 bg-white md:grid-cols-4 xl:grid-cols-5">
          {products &&
            products
              ?.slice(0, next)
              .map((item) => (
                <ProductCard
                  key={item.id}
                  id={item.id}
                  thumbnailUrl={item.thumbnailUrl}
                  name={item.name}
                  quantitySell={item.quantitySell}
                  price={item.price}
                  url={item.url_path}
                ></ProductCard>
              ))}
        </div>
        {next < products?.length && (
          <div className="flex flex-col items-center justify-center bg-white">
            <button
              className="h-8 px-2 mt-5 mb-4 text-sm font-semibold leading-4 text-center border rounded outline-none text-btnView border-btnView hover:bg-btnView hover:text-white w-60"
              onClick={handleLoadMoreProduct}
            >
              Xem thêm
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
