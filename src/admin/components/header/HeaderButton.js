import clsx from "clsx";

function HeaderButton({ isSideButton, dPath, onClick }) {
  return (
    <button
      className={clsx(
        "w-8",
        "h-8",
        "md:w-10",
        "md:h-10",
        "text-[#4B5264]",
        "hover:text-black",
        {
          "mr-2": !isSideButton,
          "md:mr-[1.125rem]": !isSideButton,
        }
      )}
      onClick={onClick}
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
          d={dPath}
        />
      </svg>
    </button>
  );
}

export default HeaderButton;
