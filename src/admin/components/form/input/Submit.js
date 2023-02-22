import clsx from "clsx";

function Submit() {
    return (<input
        className={clsx("cursor-pointer",
            "p-3",
            "rounded-xl",
            "text-[1.2em]",
            "w-1/2",
            "bg-[#1e90ff]",
            "text-white",
            "to-[#1e90ff]",
            "from-[#adff2f]",
            "hover:bg-gradient-to-tr")}
        type="submit"
    />);
};

export default Submit;