import React from "react";
import Headerpage from "../components/headerpage/Headerpage";
import Leftbar from "../components/leftbar/Leftbar";
import RigthbarAddress from "../components/rightbar_address/RigthbarAddress";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

export default function Address({ activeButton }) {
  return (
    <>
      <Header></Header>
      <div className="bg-gray">
        <Headerpage headerpage={"Quản lý đơn hàng"}></Headerpage>
        <div className="flex">
          <Leftbar activeButton={activeButton}></Leftbar>
          <RigthbarAddress></RigthbarAddress>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
