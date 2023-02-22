import clsx from "clsx";

function Wrapper({ children }) {
    return (<div className={clsx("relative",
        "px-10",
        "py-4",
        "bg-white")}
    >
        {children}
    </div>);
};

export default Wrapper;