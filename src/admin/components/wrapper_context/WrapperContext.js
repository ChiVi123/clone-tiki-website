import clsx from "clsx";

function WrapperContext({ children }) {
    return (<div
        className={clsx("w-full",
            "pb-3.5",
            "mt-[1.5625rem]",
            "bg-white",
            "rounded-lg")}
    >
        {children}
    </div>);
};

export default WrapperContext;