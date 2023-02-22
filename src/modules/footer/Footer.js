import React from "react";
import { Link } from "react-router-dom";
import mastercardIcon from "../../image/mastercard.svg";
import visaIcon from "../../image/visa.svg";
import cashIcon from "../../image/cash.svg";
import jcbIcon from "../../image/jcb.svg";
import internetIcon from "../../image/internet.svg";
import fbIcon from "../../image/fb.svg";
import youtubeIcon from "../../image/youtube.svg";
import appstore from "../../image/appstore.png";
import playstore from "../../image/playstore.png";
import zalo from "../../image/Logo_Zalo.png";
import installmentIcon from "../../image/installment.svg";
import tikiNow from "../../image/tikinow.svg";

const Footer = () => {
  return (
    <div className="w-full p-4 mt-4">
      <div className="flex max-w-[1270px] w-full px-4 justify-between mx-auto">
        <div className="flex-1 max-w-[268px] px-4">
          <h4 className="mb-3 text-base font-semibold text-textfooter">
            Hỗ trợ khách hàng
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs text-gray-500">
            <a href="/#">
              Hotline: 1900-6035 (1000 đ/phút, 8-21h kể cả T7, CN)
            </a>
            <a href="/#">Các câu hỏi thường gặp</a>
            <a href="/#">Gửi yêu cầu hỗ trợ</a>
            <a href="/#">Hướng dẫn đặt hàng</a>
          </div>
        </div>

        <div className="flex-1 max-w-[268px] px-4">
          <h4 className="mb-3 text-base font-semibold text-textfooter">
            Về Tiki
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs text-gray-500">
            <a href="/#">Giới thiệu về tiki</a>
            <a href="/#">Tuyển dụng</a>
            <a href="/#">Chính sách bảo mật thanh toán</a>
            <a href="/#">Điều khoản sử dụng</a>
          </div>
        </div>

        <div className="flex-1 max-w-[268px] px-4">
          <h4 className="mb-3 text-base font-semibold text-textfooter">
            Hợp tác và liên kết
          </h4>
          <div className="grid grid-cols-1 gap-1 text-xs text-gray-500">
            <a href="/#">Quy chế hoạt động Sàn GDTMĐT</a>
            <a href="/#">Bán hàng cùng Tiki</a>
          </div>

          <h4 className="mt-3 text-base font-semibold text-textfooter">
            Chứng nhận bởi
          </h4>
          <div className="grid w-full grid-cols-2">
            <img
              srcSet="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong-2.png 3x"
              alt="cnbocongthuong"
            />
            <img
              src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg"
              alt="cnbocongthuong"
            />
          </div>
        </div>

        <div className="flex-1 max-w-[268px] px-4">
          <h4 className="mb-3 text-base font-semibold text-textfooter">
            Phương thức thanh toán
          </h4>
          <div className="grid grid-cols-4 gap-4">
            <Link to={"#"}>
              <img alt="master" src={mastercardIcon} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="cash" src={cashIcon} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="install" src={installmentIcon} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="internet" src={internetIcon} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="jcb" src={jcbIcon} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="visa" src={visaIcon} />{" "}
            </Link>
          </div>
          <h4 className="mt-4 text-base font-semibold text-textfooter">
            Dịch vụ giao hàng
          </h4>
          <Link to={"#"}>
            <img alt="tikinow" src={tikiNow} />{" "}
          </Link>
        </div>

        <div className="flex-1 max-w-[268px] px-4">
          <h4 className="mb-3 text-base font-semibold text-textfooter">
            Kết nối với chúng tôi
          </h4>
          <div className="grid grid-cols-4 gap-4">
            <Link to={"#"}>
              <img alt="fb" src={fbIcon} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="zalo" src={zalo} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="youtube" src={youtubeIcon} />{" "}
            </Link>
          </div>
          <h4 className="mt-4 text-sm font-semibold text-textfooter">
            Tải ứng dụng trên điện thoại
          </h4>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <Link to={"#"}>
              <img alt="fb" src={appstore} />{" "}
            </Link>
            <Link to={"#"}>
              <img alt="fb" src={playstore} />{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
