import clsx from "clsx";
import { useContext } from "react";
import { ADMIN_CONTEXT } from "../usecontext";

function WrapperBody({ children }) {
  const { toggleNav } = useContext(ADMIN_CONTEXT);

  return (
    <div
      className={clsx("p-5", "bg-[#EBEBEB]", "w-full", "h-[calc(100vh-6rem)]", {
        "md:w-[calc(100vw-13.125rem)]": toggleNav,
      })}
    >
      {children}
    </div>
  );
}

export default WrapperBody;
