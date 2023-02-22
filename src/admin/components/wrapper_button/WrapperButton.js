import clsx from "clsx";

function WrapperButton({ children }) {
    return (<div
        className={clsx('flex', 'items-center', 'justify-between')}
    >
        {children}
    </div>);
};

export default WrapperButton;