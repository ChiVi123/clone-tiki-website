import clsx from "clsx";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ADMIN_CONTEXT } from "../usecontext";
import HeaderButton from "./HeaderButton";
import { useDispatch } from "react-redux";
import { setLogout } from "../../../app/features/authSlice";
import { toast } from "react-toastify";

function HeaderAdminPage() {
  const { HANDLE_BTN_MENU } = useContext(ADMIN_CONTEXT);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(setLogout());
    toast.success("Đăng xuất thành công");
    navigate("/sign-in");
  };
  return (
    <header
      className={clsx(
        "sticky",
        "top-0",
        "w-full",
        "h-24",
        "bg-white",
        "shadow-[0px_4px_4px_rgba(0,0,0,0.25)]",
        "z-10"
      )}
    >
      <div
        className={clsx(
          "w-full",
          "h-full",
          "flex",
          "items-center",
          "justify-between"
        )}
      >
        <button
          onClick={HANDLE_BTN_MENU}
          className={clsx(
            "w-8",
            "h-8",
            "md:w-10",
            "md:h-10",
            "text-[#4B5264]",
            "ml-10",
            "hover:text-black"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <Link
          to="/"
          className={clsx(
            "not-italic",
            "font-semibold",
            "text-2xl",
            "md:text-[2.5rem]",
            "md:leading-[3rem]",
            "tracking-[0.3rem]",
            "text-black",
            "cursor-pointer"
          )}
        >
          Tiki
        </Link>
        <span className={clsx("mr-10")}>
          <HeaderButton
            isSideButton={false}
            dPath="M20.354 15.354A9 9 0 018.646 3.646 9.003 
                9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
          <HeaderButton
            isSideButton={false}
            dPath="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
          <HeaderButton
            isSideButton={true}
            dPath="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            onClick={() => handleLogout()}
          />
        </span>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg> */}
      </div>
    </header>
  );
}

export default HeaderAdminPage;
