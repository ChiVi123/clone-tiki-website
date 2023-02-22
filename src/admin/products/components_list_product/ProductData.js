import clsx from "clsx";

function ProductData({ data }) {
    return (<div className="min-w-[8rem] flex items-start">
        <div
            className={clsx('max-w-[16rem]',
                'overflow-hidden',
                'whitespace-nowrap',
                'text-ellipsis')}>
            <span>{data}</span>
        </div>
    </div>);
};

export default ProductData;