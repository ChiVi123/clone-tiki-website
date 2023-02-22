import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModalOpen } from "../app/features/cartSlice";
import Banner from "../components/banner/Banner";
import HomeBrand from "../components/banner/HomeBrand";
import HomeBrandOffical from "../components/banner/HomeBrandOffical";
import HomeService from "../components/banner/HomeService";
import CategoryOutstand from "../components/category/CategoryOutstand";
import CategoryProduct from "../components/category/CategoryProduct";
import CategoryTopBar from "../modules/categorytop/CategoryTopBar";

import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

const HomePage = () => {
  const dispatch = useDispatch();
  const { modalOpen } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(setModalOpen(!modalOpen));
  }, []);
  return (
    <div>
      <Header></Header>
      <CategoryTopBar></CategoryTopBar>
      <Banner></Banner>
      <HomeBrand></HomeBrand>
      <HomeService></HomeService>
      <HomeBrandOffical></HomeBrandOffical>
      <CategoryOutstand></CategoryOutstand>
      <CategoryProduct></CategoryProduct>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
