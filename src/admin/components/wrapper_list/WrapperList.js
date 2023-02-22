import clsx from "clsx";

function WrapperList({ children }) {
    return (<div className={clsx('max-h-[59vh]', 'py-8', 'px-4',
        'lg-px-9', 'overflow-auto')}
    >
        {children}
    </div>);
};

export default WrapperList;