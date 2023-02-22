import clsx from "clsx";

function NoFound({ context, setColSpan }) {
    return (<tr><td
        colSpan={setColSpan}
        className={clsx('border', 'border-[#B9B9B9]', 'py-6', 'px-0',
            'text-center')}
    >
        {context}
    </td></tr>);
};

export default NoFound;