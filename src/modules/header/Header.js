import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../../components/input/Search";
import IconAccount from "../../components/icons/IconAccount";
import IconCart from "../../components/icons/IconCart";
import { useSelector } from "react-redux";
import { IconNavBarLogin } from "../../components/icons";

const Header = () => {
  const { userInfo } = useSelector((state) => ({ ...state.auth }));
  return (
    <header id="main-header" className="relative bg-[#1a94ff] z-[999] lg:p-3">
      {/* Start Top Header */}
      <div
        id="top-header"
        className="tracking-normal xl:w-[1270px] px-[15px] mr-auto ml-auto"
      >
        <div className="middle-wrap flex pt-[16px] pb-[10px] px-[0] h-auto relative z-[2] items-center">
          {/* Start Content Header */}
          <div className="flex items-center tracking-normal middle-left grow shrink-0">
            {/* Start Logo Header */}
            <div className="logo-menu flex items-start basis-[190px] shrink-0 mr-4">
              <div className="tracking-normal flex justify-between grow-[1] shrink-[1] basis-0">
                <NavLink
                  to="/"
                  className="w-[60px] h-[40px] block tracking-normal text-[#0b74e5] no-underline bg-transparent cursor-pointer"
                >
                  <img
                    className="w-full h-full"
                    src="https://salt.tikicdn.com/ts/upload/ae/f5/15/2228f38cf84d1b8451bb49e2c4537081.png"
                    alt="tiki-logo"
                  />
                </NavLink>
              </div>
            </div>
            {/* End Logo Header */}

            {/* Start Search */}
            <Search></Search>
            {/* End Search */}
          </div>
          <div className="box-border flex items-center justify-end tracking-normal header-user">
            {userInfo?.user?.name ? (
              <IconAccount></IconAccount>
            ) : (
              <IconNavBarLogin></IconNavBarLogin>
            )}

            {/* End Account */}

            {/* Start Cart */}
            <IconCart></IconCart>
            {/* End Cart */}
          </div>
          {/* End Content Header */}
        </div>
      </div>
      {/* End Top Header */}

      {/* Start Bottom Header */}
      <div id="bottom-header" className="tracking-normal relative z-[1]">
        <div className="container-bottom relative flex justify-between tracking-normal xl:w-[1270px] pl-[15px] pr-[15px] mr-auto ml-auto">
          {/* Start Icon FreeShip */}
          <NavLink
            to="/"
            className="absolute top-0 tracking-normal text-[#0b74e5] no-underline bg-transparent"
          >
            <img
              className="tracking-normal max-w-full border-none h-3 w-[83px] aspect-[auto_83/12]"
              src="https://salt.tikicdn.com/ts/upload/e5/1d/22/61ff572362f08ead7f34ce410a4a6f96.png"
              alt="free-ship-badge"
            />
          </NavLink>
          {/* Start Icon FreeShip */}

          <div className="tracking-normal ml-[206px] flex items-start">
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              trái cây
            </NavLink>
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              thịt, trứng
            </NavLink>
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              rau củ quả
            </NavLink>
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              sữa, bơ, phô mai
            </NavLink>
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              hải sản
            </NavLink>
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              gạo, mì ăn liền
            </NavLink>
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              đồ uống, bia rượu
            </NavLink>
            <NavLink
              to="/"
              className="block text-[11px] leading-4 text-white mr-3 tracking-normal no-underline bg-transparent"
            >
              bánh kẹo
            </NavLink>
          </div>
          <NavLink
            to="/"
            className="tiki-seller text-white text-3 mb-3 h-[22px] rounded-[10px] bg-[#ffffff40] py-0 px-2 flex items-center tracking-normal no-underline"
          >
            <img
              className="inline-block w-3 h-3 max-w-full mr-1 tracking-normal align-middle bg-no-repeat border-none icon"
              src="https://frontend.tikicdn.com/_desktop-next/static/img/icon-seller.svg"
              alt=""
            />

            <span className="leading-4 mt-[1px] tracking-normal text-white text-xs">
              Bán hàng cùng Tiki
            </span>
          </NavLink>
        </div>
      </div>
      {/* End Bottom Header */}
    </header>
  );
};

export default Header;
