import React from "react";

const HomeBrand = () => {
  return (
    <div className="flex w-full bg-bgHome">
      <div className="flex justify-between w-full px-4 my-3 gap-x-3 mx-44">
        <a href="/#">
          <img
            srcSet="https://salt.tikicdn.com/cache/w200/ts/banner/29/78/98/9a9f7a119f949234cb0f6bcdd1513fe3.png.webp"
            alt="xepclub"
            className="h-40 rounded-lg"
          />
        </a>
        <a href="/#">
          <img
            srcSet="https://salt.tikicdn.com/cache/w750/ts/banner/4e/ca/46/d9bd769ad261000de01cecaa6d55bac4.png.webp"
            alt="xepclub"
            className="h-40 rounded-lg"
          />
        </a>
        <a href="/#">
          <img
            srcSet="https://salt.tikicdn.com/cache/w200/ts/banner/50/6d/fd/8fac8d1999915183ff6f9fcf7276ba51.png.webp"
            alt="xepclub"
            className="h-40 rounded-lg"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeBrand;
