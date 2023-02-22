import { Routes, Route } from "react-router-dom";
import clsx from "clsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  HeaderAdminPage,
  NavAdminPage,
  PATH_ADIM_DASHBOARD,
  PATH_ADIM_CATEGORIES,
  PATH_ADIM_PRODUCTS,
  PATH_ADIM_ORDER,
  PATH_PRODUCT_FORM,
  AdminProvider,
} from "./components";

// Section body Page Admin
import { AdminPageDashboard } from "./dashboard";
import { AdminPageCategory } from "./category";
import { AdminPageProduct } from "./products";
import { PageAdminOrder } from "./order";

import * as Layout from "./components/form_layout";

// Seciton Form Product Layout
import { ButtonExit } from "./components/button";
import { FormProduct } from "./products/components_form";

// Handle Product state
import { getProducts } from "../app/features/productSlice";
import { productsSelector } from "../app/selector";
import { getOrders } from "../app/features/paymentSlice";

function PageAdmin() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const isLoading = useSelector(productsSelector.productDetailLoading);

  return (
    <AdminProvider>
      <HeaderAdminPage />
      <div className={clsx("flex")}>
        <NavAdminPage />
        <Routes>
          <Route path={PATH_ADIM_DASHBOARD} element={<AdminPageDashboard />} />
          <Route path={PATH_ADIM_CATEGORIES} element={<AdminPageCategory />} />
          <Route path={PATH_ADIM_PRODUCTS} element={<AdminPageProduct />} />
          <Route path={PATH_ADIM_ORDER} element={<PageAdminOrder />} />
          <Route
            path={PATH_PRODUCT_FORM}
            element={
              <Layout.LayoutProduct
                isLoading={isLoading}
                path="/admin/products"
                ComponentButton={ButtonExit}
                ComponentForm={FormProduct}
              />
            }
          />
        </Routes>
      </div>
    </AdminProvider>
  );
}

export default PageAdmin;
