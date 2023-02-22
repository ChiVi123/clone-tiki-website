import clsx from "clsx";

function Data({ sliders }) {
    return (<div className="min-w-[5rem] flex justify-center">
        <img
            className="h-[10rem] border border-[#dfd5d5]"
            src={sliders.src}/>
        <div
            className={clsx('max-w-[16rem]',
                'overflow-hidden',
                'whitespace-nowrap',
                'text-ellipsis')}>
            <span>{sliders.status}</span>
        </div>
    </div>);
};

export default Data;