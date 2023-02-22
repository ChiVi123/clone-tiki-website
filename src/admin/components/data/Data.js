import clsx from 'clsx';

function Data({ children }) {
    return (<td
        className={clsx('border', 'border-[#B9B9B9]', 'p-2', 'text-left')}
    >
        {children}
    </td>);
};

export default Data;