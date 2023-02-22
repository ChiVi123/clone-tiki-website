import React, { useEffect, useState } from "react";
import ButtonAdd from "../components/button/ButtonAddCategories";
import ListCategories from "./ListCategory";
import AddCategory from "./AddCategory";
import { getCategories } from "../../app/features/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { IconArrowOutline } from "../components/icons";
export default function TableCategory() {
  const dispatchs = useDispatch();
  const { categories } = useSelector((state) => state.product);
  const [check, setCheck] = useState(false);
  const getCat = async () => {
    await dispatchs(getCategories());
  };
  useEffect(() => {
    getCat();
  }, [check]);
  useEffect(() => {
    getCat();
  }, [categories.length]);
  const [scroll, setScroll] = useState(true);
  const handleScroll = () => {
    setScroll(!scroll);
  };
  return (
    <div className="w-[calc(100vw-13.125rem)] h-[100vh] p-5 bg-[#EBEBEB]">
      <div className="flex items-center justify-between">
        <ButtonAdd />
        <AddCategory setCheck={setCheck} check={check} />

        <button onClick={handleScroll}>
          <IconArrowOutline rotate={scroll} />
        </button>
      </div>

      <div className="pb-3.5 mt-[1.5625rem] bg-white">
        <ListCategories
          CATEGORIES={categories}
          setCheck={setCheck}
          check={check}
          isTop={scroll}
        />

        <span className="ml-5">Total {categories.length} product found</span>
      </div>
    </div>
  );
}
