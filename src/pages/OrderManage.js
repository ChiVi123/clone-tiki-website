import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import Leftbar from "../components/leftbar/Leftbar";
import RightbarOrderManage from "../components/rightbar_order_manage/RightbarOrderManage";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

export default function OrderManage({ activeButton }) {
  return (
    <>
      <Header></Header>
      <div className="bg-gray">
        <Headerpage headerpage={"Quản lý đơn hàng"}></Headerpage>
        <div className="flex">
          <Leftbar activeButton={activeButton}></Leftbar>

          <RightbarOrderManage></RightbarOrderManage>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
