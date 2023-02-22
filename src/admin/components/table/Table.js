import clsx from "clsx";

function Table({ children }) {
    return (<table className={clsx('border-collapse', 'w-full')}>
        {children}
    </table>);
};

export default Table;