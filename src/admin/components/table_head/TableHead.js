import clsx from "clsx";

function TableHead({ head }) {
    return (<thead><tr>
        {head.map((item, index) => (<th
            key={index}
            className={clsx('border', 'border-[#B9B9B9]', 'text-[#474444]',
                'p-1')}
        >
            {item}
        </th>))}
    </tr></thead>);
};

export default TableHead;