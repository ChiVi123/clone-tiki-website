import clsx from "clsx";

function IconArrowOutline({ rotate }) {
    return (<svg xmlns="http://www.w3.org/2000/svg"
        className={clsx("h-6",
            "w-6",
            "transition-all",
            "duration-[1000ms]", {
            "rotate-0": rotate,
            "rotate-180": !rotate
        })}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
    </svg>);
};

export default IconArrowOutline;