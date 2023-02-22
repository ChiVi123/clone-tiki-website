import clsx from "clsx";

function Placeholder({ children, focus, onClick }) {
    return (<span className={clsx("absolute",
        "top-1/2",
        "left-5",
        "text-[1em]",
        "transition-all",
        "duration-[600ms]",
        "-translate-y-1/2", {
        "-translate-x-3": focus,
        "-translate-y-11": focus,
        "text-[.8em]": focus
    })}
        onClick={onClick}
    >
        {children}
    </span>);
};

export default Placeholder;