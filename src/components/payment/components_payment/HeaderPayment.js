import clsx from "clsx";
import { NavLink } from "react-router-dom";

function HeaderPayment() {
  return (
    <header className={clsx("bg-white")}>
      <div
        className={clsx(
          "max-w-[76.875rem]",
          "mx-auto",
          "h-[6.25rem]",
          "flex",
          "items-center",
          "justify-between"
        )}
      >
        <div className={clsx("flex", "items-end")}>
          <NavLink to="/">
            <img
              className={clsx("max-w-full", "object-contain", "")}
              src="https://salt.tikicdn.com/ts/upload/1c/11/e6/d8211526b5bdc67aaaef2af9e8cf7dc8.png"
              alt="icon"
              width="60"
              height="40"
            />
          </NavLink>
          <div
            className={clsx("w-[0.063rem]", "h-8", "mx-4", "bg-[#1A94FF]")}
          ></div>
          <span
            className={clsx(
              "not-italic",
              "text-2xl",
              "font-normal",
              "text-[#1AA7FF]"
            )}
          >
            Thanh toán
          </span>
        </div>
        <div>
          <img
            src="https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png"
            alt="hotline"
            width="185"
            height="56"
          />
        </div>
      </div>
    </header>
  );
}

export default HeaderPayment;
