import clsx from "clsx";

function Header({ context }) {
    return (<h1 className={clsx("text-[2rem]",
        "border-l-4",
        "border-l-[#1e90ff]",
        "text-black",
        "tracking-[0.313rem]",
        "mb-8",
        "font-bold",
        "pl-2")}
    >
        {context}
    </h1>)
};

export default Header;