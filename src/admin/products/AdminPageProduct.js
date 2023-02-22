import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Button } from "../components/button";
import * as Icon from "../components/icons";
import ListProduct from "./ListProduct";
import { WrapperBody, WrapperButton, WrapperContext } from "../components";
import { productsSelector } from "../../app/selector";
import { getCategories } from "../../app/features/productSlice";

export default function AdminPageProduct() {
  const [scroll, setScroll] = useState(true);

  const dispatch = useDispatch();

  const products = useSelector(productsSelector.products);

  const handleScroll = () => {
    setScroll(!scroll);
  };
  const handleAdd = () => {
    dispatch(getCategories());
  };

  return (
    <WrapperBody>
      <WrapperButton>
        <Link to={"/admin/products/add"}>
          <Button onClick={handleAdd} content={"Add Product"}>
            <Icon.IconAdd />
          </Button>
        </Link>

        <button onClick={handleScroll}>
          <Icon.IconArrowOutline rotate={scroll} />
        </button>
      </WrapperButton>

      <WrapperContext>
        <ListProduct products={products} isTop={scroll} />
        <span className="ml-5">Total {products.length} product found</span>
      </WrapperContext>
    </WrapperBody>
  );
}
