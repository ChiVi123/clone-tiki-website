import React, { useEffect, useLayoutEffect, useState } from "react";
import { IconRight } from "../components/icons";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/hash-navigation";
import { Navigation, Pagination, Scrollbar, A11y, Thumbs } from "swiper";
import { events } from "../components/banner/Banner";
import ProductListCatalog from "../components/product/ProductListCatalog";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductByCategory,
  getCategories,
  setCategoryTab,
} from "../app/features/productSlice";
import ProductCardSkeleton from "../components/product/ProductCardSkeleton";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const data = [
  {
    id: 1,
    name: "Phổ biến",
  },
  {
    id: 2,
    name: "Giá thấp",
  },
  {
    id: 3,
    name: "Giá cao",
  },
];

const CataLogPage = () => {
  const [filterData, setFilterData] = useState({
    price_lte: 0,
    price_gte: 0,
  });

  const onChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const dispatch = useDispatch();
  const { isLoading, products, category, categories } = useSelector(
    (state) => state.product
  );

  const categoryId = category.id;

  useEffect(() => {
    // dispatch(getCategoryNameById(category.id));
    dispatch(getProductByCategory(categoryId));
    dispatch(getCategories());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryId]);
  const [filteredProducts, setFilteredProducts] = useState();

  console.log(products);
  useLayoutEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleFilterPrice = async (e) => {
    e.preventDefault();

    const filtered = await products.filter(
      (product) =>
        product.price >= parseInt(filterData.price_gte, 10) &&
        product.price <= parseInt(filterData.price_lte, 10)
    );
    setFilteredProducts(filtered);
    setFilterData({
      price_lte: 0,
      price_gte: 0,
    });
  };

  const [isActive, setIsActive] = useState(1);
  const navLinkClass =
    "flex flex-col items-center px-3 py-2 bg-white  rounded outline-none transition-all outline-none border-x-transparent border-t-transparent";
  const handleOnClickSort = (id) => {
    setIsActive(id);
    const arrayProducts = [...products];
    switch (id) {
      case 1:
        setFilteredProducts(arrayProducts);
        break;
      case 2:
        arrayProducts.sort((a, b) => a.price - b.price);
        setFilteredProducts(arrayProducts);
        break;
      case 3:
        arrayProducts.sort((a, b) => b.price - a.price);
        setFilteredProducts(arrayProducts);
        break;
      default:
        setFilteredProducts(arrayProducts);
        break;
    }
  };
  const handleSetCategory = (category) => {
    dispatch(setCategoryTab(category));
  };
  return (
    <div>
      <Header></Header>
      <div className="flex flex-col w-full bg-bgHome">
        <div className="flex items-center w-full text-sm mx-44 text-textProduct">
          <NavLink
            to={"/"}
            className="flex items-center h-10 font-light hover:underline whitespace-nowrap"
          >
            Trang chủ{" "}
          </NavLink>
          <span className="mx-2">
            <IconRight></IconRight>
          </span>
          {isLoading ? (
            <Skeleton width="96px" height="30px"></Skeleton>
          ) : (
            <span className="flex items-center h-10 font-light whitespace-nowrap">
              {category?.name}
            </span>
          )}
        </div>
        <div className="flex w-full overflow-hidden bg-bgHome mx-44">
          <div className="flex flex-col w-1/5 pl-4 bg-white border-r-2 border-r-borderCatalog">
            <div>
              <h4 className="py-[14px] text-xs text-textTitle font-semibold uppercase">
                danh mục sản phẩm
              </h4>
              {categories &&
                categories.map((item) => (
                  <NavLink
                    to={`/catalog/${item?.url_path}`}
                    key={item.id}
                    className="flex pb-2 text-xs text-textTitle"
                    onClick={() => handleSetCategory(item)}
                  >
                    {item?.name}
                  </NavLink>
                ))}

              <hr className="mt-4" />
            </div>

            <div>
              <h4 className="py-[14px] text-xs text-textTitle font-semibold uppercase">
                giá
              </h4>
              <span className="pb-1 text-xs text-slate-400">
                Chọn khoảng giá
              </span>
              <form onSubmit={handleFilterPrice}>
                <div className="flex items-center gap-x-1">
                  <input
                    type="text"
                    name="price_gte"
                    value={filterData.price_gte}
                    onChange={onChange}
                    className="w-24 px-2 text-xs bg-white border rounded outline-none h-7 border-slate-400"
                  />
                  <span>-</span>
                  <input
                    type="text"
                    name="price_lte"
                    value={filterData.price_lte}
                    onChange={onChange}
                    className="w-24 px-2 text-xs bg-white border rounded outline-none h-7 border-slate-400"
                  />
                </div>
                <button
                  className="w-24 p-4 px-4 py-1 mt-2 text-xs text-blue-500 bg-transparent border border-blue-500 rounded"
                  type="submit"
                >
                  Áp dụng
                </button>
              </form>
              <hr className="mt-4" />
            </div>
          </div>
          <div className="flex flex-col w-3/5 bg-white">
            {isLoading ? (
              <Skeleton width="934px" height="64px"></Skeleton>
            ) : (
              <h1 className="p-4 text-2xl font-thin text-textTitle">
                {category?.name}
              </h1>
            )}

            <section className="w-full h-64 rounded-lg select-none ">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Thumbs]}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                className="event-slider"
              >
                {events.length > 0 &&
                  events.map((item) => (
                    <SwiperSlide key={item.id}>
                      <img src={item.url} alt={item.id} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </section>

            <div className="w-full mt-14">
              <div className="grid grid-cols-8 gap-1 mt-5 mb-1">
                {data &&
                  data.length > 0 &&
                  data.map((item) => (
                    <span
                      key={item.id}
                      isActive={isActive}
                      activeClassName="selected"
                      onClick={() => handleOnClickSort(item.id)}
                      className="cursor-pointer"
                    >
                      <div
                        className={`${navLinkClass} ${
                          isActive === item.id
                            ? " border-b-4 border-blue-500 "
                            : ""
                        }`}
                      >
                        <img srcSet={`${item.url} 2x`} alt="" />
                        <span className="mx-2 text-xs text-text3">
                          {item.name}
                        </span>
                      </div>
                    </span>
                  ))}
              </div>
              {isLoading ? (
                <div className="grid grid-cols-4 gap-2">
                  <ProductCardSkeleton></ProductCardSkeleton>
                  <ProductCardSkeleton></ProductCardSkeleton>
                  <ProductCardSkeleton></ProductCardSkeleton>
                  <ProductCardSkeleton></ProductCardSkeleton>
                </div>
              ) : (
                <ProductListCatalog
                  products={filteredProducts}
                ></ProductListCatalog>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default CataLogPage;
